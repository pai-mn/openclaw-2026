import { format, parseISO } from 'date-fns';
import { zhCN, enUS, ko } from 'date-fns/locale';
import type { Locale } from '@/app/i18n';

const localeMap = {
  zh: zhCN,
  en: enUS,
  ko: ko,
};

/**
 * 格式化日期字符串
 * @param dateString - ISO 日期字符串或日期格式字符串
 * @param formatPattern - 格式化模式，默认 'PPP'
 * @param locale - 语言代码
 * @returns 格式化后的日期字符串
 */
export function formatDate(
  dateString: string,
  formatPattern: string = 'PPP',
  locale: Locale = 'zh'
): string {
  try {
    const date = parseISO(dateString);
    return format(date, formatPattern, { locale: localeMap[locale] });
  } catch (error) {
    // 如果解析失败，返回原始字符串
    return dateString;
  }
}

/**
 * 格式化相对时间
 * @param dateString - ISO 日期字符串
 * @param locale - 语言代码
 * @returns 相对时间字符串
 */
export function formatRelativeTime(dateString: string, locale: Locale = 'zh'): string {
  try {
    const date = parseISO(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    const intervals = {
      zh: {
        year: '年前',
        month: '个月前',
        week: '周前',
        day: '天前',
        hour: '小时前',
        minute: '分钟前',
        second: '秒前',
      },
      en: {
        year: ' year(s) ago',
        month: ' month(s) ago',
        week: ' week(s) ago',
        day: ' day(s) ago',
        hour: ' hour(s) ago',
        minute: ' minute(s) ago',
        second: ' second(s) ago',
      },
      ko: {
        year: '년 전',
        month: '개월 전',
        week: '주 전',
        day: '일 전',
        hour: '시간 전',
        minute: '분 전',
        second: '초 전',
      },
    };

    const units = [
      { name: 'year', seconds: 31536000 },
      { name: 'month', seconds: 2592000 },
      { name: 'week', seconds: 604800 },
      { name: 'day', seconds: 86400 },
      { name: 'hour', seconds: 3600 },
      { name: 'minute', seconds: 60 },
      { name: 'second', seconds: 1 },
    ];

    for (const unit of units) {
      const interval = Math.floor(diffInSeconds / unit.seconds);
      if (interval >= 1) {
        return `${interval}${intervals[locale][unit.name as keyof typeof intervals.zh]}`;
      }
    }

    return intervals[locale].second;
  } catch (error) {
    return dateString;
  }
}
