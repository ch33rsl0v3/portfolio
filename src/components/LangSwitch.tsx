import { useTranslation } from "react-i18next"
import { SUPPORTED_LANGS } from "@/i18n"
import { cn } from "@/lib/utils"

// EN / RU / ES switcher. Writes through to localStorage via the detector cache.
export function LangSwitch() {
  const { i18n } = useTranslation()
  const current = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2)

  return (
    <div
      className="flex border border-line-bright font-mono text-[10px] uppercase tracking-[0.15em]"
      aria-label="Language"
    >
      {SUPPORTED_LANGS.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
          className={cn(
            "cursor-pointer border-r border-line px-2 py-1 transition-colors last:border-r-0",
            current === lng ? "bg-eva-purple text-bg" : "text-ink-mute hover:text-eva-purple",
          )}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
