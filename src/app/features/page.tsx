"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Zap, Shield, Puzzle, Crosshair, Eye, Layers } from "lucide-react";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: Zap,
    title: "闪电般快速",
    desc: "优化的执行引擎，毫秒级响应，让你的 Agent 运行如飞",
    gradient: "from-[#0d5ffc] to-[#4facfe]"
  },
  {
    icon: Shield,
    title: "TypeScript 原生支持",
    desc: "完整的类型定义，强大的类型检查，让代码更安全",
    gradient: "from-[#00b894] to-[#00cec9]"
  },
  {
    icon: Puzzle,
    title: "插件系统",
    desc: "灵活的插件架构，轻松扩展功能，满足各种需求",
    gradient: "from-[#e84393] to-[#fd79a8]"
  },
  {
    icon: Crosshair,
    title: "精确控制",
    desc: "细粒度的行为控制，让 Agent 按照你的想法工作",
    gradient: "from-[#f39c12] to-[#e74c3c]"
  },
  {
    icon: Eye,
    title: "可观测性",
    desc: "内置日志、追踪和调试工具，问题排查 so easy",
    gradient: "from-[#9b59b6] to-[#8e44ad]"
  },
  {
    icon: Layers,
    title: "多模型支持",
    desc: "OpenAI、Anthropic、Ollama...任你选择，灵活切换",
    gradient: "from-[#6c5ce7] to-[#a29bfe]"
  }
];

export default function Features() {
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
              <Zap width="16" height="16" />
              03 / 功能作用
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              强大且<span className="gradient-text">实用</span><br/>
              的功能特性
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-2xl">
              这些功能让 OpenClaw 成为构建 AI Agent 的得力助手
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                className={`group p-8 rounded-3xl bg-white border border-[#e8e8ef] card-hover ${mounted ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon width="28" height="28" className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#4a4a68] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className={`mt-16 p-8 rounded-3xl bg-white border border-[#e8e8ef] shadow-lg ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
                <div className="w-3 h-3 rounded-full bg-[#ffd93d]" />
                <div className="w-3 h-3 rounded-full bg-[#6bcb77]" />
              </div>
              <span className="text-sm text-[#8c8ca1] font-mono">example.ts</span>
            </div>
            <pre className="font-mono text-sm overflow-x-auto">
              <code>{`import { Agent } from 'openclaw';

const agent = new Agent({
  model: 'gpt-4',
  plugins: ['memory', 'browser'],
});

await agent.run('帮我分析这个项目');`}</code>
            </pre>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16">
            <Link 
              href="/usage"
              className="flex items-center gap-2 text-[#4a4a68] hover:text-[#0d5ffc] transition-colors"
            >
              <ArrowLeft width="20" height="20" />
              <span>上一页：使用方法</span>
            </Link>
            <Link 
              href="/roadmap"
              className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium hover:shadow-lg transition-all"
            >
              <span>下一页：未来展望</span>
              <ArrowRight width="20" height="20" />
            </Link>
          </div>
        </div>

        <div className="slide-number">03</div>
      </section>
    </div>
  );
}
