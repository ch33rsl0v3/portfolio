import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "./locales/en.json"
import ru from "./locales/ru.json"
import es from "./locales/es.json"

export const SUPPORTED_LANGS = ["en", "ru", "es"] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]

// Keep the legacy localStorage key so a returning visitor keeps their choice.
const LANG_STORAGE_KEY = "ch33rsl0v3.lang"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      es: { translation: es },
    },
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    fallbackLng: "en",
    // legacy used 2-letter codes only (navigator.language.slice(0,2))
    load: "languageOnly",
    // legacy keys are flat & dotted (e.g. "nav.experience", "exp.term.vel.1"),
    // so disable nesting separators and treat the whole string as the key.
    keySeparator: false,
    nsSeparator: false,
    interpolation: { escapeValue: false },
    detection: {
      // localStorage first, then the browser language — same as legacy.
      order: ["localStorage", "navigator"],
      lookupLocalStorage: LANG_STORAGE_KEY,
      caches: ["localStorage"],
    },
  })

export default i18n
