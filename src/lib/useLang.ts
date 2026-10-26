import { useSyncExternalStore } from "react"
import { LANGS, getLang, setLang, subscribeLang } from "@/lib/i18n"

/**
 * Active language + setter. App calls it once at the root: a language change
 * re-renders App, and with it every section (none are memoized), so tc()/rich()
 * pick up the new language everywhere. Other components only need it to READ
 * or SET the language (e.g. LangSwitch) — not to stay reactive.
 */
export function useLang() {
  const lang = useSyncExternalStore(subscribeLang, getLang, getLang)
  return { lang, setLang, langs: LANGS }
}
