"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "en" | "zh" | "zh-TW" | "ko";

interface Translations {
  home: {
    slogan: string;
    menuTitle: string;
    hint: string;
  };
  nav: {
    back: string;
  };
  puzzle: {
    title: string;
    subtitle: string;
  };
  capabilities: {
    title: string;
    subtitle: string;
  };
  principle: {
    title: string;
    subtitle: string;
  };
  whatWeCanDo: {
    title: string;
    subtitle: string;
  };
  ending: {
    title: string;
    subtitle: string;
  };
  common: {
    prev: string;
    next: string;
    back: string;
  };
}

const translations: Record<Locale, Translations> = {
  en: {
    home: {
      slogan: "Born from need, ready for the time",
      menuTitle: "Directory",
      hint: "Click any chapter to explore →"
    },
    nav: {
      back: "Back to menu"
    },
    puzzle: {
      title: "Lobster's Puzzle",
      subtitle: "Understand the components of OpenClaw"
    },
    capabilities: {
      title: "What Lobster Can Do",
      subtitle: "Explore the powerful capabilities of OpenClaw"
    },
    principle: {
      title: "Lobster's Principle",
      subtitle: "Understand how OpenClaw works"
    },
    whatWeCanDo: {
      title: "What We Can Do",
      subtitle: "Create possibilities with OpenClaw"
    },
    ending: {
      title: "Thank You",
      subtitle: "Welcome to join us"
    },
    common: {
      prev: "Previous",
      next: "Next",
      back: "Back"
    }
  },
  zh: {
    home: {
      slogan: "应运而生，因时而成",
      menuTitle: "目录导航",
      hint: "点击任意章节开始探索 →"
    },
    nav: {
      back: "返回目录"
    },
    puzzle: {
      title: "龙虾的拼图",
      subtitle: "了解 OpenClaw 的各个组成部分"
    },
    capabilities: {
      title: "龙虾可以做什么",
      subtitle: "探索 OpenClaw 的强大能力"
    },
    principle: {
      title: "龙虾的原理",
      subtitle: "深入理解 OpenClaw 的工作原理"
    },
    whatWeCanDo: {
      title: "我们可以做什么",
      subtitle: "用 OpenClaw 创造可能性"
    },
    ending: {
      title: "感谢聆听",
      subtitle: "欢迎加入我们"
    },
    common: {
      prev: "上一页",
      next: "下一页",
      back: "返回"
    }
  },
  "zh-TW": {
    home: {
      slogan: "應運而生，因時而成",
      menuTitle: "目錄導航",
      hint: "點擊任意章節開始探索 →"
    },
    nav: {
      back: "返回目錄"
    },
    puzzle: {
      title: "龍蝦的拼圖",
      subtitle: "了解 OpenClaw 的各個組成部分"
    },
    capabilities: {
      title: "龍蝦可以做什麼",
      subtitle: "探索 OpenClaw 的強大能力"
    },
    principle: {
      title: "龍蝦的原理",
      subtitle: "深入理解 OpenClaw 的工作原理"
    },
    whatWeCanDo: {
      title: "我們可以做什麼",
      subtitle: "用 OpenClaw 創造可能性"
    },
    ending: {
      title: "感謝聆聽",
      subtitle: "歡迎加入我們"
    },
    common: {
      prev: "上一頁",
      next: "下一頁",
      back: "返回"
    }
  },
  ko: {
    home: {
      slogan: "필요에서 태어나, 시대에 맞서",
      menuTitle: "목차",
      hint: "아무 챕터를 클릭하여 탐색하세요 →"
    },
    nav: {
      back: "목차로 돌아가기"
    },
    puzzle: {
      title: "龙蝦의 퍼즐",
      subtitle: "OpenClaw의 각 구성 요소를 알아보세요"
    },
    capabilities: {
      title: "龙蝦이 할 수 있는 일",
      subtitle: "OpenClaw의 강력한 기능을 탐색하세요"
    },
    principle: {
      title: "龙蝦의 원리",
      subtitle: "OpenClaw의 작동 원리를 깊이 이해하세요"
    },
    whatWeCanDo: {
      title: "우리가 할 수 있는 일",
      subtitle: "OpenClaw로 가능성을 창출하세요"
    },
    ending: {
      title: "감사합니다",
      subtitle: "함께하세요"
    },
    common: {
      prev: "이전",
      next: "다음",
      back: "뒤로"
    }
  }
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path;
    }
  }
  return typeof value === 'string' ? value : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

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
    return getNestedValue(translations[locale], key);
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
