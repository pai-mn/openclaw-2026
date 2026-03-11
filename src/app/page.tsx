import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-16 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0d5ffc]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#00b894]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo Animation */}
          <div className="mb-12 animate-scale-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl gradient-bg shadow-lg mb-8">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Open<span className="gradient-text">Claw</span> 2026
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#4a4a68] max-w-2xl mx-auto mb-8 animate-fade-up delay-100">
            像认识新朋友一样，了解 AI Agent 开发工具
          </p>

          {/* Description */}
          <p className="text-lg text-[#8c8ca1] max-w-xl mx-auto mb-12 animate-fade-up delay-200">
            这是一个轻松有趣的介绍网站，带你了解 OpenClaw 的诞生、用法、功能和未来
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Link 
              href="/background"
              className="group px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              开始了解
              <ArrowRight width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#0d5ffc]/30" />
          ))}
        </div>
      </section>
    </div>
  );
}
