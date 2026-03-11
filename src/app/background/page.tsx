"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

const milestones = [
  {
    year: "2024",
    title: "想法萌芽",
    desc: "团队开始思考：如何让 AI Agent 开发更简单、更高效？",
    color: "from-[#0d5ffc] to-[#4facfe]"
  },
  {
    year: "2025 Q1",
    title: "核心架构设计",
    desc: "确定插件化架构，搭建基础框架，开始原型开发",
    color: "from-[#00b894] to-[#00cec9]"
  },
  {
    year: "2025 Q3",
    title: "首个 Beta 版本",
    desc: "发布内部测试版本，收集团队反馈，持续优化",
    color: "from-[#e84393] to-[#fd79a8]"
  },
  {
    year: "2026",
    title: "OpenClaw 2026 正式发布",
    desc: "全面升级，正式对外开放，成为开源项目",
    color: "from-[#6c5ce7] to-[#a29bfe]"
  }
];

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      
      <section className="slide-section relative px-8 pt-24 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`mb-16 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f4ff] text-[#0d5ffc] text-sm font-medium mb-6">
              <Sparkles width="16" height="16" />
              01 / 诞生背景
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              OpenClaw 是<br/>
              <span className="gradient-text">如何诞生的？</span>
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-2xl">
              从一个简单的想法，到一个完整的开源项目，这是一段不断探索和优化的旅程
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0d5ffc] via-[#00b894] to-[#e84393]" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((item, i) => (
                <div 
                  key={i}
                  className={`relative flex gap-8 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {/* Dot */}
                  <div className={`w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shrink-0 shadow-lg z-10`}>
                    <span className="text-white font-bold">{item.year.slice(0, 2)}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-medium mb-3`}>
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-[#4a4a68] text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className={`mt-20 p-8 rounded-3xl bg-white border border-[#e8e8ef] shadow-lg ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold mb-4">为什么叫 OpenClaw？</h3>
            <p className="text-[#4a4a68] text-lg leading-relaxed">
              "Claw" 意为爪子，象征着 AI Agent 像爪子一样灵活、精准地抓取信息、执行任务。<br/>
              "Open" 代表开源、开放，欢迎每一位开发者参与贡献。
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16">
            <Link 
              href="/"
              className="flex items-center gap-2 text-[#4a4a68] hover:text-[#0d5ffc] transition-colors"
            >
              <ArrowLeft width="20" height="20" />
              <span>返回首页</span>
            </Link>
            <Link 
              href="/usage"
              className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium hover:shadow-lg transition-all"
            >
              <span>下一页：使用方法</span>
              <ArrowRight width="20" height="20" />
            </Link>
          </div>
        </div>

        <div className="slide-number">01</div>
      </section>
    </div>
  );
}
