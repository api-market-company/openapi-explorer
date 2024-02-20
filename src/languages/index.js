import i18next from 'i18next';
import en from './en.js';
import fr from './fr.js';
import es from './es.js';

export async function initI18n(resolvedSpecLanguage) {
  const initLang = (resolvedSpecLanguage || window.navigator.language).substring(0, 2);
  await i18next.init({
    lng: initLang,
    fallbackLng: 'es',
    debug: false,
    ns: ['translation'],
    defaultNS: 'translation',
    resources: {
      en, fr, es
    }
  });
}

export function getI18nText(key) {
  return i18next.t(key);
}
