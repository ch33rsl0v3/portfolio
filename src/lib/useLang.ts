import { useTranslation } from "react-i18next"
import { LANGS, type Lang } from "@/lib/i18n"

/**
 * Language hook over i18next. Subscribing via useTranslation() makes any
 * component using it (and thus tc()/rich()) re-render on language change.
 */
export function useLang() {
  const { i18n } = useTranslation()
  const lang = ((i18n.resolvedLanguage || i18n.language || "en").slice(0, 2) || "en") as Lang
  return {
    lang,
    setLang: (l: Lang) => i18n.changeLanguage(l),
    langs: LANGS,
  }
}
