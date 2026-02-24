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
            06 <span className="text-lg text-art-stone font-sans align-top">Sections</span>
          </div>
        </div>
      </div>

      {/* 瀑布流/网格卡片区 - 全新 6 宫格排版 */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[280px]">
        
        {/* 卡片 1: 素描工具 */}
        <div className="md:col-span-6 lg:col-span-8 row-span-2 group card-editorial relative overflow-hidden bg-white shadow-sm hover:shadow-lg rounded-sm">
          <img alt="Sketching tools" className="card-img absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCljlQ32No-7ow7CWpObFDuyvD-Lu0YIluzHBX8rzanOJnPApU0sZdLKSrvWL3yPIo1Kfu_5C6ZJ6TVF5_xPBVQzXz8flhV8Y3Z6NbjsQZpoLMQ0pxOFGiNTdBapU_-JSvemaqjyD9hOFoqX1NrS1peiVCSpTs9UvQdu8srBSE8VlPkMmuYpJRnPlaqZOVM83W3Xklf_r-NUUFWmpS4q7pLoDtv1Wvxa-XGL72vVvXerxuwPD73RiiGPnaguROmG23_mOEBPe9N0Vd0" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-art-ink/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
            <div className="flex justify-between items-end">
              <div>
                <span className="inline-block px-3 py-1 border border-white/30 text-white/80 text-xs tracking-wider mb-4 font-serif">FUNDAMENTALS</span>
                <h2 className="text-4xl lg:text-5xl font-serif text-white mb-2">素描工具详解</h2>
                <p className="text-white/70 max-w-md font-light">石墨、木炭与粉彩的硬度等级、阴影技巧深度解析。</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-white font-thin opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">arrow_right_alt</span>
            </div>
          </div>
        </div>

        {/* 卡片 2: 水粉、水彩 */}
        <div className="md:col-span-3 lg:col-span-4 row-span-2 group card-editorial relative overflow-hidden bg-art-white shadow-sm hover:shadow-lg rounded-sm border border-art-stone/5">
          <div className="absolute top-6 right-6 z-10 w-10 h-10 border border-art-ink/10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <span className="font-serif font-bold text-lg">W</span>
          </div>
          <img alt="Watercolor background" className="card-img absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxauBL6vJ_6OdFSror8ZaHbI0bg_0-NoOLESPrZ2XRzk9eoxkDvURVfhBr5zhz6BGB-cxq0WS7XaIHe2PteAlHwag84Y6YHAy82UVEVJCoUms-zru34259--KCs4GsiCgup9CzmWEKmlYNBNEIgL2KxjziwM_a8q9gkm8JSTi1nHuUXy_weQIlSrrOzn--xD8Q9lAl_N1DAilgeqxrmSAh2cOssXI1zob5lXqGS4A8TIaKFvUHGXrcnqITLPO1FqWlpUXdp0_iko80" />
          <div className="absolute inset-0 bg-art-paper/10 group-hover:bg-transparent transition-colors"></div>
          <div className="absolute bottom-0 left-0 p-8 bg-white/90 w-full border-t border-art-stone/10">
            <h3 className="font-serif text-2xl text-art-ink mb-1">水粉、水彩</h3>
            <p className="text-art-stone text-sm mb-4">流动与控制的艺术</p>
            <a className="inline-flex items-center text-xs font-bold tracking-widest uppercase border-b border-art-ink pb-1 hover:text-art-ochre hover:border-art-ochre transition-colors" href="#">
              查看教程
            </a>
          </div>
        </div>

        {/* 卡片 3: 丙烯、油画 */}
        <div className="md:col-span-3 lg:col-span-4 row-span-1 group card-editorial relative overflow-hidden bg-art-charcoal text-white shadow-sm hover:shadow-lg rounded-sm">
          <img alt="Oil paint texture" className="card-img absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoAK2ZNtkOknVSWuK-sH3pItJD7SZnsywQb8B8Bsk8wfn1m3PdrxyRQVTB01_CZM7T0oFL_IPcHByeZ3tyCeuwjLrh4Axgi_NswQDeOpOQQdVvCQh6uPMaYpNfk6i0-OzPgRffSwXqviUJHNpSgZIySdWNQgkP_frFLf_8YxiFI98hekCaBLNm2JvkuwUImDxfwl7pi1bXFTIuW0q--vBwMz6Vf5XXvbl-rfZ3qxf-BsB4Xj6r9iSy7n50qOvQQsjGBvg4KCI3ZcMS" />
          <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
            <h3 className="font-serif text-3xl mb-2 relative z-10">丙烯、油画</h3>
            <div className="w-12 h-[1px] bg-art-ochre mb-4"></div>
            <p className="text-white/80 text-sm font-light">画布上的厚涂技法与质感</p>
          </div>
        </div>

        {/* 卡片 4: 数位绘画 */}
        <div className="md:col-span-3 lg:col-span-4 row-span-1 group card-editorial relative overflow-hidden bg-white shadow-sm hover:shadow-lg rounded-sm border border-art-stone/10">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-art-ochre transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <div className="p-8 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-2xl text-art-ink font-bold">数位绘画</h3>
                <p className="text-xs text-art-stone mt-1 uppercase tracking-wider">Digital Suite</p>
              </div>
              <span className="material-symbols-outlined text-art-stone/50">draw</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <img alt="Digital art thumbnail" className="w-12 h-12 rounded object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-NaE1KtxPq7LaJ8gp4-_haEnXHeYOdDvINGvXBOUMNoM79bcHEID3fWYerA1cHSBd2Ba5jNFWD_e6nk2dCaUUi9Dae_HOkC8wiAZekJQIVODsnRlVWFa0VJhij9qAfCU8y__OYPReRDLloNmRKLvZHLqMHr6_6LJKP8bTK-g6MM9ft4QQcOfdXgugeDo3To7faLhM253yOJEDYBurADTf6bxaSX25LFP7KY2usYrfJ1xt_wmJgdN8QOUaT932i7TU1MnysAYK5WD4" />
              <p className="text-sm text-art-stone line-clamp-2">Ps, Procreate & Corel 自定义笔刷创作。</p>
            </div>
          </div>
        </div>

        {/* 卡片 5: 矢量/手绘设计 (深色纵向大卡片) */}
        <div className="md:col-span-6 lg:col-span-4 row-span-2 group card-editorial relative overflow-hidden bg-art-stone shadow-sm hover:shadow-lg rounded-sm">
          <img alt="Vector art" className="card-img absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1N9BdXSTkSYYQ4DliqoV9tJ4TUofw_HuP_J6e8EKJR17cMA2FxLhjBpoByl_k6KW3e-RSY37PffBkLnhaLaDRGHrUr7_W65iZAYek8Fw95ijWQKXnm9Re29SO9WxzlbotQGRGE4Z-7a_I-7ok2bYDijFGwb6wWDh17X70zciiQMoD5jxjVFVOA0IvNte0L2OH-fJM84k_JtJVdpGp8xjZges4VTiGzezDl2OApGTRFdrl7_ex_nDOnYVeJKnkAGl4MLUwbgiO_YQn" />
          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">Professional Design</span>
            <h3 className="font-serif text-4xl text-white mb-2 leading-tight">矢量/手绘设计</h3>
            <p className="text-white/70 text-base max-w-xs font-light mb-6">Illustrator 精确与扩展，从草图到无限放大的艺术表达。</p>
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-art-ink transition-all">
              <span className="material-symbols-outlined text-xl">north_east</span>
            </div>
          </div>
        </div>

        {/* 卡片 6: 摄影/参考 (横向宽卡片) */}
        <div className="md:col-span-6 lg:col-span-8 row-span-1 group card-editorial relative overflow-hidden bg-art-ink text-white shadow-sm hover:shadow-lg rounded-sm">
          <img alt="Photography" className="card-img absolute inset-0 w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAugxezOTBymKUXcpJSwM9UJT1rSa8xKACpLsYDOjT88OCc4yiiPtBvCPWj0ektGXXUliVIe8TKYwWEWnsu27ULqapEfiLOqcSyc6r7QACaEExxslYTP93nekyA3FOu9ic3Kmkc995EFB4vEHgPo1cW9sjQ0epYDmE3Pt7r9MBsNzeAZtW1-dr_TpIp2KmCEmM6DMwzdQp6evqIt2UZk0gOLgxyn_A2F95hfqY66GLyNp5XjOVGSSlqQaf7OCZYmbVNT_ew6VI3pBtr" />
          <div className="absolute inset-0 border border-white/5 m-4 flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <span className="material-symbols-outlined text-5xl font-extralight text-art-ochre">shutter_speed</span>
            </div>
            <h3 className="font-serif text-3xl tracking-widest uppercase">摄影/参考</h3>
            <p className="text-white/50 text-sm mt-3 font-light tracking-wide italic">Captured Reality & Visual References</p>
          </div>
        </div>

      </div>

      {/* 底部引导区 */}
      <div className="mt-24 border-t border-art-stone/20 pt-16 lg:pt-24 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-art-paper px-4 text-art-stone/40">
          <span className="material-symbols-outlined">all_inclusive</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-art-ink mb-6">没找到你需要的工具？</h2>
            <p className="text-art-stone text-lg font-light leading-relaxed mb-8">
              我们的资源库正在不断扩展。浏览社区存档，查看用户提交的工具和实验性技术，或者直接告诉我们您想看到什么。
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-8 py-3 bg-white border border-art-stone/20 text-art-ink font-medium hover:border-art-ink transition-colors shadow-sm btn-texture">
                浏览存档
              </button>
              <button className="px-8 py-3 bg-art-ink text-art-white font-medium hover:bg-art-charcoal transition-colors flex items-center justify-center gap-3 btn-texture shadow-lg shadow-art-ink/10">
                <span>申请新分类</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>
          <div className="bg-white p-8 lg:p-12 border border-art-stone/10 shadow-sm relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-art-ochre/10 rounded-bl-full transition-transform duration-500 group-hover:scale-150 origin-top-right"></div>
            <div className="relative z-10">
              <div className="text-xs font-bold tracking-widest text-art-ochre uppercase mb-2">Community Spotlight</div>
              <h3 className="text-xl font-serif text-art-ink mb-4">加入我们的创作者社区</h3>
              <p className="text-art-stone text-sm mb-6">分享你的工具测评，获取积分，兑换专业课程。</p>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-art-ink text-white border-2 border-white flex items-center justify-center text-xs">+2k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}