"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Code, Terminal, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";

const steps = [
  {
    step: "01",
    title: "安装",
    code: "npm install openclaw",
    icon: Terminal
  },
  {
    step: "02",
    title: "配置",
    code: "npx openclaw init my-agent",
    icon: BookOpen
  },
  {
    step: "03",
    title: "编写",
    code: "# 编辑 agent.ts",
    icon: Code
  },
  {
    step: "04",
    title: "运行",
    code: "npx openclaw run",
    icon: Terminal
  }
];

export default function Usage() {
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
              <Code width="16" height="16" />
              02 / 使用方法
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              只需 <span className="gradient-text">4 步</span><br/>
              快速上手
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-2xl">
              像安装一个普通的 npm 包一样简单，不需要复杂的配置
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((item, i) => (
              <div 
                key={i}
                className={`relative p-8 rounded-3xl bg-white border border-[#e8e8ef] card-hover ${mounted ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                    <item.icon width="24" height="24" className="text-white" />
                  </div>
                  <span className="text-4xl font-bold text-[#e8e8ef]">{item.step}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <div className="p-4 rounded-xl bg-[#1a1a2e] font-mono text-sm">
                  <code className="text-[#a29bfe]">{item.code}</code>
                </div>
              </div>
            ))}
          </div>

          {/* More Details */}
          <div className={`mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#f0f4ff] to-[#e8f8f5] border border-[#e8e8ef] ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold mb-4">详细文档</h3>
            <p className="text-[#4a4a68] mb-4">
              想要了解更多？查看完整的文档，了解所有配置选项和高级用法
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white text-[#0d5ffc] text-sm font-medium">配置文件</span>
              <span className="px-4 py-2 rounded-full bg-white text-[#00b894] text-sm font-medium">插件开发</span>
              <span className="px-4 py-2 rounded-full bg-white text-[#e84393] text-sm font-medium">API 参考</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16">
            <Link 
              href="/background"
              className="flex items-center gap-2 text-[#4a4a68] hover:text-[#0d5ffc] transition-colors"
            >
              <ArrowLeft width="20" height="20" />
              <span>上一页：诞生背景</span>
            </Link>
            <Link 
              href="/features"
              className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium hover:shadow-lg transition-all"
            >
              <span>下一页：功能作用</span>
              <ArrowRight width="20" height="20" />
            </Link>
          </div>
        </div>

        <div className="slide-number">02</div>
      </section>
    </div>
  );
}
