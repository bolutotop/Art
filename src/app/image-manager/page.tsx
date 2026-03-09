import { getImages } from "./actions";
import ImageManagerClient from "./ImageManagerClient";

export const revalidate = 0;

export default async function ImageManager() {
  const initialImages = await getImages();

  return (
    <main className="flex-1 pt-32 pb-24 px-6 lg:px-16 w-full max-w-[1400px] mx-auto text-art-ink">
      <div className="space-y-10">
        
        {/* 头部区域 */}
        <header className="flex items-center justify-between pb-4 border-b border-art-stone/10">
          <div>
            <h1 className="text-3xl font-serif font-bold tracking-tight">作品库管理</h1>
            <p className="text-art-stone mt-1.5 text-sm">共收录 {initialImages.length} 份艺术资产</p>
          </div>
          <div className="w-10 h-10 rounded-sm bg-white border border-art-stone/10 shadow-sm flex items-center justify-center font-serif text-sm text-art-stone">
            IMG
          </div>
        </header>

        {/* 客户端交互区域 */}
        <ImageManagerClient initialImages={initialImages} />

      </div>
    </main>
  );
}