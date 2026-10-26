import { useLang } from "@/lib/useLang"
import { cn } from "@/lib/utils"
import { ui } from "@/content/ui"
import { tc } from "@/lib/tc"

// EN / RU / ES switcher (setLang saves the choice to localStorage).
export function LangSwitch() {
  const { lang, setLang, langs } = useLang()

  return (
    <div
      className="flex border border-line-bright font-mono text-[10px] uppercase tracking-[0.15em]"
      role="group"
      aria-label={tc(ui.aria.language)}
    >
      {langs.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => setLang(lng)}
          aria-pressed={lang === lng}
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
