import { load } from 'js-yaml';
import zhYaml from './locales/zh.yaml';
import enYaml from './locales/en.yaml';
import koYaml from './locales/ko.yaml';

export const translations = {
  zh: load(zhYaml) as Record<string, any>,
  en: load(enYaml) as Record<string, any>,
  ko: load(koYaml) as Record<string, any>,
};
