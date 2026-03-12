"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function OpenclawPrinciple() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = t('principle.sections');

  return (
    <>
      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setPreviewImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={previewImage}
              alt={t('common.preview')}
              width={1600}
              height={1200}
              className="max-w-full max-h-full w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

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
              href="/openclaw-capabilities"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
            >
              <ArrowLeft width="18" height="18" />
              <span className="text-sm font-medium">{t('common.prev')}</span>
            </Link>
            <Link 
              href="/ai-agent-and-us"
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
            <span className="inline-block px-4 py-1 rounded-full bg-[#20bf6b]/10 text-[#20bf6b] text-sm font-medium mb-4">
              03
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-black">
              {t('principle.title')}
            </h1>
            <p className="text-xl text-[#636e72] max-w-xl mx-auto">
              {t('principle.subtitle')}
            </p>
          </div>

          <div className={`w-full max-w-4xl ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              {Array.isArray(sections) && sections.map((section: { title: string; desc: string; color: string; components?: { label: string; items: { name: string; desc: string }[] } }, index: number) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="flex items-start p-6 gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: section.color }}>
                        <div className="w-7 h-7 rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: section.color }} />
                        <h3 className="text-xl font-bold text-black">{section.title}</h3>
                      </div>
                      <p className="text-[#636e72] leading-relaxed pl-6">
                        {section.desc}
                      </p>
                      {section.components && (
                        <div className="mt-4 pl-6">
                          <p className="font-semibold text-black mb-3">{section.components.label}</p>
                          <ul className="space-y-2">
                            {section.components.items.map((component, idx) => (
                              <li key={idx} className="flex items-start gap-3 group">
                                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 transition-all" style={{ backgroundColor: section.color }} />
                                <div className="flex-1">
                                  <span className="font-bold text-black">{component.name}</span>
                                  <span className="text-gray-600"> — {component.desc}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {index === 0 && (
                        <div className="mt-6 pl-6 space-y-6">
                          {/* 核心设计哲学 */}
                          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                            <div className="mb-4">
                              <h4 className="text-xl font-bold text-black">{t('principle.architecture.philosophy.title')}</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {t('principle.architecture.philosophy.intro')}
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div className="bg-white/80 backdrop-blur p-4 rounded-lg border border-emerald-300">
                                <div className="font-bold text-emerald-700 mb-2">
                                  {t('principle.architecture.philosophy.bash.title')}
                                </div>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• {t('principle.architecture.philosophy.bash.composability')}</li>
                                  <li>• {t('principle.architecture.philosophy.bash.discoverability')}</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white/80 backdrop-blur p-4 rounded-lg border border-emerald-300">
                                <div className="font-bold text-emerald-700 mb-2">
                                  {t('principle.architecture.philosophy.filesystem.title')}
                                </div>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• {t('principle.architecture.philosophy.filesystem.context')}</li>
                                  <li>• {t('principle.architecture.philosophy.filesystem.persistence')}</li>
                                </ul>
                              </div>
                            </div>

                            <div className="bg-white/60 backdrop-blur p-4 rounded-lg border border-emerald-200">
                              <p className="text-sm text-gray-600 italic">
                                "{t('principle.architecture.philosophy.quote')}"
                                <span className="font-semibold text-emerald-700"> — {t('principle.architecture.philosophy.author')}</span>
                              </p>
                            </div>
                          </div>

                          {/* 范式对比 */}
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                            <h4 className="text-lg font-bold text-black mb-4">{t('principle.architecture.paradigm.title')}</h4>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b-2 border-blue-300">
                                    <th className="text-left p-3 font-bold text-black">{t('principle.architecture.paradigm.tableHeaders.dimension')}</th>
                                    <th className="text-left p-3 font-bold text-black">{t('principle.architecture.paradigm.tableHeaders.traditional')}</th>
                                    <th className="text-left p-3 font-bold text-blue-700">{t('principle.architecture.paradigm.tableHeaders.new')}</th>
                                  </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                  <tr className="border-b border-blue-200 bg-white/50">
                                    <td className="p-3 font-semibold">{t('principle.architecture.paradigm.dimensions.flexibility')}</td>
                                    <td className="p-3">{t('principle.architecture.paradigm.traditional.flexibility')}</td>
                                    <td className="p-3 text-blue-700 font-semibold">{t('principle.architecture.paradigm.newParadigm.flexibility')}</td>
                                  </tr>
                                  <tr className="border-b border-blue-200">
                                    <td className="p-3 font-semibold">{t('principle.architecture.paradigm.dimensions.security')}</td>
                                    <td className="p-3">{t('principle.architecture.paradigm.traditional.security')}</td>
                                    <td className="p-3 text-blue-700 font-semibold">{t('principle.architecture.paradigm.newParadigm.security')}</td>
                                  </tr>
                                  <tr className="bg-white/50">
                                    <td className="p-3 font-semibold">{t('principle.architecture.paradigm.dimensions.efficiency')}</td>
                                    <td className="p-3">{t('principle.architecture.paradigm.traditional.efficiency')}</td>
                                    <td className="p-3 text-blue-700 font-semibold">{t('principle.architecture.paradigm.newParadigm.efficiency')}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* 系统架构图 */}
                          <div>
                            <h4 className="text-lg font-bold text-black mb-3">{t('principle.architecture.diagram')}</h4>
                            <div 
                              className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewImage('/openclaw-arch.jpg');
                              }}
                            >
                              <Image
                                src="/openclaw-arch.jpg"
                                alt="OpenClaw System Architecture"
                                fill
                                className="object-contain"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="mt-6 pl-6 space-y-6">
                          {/* 伪代码示例 */}
                          <div>
                            <h4 className="text-lg font-bold text-black mb-3">{t('principle.agentLoop.pseudocode')}</h4>
                            <pre className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 p-6 rounded-lg overflow-x-auto text-base leading-relaxed border border-gray-200">
                              <code>{`while (true) {
  const response = await llm.think(context)
  const tool = response.chooseTool()

  if (tool) {
    const result = await tool.execute()
    context.append(result)
  }

  if (response.isDone()) break
}`}</code>
                            </pre>
                          </div>

                          {/* 简单图 */}
                          <div>
                            <h4 className="text-lg font-bold text-black mb-3">{t('principle.agentLoop.simpleDiagram')}</h4>
                            <div 
                              className="relative w-full rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity bg-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewImage('/agent-loop-simple.jpg');
                              }}
                            >
                              <Image
                                src="/agent-loop-simple.jpg"
                                alt="Agent Loop Simple Diagram"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>

                          {/* 完整图 */}
                          <div>
                            <h4 className="text-lg font-bold text-black mb-3">{t('principle.agentLoop.completeDiagram')}</h4>
                            <div 
                              className="relative w-full rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity bg-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewImage('/opencode-agent-loop.jpg');
                              }}
                            >
                              <Image
                                src="/opencode-agent-loop.jpg"
                                alt="Agent Loop Complete Diagram"
                                width={1200}
                                height={900}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
