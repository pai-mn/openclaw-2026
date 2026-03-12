"use client";

import React, { useState, useEffect } from "react";
import { useI18n } from "@/app/i18n";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, ArrowRight, ChevronDown, X,
  Coffee, FileText, Users, UtensilsCrossed, 
  Mail, ClipboardCheck, Calendar, Moon, Bell
} from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function OpenclawCapabilities() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [hoveredTaskIndex, setHoveredTaskIndex] = useState<number | null>(null);

  const featureColors = [
    "#f59e0b",
    "#ef4444",
    "#3b82f6",
    "#9333ea",
    "#14b8a6",
    "#20bf6b"
  ];

  const features: { title: string; desc: string }[] = t('capabilities.features') || [];
  const timeline24Hours: { time: string; task: string; desc: string; type?: string }[] = t('capabilities.timeline24Hours') || [];
  const capabilityTags: string[] = t('capabilities.capabilityTags') || [];
  const clawProducts: { name: string; desc: string; tags: string[] }[] = t('capabilities.clawProducts') || [];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const timelineIconMap = [
    { icon: Coffee, color: "#f59e0b" },
    { icon: Mail, color: "#3b82f6" },
    { icon: Users, color: "#8b5cf6" },
    { icon: UtensilsCrossed, color: "#10b981" },
    { icon: Bell, color: "#dc2626" },
    { icon: ClipboardCheck, color: "#14b8a6" },
    { icon: FileText, color: "#f97316" },
    { icon: Calendar, color: "#3b82f6" },
    { icon: Moon, color: "#8b5cf6" }
  ];

  const capabilitySizeMap = [
    "text-2xl", "text-3xl", "text-xl", "text-4xl", "text-3xl", "text-2xl",
    "text-5xl", "text-3xl", "text-4xl", "text-3xl", "text-2xl", "text-xl",
    "text-2xl", "text-3xl", "text-4xl", "text-2xl", "text-xl", "text-3xl",
    "text-2xl", "text-3xl", "text-xl", "text-2xl", "text-4xl", "text-2xl",
    "text-3xl", "text-2xl", "text-4xl"
  ];
  
  const capabilityColorMap = [
    "#f59e0b", "#ef4444", "#3b82f6", "#9333ea", "#14b8a6", "#f59e0b",
    "#ef4444", "#3b82f6", "#9333ea", "#14b8a6", "#f59e0b", "#ef4444",
    "#3b82f6", "#9333ea", "#14b8a6", "#f59e0b", "#ef4444", "#3b82f6",
    "#9333ea", "#14b8a6", "#f59e0b", "#ef4444", "#3b82f6", "#9333ea",
    "#14b8a6", "#f59e0b", "#ef4444"
  ];

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
                href="/openclaw-puzzle"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
              >
                <ArrowLeft width="18" height="18" />
                <span className="text-sm font-medium">{t('common.prev')}</span>
              </Link>
              <Link 
                href="/openclaw-principle"
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
            <span className="inline-block px-4 py-1 rounded-full bg-[#ffa502]/10 text-[#ffa502] text-sm font-medium mb-4">
              02
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-black">
              {t('capabilities.title')}
            </h1>
            <p className="text-xl text-[#636e72] max-w-xl mx-auto">
              {t('capabilities.subtitle')}
            </p>
          </div>

          <div className={`w-full max-w-4xl ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div 
                    className="flex items-start p-6 gap-5 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: featureColors[index] }}>
                        <div className="w-7 h-7 rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: featureColors[index] }} />
                        <h3 className="text-xl font-bold text-[#2d3436]">{feature.title}</h3>
                      </div>
                      <p className="text-[#636e72] leading-relaxed pl-6">
                        {feature.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronDown 
                        className={`w-6 h-6 text-[#636e72] transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedIndex === index 
                        ? 'max-h-[2000px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      {index === 0 && (
                        <div 
                          className="mt-4 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewImage('/feishu.png');
                          }}
                        >
                          <Image 
                            src="/feishu.png" 
                            alt={t('capabilities.multiChannelExample')}
                            width={800} 
                            height={600}
                            className="w-full h-auto max-h-[500px] object-contain"
                          />
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="mt-4 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl">
                          <div className="flex flex-wrap items-center justify-center gap-4 leading-relaxed">
                            {capabilityTags.map((text, idx) => (
                              <span
                                key={idx}
                                className={`${capabilitySizeMap[idx]} font-bold transition-all duration-300 hover:scale-110 cursor-default inline-block`}
                                style={{ 
                                  color: capabilityColorMap[idx],
                                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                              >
                                {text}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="mt-4 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-visible">
                          <div className="flex items-center justify-center gap-6 mb-8">
                            <h4 className="text-center text-lg font-bold text-gray-700">{t('capabilities.ai24Hours')}</h4>
                          </div>
                          
                          <div className="relative w-full max-w-5xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative">
                              {/* 左侧卡片列表（前半部分） */}
                              <div className="flex flex-col gap-3 w-full md:w-64 z-10 relative">
                              {mounted && timeline24Hours.slice(0, 5).map((item, idx) => {
                                const Icon = timelineIconMap[idx].icon;
                                const color = timelineIconMap[idx].color;
                                const isTriggered = item.type === "triggered";
                                const isHovered = hoveredTaskIndex === idx;
                                const isOtherHovered = hoveredTaskIndex !== null && hoveredTaskIndex !== idx;
                                return (
                                  <div 
                                    key={idx} 
                                    className={`bg-white rounded-lg shadow-md p-3 border-2 transition-all duration-300 ${isTriggered ? 'shadow-lg' : ''} ${isHovered ? 'scale-105 shadow-xl' : ''} ${isOtherHovered ? 'opacity-40' : 'opacity-100'}`} 
                                    style={{ borderColor: color }}
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center" style={{ borderColor: color, borderWidth: '2px' }}>
                                        <Icon size={16} style={{ color: color }} />
                                      </div>
                                      <span className="text-xs font-mono font-bold" style={{ color: color }}>{item.time}</span>
                                      {isTriggered && (
                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold">{t('common.triggered')}</span>
                                      )}
                                    </div>
                                    <div className="font-bold text-sm text-gray-800 mb-1">{item.task}</div>
                                    <div className="text-xs text-gray-600">{item.desc}</div>
                                  </div>
                                );
                              })}
                            </div>
                            
                            {/* 中间时钟 */}
                            <div className="relative flex-shrink-0 z-10 my-auto" style={{ width: '280px', height: '280px' }}>
                              {/* 时钟圆盘背景 */}
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-br from-white to-gray-100 shadow-2xl border-6 border-gray-200"></div>
                              
                              {/* 中心点 */}
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg z-20"></div>
                              
                              {/* 时刻刻度 */}
                              {mounted && [...Array(12)].map((_, i) => {
                                const angle = (i * 30 - 90) * (Math.PI / 180);
                                const x = Math.round(140 + 118 * Math.cos(angle));
                                const y = Math.round(140 + 118 * Math.sin(angle));
                                return (
                                  <div
                                    key={`mark-${i}`}
                                    className="absolute w-0.5 h-3 bg-gray-300"
                                    style={{
                                      left: `${x}px`,
                                      top: `${y}px`,
                                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`
                                    }}
                                  />
                                );
                              })}
                              
                              {/* 时钟上的点 */}
                              {mounted && timeline24Hours.map((item, idx) => {
                                const hour = parseInt(item.time.split(':')[0]);
                                const minute = parseInt(item.time.split(':')[1]);
                                const totalMinutes = hour * 60 + minute;
                                const angle = (totalMinutes / (24 * 60) * 360 - 90) * (Math.PI / 180);
                                
                                const radius = 105;
                                const x = Math.round(140 + radius * Math.cos(angle));
                                const y = Math.round(140 + radius * Math.sin(angle));
                                
                                const Icon = timelineIconMap[idx].icon;
                                const color = timelineIconMap[idx].color;
                                const isTriggered = item.type === "triggered";
                                
                                return (
                                  <div
                                    key={idx}
                                    className="absolute cursor-pointer"
                                    style={{
                                      left: `${x}px`,
                                      top: `${y}px`,
                                      transform: 'translate(-50%, -50%)'
                                    }}
                                    onMouseEnter={() => setHoveredTaskIndex(idx)}
                                    onMouseLeave={() => setHoveredTaskIndex(null)}
                                  >
                                    <div 
                                      className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-125 transition-all z-10 ${isTriggered ? 'animate-pulse' : ''}`}
                                      style={{ borderColor: color, borderWidth: '3px' }}
                                    >
                                      <Icon size={20} style={{ color: color }} />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            
                              {/* 右侧卡片列表（后半部分） */}
                              <div className="flex flex-col gap-3 w-full md:w-64 z-10 relative">
                              {mounted && timeline24Hours.slice(5).map((item, idx) => {
                                const actualIdx = idx + 5;
                                const Icon = timelineIconMap[actualIdx].icon;
                                const color = timelineIconMap[actualIdx].color;
                                const isTriggered = item.type === "triggered";
                                const isHovered = hoveredTaskIndex === actualIdx;
                                const isOtherHovered = hoveredTaskIndex !== null && hoveredTaskIndex !== actualIdx;
                                return (
                                  <div 
                                    key={idx} 
                                    className={`bg-white rounded-lg shadow-md p-3 border-2 transition-all duration-300 ${isTriggered ? 'shadow-lg' : ''} ${isHovered ? 'scale-105 shadow-xl' : ''} ${isOtherHovered ? 'opacity-40' : 'opacity-100'}`} 
                                    style={{ borderColor: color }}
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center" style={{ borderColor: color, borderWidth: '2px' }}>
                                        <Icon size={16} style={{ color: color }} />
                                      </div>
                                      <span className="text-xs font-mono font-bold" style={{ color: color }}>{item.time}</span>
                                      {isTriggered && (
                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold">{t('common.triggered')}</span>
                                      )}
                                    </div>
                                    <div className="font-bold text-sm text-gray-800 mb-1">{item.task}</div>
                                    <div className="text-xs text-gray-600">{item.desc}</div>
                                  </div>
                                );
                              })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="mt-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                          <h4 className="text-center text-lg font-bold text-gray-700 mb-4">{t('capabilities.evolutionLoop')}</h4>
                          <div 
                            className="rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPreviewImage('/evolution-loop.jpg');
                            }}
                          >
                            <Image 
                              src="/evolution-loop.jpg" 
                              alt={t('capabilities.evolutionLoopAlt')}
                              width={1200} 
                              height={800}
                              className="w-full h-auto max-h-[600px] object-contain"
                            />
                          </div>
                        </div>
                      )}
                      
                      {index === 4 && (
                        <div className="mt-4 p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl">
                          <div className="text-center mb-6">
                            <h4 className="text-lg font-bold text-gray-800 mb-1">{t('capabilities.clawEcosystem')}</h4>
                            <p className="text-xs text-gray-600">{t('capabilities.clawEcosystemDesc')}</p>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {clawProducts.map((product, idx) => {
                              const productColors = [
                                "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6",
                                "#ec4899", "#06b6d4", "#14b8a6", "#f97316", "#8b5cf6",
                                "#06b6d4", "#3b82f6", "#ef4444", "#10b981", "#ec4899"
                              ];
                              const color = productColors[idx];
                              return (
                                <div 
                                  key={idx} 
                                  className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-opacity-50 cursor-pointer"
                                  style={{ 
                                    '--hover-color': color,
                                    borderColor: `${color}00`
                                  } as React.CSSProperties}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = color + '80';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = color + '00';
                                  }}
                                >
                                  <div className="mb-3">
                                    <h5 className="font-bold text-base mb-1 group-hover:translate-x-1 transition-transform" style={{ color: color }}>
                                      {product.name}
                                    </h5>
                                    <p className="text-xs text-gray-600 leading-tight">{product.desc}</p>
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {product.tags.map((tag, tagIdx) => (
                                      <span 
                                        key={tagIdx} 
                                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                                        style={{ 
                                          backgroundColor: color + '15',
                                          color: color
                                        }}
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
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
