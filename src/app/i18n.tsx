"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { get } from "lodash-es";
import { translations } from "@/i18n/index";

export type Locale = "en" | "zh" | "ko";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && translations[saved]) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string) => {
    const value = get(translations[locale], key);
    if (value === undefined && process.env.NODE_ENV === 'development') {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return value;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
