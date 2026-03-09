import Link from "next/link";


export const metadata = {
  title: "色彩系统指南与实战案例 - ART.SHARE",
  description: "水粉、水彩、丙烯与油画的材质特性、色彩控制逻辑与实战应用解析。",
};

export default function ColorSystemPage() {
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
              Color Theory & Mediums
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              色彩系统指南<br />
              <span className="text-art-ochre italic font-light">材质特性与控制逻辑</span>
            </h1>
            <p className="text-art-stone text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              从透明水彩的湿画晕染到厚涂媒介的笔触堆叠，打破色彩玄学，以物理特性为基准，建立精准的色彩冷暖与空间透视控制力。
            </p>
          </div>
        </div>
      </header>

      {/* 第一部分：核心媒介矩阵 */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-3xl font-bold">核心媒介矩阵</h2>
          <div className="h-[1px] flex-1 bg-art-stone/10"></div>
          <span className="text-xs text-art-stone/50 font-mono tracking-widest uppercase">Mediums Matrix</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 透明媒介：水彩 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">water_drop</span>
            <h3 className="font-serif text-xl font-bold mb-3">透明水彩 (Watercolor)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">物理特性:</strong> 强透明度，依靠纸张底层白光反射显色。无法通过白色颜料提亮，需采用留白液或控制水分。</li>
              <li><strong className="text-art-ink font-medium">适用技法:</strong> 湿画法 (Wet-on-wet) 创造柔和渐变与晕染；干画法 (Dry brush) 刻画清晰边缘与枯笔肌理。</li>
            </ul>
          </div>

          {/* 不透明水性媒介：水粉/丙烯 */}
          <div className="bg-art-charcoal text-white p-8 border border-art-charcoal rounded-sm shadow-sm">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">format_paint</span>
            <h3 className="font-serif text-xl font-bold mb-3">水粉与丙烯 (Gouache/Acrylic)</h3>
            <ul className="space-y-3 text-sm text-white/70 font-light leading-relaxed">
              <li><strong className="text-white font-medium">物理特性:</strong> 高覆盖力 (Opaque)。丙烯干燥后防水且不可逆转，水粉干燥后可复水但易变灰。</li>
              <li><strong className="text-white font-medium">适用技法:</strong> 由深至浅覆盖，适合明确的色块拼接与厚涂堆叠。利用白色颜料调节明度。</li>
            </ul>
          </div>

          {/* 油性媒介：油画 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">palette</span>
            <h3 className="font-serif text-xl font-bold mb-3">油画颜料 (Oil Paint)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">物理特性:</strong> 干燥极慢（氧化过程），色彩饱和度极高且干燥前后无色差。</li>
              <li><strong className="text-art-ink font-medium">适用技法:</strong> 罩染法 (Glazing) 产生深邃的光学混合效果；直接画法 (Alla Prima) 保留强烈的笔触与肌理感。</li>
            </ul>
          </div>

          {/* 色彩基础理论 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">contrast</span>
            <h3 className="font-serif text-xl font-bold mb-3">色彩控制基准 (Color Theory)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">色温 (Temperature):</strong> 明确亮部与暗部的冷暖对立。光源暖则暗部冷，反之亦然。</li>
              <li><strong className="text-art-ink font-medium">纯度衰减 (Chroma Loss):</strong> 距离越远、光线越弱，色彩纯度越低（向灰色靠拢）。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 第二部分：实战案例解析 */}
      <section>
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl font-bold">媒介表现与色彩应用案例</h2>
          <div className="h-[1px] flex-1 bg-art-stone/10"></div>
          <span className="text-xs text-art-stone/50 font-mono tracking-widest uppercase">Case Studies</span>
        </div>

        <div className="space-y-24">
          
          {/* 案例 A: 不透明媒介的厚涂与色温 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-gray-100 p-4 rounded-sm border border-art-stone/5 shadow-sm">
              {/* 请将 src 替换为您上传的静物图片路径 */}
              <img 
                src="/uploads/1773040078320-_____20260309150657.jpg" 
                alt="不透明媒介的厚涂与色温 - 水粉/丙烯静物" 
                className="w-full h-auto object-contain rounded-sm mix-blend-multiply"
                style={{ maxHeight: '700px' }}
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Case A</span>
              <h3 className="font-serif text-3xl font-bold mb-6">不透明媒介的色彩塑造与笔触 <span className="block text-xl text-art-stone font-light mt-2">Opaque Mediums: Color Modeling & Brushwork</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：厚涂静物（高饱和水果、金属底座与环境色）。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 冷暖色温对立 (Color Temperature)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">水果受光面采用极高纯度的暖色（橘黄、大红），而暗部与投影果断介入冷色（紫灰色、冷绿），通过强烈的冷暖对比提升画面的体积感与光感，而非单纯依赖黑白明度。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 笔触与形体归纳 (Expressive Brushwork)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">利用不透明媒介的高覆盖力，摒弃琐碎细节。金属底座与花盆的亮部直接使用厚重、肯定的笔触进行覆盖（Impasto），块面分明，体现出干脆利落的造型能力。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">3. 环境色互渗 (Ambient Color)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">背景的粉紫色调并非孤立存在，而是作为环境色巧妙地折射在金属高脚盘的反光处以及暗部边缘，使整个画面色调和谐统一。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-art-stone/10"></div>

          {/* 案例 B: 透明水彩的意境与空气透视 (左右交错排版) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Case B</span>
              <h3 className="font-serif text-3xl font-bold mb-6">透明水彩的意境与空气透视 <span className="block text-xl text-art-stone font-light mt-2">Transparent Watercolor: Atmosphere & Aerial Perspective</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：水彩山水风景（云雾、山体层次与水墨意境）。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 空气透视规律 (Aerial Perspective)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">利用水彩的稀释特性，完美诠释“近实远虚”。近处山体色彩饱和度高、冷暖对比明确（深蓝绿）；远山则大量加水，色彩纯度极低，向背景的暖灰色融合，推开深远的空间距离。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 湿画晕染与自然水痕 (Wet-on-Wet & Washes)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">在刻画云雾时，采用底纸预湿的“湿画法”。颜料在水的作用下自由扩散，形成山体底部的柔和虚化；水痕的自然沉淀产生了不可复制的肌理，营造出中国画般的空灵意境。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">3. 纸白即高光 (Preserving the White)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">水彩没有绝对的“白色颜料”。画面中的瀑布、亭台高光及留白云雾，完全依赖在作画前精准预判并保留底纸的原始白色。这要求极高的全局规划能力。</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-gray-100 p-4 rounded-sm border border-art-stone/5 shadow-sm order-1 lg:order-2">
              {/* 请将 src 替换为您上传的水彩图片路径 */}
              <img 
                src="/uploads/1773040075602-_____20260309150649.jpg" 
                alt="透明水彩的意境与空气透视 - 山水风景" 
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