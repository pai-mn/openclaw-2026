"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Rocket, Heart, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const roadmapItems = [
  {
    phase: "第一阶段",
    title: "核心完善",
    items: ["优化核心架构", "完善文档", "增加更多插件"],
    status: "进行中",
    gradient: "from-[#0d5ffc] to-[#4facfe]"
  },
  {
    phase: "第二阶段",
    title: "生态建设",
    items: ["发布官方插件市场", "推出 VS Code 插件", "社区模板中心"],
    status: "规划中",
    gradient: "from-[#00b894] to-[#00cec9]"
  },
  {
    phase: "第三阶段",
    title: "企业级功能",
    items: ["团队协作功能", "企业级安全特性", "商业支持服务"],
    status: "规划中",
    gradient: "from-[#e84393] to-[#fd79a8]"
  }
];

export default function Roadmap() {
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
              <Rocket width="16" height="16" />
              04 / 未来展望
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              未来<span className="gradient-text">规划</span><br/>
              一起创造
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-2xl">
              OpenClaw 的未来由我们共同书写，期待你的参与
            </p>
          </div>

          {/* Roadmap */}
          <div className="space-y-8">
            {roadmapItems.map((item, i) => (
              <div 
                key={i}
                className={`relative p-8 rounded-3xl bg-white border border-[#e8e8ef] card-hover ${mounted ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-medium mb-3`}>
                      {item.phase}
                    </span>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    item.status === '进行中' 
                      ? 'bg-[#fff3cd] text-[#856404]' 
                      : 'bg-[#e8e8ef] text-[#4a4a68]'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <ul className="space-y-3">
                  {item.items.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#4a4a68]">
                      <div className="w-2 h-2 rounded-full bg-[#0d5ffc]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Community */}
          <div className={`mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#f0f4ff] to-[#fff0f5] border border-[#e8e8ef] ${mounted ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
                <Users width="32" height="32" className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">加入社区</h3>
                <p className="text-[#4a4a68] mb-4">
                  OpenClaw 是开源项目，欢迎每一位开发者的参与和贡献
                </p>
                <a 
                  href="https://github.com/alchem-x/openclaw-2026"
                  className="inline-flex items-center gap-2 text-[#0d5ffc] font-medium hover:underline"
                >
                  <Heart width="16" height="16" className="text-[#e84393]" />
                  在 GitHub 上 Star 我们
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16">
            <Link 
              href="/features"
              className="flex items-center gap-2 text-[#4a4a68] hover:text-[#0d5ffc] transition-colors"
            >
              <ArrowLeft width="20" height="20" />
              <span>上一页：功能作用</span>
            </Link>
            <Link 
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium hover:shadow-lg transition-all"
            >
              <span>返回首页</span>
              <ArrowRight width="20" height="20" />
            </Link>
          </div>
        </div>

        <div className="slide-number">04</div>
      </section>
    </div>
  );
}
