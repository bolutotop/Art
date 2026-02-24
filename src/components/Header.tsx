"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 当路由切换时，自动关闭移动端菜单
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "首页", href: "/" },
    { name: "工具大全", href: "/tools" },
    { name: "作品共享", href: "/gallery" },
    { name: "关于我们", href: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm bg-art-paper/90 border-b border-art-stone/10">
      <div className="flex items-center justify-between px-6 py-5 lg:px-16 max-w-[1800px] mx-auto">
        
        {/* Logo 区域 */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-art-ink text-art-white flex items-center justify-center rounded-sm">
              <span className="font-serif font-bold text-lg italic">A</span>
            </div>
            <span className="text-art-ink text-xl font-serif font-bold tracking-tight group-hover:opacity-70 transition-opacity">
              ART.SHARE
            </span>
          </Link>
          
          {/* 桌面端导航菜单 (lg及以上屏幕显示) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all pb-1 border-b ${
                    isActive
                      ? "text-art-ink font-bold border-art-ink" 
                      : "text-art-stone font-medium border-transparent hover:text-art-ink hover:border-art-stone/30" 
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 移动端汉堡包菜单按钮 (lg以下屏幕显示) */}
        <button 
          className="lg:hidden text-art-ink flex items-center justify-center p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* 移动端下拉菜单面板 */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-art-paper/95 backdrop-blur-md border-b border-art-stone/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3 text-base tracking-wide transition-all border-b ${
                  isActive
                    ? "text-art-ink font-bold border-art-ink/30" 
                    : "text-art-stone font-medium border-art-stone/10 hover:text-art-ink" 
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}