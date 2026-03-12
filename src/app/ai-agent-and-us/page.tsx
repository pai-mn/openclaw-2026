"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function OpenclawAndUs() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const topics: { title: string; author: string; year?: string; quote: string; link?: string; tags?: string[] }[] = t('ai-agent-and-us.topics') || [];

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
                href="/openclaw-principle"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
              >
                <ArrowLeft width="18" height="18" />
                <span className="text-sm font-medium">{t('common.prev')}</span>
              </Link>
              <Link 
                href="/ending"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
              >
                <span className="text-sm font-medium">{t('common.next')}</span>
                <ArrowRight width="18" height="18" />
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
            <span className="inline-block px-4 py-1 rounded-full bg-[#4dabf7]/10 text-[#4dabf7] text-sm font-medium mb-4">
              04
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-black">
              {t('ai-agent-and-us.title')}
            </h1>
            <p className="text-xl text-[#636e72] max-w-xl mx-auto">
              {t('ai-agent-and-us.subtitle')}
            </p>
          </div>

          <div className={`w-full max-w-5xl ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="masonry-grid">
              {Array.isArray(topics) && topics.map((topic, index) => {
                const colorSchemes = [
                  { bg: 'bg-slate-50', border: 'border-slate-200', accent: 'text-slate-700' },
                  { bg: 'bg-gray-50', border: 'border-gray-200', accent: 'text-gray-700' },
                  { bg: 'bg-zinc-50', border: 'border-zinc-200', accent: 'text-zinc-700' },
                  { bg: 'bg-stone-50', border: 'border-stone-200', accent: 'text-stone-700' },
                ];
                const colorScheme = colorSchemes[index % colorSchemes.length];
                
                return (
                  <div 
                    key={index} 
                    className={`group masonry-item ${colorScheme.bg} rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 overflow-hidden border ${colorScheme.border} hover:border-opacity-60 break-inside-avoid cursor-pointer`}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`text-lg font-bold ${colorScheme.accent} group-hover:translate-x-0.5 transition-transform duration-300 flex-1 pr-2`}>{topic.title}</h3>
                        {topic.year && (
                          <span className="text-xs px-2 py-1 rounded-full bg-white/80 text-gray-600 font-medium whitespace-nowrap">
                            {topic.year}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-sm text-[#636e72] mb-3 font-medium">
                        {topic.author}
                      </div>
                      
                      <p className="text-[#2d3436] leading-relaxed text-sm mb-3">
                        {topic.quote}
                      </p>
                      
                      {topic.tags && topic.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {topic.tags.map((tag, i) => (
                            <span key={i} className={`text-xs px-2.5 py-1 rounded-md bg-white border ${colorScheme.border} ${colorScheme.accent} font-medium shadow-sm`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {topic.link && (
                        <a 
                          href={topic.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#4dabf7] hover:text-[#3498db] hover:underline transition-colors inline-flex items-center gap-1 font-medium"
                        >
                          {t('common.readOriginal')} →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <style jsx>{`
            .masonry-grid {
              column-count: 2;
              column-gap: 1.5rem;
            }
            
            @media (max-width: 768px) {
              .masonry-grid {
                column-count: 1;
              }
            }
            
            .masonry-item {
              margin-bottom: 1.5rem;
              display: inline-block;
              width: 100%;
            }
          `}</style>
        </main>
      </div>
    </>
  );
}
