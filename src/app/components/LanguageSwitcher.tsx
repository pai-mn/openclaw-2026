"use client";

import { useI18n } from "../i18n";

const languages = [
  { code: "zh", label: "简体中文" },
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as any)}
        className="px-4 py-2 rounded-full bg-white shadow-md border border-[#e8e8ef] text-[#2d3436] font-medium text-sm cursor-pointer hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
