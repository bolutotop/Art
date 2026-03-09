import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-art-charcoal text-white/80 py-10 lg:py-16 px-6 lg:px-16 border-t border-art-stone/10 mt-auto">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 lg:gap-12 mb-10 lg:mb-16">
          
          {/* 品牌与简介区 */}
          <div className="col-span-2">
            <Link href="/" className="inline-block font-serif text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-6 tracking-tight">
              ART.SHARE
            </Link>
            <p className="max-w-md text-white/50 font-light text-sm leading-relaxed">
              致力于为所有艺术爱好者提供最全面、最客观的工具指南与创作灵感。<br className="hidden sm:block" />
              连接创作者与工具的桥梁。
            </p>
          </div>
          
          {/* 平台探索区 */}
          <div className="col-span-1">
            <h4 className="text-white font-serif mb-4 lg:mb-6 text-xs lg:text-sm uppercase tracking-widest">探索</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm text-white/60">
              <li><Link href="/" className="hover:text-art-ochre transition-colors">首页</Link></li>
              <li><Link href="/tools" className="hover:text-art-ochre transition-colors">工具大全</Link></li>
              <li><Link href="/gallery" className="hover:text-art-ochre transition-colors">作品共享</Link></li>
            </ul>
          </div>
          
          {/* 关于区 */}
          <div className="col-span-1">
            <h4 className="text-white font-serif mb-4 lg:mb-6 text-xs lg:text-sm uppercase tracking-widest">关于</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-art-ochre transition-colors">关于我们</Link></li>
            </ul>
          </div>
        </div>
        
        {/* 版权区：社交媒体已移除，版权信息居中对齐 */}
        <div className="flex justify-center items-center pt-6 lg:pt-8 border-t border-white/10 text-xs text-white/40 font-light">
          <div className="text-center">
            © {new Date().getFullYear()} ART.SHARE. 保留所有权利.
          </div>
        </div>
      </div>
    </footer>
  );
}