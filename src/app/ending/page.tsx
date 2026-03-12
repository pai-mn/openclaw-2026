"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function Ending() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : ''}`}>
          <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-start gap-4">
            <div className="flex items-center gap-2">
              <Link 
                href="/"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
              >
                <span className="text-sm font-medium">{t('common.home')}</span>
              </Link>
              <Link 
                href="/ai-agent-and-us"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
              >
                <ArrowLeft width="18" height="18" />
                <span className="text-sm font-medium">{t('common.prev')}</span>
              </Link>
            </div>
            <div className="ml-auto">
              <LanguageSwitcher />
            </div>
          </div>
      </div>

      <div className="min-h-screen bg-[#fff9f5] wave-bg">
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20">
          <div className={`text-center mb-12 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
              <span className="text-5xl animate-float">🦞</span>
            </div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#9775fa]/10 text-[#9775fa] text-sm font-medium mb-4">
              05
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-black">
              {t('ending.title')}
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-[#636e72] max-w-xl mx-auto">
              {t('ending.subtitle')}
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
