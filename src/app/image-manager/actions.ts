"use server"

import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { existsSync, mkdirSync } from "fs";

// 建议将 prisma 实例化提取到单独的 lib/prisma.ts 中以防止热重载耗尽连接数，此处按原样保留
const prisma = new PrismaClient();
const UPLOAD_DIR = join(process.cwd(), "storage");

if (!existsSync(UPLOAD_DIR)) {
  mkdirSync(UPLOAD_DIR, { recursive: true });
}

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file provided");
// [新增]: 服务端 10MB 二次校验
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File size exceeds 10MB limit");
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const safeFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
  const uniqueFilename = `${Date.now()}-${safeFilename}`;
  
  const filePath = join(UPLOAD_DIR, uniqueFilename);
  await writeFile(filePath, buffer);

  const fileUrl = `/uploads/${uniqueFilename}`;

  await prisma.image.create({
    data: { filename: uniqueFilename, url: fileUrl, size: file.size },
  });

  revalidatePath("/image-manager");
}

export async function deleteImage(id: string, filename: string) {
  const filePath = join(UPLOAD_DIR, filename);
  try {
    if (existsSync(filePath)) await unlink(filePath);
  } catch (error) {
    console.error("文件删除失败:", error);
  }
  await prisma.image.delete({ where: { id } });
  revalidatePath("/image-manager");
}

export async function getImages() {
  return await prisma.image.findMany({ orderBy: { createdAt: "desc" } });
}