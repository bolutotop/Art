import Link from "next/link";

export default function Footer() {
  // 优化重点：移动端减小上下内边距至 py-10，PC端保持 py-16；网格布局在移动端采用两列并排。
  return (
    <footer className="bg-art-charcoal text-white/80 py-10 lg:py-16 px-6 lg:px-16 border-t border-art-stone/10 mt-auto">
      <div className="max-w-[1800px] mx-auto">
        
        {/* 移动端使用 grid-cols-2，让下方两个链接列表并排显示；间距缩小为 gap-y-10 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 lg:gap-12 mb-10 lg:mb-16">
          
          {/* 品牌与简介区：移动端强制占满 2 列 */}
          <div className="col-span-2">
            <Link href="/" className="inline-block font-serif text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-6 tracking-tight">
              ART.SHARE
            </Link>
            <p className="max-w-md text-white/50 font-light text-sm leading-relaxed">
              致力于为所有艺术爱好者提供最全面、最客观的工具指南与创作灵感。<br className="hidden sm:block" />
              连接创作者与工具的桥梁。
            </p>
          </div>
          
          {/* 平台探索区：移动端占 1 列，与右侧并排 */}
          <div className="col-span-1">
            <h4 className="text-white font-serif mb-4 lg:mb-6 text-xs lg:text-sm uppercase tracking-widest">探索</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm text-white/60">
              <li><Link href="/" className="hover:text-art-ochre transition-colors">首页</Link></li>
              <li><Link href="/tools" className="hover:text-art-ochre transition-colors">工具大全</Link></li>
              <li><Link href="/gallery" className="hover:text-art-ochre transition-colors">作品共享</Link></li>
            </ul>
          </div>
          
          {/* 关于与支持区：移动端占 1 列，与左侧并排 */}
          <div className="col-span-1">
            <h4 className="text-white font-serif mb-4 lg:mb-6 text-xs lg:text-sm uppercase tracking-widest">关于与支持</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-art-ochre transition-colors">关于我们</Link></li>
              <li><Link href="/about" className="hover:text-art-ochre transition-colors">建议反馈</Link></li>
              <li><Link href="#" className="hover:text-art-ochre transition-colors">隐私政策</Link></li>
            </ul>
          </div>
        </div>
        
        {/* 版权与社交媒体区：移动端间距缩小 */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 lg:pt-8 border-t border-white/10 text-xs text-white/40 font-light gap-4 md:gap-0">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} 美术工具大全. 保留所有权利.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">WeChat</Link>
            <Link href="#" className="hover:text-white transition-colors">Bilibili</Link>
            <Link href="#" className="hover:text-white transition-colors">Xiaohongshu</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}