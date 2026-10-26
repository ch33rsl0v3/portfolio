import { LANGS, type Lang } from "@/content/types"

// Tiny language store — replaces i18next, which was only ever used as an
// event emitter (all translations live in src/content/*). Detection order:
// saved choice (localStorage) → browser languages → "en".
export { LANGS, type Lang }

const LANG_STORAGE_KEY = "ch33rsl0v3.lang"

const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang)

function detect(): Lang {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // storage blocked (private mode etc.) — fall through to the browser
  }
  const browser = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const l of browser) {
    const short = l?.slice(0, 2).toLowerCase()
    if (isLang(short)) return short
  }
  return "en"
}

let current: Lang = detect()
const listeners = new Set<() => void>()

document.documentElement.lang = current

export const getLang = () => current

export function setLang(lang: Lang) {
  if (lang === current) return
  current = lang
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
  } catch {
    // not persisted — still switches for this visit
  }
  document.documentElement.lang = lang
  listeners.forEach((fn) => fn())
}

export function subscribeLang(fn: () => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}
