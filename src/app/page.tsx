"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

const menuItems = [
  { id: 1, titleKey: "puzzle.title", href: "/openclaw-puzzle", color: "from-[#ff6b6b] to-[#ffa502]" },
  { id: 2, titleKey: "capabilities.title", href: "/openclaw-capabilities", color: "from-[#ffa502] to-[#20bf6b]" },
  { id: 3, titleKey: "principle.title", href: "/openclaw-principle", color: "from-[#20bf6b] to-[#4dabf7]" },
  { id: 4, titleKey: "ai-agent-and-us.title", href: "/ai-agent-and-us", color: "from-[#4dabf7] to-[#9775fa]" },
  { id: 5, titleKey: "ending.title", href: "/ending", color: "from-[#9775fa] to-[#ff6b6b]" },
];

export default function Home() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <LanguageSwitcher />
      <div className="min-h-screen bg-[#fff9f5] wave-bg overflow-hidden">
        <div className="fixed inset-0 dotted-bg opacity-30 pointer-events-none" />
        
        <div className="fixed top-20 left-10 w-4 h-4 rounded-full bg-[#ff6b6b]/20 animate-float" />
        <div className="fixed top-40 right-20 w-6 h-6 rounded-full bg-[#ffa502]/20 animate-float delay-200" style={{ animationDelay: '1s' }} />
        <div className="fixed bottom-40 left-1/4 w-3 h-3 rounded-full bg-[#20bf6b]/20 animate-float delay-300" style={{ animationDelay: '2s' }} />
        <div className="fixed bottom-20 right-1/3 w-5 h-5 rounded-full bg-[#4dabf7]/20 animate-float delay-400" style={{ animationDelay: '0.5s' }} />

        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-20">
          <div className={`text-center mb-16 ${mounted ? 'animate-bounce-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-28 h-28 mb-8">
              <span className="text-7xl animate-float">🦞</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              <span className="text-[#ff6b6b]">OpenClaw</span> 2026
            </h1>
            
            <p className="text-xl md:text-2xl text-[#636e72] max-w-xl mx-auto leading-relaxed mb-3">
              {t('home.slogan')}
            </p>
            
            <p className="text-sm text-[#b2bec3] font-medium">
              {t('home.date')}
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <div className="space-y-4">
              {menuItems.map((item, i) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`directory-item flex items-center justify-between p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl ${
                    mounted ? 'animate-fade-up opacity-0' : ''
                  }`}
                  style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                >
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                    </div>
                    <span className="text-xl font-semibold text-black">
                      {t(item.titleKey)}
                    </span>
                  </div>
                  <ArrowRight className="text-[#b2bec3]" width="24" height="24" />
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
