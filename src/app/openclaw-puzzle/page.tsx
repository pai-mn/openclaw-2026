"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n";
import NavigationBar from "@/app/components/NavigationBar";
import OriginEra from "@/app/components/puzzle/OriginEra";
import TimelineEvent from "@/app/components/puzzle/TimelineEvent";
import PuzzleFormula from "@/app/components/puzzle/PuzzleFormula";
import IssueCard from "@/app/components/puzzle/IssueCard";

export default function OpenclawPuzzle() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const timelineEvents = [
    { date: "2012", key: "alexnet", color: "#ec4899" },
    { date: "2016.03", key: "alphago", color: "#9333ea" },
    { date: "2017.06", key: "transformer", color: "#3b82f6" },
    { date: "2020", key: "alphafold", color: "#8b5cf6" },
    { date: "2022.11.30", key: "chatgpt", color: "#22c55e" },
    { date: "2024.11.25", key: "mcp", color: "#f97316" },
    { date: "2025.01", key: "deepseek", color: "#ef4444" },
    { date: "2025.05.23", key: "sonnet4", color: "#ff6b6b" },
    { date: "2025.09.30", key: "sonnet45", color: "#ffa502" },
    { date: "2025.10.16", key: "agent", color: "#ff6b6b" },
    { date: "2025.11.24", key: "openclaw", color: "#06b6d4" },
  ].map(event => ({
    ...event,
    title: t(`puzzle.timelineTitle.${event.key}`)
  }));

  const originErasData = [
    { date: "1950s", color: "#f59e0b" },
    { date: "1970s-80s", color: "#ef4444" },
    { date: "1990s-2000s", color: "#3b82f6" },
    { date: "2010s", color: "#9333ea" },
    { date: "2020s", color: "#14b8a6" },
  ];

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
      <NavigationBar scrolled={scrolled} nextPage="/openclaw-capabilities" />

      <div className="min-h-screen bg-[#fff9f5] wave-bg">
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20">
          <div className={`text-center mb-12 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
              <span className="text-5xl animate-float">🦞</span>
            </div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm font-medium mb-4">
              01
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-black">
              {t('puzzle.title')}
            </h1>
            <p className="text-xl text-[#636e72] max-w-xl mx-auto">
              {t('puzzle.subtitle')}
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d3436] mb-8 text-center">
              {t('puzzle.origin.title')}
            </h2>

            <div className="relative">
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] via-[#ef4444] to-[#14b8a6] rounded-full" />
                
                <div className="flex justify-between items-start pt-20">
                  {originErasData.map((eraData, index) => (
                    <OriginEra 
                      key={index}
                      eraData={eraData}
                      era={t(`puzzle.origin.eras.${index}`)}
                    />
                  ))}
                </div>
            </div>

            <p className="text-lg text-[#ff6b6b] font-medium text-center mt-16 mb-16">
              {t('puzzle.origin.quote')}
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <div className="border-t-2 border-dashed border-[#e8e8ef] mb-16" />
          </div>

          <div className={`w-full max-w-4xl ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <p className="text-center text-[#ff6b6b] font-medium mb-4">{t('puzzle.timelineIntro')}</p>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff6b6b] via-[#ffa502] to-[#06b6d4] -translate-x-1/2" />
              
              <div className="space-y-1">
                {timelineEvents.map((event, index) => (
                  <TimelineEvent
                    key={index}
                    event={event}
                    index={index}
                    shortDesc={t(`puzzle.timelineDesc.${event.key}`)}
                    fullDesc={t(`puzzle.events.${event.key}`)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mt-16">
            <div className="border-t-2 border-dashed border-[#e8e8ef] mb-16" />
          </div>

          <div className="w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d3436] mb-8 text-center">
              {t('puzzle.agent.title')}
            </h2>
            <p className="text-[#636e72] leading-relaxed mb-12 text-lg text-center">
              {t('puzzle.agent.intro')}
            </p>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#2d3436] text-center mb-8">
                {t('puzzle.agent.openclaw.title')}
              </h3>

              <PuzzleFormula 
                pieces={t('puzzle.agent.openclaw.pieces') as any[]}
                result={t('puzzle.agent.openclaw.result')}
              />
            </div>
          </div>

          <div className="w-full max-w-4xl mt-16">
            <div className="border-t-2 border-dashed border-[#e8e8ef] mb-16" />
          </div>

          <div className={`w-full max-w-4xl ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d3436] mb-6 text-center">
              {t('puzzle.agent.reality.title')}
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-[#636e72] leading-relaxed">
                {t('puzzle.agent.reality.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(t('puzzle.agent.reality.issues') as any[]).map((issue: any, index: number) => (
                <IssueCard key={index} issue={issue} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
