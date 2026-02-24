export default function GalleryPage() {
  return (
    // 移除了硬编码的背景色，直接继承全局的背景与噪点质感
    <div className="text-art-ink min-h-screen relative overflow-hidden pt-20">
      {/* 氛围装饰层：调整为冷色调与中性色的光晕 */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-art-ochre/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-art-stone/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <main className="relative z-10 flex-grow w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        {/* 头部标题区域 */}
        <div className="flex flex-col items-start gap-6 mb-16 max-w-4xl">
          <h1 className="text-art-ink text-5xl md:text-6xl font-black font-serif tracking-tight leading-[1.1]">
            美术作品<br />
            {/* 高亮色改为 art-ochre (雅致的赭石金) */}
            <span className="text-art-ochre italic">共享与交流</span>
          </h1>
          <p className="text-art-stone text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            欢迎上传你的素描、色彩、速写作品，在这个纯粹的艺术空间里，与全国艺术爱好者一起学习、交流、进步。
          </p>
        </div>

        {/* 悬浮分类筛选栏 */}
        <div className="sticky top-20 z-30 bg-art-paper/90 backdrop-blur-md py-4 mb-10 -mx-6 px-6 lg:-mx-10 lg:px-10 border-b border-art-stone/10">
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-baseline">
            <a className="group flex flex-col items-center" href="#">
              <span className="text-art-ink font-bold text-base">新手作品</span>
              <span className="h-0.5 w-full bg-art-ochre mt-1 scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="group flex flex-col items-center" href="#">
              <span className="text-art-stone hover:text-art-ink font-medium text-base transition-colors">素描作品</span>
              <span className="h-0.5 w-full bg-art-ochre mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="group flex flex-col items-center" href="#">
              <span className="text-art-stone hover:text-art-ink font-medium text-base transition-colors">色彩作品</span>
              <span className="h-0.5 w-full bg-art-ochre mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="group flex flex-col items-center" href="#">
              <span className="text-art-stone hover:text-art-ink font-medium text-base transition-colors">水彩作品</span>
              <span className="h-0.5 w-full bg-art-ochre mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="group flex flex-col items-center" href="#">
              <span className="text-art-stone hover:text-art-ink font-medium text-base transition-colors">手绘插画</span>
              <span className="h-0.5 w-full bg-art-ochre mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="group flex flex-col items-center" href="#">
              <span className="text-art-stone hover:text-art-ink font-medium text-base transition-colors">数位绘画</span>
              <span className="h-0.5 w-full bg-art-ochre mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a className="group flex flex-col items-center ml-auto border-l pl-8 border-art-stone/20" href="#">
              <span className="text-art-ink font-serif italic font-bold text-lg hover:text-art-ochre transition-colors">优秀作品展示 ✨</span>
            </a>
          </div>
        </div>

        {/* 瀑布流作品网格 */}
        <div className="masonry-grid pb-20">
          {[
            { img: "8", title: "静物素描练习", tool: "炭笔+铅笔", icon: "brush" },
            { img: "9", title: "色彩风景写生", tool: "水粉颜料", icon: "palette" },
            { img: "10", title: "水彩花卉", tool: "温莎牛顿水彩", icon: "water_drop" },
            { img: "11", title: "数字插画角色", tool: "Procreate", icon: "tablet_mac" },
            { img: "12", title: "炭笔石膏像", tool: "软炭", icon: "edit" },
            { img: "13", title: "铅笔手绘头像", tool: "2B-6B铅笔", icon: "edit" },
            { img: "14", title: "丙烯抽象画", tool: "丙烯颜料", icon: "format_paint" },
            { img: "15", title: "人物速写动态", tool: "针管笔", icon: "draw" },
            { img: "16", title: "综合材料探索", tool: "拼贴+油画棒", icon: "extension" }
          ].map((item, index) => (
            <div key={index} className="masonry-item art-card group relative cursor-pointer">
              <div className="relative overflow-hidden rounded-sm bg-gray-100">
                <img 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" 
                  src={`http://googleusercontent.com/profile/picture/${item.img}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-art-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-serif text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <span className="material-symbols-outlined !text-[16px]">{item.icon}</span>
                    <span>使用工具: {item.tool}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 分页器 */}
        <div className="flex items-center justify-center gap-6 pb-8">
          <a className="text-art-stone hover:text-art-ink transition-colors flex items-center" href="#">
            <span className="material-symbols-outlined">west</span>
          </a>
          <div className="flex items-baseline gap-4 font-serif text-lg">
            <span className="text-art-ink font-bold border-b-2 border-art-ink pb-1">01</span>
            <a className="text-art-stone hover:text-art-ink transition-colors" href="#">02</a>
            <a className="text-art-stone hover:text-art-ink transition-colors" href="#">03</a>
            <span className="text-art-stone">...</span>
            <a className="text-art-stone hover:text-art-ink transition-colors" href="#">12</a>
          </div>
          <a className="text-art-stone hover:text-art-ink transition-colors flex items-center" href="#">
            <span className="material-symbols-outlined">east</span>
          </a>
        </div>
      </main>
    </div>
  );
}