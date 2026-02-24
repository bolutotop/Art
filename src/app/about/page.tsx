export default function AboutPage() {
  return (
    <main className="flex-1 w-full max-w-[1800px] mx-auto relative pt-32 pb-24 text-art-ink">
      {/* 氛围装饰层：去红色化，统一使用 art-beige 和 art-ochre/10 */}
      <div className="fixed top-20 right-0 w-[800px] h-[800px] bg-gradient-to-br from-art-beige/60 via-art-white to-transparent rounded-full blur-[100px] -z-10 opacity-70 pointer-events-none"></div>
      <div className="fixed bottom-0 left-[-200px] w-[900px] h-[900px] bg-gradient-to-tr from-art-ochre/10 to-transparent rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none"></div>

      {/* Hero 区域 */}
      <section className="px-6 lg:px-24 mb-32 lg:mb-48 relative">
        <div className="max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-art-ochre border-b border-art-ochre/30 pb-2">
              About Us
            </span>
            <span className="hidden lg:block h-[1px] flex-grow bg-art-stone/10 mb-4"></span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-art-ink font-medium leading-[1.1] tracking-tight mb-16">
            关于美术工具<br />
            <span className="italic text-art-stone/80 ml-0 lg:ml-24 block">应用与共享平台</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:col-start-2 border-l-2 border-art-charcoal pl-8 py-2">
              <p className="text-art-stone text-lg md:text-xl font-serif leading-relaxed text-justify">
                我们致力于打造最全面、最系统的美术工具学习平台。在这里，工具不再是冰冷的器物，而是通往艺术殿堂的钥匙。
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 pt-4">
              <p className="text-art-stone/80 text-base leading-loose font-light">
                从传统的画笔纸张到现代的数位板软件，我们深入剖析每一个工具的特性与用法。通过详尽的测评、系统的教程和活跃的社区，帮助每一位艺术生找到最适合自己的创作利器，打破技术壁垒，让创意自由流动。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 愿景与宗旨区域 */}
      <section className="px-6 lg:px-16 mb-40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 lg:gap-x-12 relative">
            <div className="lg:col-span-2 hidden lg:flex justify-center relative">
              <h2 className="text-vertical font-serif text-8xl lg:text-9xl text-art-sand font-bold absolute top-0 -left-8 select-none z-0 opacity-50">
                愿景与宗旨
              </h2>
              <h2 className="text-vertical font-serif text-6xl text-art-ink font-bold relative z-10 mix-blend-multiply">
                宗旨
              </h2>
            </div>
            <div className="lg:col-span-2 lg:hidden mb-12">
              <h2 className="font-serif text-6xl text-art-ink font-bold">宗旨</h2>
            </div>

            {/* 卡片 1 */}
            <div className="lg:col-span-5 lg:col-start-3 flex flex-col items-start pt-12 lg:pt-32 relative z-10">
              <div className="bg-white p-12 shadow-paper border border-art-stone/5 rotate-1 hover:rotate-0 transition-transform duration-500 ease-out max-w-lg">
                <span className="font-serif text-8xl text-art-ochre/20 absolute -top-8 -left-8 font-bold">01</span>
                <h3 className="text-3xl lg:text-4xl font-serif text-art-ink mb-6 leading-tight">
                  工具懂了，<br />
                  <span className="text-art-ochre">画画就简单了</span>
                </h3>
                <p className="text-art-stone/70 leading-relaxed font-light">
                  工欲善其事，必先利其器。深度的工具解析，让你不再被器材所困，专注于画面本身。
                </p>
              </div>
            </div>

            {/* 卡片 2 */}
            <div className="lg:col-span-5 lg:col-start-8 flex flex-col items-end relative z-10">
              <div className="bg-art-charcoal text-art-paper p-12 shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out max-w-lg mt-0 lg:-mt-20">
                <span className="font-serif text-8xl text-white/10 absolute -bottom-8 -right-8 font-bold">02</span>
                <h3 className="text-3xl lg:text-4xl font-serif mb-6 leading-tight text-right text-white">
                  方法对了，<br />
                  <span className="text-art-ochre">进步就快了</span>
                </h3>
                <p className="text-white/60 leading-relaxed font-light text-right">
                  告别盲目练习。科学的学习路径与专业的指导，让你的每一次下笔都成为成长的积累。
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-art-stone/10 rounded-full -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 border border-art-stone/10 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* 宽幅装饰图区域 */}
      <section className="w-full max-w-[1600px] mx-auto px-6 lg:px-16 mb-32">
        <div className="w-full h-[500px] lg:h-[600px] relative overflow-hidden rounded-sm">
          {/* 使用噪点 SVG 作为占位质感图 */}
          <img 
            alt="Art Studio Texture" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJz48ZmlsdGVyIGlkPSdub2lzZSc+PHBmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjY1JyBudW1PY3RhdmVzPSczJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI25vaXNlKScgb3BhY2l0eT0nMC4wNScvPjwvc3ZnPg==" 
          />
          <div className="absolute inset-0 bg-art-ochre/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-art-paper via-transparent to-transparent"></div>
        </div>
      </section>

      {/* 联系我们区域 */}
      <section className="px-6 lg:px-24 pb-32">
        <div className="max-w-5xl mx-auto bg-white border border-art-stone/5 shadow-soft p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-art-beige/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-art-stone/10 pb-8">
              <div>
                <h2 className="font-serif text-4xl lg:text-5xl text-art-ink mb-2">联系我们</h2>
                <p className="font-sans text-sm tracking-[0.2em] text-art-stone/60 uppercase">Get in Touch</p>
              </div>
              <div className="mt-6 md:mt-0">
                <p className="text-art-stone italic font-serif text-lg">期待与每一位创作者的交流</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group cursor-pointer">
                <h4 className="font-bold text-art-ink text-lg mb-3 group-hover:text-art-ochre transition-colors">建议反馈</h4>
                <p className="text-sm text-art-stone/70 leading-relaxed mb-4">
                  如果您对平台有任何建议，或发现了任何问题，请随时告诉我们。
                </p>
                <a className="text-xs font-bold tracking-wider border-b border-art-charcoal pb-1 group-hover:border-art-ochre transition-colors" href="#">SEND FEEDBACK</a>
              </div>
              <div className="group cursor-pointer">
                <h4 className="font-bold text-art-ink text-lg mb-3 group-hover:text-art-ochre transition-colors">投稿教程</h4>
                <p className="text-sm text-art-stone/70 leading-relaxed mb-4">
                  分享您的专业知识。欢迎优秀的讲师与创作者加入我们的内容生态。
                </p>
                <a className="text-xs font-bold tracking-wider border-b border-art-charcoal pb-1 group-hover:border-art-ochre transition-colors" href="#">CONTRIBUTE</a>
              </div>
              <div className="group cursor-pointer">
                <h4 className="font-bold text-art-ink text-lg mb-3 group-hover:text-art-ochre transition-colors">作品分享</h4>
                <p className="text-sm text-art-stone/70 leading-relaxed mb-4">
                  展示您的学习成果。优秀的学员作品将有机会在首页展示。
                </p>
                <a className="text-xs font-bold tracking-wider border-b border-art-charcoal pb-1 group-hover:border-art-ochre transition-colors" href="#">SHARE WORK</a>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-art-stone/5 flex flex-col md:flex-row justify-between items-center text-sm text-art-stone/50 font-light">
              <span>Email: contact@art-tutorials.cn</span>
              <span>Based in Hangzhou, China</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}