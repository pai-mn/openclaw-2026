import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/background", label: "诞生背景" },
  { href: "/usage", label: "使用方法" },
  { href: "/features", label: "功能作用" },
  { href: "/roadmap", label: "未来展望" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8e8ef]">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-[#1a1a2e]">
            Open<span className="gradient-text">Claw</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-[#4a4a68] hover:text-[#0d5ffc] rounded-lg hover:bg-[#f0f4ff] transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
