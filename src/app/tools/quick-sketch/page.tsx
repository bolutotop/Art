import Link from "next/link";

export const metadata = {
  title: "速写与线稿实战案例 - ART.SHARE",
  description: "针管笔、钢笔与铅笔的动态捕捉与精准线条表达，从起草到精细白描的工具解析。",
};

export default function QuickSketchPage() {
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
              Quick Sketching & Line Art
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              速写与线稿<br />
              <span className="text-art-ochre italic font-light">动态捕捉与线条的艺术</span>
            </h1>
            <p className="text-art-stone text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              剥离色彩的干扰，纯粹以线条的粗细、疏密与穿插来构建空间与体积。从快速的动态速写到极其严谨的白描线稿，掌握线条的绝对控制力。
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
          {/* 针管笔 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">draw</span>
            <h3 className="font-serif text-xl font-bold mb-3">针管笔 (Fineliners)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">物理特性:</strong> 墨水均匀，线条粗细绝对恒定（如 0.05mm 到 1.0mm）。防水速干。</li>
              <li><strong className="text-art-ink font-medium">适用技法:</strong> 适合绝对理性的排线 (Hatching)、点画法以及不受力度影响的建筑与精密轮廓勾勒。</li>
            </ul>
          </div>

          {/* 钢笔/美工笔 */}
          <div className="bg-art-charcoal text-white p-8 border border-art-charcoal rounded-sm shadow-sm">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">ink_pen</span>
            <h3 className="font-serif text-xl font-bold mb-3">钢笔/美工笔 (Fountain Pen)</h3>
            <ul className="space-y-3 text-sm text-white/70 font-light leading-relaxed">
              <li><strong className="text-white font-medium">物理特性:</strong> 弹性笔尖，对按压力度极其敏感。美工笔弯折的笔尖可根据切入角度拉出极宽的面。</li>
              <li><strong className="text-white font-medium">适用技法:</strong> 极具表现力与呼吸感的线条，适合速写中快速交代形体转折与衣褶的顿挫。</li>
            </ul>
          </div>

          {/* 软铅/自动铅笔 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">edit</span>
            <h3 className="font-serif text-xl font-bold mb-3">速写铅笔 (Sketch Pencils)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">物理特性:</strong> 自动铅笔 (0.3/0.5mm) 保证线条不衰减；软心铅笔 (4B/6B) 提供粗犷的边缘。</li>
              <li><strong className="text-art-ink font-medium">适用技法:</strong> 捕捉瞬间动态 (Gesture Drawing)，允许犯错与修改，通过侧锋快速交代体块阴影。</li>
            </ul>
          </div>

          {/* 纸张与墨水 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">note</span>
            <h3 className="font-serif text-xl font-bold mb-3">纸张与墨水 (Paper & Ink)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">纸张要求:</strong> 线稿必须使用平滑纸 (Smooth/Hot-pressed)，避免墨水在粗糙纤维中洇开 (Bleeding)。</li>
              <li><strong className="text-art-ink font-medium">墨水选择:</strong> 碳素墨水黑度极高但易堵笔；染料墨水流畅但干后遇水易化，需根据后续是否叠加上色决定。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 第二部分：实战案例解析 */}
      <section>
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl font-bold">线稿控制与动态捕捉案例</h2>
          <div className="h-[1px] flex-1 bg-art-stone/10"></div>
          <span className="text-xs text-art-stone/50 font-mono tracking-widest uppercase">Case Studies</span>
        </div>

        <div className="space-y-24">
          
          {/* 案例 A: 复杂元素的疏密组织 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-gray-100 p-4 rounded-sm border border-art-stone/5 shadow-sm">
              <img 
                src="/uploads/1773040670813-_____20260309151733.jpg" 
                alt="复杂元素的疏密组织与白描技法" 
                className="w-full h-auto object-contain rounded-sm mix-blend-multiply"
                style={{ maxHeight: '700px' }}
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Case A</span>
              <h3 className="font-serif text-3xl font-bold mb-6">复杂元素的疏密组织 <span className="block text-xl text-art-stone font-light mt-2">Line Density & Visual Rhythm</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：精细白描（持琵琶人物、植物与背景建筑屏风）。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 疏密对比建立视觉中心</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">画面摒弃了明暗，完全通过线条的疏密（Density）来引导视线。人物面部与披帛采用极简的“疏”线，而背景的琵琶、繁花与头饰则进行了极其细致的“密”线刻画，利用对比将人物主体反衬出来。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 线条的穿插与叠压</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">处理复杂的衣纹与植物时，线条的交接必须有明确的前后关系。通过加深线条交叉处（Occlusion Shadows in Line Art），强化了裙摆层次和背景植物的空间深度。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-art-stone/10"></div>

          {/* 案例 B: 形体概括与动态捕捉 (左右交错排版) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Case B</span>
              <h3 className="font-serif text-3xl font-bold mb-6">形体概括与动态捕捉 <span className="block text-xl text-art-stone font-light mt-2">Form Simplification & Gesture Capture</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：松弛感速写（旗袍女性与百合花瓶）。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 轮廓线的提炼与舍弃</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">速写的灵魂在于“概括”。作者省略了繁琐的光影细节，用极其流畅、肯定的外轮廓线（Contour Lines）直接交代了旗袍贴合身体的曼妙曲线与放松的坐姿，呈现出极强的高级感。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 刚柔并济的笔触感</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">人物皮肤与衣料的线条圆润连贯，而旁边桌子的边缘与花瓶的结构线则方直挺拔。通过“刚与柔”、“直与曲”的线条质感对比，在纯线稿中成功暗示了材质的差异。</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-white p-4 rounded-sm border border-art-stone/5 shadow-sm order-1 lg:order-2">
              <img 
                src="/uploads/1773040673934-_____20260309151739.jpg" 
                alt="形体概括与动态捕捉速写" 
                className="w-full h-auto object-contain rounded-sm mix-blend-multiply"
                style={{ maxHeight: '700px' }}
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-art-stone/10"></div>

          {/* 案例 C: 场景叙事与质感表达 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-white p-4 rounded-sm border border-art-stone/5 shadow-sm">
              <img 
                src="/uploads/1773040677493-_____20260309151745.jpg" 
                alt="场景叙事与质感表达" 
                className="w-full h-auto object-contain rounded-sm mix-blend-multiply"
                style={{ maxHeight: '700px' }}
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Case C</span>
              <h3 className="font-serif text-3xl font-bold mb-6">场景叙事与质感表达 <span className="block text-xl text-art-stone font-light mt-2">Scene Narrative & Texture Indication</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：多人物互动场景（刺绣女子、藤蔓与阔叶植物）。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 利用线条塑造空间层级</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">在多人物复杂的场景中，前方的阔叶植物线条粗壮肯定，人物主体的轮廓清晰闭合，而后方陪衬的树叶则用较细的笔触勾勒。仅仅通过线条粗细（Line Weight）的变化，便拉开了画面的近、中、远景。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 纹理的符号化表达</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">观察桌下的木质藤蔓与地上的竹编篮子，作者没有盲目涂黑，而是提取了材质的纹理特征，将其转化为规律排列的几何短线，高效且极具美感地完成了质感的交代。</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}