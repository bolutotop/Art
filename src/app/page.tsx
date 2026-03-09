import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-[1600px] mx-auto pt-32 pb-24 px-6 lg:px-12">
      
      {/* 顶部 Hero 区域：个人宣言与代表作展示 */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 min-h-[70vh] items-center">
        <div className="lg:col-span-7 z-10 relative">
          <div className="inline-block mb-6 px-3 py-1 border border-art-stone/20 text-art-stone text-xs tracking-[0.2em] uppercase font-serif">
            Personal Portfolio & Art Blog
          </div>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-art-ink font-black leading-[1.1] tracking-tight mb-8">
            笔触与像素<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-art-ink to-art-stone/80">
              我的创作视界
            </span>
          </h1>
          {/* 主题色点缀线 */}
          <div className="w-24 h-1 bg-art-ochre mb-10"></div>
          <p className="text-xl md:text-2xl text-art-stone font-light leading-relaxed max-w-2xl mb-12">
            从传统架上绘画的厚重，到数位板绘的无限可能。<br className="hidden md:block" />
            这里记录着我对素描、色彩的纯粹热爱，以及对各类创作工具的深度探索。
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/gallery" className="px-8 py-4 bg-art-ink text-white font-medium hover:bg-art-charcoal transition-all shadow-xl shadow-art-ink/20 flex items-center gap-3 group">
              <span>进入个人画廊</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
            </Link>
            <Link href="/tools" className="px-8 py-4 bg-transparent border border-art-ink text-art-ink font-medium hover:bg-art-ink hover:text-white transition-all">
              阅读工具评测
            </Link>
          </div>
        </div>
        
        {/* 右侧主视觉：使用你的【青龙与魔法使】板绘作品 */}
        <div className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-art-ochre/20 rounded-full blur-3xl opacity-40 transform translate-x-10 translate-y-10 group-hover:opacity-60 transition-opacity duration-700"></div>
          <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="My Digital Artwork" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl group-hover:scale-105 transition-transform duration-700" 
              src="/uploads/1773040358482-_____20260309151219.png" 
              style={{
                maskImage: "url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTBIMTkwVjE5MEgxMFoiIGZpbGw9ImJsYWNrIi8+PC9zdmc+')", 
                WebkitMaskImage: "url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M10,50 Q25,25 50,50 T90,50 Q75,75 50,50 T10,50 Z\\' fill=\\'black\\'/%3E%3C/svg%3E')", 
                WebkitMaskBoxImage: "url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h100v100H0z\\'/%3E%3C/svg%3E')", 
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
              }} 
            />
            {/* 氛围光晕色调统一 */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-art-ochre mix-blend-multiply opacity-50 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* 创作理念区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 border-t border-art-stone/10 pt-24">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-4xl text-art-ink font-bold mb-6">创作理念</h2>
          <div className="w-12 h-1 bg-art-ochre"></div>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl md:text-2xl text-art-stone font-light leading-relaxed font-serif">
            绘画不仅是视觉的再现，更是情绪与思想的投射。在这个个人空间里，我不仅陈列了自己满意的画作，也毫无保留地分享了那些陪伴我创作的兵器——画笔、纸张、颜料与数位板。希望我的微小经验，能为同样沉迷于此的你提供一丝灵感与参考。
          </p>
          <div className="mt-12 flex flex-wrap gap-10 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-art-ink font-serif">04</span>
              <span className="text-sm text-art-stone uppercase tracking-wider mt-2">Core Mediums</span>
              <span className="text-xs text-art-stone/60 mt-1">深耕四大创作媒介</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-art-ink font-serif">10+</span>
              <span className="text-sm text-art-stone uppercase tracking-wider mt-2">Featured Artworks</span>
              <span className="text-xs text-art-stone/60 mt-1">精选个人画作收录</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-art-ink font-serif">∞</span>
              <span className="text-sm text-art-stone uppercase tracking-wider mt-2">Endless Passion</span>
              <span className="text-xs text-art-stone/60 mt-1">对艺术的无限热忱</span>
            </div>
          </div>
        </div>
      </div>

      {/* 核心功能三大模块导航区：完全换成个人视角的文案与配图 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        
        {/* 卡片1：个人画廊 (使用你的水彩风景图) */}
        <Link href="/gallery" className="group block relative h-[450px] overflow-hidden bg-white shadow-sm card-hover-effect rounded-sm">
          <div className="absolute inset-0 bg-art-paper opacity-50"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="My Gallery" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale-[15%] group-hover:grayscale-0" src="/uploads/1773040075602-_____20260309150649.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-art-ink/30 to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <div className="flex items-center gap-3 mb-3 text-art-ochre">
              <span className="material-symbols-outlined text-[28px]">gallery_thumbnail</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Portfolio</span>
            </div>
            <h3 className="text-3xl font-serif text-white font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">个人画廊</h3>
            <p className="text-white/70 font-light text-sm line-clamp-2 max-w-[90%]">按媒介分类展示我的最新创作，记录每一笔光影与色彩的推演。</p>
            <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors"></div>
          </div>
        </Link>
        
        {/* 卡片2：工具评测 (使用你的炭笔静物图) */}
        <Link href="/tools" className="group block relative h-[450px] overflow-hidden bg-art-charcoal shadow-sm card-hover-effect rounded-sm border border-art-stone/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Tools & Gears" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-overlay" src="/uploads/1773039792017-_____20260309145745.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <div className="flex items-center gap-3 mb-3 text-art-ochre">
              <span className="material-symbols-outlined text-[28px]">brush</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Gears & Review</span>
            </div>
            <h3 className="text-3xl font-serif text-white font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">工具评测</h3>
            <p className="text-white/70 font-light text-sm line-clamp-2 max-w-[90%]">基于真实作画体验，为你拆解传统画材与数字设备的物理特性及适用场景。</p>
            <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors"></div>
          </div>
        </Link>

        {/* 卡片3：创作过程 (使用你的精致线稿图) */}
        <Link href="/tools/quick-sketch" className="group block relative h-[450px] overflow-hidden bg-white shadow-sm card-hover-effect rounded-sm border border-art-stone/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Creative Process" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="/uploads/1773040673934-_____20260309151739.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-art-ink/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <div className="flex items-center gap-3 mb-3 text-art-ochre">
              <span className="material-symbols-outlined text-[28px]">history_edu</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Workflow</span>
            </div>
            <h3 className="text-3xl font-serif text-white font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">创作复盘</h3>
            <p className="text-white/70 font-light text-sm line-clamp-2 max-w-[90%]">从草图构思到细节深入，还原我的核心工作流与技法思考逻辑。</p>
            <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors"></div>
          </div>
        </Link>

      </div>
      
    </main>
  );
}