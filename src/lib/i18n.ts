import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// i18next is used ONLY as a reactive language engine now — translations live in
// src/content/* as Localized objects, resolved by tc()/rich(). No resources.
export const LANGS = ["en", "ru", "es"] as const
export type Lang = (typeof LANGS)[number]

const LANG_STORAGE_KEY = "ch33rsl0v3.lang"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // empty bag — content is not stored in i18next
    resources: { en: {}, ru: {}, es: {} },
    supportedLngs: [...LANGS],
    fallbackLng: "en",
    load: "languageOnly", // "en-US" -> "en"
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: LANG_STORAGE_KEY,
      caches: ["localStorage"],
    },
  })

export default i18n
