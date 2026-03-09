import Link from "next/link";

export const metadata = {
  title: "素描工具详解与实战案例 - ART.SHARE",
  description: "石墨、木炭与粉彩的硬度等级、阴影技巧深度解析与实战应用。",
};

export default function SketchingToolsPage() {
  return (
    <main className="flex-1 pt-32 pb-24 px-6 lg:px-16 w-full max-w-[1400px] mx-auto text-art-ink">
      
      {/* 顶部导航与面包屑 */}
      <div className="mb-12">
        <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-art-stone hover:text-art-ochre transition-colors font-medium tracking-wide">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          返回工具大全
        </Link>
      </div>

      {/* Hero 标题区 */}
      <header className="mb-20 border-b border-art-stone/10 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 border border-art-stone/20 text-art-stone text-xs tracking-[0.2em] uppercase font-serif mb-6">
              Fundamentals of Sketching
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              素描核心工具<br />
              <span className="text-art-ochre italic font-light">与实战案例解析</span>
            </h1>
            <p className="text-art-stone text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              从石墨的灰度到炭笔的覆盖力，精准掌握核心绘图材质的物理特性，打破技法瓶颈，建立严谨的黑白灰视觉体系。
            </p>
          </div>
        </div>
      </header>

      {/* 第一部分：核心工具矩阵 */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-3xl font-bold">核心工具矩阵</h2>
          <div className="h-[1px] flex-1 bg-art-stone/10"></div>
          <span className="text-xs text-art-stone/50 font-mono tracking-widest uppercase">Tool Matrix</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 石墨铅笔 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">edit</span>
            <h3 className="font-serif text-xl font-bold mb-3">石墨铅笔 (Graphite)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">H 系列 (Hard):</strong> 2H-6H。含黏土多，高硬度，低灰度。适用于起稿构图、亮部灰调刻画及精细排线。</li>
              <li><strong className="text-art-ink font-medium">B 系列 (Black):</strong> 2B-8B。含石墨多，低硬度，高灰度。适用于暗部铺色、加深明暗交界线。</li>
            </ul>
          </div>

          {/* 炭笔 */}
          <div className="bg-art-charcoal text-white p-8 border border-art-charcoal rounded-sm shadow-sm">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">draw</span>
            <h3 className="font-serif text-xl font-bold mb-3">炭笔 (Charcoal)</h3>
            <ul className="space-y-3 text-sm text-white/70 font-light leading-relaxed">
              <li><strong className="text-white font-medium">分类:</strong> 分为软、中、硬炭 (Soft/Medium/Hard)。</li>
              <li><strong className="text-white font-medium">特性:</strong> 哑光质感，黑度与覆盖力远高于石墨。无反光，适用于快速建立全局黑白灰大关系与强对比画面。</li>
            </ul>
          </div>

          {/* 辅助工具 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">ink_eraser</span>
            <h3 className="font-serif text-xl font-bold mb-3">辅助工具 (Auxiliary)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">可塑橡皮:</strong> 通过粘附碳粉减淡调子，擦出高光，不破坏纸张表面纤维 (Paper Tooth)。</li>
              <li><strong className="text-art-ink font-medium">纸擦笔:</strong> 卷纸压制而成，用于柔和排线痕迹，处理细腻的表面过渡（如皮肤、布料）。</li>
            </ul>
          </div>

          {/* 纸张参数 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">note</span>
            <h3 className="font-serif text-xl font-bold mb-3">纸张标准 (Paper)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">克数 (Weight):</strong> 建议 160g/m² - 200g/m²。低于 160g 易在反复擦拭与排线中破损。</li>
              <li><strong className="text-art-ink font-medium">纹理 (Texture):</strong> 细纹适合极精细写实；中粗/粗纹适合炭笔及大尺度速写，挂粉能力极强。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 第二部分：实战案例解析 */}
      <section>
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl font-bold">材质表现与工具我的应用案例</h2>
          <div className="h-[1px] flex-1 bg-art-stone/10"></div>
          <span className="text-xs text-art-stone/50 font-mono tracking-widest uppercase">Case Studies</span>
        </div>

        <div className="space-y-24">
          
          {/* 案例 A: 静物材质对比 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-gray-100 p-4 rounded-sm border border-art-stone/5 shadow-sm">
              {/* 请将 src 替换为您上传的静物图片路径，例如 /images/still-life.jpg */}
              <img 
                src="/uploads/1773039792017-_____20260309145745.jpg" 
                alt="静物材质对比 - 炭笔与石墨" 
                className="w-full h-auto object-contain rounded-sm mix-blend-multiply"
                style={{ maxHeight: '700px' }}
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Case A</span>
              <h3 className="font-serif text-3xl font-bold mb-6">静物材质对比 <span className="block text-xl text-art-stone font-light mt-2">Texture Contrast in Still Life</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：金属茶壶、搪瓷罐、布纹与暗部背景。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 全局基调 (Global Tone)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">使用软炭笔 (Soft Charcoal) 侧锋大面积铺陈深色背景与桌面投影，利用炭笔的高吸光率压暗空间，反衬主体物亮部。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 金属与搪瓷反光</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">极硬石墨 (如 2H) 结合削尖的硬橡皮，锐化茶壶与罐口的高光边缘。金属材质的明暗衰减极快，需使用硬炭刻画其清晰的边界。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">3. 布纹起伏</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">使用中炭或 2B 铅笔顺着布纹的圆柱体结构排线，配合纸擦笔 (Blending Stump) 沿结构走向轻擦，虚化暗部边界，体现织物的柔滑与体量感。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-art-stone/10"></div>

          {/* 案例 B: 人物骨骼肌肉与毛发质感 (左右交错排版) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Case B</span>
              <h3 className="font-serif text-3xl font-bold mb-6">人物骨骼肌肉与毛发质感 <span className="block text-xl text-art-stone font-light mt-2">Portrait Structure & Hair Texture</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：人物面部骨骼转折、毛发体积与毛衣粗糙质感。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 毛发块面构造</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">头发不可单根描绘。使用软炭直接塑造麻花辫与刘海的几何体积（暗部），边缘使用纸擦笔向外晕染，表现发丝的蓬松感与边缘的虚化 (Lost Edges)。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 面部灰调过渡 (Midtone Transitions)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">颧骨、眼窝、鼻侧的过渡面采用 HB 或 2B 铅笔进行细密排线，利用笔尖的轻重变化刻画微弱的明暗交界线，避免生硬的线条破坏皮肤的圆润感。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">3. 视觉中心锚定 (Focal Point Anchoring)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">采用极尖锐的硬炭或 4B 铅笔，强烈刻画瞳孔深处、鼻底、唇裂线等最高对比度区域，提升人物神态的视觉清晰度与聚焦感。</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-gray-100 p-4 rounded-sm border border-art-stone/5 shadow-sm order-1 lg:order-2">
              {/* 请将 src 替换为您上传的人像图片路径，例如 /images/portrait.jpg */}
              <img 
                src="/uploads/1773039789530-_____20260309144318.jpg" 
                alt="人物骨骼肌肉与毛发质感 - 炭笔人像" 
                className="w-full h-auto object-contain rounded-sm mix-blend-multiply"
                style={{ maxHeight: '700px' }}
              />
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}