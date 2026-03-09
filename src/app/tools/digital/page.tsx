import Link from "next/link";

export const metadata = {
  title: "数位板绘生态与实战案例 - ART.SHARE",
  description: "数位屏测评、Ps/Procreate 核心绘图软件的笔刷配置、图层逻辑与数字绘画工作流解析。",
};

export default function DigitalPaintingPage() {
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
              Digital Painting Workflow
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              数位板绘生态<br />
              <span className="text-art-ochre italic font-light">硬核设备与高效创作流</span>
            </h1>
            <p className="text-art-stone text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              跳出传统媒介的物理限制。深度解析数位板压感映射、自定义笔刷引擎以及图层混合模式，用数字技术重新定义视觉创作的边界。
            </p>
          </div>
        </div>
      </header>

      {/* 第一部分：核心硬件与软件矩阵 */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-3xl font-bold">硬件与软件矩阵</h2>
          <div className="h-[1px] flex-1 bg-art-stone/10"></div>
          <span className="text-xs text-art-stone/50 font-mono tracking-widest uppercase">Hardware & Software</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 硬件载体 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">devices</span>
            <h3 className="font-serif text-xl font-bold mb-3">输入设备 (Hardware)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">数位板/屏:</strong> 核心参数为压感级别 (8192级为主流) 与读取速率。手眼分离是数位板的首要门槛。</li>
              <li><strong className="text-art-ink font-medium">移动端 (iPad):</strong> 配合 Apple Pencil 提供极低的延迟与便携性，改变了现代插画师的起稿习惯。</li>
            </ul>
          </div>

          {/* 软件生态 */}
          <div className="bg-art-charcoal text-white p-8 border border-art-charcoal rounded-sm shadow-sm">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">design_services</span>
            <h3 className="font-serif text-xl font-bold mb-3">核心软件 (Software)</h3>
            <ul className="space-y-3 text-sm text-white/70 font-light leading-relaxed">
              <li><strong className="text-white font-medium">Photoshop:</strong> 工业标准，拥有最强大的图像处理、调色滤镜与无上限的图层管理能力。</li>
              <li><strong className="text-white font-medium">CSP / Procreate:</strong> 前者拥有无敌的矢量线稿防抖引擎；后者专为移动端触控逻辑优化，手势操作极其流畅。</li>
            </ul>
          </div>

          {/* 笔刷引擎 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">brush</span>
            <h3 className="font-serif text-xl font-bold mb-3">笔刷引擎 (Brush Engine)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">参数映射:</strong> 将“落笔力度”映射为画笔的“大小”、“不透明度”或“流量”，模拟真实画材的滞水感与阻力。</li>
              <li><strong className="text-art-ink font-medium">纹理叠加:</strong> 通过导入纸张或杂色纹理，消除数码绘画常见的“塑料感”。</li>
            </ul>
          </div>

          {/* 图层逻辑 */}
          <div className="bg-white p-8 border border-art-stone/10 rounded-sm shadow-sm hover:border-art-ochre/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-art-ochre mb-4">layers</span>
            <h3 className="font-serif text-xl font-bold mb-3">图层逻辑 (Layer Logic)</h3>
            <ul className="space-y-3 text-sm text-art-stone font-light leading-relaxed">
              <li><strong className="text-art-ink font-medium">非破坏性编辑:</strong> 通过剪贴蒙版 (Clipping Mask) 限制上色范围，不破坏底稿轮廓。</li>
              <li><strong className="text-art-ink font-medium">混合模式:</strong> “正片叠底”用于统一暗部色调，“颜色减淡/发光”用于制作极其耀眼的魔法或环境光效。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 第二部分：实战案例解析 */}
      <section>
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl font-bold">数字工作流与实战案例</h2>
          <div className="h-[1px] flex-1 bg-art-stone/10"></div>
          <span className="text-xs text-art-stone/50 font-mono tracking-widest uppercase">Workflow & Case Studies</span>
        </div>

        <div className="space-y-24">
          
          {/* 案例 A: 线稿控制 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-white p-4 rounded-sm border border-art-stone/5 shadow-sm">
              <img 
                src="/uploads/1773040364175-_____20260309151229.jpg" 
                alt="矢量与位图结合的线稿控制" 
                className="w-full h-auto object-contain rounded-sm"
                style={{ maxHeight: '700px' }}
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Phase 1 / Base</span>
              <h3 className="font-serif text-3xl font-bold mb-6">矢量防抖与高精度线稿 <span className="block text-xl text-art-stone font-light mt-2">Precision Line Art & Stroke Control</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：洛丽塔服饰细节、人物毛发与生物鳞片结构。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 压感映射与线条呼吸感</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">数字化线稿极易显得死板。通过调整笔刷的压感曲线，使得落笔重时线条加粗、收笔轻时线条锐利如针，完美勾勒出人物发丝的飘逸与衣物褶皱的张力。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 局部放大与闭合控制</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">依靠数字软件 400% 以上的无损放大功能，处理蕾丝花边与鹿角纹理等极端细节。保证线条端点的绝对闭合，为后续的油漆桶（魔棒工具）一键铺底色打下完美基础。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-art-stone/10"></div>

          {/* 案例 B: 材质模拟与水墨风格化 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Phase 2 / Texture</span>
              <h3 className="font-serif text-3xl font-bold mb-6">混合笔刷与水墨风格化渲染 <span className="block text-xl text-art-stone font-light mt-2">Stylized Ink-Wash Rendering</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：人物肌肤质感与背景的国风山水墨迹融合。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. 自定义纹理笔刷 (Custom Brushes)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">放弃常规的圆形硬边缘笔刷。背景的山水与云雾大量使用了带有“宣纸枯笔”与“水渍边缘”形状的自定义笔刷，利用数位板的倾斜感应（Tilt）模拟真实毛笔的侧锋皴擦。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. 涂抹工具与干湿交替 (Smudge Tool)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">人物皮肤采用软笔刷进行平滑过渡，而头发与背景交界处则使用了带有噪点的涂抹工具，将清晰的边缘“破坏”并融入水墨背景，实现了赛璐璐人物与国风写意背景的完美结合。</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-gray-100 p-4 rounded-sm border border-art-stone/5 shadow-sm order-1 lg:order-2">
              <img 
                src="/uploads/1773040361654-_____20260309151224.png" 
                alt="混合笔刷与水墨风格化渲染" 
                className="w-full h-auto object-contain rounded-sm"
                style={{ maxHeight: '700px' }}
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-art-stone/10"></div>

          {/* 案例 C: 光影与特效 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-art-charcoal p-4 rounded-sm border border-art-stone/5 shadow-sm">
              <img 
                src="/uploads/1773040358482-_____20260309151219.png" 
                alt="强光影与特效图层应用" 
                className="w-full h-auto object-contain rounded-sm"
                style={{ maxHeight: '700px' }}
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-art-ochre font-bold tracking-widest uppercase text-xs mb-3 border-b border-art-ochre/30 pb-2 inline-block w-max">Phase 3 / VFX</span>
              <h3 className="font-serif text-3xl font-bold mb-6">强光影与特效图层应用 <span className="block text-xl text-art-stone font-light mt-2">Lighting & VFX Layers</span></h3>
              <p className="text-art-stone mb-6 font-light">分析对象：龙的暗部环境光、角色受光面及掌心幽绿色魔法球。</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">1. “正片叠底”统一暗部 (Multiply Mode)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">在完成固有色（Local Color）绘制后，新建“正片叠底”图层并填充深蓝紫色，瞬间将整体环境压暗。利用橡皮擦或图层蒙版擦出亮部，快速建立夜间环境的明暗大基调。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">2. “颜色减淡/发光”制作光源 (Color Dodge)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">掌心的绿色魔法能量是数码绘画的视觉核心优势。在光源中心新建图层，模式改为“线性减淡（添加）”或“发光”，选用高饱和绿色配合柔边画笔轻点，即可获得刺眼的高光辐射效果。</p>
                </div>
                <div className="border-l-2 border-art-stone/20 pl-5">
                  <h4 className="font-bold text-art-ink mb-1">3. 环境光反射 (Ambient Occlusion & Bounce Light)</h4>
                  <p className="text-sm text-art-stone font-light leading-relaxed">幽绿色的主光源会反射到角色的脸颊、手臂边缘以及身后巨龙的鳞片上。通过锁定透明像素，在边缘扫入绿色反光，增强了角色与魔法道具、巨龙之间的空间互动感。</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}