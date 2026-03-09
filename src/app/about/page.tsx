import Link from "next/link";

export const metadata = {
  title: "关于 - ART.SHARE",
  description: "创作者的偏执自白，以及幕后的数字架构。",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-32 pb-24 px-6 lg:px-16 w-full max-w-[1400px] mx-auto text-art-ink">
      
      {/* 带着点儿情绪的 Hero 标题 */}
      <header className="mb-24 border-b border-art-stone/10 pb-16 animate-fade-in-up">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 border border-art-stone/20 text-art-stone text-xs tracking-[0.3em] uppercase font-serif mb-6">
            The Artist & The Logic
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-8">
            关于创作<br />
            <span className="text-art-ochre italic font-light">以及，那些没日没夜的死磕</span>
          </h1>
        </div>
      </header>

      {/* 创作者自白：带着颗粒感的真实叙述 */}
      <section className="mb-32 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="font-serif text-3xl font-bold mb-6">关于我</h2>
            <div className="w-12 h-1 bg-art-ochre mb-8"></div>
            
            <div className="space-y-6 text-art-stone font-light leading-relaxed text-lg">
              <p>
                我拥有十五年绘画童子功，深耕美术创作多年，对中国风美学有深厚理解与独特审美。
              </p>
              <p>
                热爱原创与视觉表达，习惯以丰富想象力构建画面，擅长将传统意境与现代创作方式结合。熟练运用AI绘画工具，能高效实现创意落地，提升创作效率与视觉表现力。
              </p>
              <p>
               性格开朗，善于沟通协作，乐于在团队中碰撞灵感、共同完成优质作品。始终保持对艺术的热爱与探索，用心对待每一次创作。
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-art-stone/10 inline-block">
              <span className="font-serif text-2xl font-bold text-art-ink">黄悦</span>
              <span className="block text-xs text-art-stone/50 tracking-widest uppercase mt-2 font-serif">
                15-Year Veteran / Concept & Fine Art
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 relative order-1 lg:order-2 group">
            <div className="relative z-10 p-4 bg-white shadow-xl border border-art-stone/5 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/uploads/1773039789530-_____20260309144318.jpg" 
                alt="Representative Work" 
                className="w-full h-auto object-cover grayscale-[20%] sepia-[10%] group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 h-full bg-art-ochre/10 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>
            <div className="absolute -top-8 -left-8 w-1/2 h-1/2 bg-art-stone/5 -z-10"></div>
          </div>
        </div>
      </section>

      {/* 极度主观的创作理念 */}
      <section className="mb-32 relative overflow-hidden bg-art-charcoal text-white rounded-sm group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/uploads/1773040075602-_____20260309150649.jpg" 
          alt="Artistic Philosophy" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-art-ink/90 via-art-ink/70 to-transparent"></div>
        
        <div className="relative z-10 p-12 md:p-24 max-w-3xl">
          <span className="material-symbols-outlined text-4xl text-art-ochre mb-6">format_quote</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
            “技法练到最后，不过是个底层工具。”
          </h2>
          <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
            真能拔高一张画灵魂的，其实是你对这世界的执念。不管是死磕一根线条的物理转折，还是让 AI 跑几百张迭代模型……本质上没区别。都只是为了把脑子里那个飘忽不定的画面，死死地钉在现实的画布上。
          </p>
          <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-b border-art-ochre text-art-ochre pb-1 hover:text-white hover:border-white transition-colors">
            去看看成品 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* 联络与开发者板块 */}
      <section className="border-t border-art-stone/10 pt-24 pb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* 画师联络区 */}
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl font-bold mb-4">邮箱</h2>
            <p className="text-art-stone font-light mb-10 max-w-sm">
              有任何想法可以联系我
            </p>
            <a href="mailto:1349546818@qq.com" className="inline-block text-2xl md:text-3xl font-serif text-art-ink hover:text-art-ochre transition-colors border-b-2 border-transparent hover:border-art-ochre pb-1 mb-12">
              1349546818@qq.com
            </a>
          </div>

          {/* 开发者致敬区 */}
          <div className="md:col-span-5 bg-art-paper border border-art-stone/10 p-8 rounded-sm shadow-sm relative group hover:border-art-ochre/50 transition-colors">
            <div className="relative z-10">
              <h4 className="text-xs font-bold text-art-ochre uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">code</span>
                Digital Architecture
              </h4>
              
              <h3 className="font-serif text-xl font-bold text-art-ink mb-6">开发者</h3>

              <div className="space-y-3 bg-white p-4 rounded-sm border border-art-stone/5">
                <div className="flex justify-between items-center border-b border-art-stone/5 pb-2">
                  <span className="text-xs text-art-stone uppercase tracking-wider">Engineered By</span>
                  <span className="font-serif font-bold text-art-ink">HueyTowne</span>
                </div>
                <div className="flex justify-between items-center border-b border-art-stone/5 pb-2 pt-1">
                  <span className="text-xs text-art-stone uppercase tracking-wider">GitHub</span>
                  <a href="https://github.com/bolutotop/Art" target="_blank" rel="noopener noreferrer" className="font-serif font-bold text-art-ink hover:text-art-ochre transition-colors flex items-center gap-1">
                    @HueyTowne <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                  </a>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs text-art-stone uppercase tracking-wider">Stack</span>
                  <span className="text-xs font-mono text-art-stone font-medium">Next.js + Tailwind</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}