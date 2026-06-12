import { useLang } from "@/lib/useLang"
import { cn } from "@/lib/utils"

// EN / RU / ES switcher over i18next (writes through to localStorage).
export function LangSwitch() {
  const { lang, setLang, langs } = useLang()

  return (
    <div
      className="flex border border-line-bright font-mono text-[10px] uppercase tracking-[0.15em]"
      aria-label="Language"
    >
      {langs.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => setLang(lng)}
          className={cn(
            "cursor-pointer border-r border-line px-2 py-1 transition-colors last:border-r-0",
            lang === lng ? "bg-eva-purple text-bg" : "text-ink-mute hover:text-eva-purple",
          )}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
