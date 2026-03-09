"use client";

import { useState, useTransition, useRef } from "react";
import { uploadImage, deleteImage } from "./actions";
import { Toast, ToastData } from "@/components/Toast";

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export default function ImageManagerClient({ initialImages }: { initialImages: any[] }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addToast = (type: ToastData['type'], message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    if (type !== 'loading') setTimeout(() => removeToast(id), 4000);
    return id;
  };
  const removeToast = (id: number) => setToasts((prev) => prev.filter((t) => t.id !== id));
  const updateToast = (id: number, type: ToastData['type'], message: string) => {
    setToasts((prev) => prev.map((t) => t.id === id ? { ...t, type, message } : t));
    if (type !== 'loading') setTimeout(() => removeToast(id), 4000);
  };

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      addToast('error', '不支持的文件格式，请上传图片');
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
// [新增]: 10MB 大小限制 (10 * 1024 * 1024 bytes)
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      addToast('error', '图片大小不能超过 10MB');
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    const toastId = addToast('loading', `正在上传: ${file.name}...`);

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        await uploadImage(formData);
        updateToast(toastId, 'success', `成功上传: ${file.name}`);
      } catch (error) {
        console.error("上传失败:", error);
        updateToast(toastId, 'error', `上传失败，请重试`);
      } finally {
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    });
  }

  return (
    <>
      <Toast toasts={toasts} onClose={removeToast} />

      <section>
        <div 
          className="relative group w-full bg-white/50 border-2 border-dashed border-art-stone/30 rounded-sm p-10 hover:bg-art-ochre/5 hover:border-art-ochre transition-all duration-300 text-center cursor-pointer overflow-hidden"
          onClick={() => fileInputRef.current?.click()}
        >
          {isPending && (
            <div className="absolute inset-0 bg-art-paper/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-3">
              <div className="w-6 h-6 border-2 border-art-stone/20 border-t-art-ochre rounded-full animate-spin"></div>
              <span className="text-sm text-art-ink font-medium">处理中...</span>
            </div>
          )}

          <input type="file" ref={fileInputRef} name="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          
          <div className="flex flex-col items-center justify-center space-y-2 text-art-stone group-hover:text-art-ochre transition-colors">
            <svg className="w-10 h-10 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-serif font-semibold text-base text-art-ink group-hover:text-art-ochre">点击此处选择图片并立即上传</span>
            <span className="text-xs text-art-stone/60">支持常用图片格式 (JPG, PNG, WEBP)</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {initialImages.map((img) => (
          <div key={img.id} className="group relative bg-white rounded-sm shadow-sm border border-art-stone/10 overflow-hidden hover:border-art-ochre/50 hover:shadow-lg transition-all duration-300">
            
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.filename} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
              <div className="absolute inset-0 bg-art-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                <a href={img.url} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors text-art-ink" title="新标签页打开">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                
                <form action={deleteImage.bind(null, img.id, img.filename)} onSubmit={() => addToast('loading', '正在删除...')}>
                  <button type="submit" className="p-2.5 bg-red-500/90 backdrop-blur-sm rounded-full hover:bg-red-600 transition-colors text-white" title="永久删除">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </form>
              </div>
            </div>

            <div className="p-4 border-t border-art-stone/5">
              <p className="text-xs font-semibold text-art-ink truncate" title={img.filename}>
                {img.filename.split('-').slice(1).join('-') || img.filename}
              </p>
              <div className="flex justify-between items-center mt-1.5 pt-1.5 border-t border-art-stone/5">
                <span className="text-[10px] text-art-stone font-mono">
                  {formatBytes(img.size)}
                </span>
                <span className="text-[10px] text-art-stone/60">
                  {new Date(img.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

          </div>
        ))}
      </section>
    </>
  );
}