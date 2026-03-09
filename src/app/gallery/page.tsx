"use client";

import { useState } from "react";

export default function GalleryPage() {
  // 当前选中的分类状态，默认为 "全部"
  const [activeCategory, setActiveCategory] = useState("全部");

  // 分类列表
  const categories = ["全部", "素描", "色彩", "速写", "板绘"];

  // 注入你上传的真实作品数据（包含最新补充的素描与色彩路由）
  const artworks = [
    // 素描 (2张)
    { img: "/uploads/1773039792017-_____20260309145745.jpg", title: "素描静物光影", category: "素描", icon: "edit" },
    { img: "/uploads/1773039789530-_____20260309144318.jpg", title: "素描人像结构", category: "素描", icon: "edit" },
    
    // 色彩 (2张)
    { img: "/uploads/1773040078320-_____20260309150657.jpg", title: "厚涂色彩静物", category: "色彩", icon: "palette" },
    { img: "/uploads/1773040075602-_____20260309150649.jpg", title: "水彩山水意境", category: "色彩", icon: "water_drop" },
    
    // 速写 (3张)
    { img: "/uploads/1773040673934-_____20260309151739.jpg", title: "旗袍女性速写", category: "速写", icon: "draw" },
    { img: "/uploads/1773040677493-_____20260309151745.jpg", title: "白描场景梳理", category: "速写", icon: "draw" },
    { img: "/uploads/1773040670813-_____20260309151733.jpg", title: "古风人物动态捕捉", category: "速写", icon: "draw" },
    
    // 板绘 (3张)
    { img: "/uploads/1773040358482-_____20260309151219.png", title: "青龙与魔法使", category: "板绘", icon: "devices" },
    { img: "/uploads/1773040361654-_____20260309151224.png", title: "水墨风插画尝试", category: "板绘", icon: "brush" },
    { img: "/uploads/1773040364175-_____20260309151229.jpg", title: "精细矢量线稿", category: "板绘", icon: "polyline" }
  ];

  // 根据当前选中的分类过滤作品
  const filteredArtworks = activeCategory === "全部" 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory);

  return (
    <div className="text-art-ink min-h-screen relative overflow-hidden pt-20">
      {/* 氛围装饰层：冷色调与中性色的光晕 */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-art-ochre/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-art-stone/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <main className="relative z-10 flex-grow w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        {/* 头部标题区域 */}
        <div className="flex flex-col items-start gap-6 mb-16 max-w-4xl animate-fade-in-up">
          <h1 className="text-art-ink text-5xl md:text-6xl font-black font-serif tracking-tight leading-[1.1]">
            我的美术作品<br />
            <span className="text-art-ochre italic font-light">探索与记录</span>
          </h1>
          <p className="text-art-stone text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            欢迎来到我的个人画廊。从炭笔的灰度到数位板的像素，这里记录了我在素描、色彩、速写与数字艺术等多个领域的创作足迹。
          </p>
        </div>

        {/* 悬浮分类筛选栏 (已激活交互功能) */}
        <div className="sticky top-[72px] lg:top-[88px] z-30 bg-art-paper/90 backdrop-blur-md py-4 mb-10 -mx-6 px-6 lg:-mx-10 lg:px-10 border-b border-art-stone/10">
          <div className="flex flex-wrap gap-x-10 gap-y-4 items-baseline">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <span className={`text-base transition-colors duration-300 ${
                    isActive ? "text-art-ink font-bold" : "text-art-stone font-medium hover:text-art-ink"
                  }`}>
                    {category === "全部" ? "全部作品" : category}
                  </span>
                  {/* 底部高亮指示线 */}
                  <span className={`h-0.5 w-full bg-art-ochre mt-1 transition-transform origin-left duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 瀑布流作品网格 (基于 Tailwind columns 实现纯 CSS 瀑布流) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 pb-20">
          {filteredArtworks.map((item) => (
            // break-inside-avoid 防止图片在两列中间被截断
            <div key={item.img} className="break-inside-avoid mb-6 art-card group relative cursor-pointer animate-fade-in-up">
              <div className="relative overflow-hidden rounded-sm bg-gray-100 border border-art-stone/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" 
                  src={item.img} 
                  loading="lazy"
                />
                {/* 悬停遮罩层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-art-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-serif text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <span className="material-symbols-outlined !text-[16px] text-art-ochre">{item.icon}</span>
                    <span>分类: {item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* 当分类下没有作品时的空状态提示（防止以后某分类为空） */}
          {filteredArtworks.length === 0 && (
            <div className="col-span-full py-20 text-center text-art-stone font-light">
              该分类下暂无作品展示。
            </div>
          )}
        </div>

      </main>
    </div>
  );
}