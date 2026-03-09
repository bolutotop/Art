import Link from "next/link";

export default function ToolsDirectory() {
  return (
    <main className="flex-1 pt-32 pb-24 px-6 lg:px-16 w-full max-w-[1800px] mx-auto">
      {/* 页面标题与索引区 */}
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-24 gap-8 border-b border-art-stone/20 pb-12">
        <div className="max-w-3xl">
          <span className="inline-block text-art-ochre font-serif italic text-lg mb-4">
            The Complete Art Tools Guide
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-art-ink mb-6 font-medium leading-[0.9] tracking-tight">
            从工具认识美术<br />
            <span className="text-art-stone/80 italic font-light ml-4 md:ml-12">从教程学会创作</span>
          </h1>
          <p className="text-art-stone text-lg md:text-xl font-light mt-8 max-w-xl leading-relaxed">
            让每一位美术爱好者都能轻松入门。专业的评测，详尽的分类，为你的艺术创作铺平道路。
          </p>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <div className="text-xs uppercase tracking-[0.2em] text-art-stone">Category Index</div>
          <div className="text-4xl font-serif">
            04 <span className="text-lg text-art-stone font-sans align-top">Sections</span>
          </div>
        </div>
      </div>

      {/* 瀑布流/网格卡片区 - 7:5 与 5:7 黄金比例交错排版 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
        
        {/* 卡片 1: 素描 -> 链接到 /tools/sketching */}
        <Link href="/tools/sketching" className="block md:col-span-12 lg:col-span-7 row-span-2 group card-editorial relative overflow-hidden bg-white shadow-sm hover:shadow-lg rounded-sm">
          <img alt="Sketching tools" className="card-img absolute inset-0 w-full h-full object-cover" src="/uploads/1773039792017-_____20260309145745.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-art-ink/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
            <div className="flex justify-between items-end">
              <div>
                <span className="inline-block px-3 py-1 border border-white/30 text-white/80 text-xs tracking-wider mb-4 font-serif">FUNDAMENTALS</span>
                <h2 className="text-4xl lg:text-5xl font-serif text-white mb-2">素描工具详解</h2>
                <p className="text-white/70 max-w-md font-light">石墨、木炭与粉彩的硬度等级、光影与排线技巧深度解析。</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-white font-thin opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">arrow_right_alt</span>
            </div>
          </div>
        </Link>

        {/* 卡片 2: 色彩 -> 链接到 /tools/color */}
        <Link href="/tools/color" className="block md:col-span-12 lg:col-span-5 row-span-2 group card-editorial relative overflow-hidden bg-art-white shadow-sm hover:shadow-lg rounded-sm border border-art-stone/5">
          <div className="absolute top-6 right-6 z-10 w-10 h-10 border border-art-ink/10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <span className="font-serif font-bold text-lg">C</span>
          </div>
          <img alt="Color and Paint" className="card-img absolute inset-0 w-full h-full object-cover" src="/uploads/1773040078320-_____20260309150657.jpg" />
          <div className="absolute inset-0 bg-art-paper/10 group-hover:bg-transparent transition-colors"></div>
          <div className="absolute bottom-0 left-0 p-8 bg-white/90 w-full border-t border-art-stone/10">
            <h3 className="font-serif text-3xl text-art-ink mb-2">色彩系统指南</h3>
            <p className="text-art-stone text-sm mb-4">水粉、水彩、丙烯与油画的材质特性与色彩控制逻辑。</p>
            <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase border-b border-art-ink pb-1 group-hover:text-art-ochre group-hover:border-art-ochre transition-colors">
              探索色彩体系
            </span>
          </div>
        </Link>

        {/* 卡片 3: 速写 -> 链接到 /tools/quick-sketch */}
        <Link href="/tools/quick-sketch" className="block md:col-span-12 lg:col-span-5 row-span-1 group card-editorial relative overflow-hidden bg-art-charcoal text-white shadow-sm hover:shadow-lg rounded-sm">
          <img alt="Quick Sketching" className="card-img absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30" src="/uploads/1773040677493-_____20260309151745.jpg" />
          <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
            <span className="material-symbols-outlined text-3xl mb-3 text-art-ochre font-light">draw</span>
            <h3 className="font-serif text-3xl mb-2 relative z-10">速写与线稿</h3>
            <div className="w-12 h-[1px] bg-art-ochre mb-4 mx-auto"></div>
            <p className="text-white/80 text-sm font-light px-4">针管笔、钢笔与马克笔的动态捕捉与精准线条表达。</p>
          </div>
        </Link>

        {/* 卡片 4: 板绘 -> 链接到 /tools/digital */}
        <Link href="/tools/digital" className="block md:col-span-12 lg:col-span-7 row-span-1 group card-editorial relative overflow-hidden bg-white shadow-sm hover:shadow-lg rounded-sm border border-art-stone/10">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-art-ochre transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <div className="p-8 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-3xl text-art-ink font-bold group-hover:text-art-ochre transition-colors">数位板绘生态</h3>
                <p className="text-xs text-art-stone mt-2 uppercase tracking-wider">Digital Painting Workflow</p>
              </div>
              <span className="material-symbols-outlined text-art-stone/30 text-4xl group-hover:text-art-ochre transition-colors">devices</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <img alt="Digital art thumbnail" className="w-14 h-14 rounded object-cover grayscale group-hover:grayscale-0 transition-all" src="/uploads/1773040358482-_____20260309151219.png" />
              <p className="text-sm text-art-stone line-clamp-2 max-w-sm leading-relaxed group-hover:text-art-ink transition-colors">
                数位屏、压感笔硬核测评，以及 Ps、Procreate 核心绘图软件的笔刷配置与图层逻辑。
              </p>
            </div>
          </div>
        </Link>

      </div>
    </main>
  );
}