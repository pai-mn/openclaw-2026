"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/app/i18n";

interface NavigationBarProps {
  scrolled: boolean;
  nextPage?: string;
}

export default function NavigationBar({ scrolled, nextPage }: NavigationBarProps) {
  const { t } = useI18n();

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-start gap-4">
        <div className="flex items-center gap-2">
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
          >
            <span className="text-sm font-medium">{t('common.home')}</span>
          </Link>
          {nextPage && (
            <Link 
              href={nextPage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ef] text-[#636e72] hover:bg-white hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium">{t('common.next')}</span>
              <ArrowRight width="18" height="18" />
            </Link>
          )}
        </div>
        <div className="ml-auto">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
