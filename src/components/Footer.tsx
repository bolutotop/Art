import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-art-charcoal text-white/80 py-16 px-6 lg:px-16 border-t border-art-stone/10 mt-auto">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block font-serif text-2xl font-bold text-white mb-6">
              美术工具共享平台.
            </Link>
            <p className="max-w-md text-white/50 font-light">
              致力于为所有艺术爱好者提供最全面、最客观的工具指南与创作灵感。连接创作者与工具的桥梁。
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif mb-4">探索</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-art-ochre transition-colors">最新教程</Link></li>
              <li><Link href="#" className="hover:text-art-ochre transition-colors">热门工具</Link></li>
              <li><Link href="#" className="hover:text-art-ochre transition-colors">社区精选</Link></li>
              <li><Link href="#" className="hover:text-art-ochre transition-colors">活动日历</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif mb-4">关于</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-art-ochre transition-colors">关于我们</Link></li>
              <li><Link href="#" className="hover:text-art-ochre transition-colors">联系方式</Link></li>
              <li><Link href="#" className="hover:text-art-ochre transition-colors">加入我们</Link></li>
              <li><Link href="#" className="hover:text-art-ochre transition-colors">隐私政策</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} 美术工具共享平台. 保留所有权利.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">WeChat</Link>
            <Link href="#" className="hover:text-white transition-colors">Bilibili</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}