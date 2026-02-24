export default function Home() {
  return (
    <main className="flex-1 w-full max-w-[1600px] mx-auto pt-32 pb-24 px-6 lg:px-12">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 min-h-[70vh] items-center">
        <div className="lg:col-span-7 z-10 relative">
          <div className="inline-block mb-6 px-3 py-1 border border-art-charcoal/20 text-art-charcoal/70 text-xs tracking-[0.2em] uppercase font-serif">
            Official Platform
          </div>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-art-ink font-black leading-[1.1] tracking-tight mb-8">
            美术工具<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-art-ink to-art-stone/80">应用与共享平台</span>
          </h1>
          <div className="w-24 h-1 bg-art-terracotta mb-10"></div>
          <p className="text-xl md:text-2xl text-art-stone font-light leading-relaxed max-w-2xl mb-12">
            从工具认识美术，从教程学会创作，<br className="hidden md:block" />让每一位美术爱好者都能轻松入门。
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-art-ink text-white font-medium hover:bg-art-charcoal transition-all shadow-xl shadow-art-ink/20 flex items-center gap-3 group">
              <span>探索工具库</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
            </button>
            <button className="px-8 py-4 bg-transparent border border-art-ink text-art-ink font-medium hover:bg-art-ink hover:text-white transition-all">
              了解更多
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-art-beige rounded-full blur-3xl opacity-40 transform translate-x-10 translate-y-10"></div>
          <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
            <img 
              alt="Abstract Art Texture" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl sepia-[.15] contrast-[1.1] brightness-[0.9]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoAK2ZNtkOknVSWuK-sH3pItJD7SZnsywQb8B8Bsk8wfn1m3PdrxyRQVTB01_CZM7T0oFL_IPcHByeZ3tyCeuwjLrh4Axgi_NswQDeOpOQQdVvCQh6uPMaYpNfk6i0-OzPgRffSwXqviUJHNpSgZIySdWNQgkP_frFLf_8YxiFI98hekCaBLNm2JvkuwUImDxfwl7pi1bXFTIuW0q--vBwMz6Vf5XXvbl-rfZ3qxf-BsB4Xj6r9iSy7n50qOvQQsjGBvg4KCI3ZcMS" 
              style={{
                maskImage: "url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTBIMTkwVjE5MEgxMFoiIGZpbGw9ImJsYWNrIi8+PC9zdmc+')", 
                WebkitMaskImage: "url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M10,50 Q25,25 50,50 T90,50 Q75,75 50,50 T10,50 Z\\' fill=\\'black\\'/%3E%3C/svg%3E')", 
                WebkitMaskBoxImage: "url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h100v100H0z\\'/%3E%3C/svg%3E')", 
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
              }} 
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-art-terracotta mix-blend-multiply opacity-80 rounded-full blur-2xl"></div>
            <div className="absolute top-1/4 -right-12 w-64 h-64 bg-art-stone mix-blend-multiply opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 border-t border-art-charcoal/5 pt-24">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-4xl text-art-ink font-bold mb-6">平台简介</h2>
          <div className="w-12 h-1 bg-art-terracotta"></div>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl md:text-2xl text-art-stone font-light leading-relaxed font-serif">
            本平台专为美术学习者打造，汇聚全球优质绘画工具评测与专业教程。无论是传统架上绘画，还是现代数字艺术，我们致力于打破信息壁垒，通过精选内容与活跃社区，助力每一位艺术爱好者从零开始，系统学习美术知识，激发无限创作潜能。
          </p>
          <div className="mt-8 flex gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-art-ink font-serif">500+</span>
              <span className="text-sm text-art-stone uppercase tracking-wider mt-1">Tools Reviewed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-art-ink font-serif">120+</span>
              <span className="text-sm text-art-stone uppercase tracking-wider mt-1">Tutorials</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-art-ink font-serif">20k</span>
              <span className="text-sm text-art-stone uppercase tracking-wider mt-1">Community Members</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <a className="group block relative h-[420px] overflow-hidden bg-white shadow-sm card-hover-effect rounded-sm" href="#">
          <div className="absolute inset-0 bg-art-paper opacity-50"></div>
          <img alt="Tools" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCljlQ32No-7ow7CWpObFDuyvD-Lu0YIluzHBX8rzanOJnPApU0sZdLKSrvWL3yPIo1Kfu_5C6ZJ6TVF5_xPBVQzXz8flhV8Y3Z6NbjsQZpoLMQ0pxOFGiNTdBapU_-JSvemaqjyD9hOFoqX1NrS1peiVCSpTs9UvQdu8srBSE8VlPkMmuYpJRnPlaqZOVM83W3Xklf_r-NUUFWmpS4q7pLoDtv1Wvxa-XGL72vVvXerxuwPD73RiiGPnaguROmG23_mOEBPe9N0Vd0" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <div className="flex items-center gap-3 mb-3 text-art-terracotta">
              <span className="material-symbols-outlined text-[28px]">brush</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Essentials</span>
            </div>
            <h3 className="text-3xl font-serif text-white font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">工具大全</h3>
            <p className="text-white/70 font-light text-sm line-clamp-2 max-w-[90%]">全面解析各类绘画工具，从传统笔刷到数字软件，助你找到得心应手的创作利器。</p>
            <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors"></div>
          </div>
        </a>
        
        <a className="group block relative h-[420px] overflow-hidden bg-art-charcoal shadow-sm card-hover-effect rounded-sm" href="#">
          <img alt="Tutorials" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxauBL6vJ_6OdFSror8ZaHbI0bg_0-NoOLESPrZ2XRzk9eoxkDvURVfhBr5zhz6BGB-cxq0WS7XaIHe2PteAlHwag84Y6YHAy82UVEVJCoUms-zru34259--KCs4GsiCgup9CzmWEKmlYNBNEIgL2KxjziwM_a8q9gkm8JSTi1nHuUXy_weQIlSrrOzn--xD8Q9lAl_N1DAilgeqxrmSAh2cOssXI1zob5lXqGS4A8TIaKFvUHGXrcnqITLPO1FqWlpUXdp0_iko80" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/90 via-art-ink/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <div className="flex items-center gap-3 mb-3 text-art-terracotta">
              <span className="material-symbols-outlined text-[28px]">school</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Learning</span>
            </div>
            <h3 className="text-3xl font-serif text-white font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">使用教程</h3>
            <p className="text-white/70 font-light text-sm line-clamp-2 max-w-[90%]">深入浅出的步骤教学，涵盖素描、水彩、油画等多种技法，从零基础到进阶。</p>
            <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors"></div>
          </div>
        </a>

        <a className="group block relative h-[420px] overflow-hidden bg-[#E8E6E1] shadow-sm card-hover-effect rounded-sm" href="#">
          <img alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 sepia-[.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-NaE1KtxPq7LaJ8gp4-_haEnXHeYOdDvINGvXBOUMNoM79bcHEID3fWYerA1cHSBd2Ba5jNFWD_e6nk2dCaUUi9Dae_HOkC8wiAZekJQIVODsnRlVWFa0VJhij9qAfCU8y__OYPReRDLloNmRKLvZHLqMHr6_6LJKP8bTK-g6MM9ft4QQcOfdXgugeDo3To7faLhM253yOJEDYBurADTf6bxaSX25LFP7KY2usYrfJ1xt_wmJgdN8QOUaT932i7TU1MnysAYK5WD4" />
          <div className="absolute inset-0 bg-gradient-to-t from-art-ink/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <div className="flex items-center gap-3 mb-3 text-art-terracotta">
              <span className="material-symbols-outlined text-[28px]">gallery_thumbnail</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Inspiration</span>
            </div>
            <h3 className="text-3xl font-serif text-white font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">作品共享</h3>
            <p className="text-white/70 font-light text-sm line-clamp-2 max-w-[90%]">展示社区优秀作品，分享创作心得与灵感，构建活跃的艺术交流圈。</p>
            <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors"></div>
          </div>
        </a>
      </div>

      <div className="flex justify-between items-end border-b border-art-charcoal/10 pb-4 mb-8">
        <h3 className="text-xl font-serif text-art-ink">热门推荐</h3>
        <a className="text-sm text-art-stone hover:text-art-terracotta transition-colors flex items-center gap-1" href="#">
          查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { tag: "Photography", title: "光影构图基础", img: "4" },
          { tag: "3D Art", title: "Blender 建模入门", img: "5" },
          { tag: "Vector", title: "Illustrator 笔刷技巧", img: "6" },
          { tag: "Traditional", title: "油画厚涂解析", img: "0" }
        ].map((item, i) => (
          <div key={i} className="space-y-3 group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={`http://googleusercontent.com/profile/picture/${item.img}`} alt={item.title} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-art-terracotta mb-1">{item.tag}</div>
              <h4 className="font-bold text-art-ink group-hover:text-art-stone transition-colors">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}