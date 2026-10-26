import { useEffect, useState } from "react"
import { Wrap } from "@/components/Wrap"
import { LangSwitch } from "@/components/LangSwitch"
import { SocialLinks } from "@/components/SocialLinks"
import { navLinks, ui } from "@/content/ui"
import { tc } from "@/lib/tc"

const linkClass =
  "border-b border-transparent py-1 text-xs uppercase tracking-[0.1em] text-ink-dim transition-colors hover:border-eva-purple hover:text-eva-purple hover:no-underline"

export function Nav() {
  // Mobile (≤800px): section links + socials fold into a drop-down panel;
  // the language switch stays visible in the bar.
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-[rgba(10,6,18,0.88)] backdrop-blur-[8px]">
      <Wrap className="flex h-14 items-center justify-between gap-8 max-[800px]:gap-4">
        <div className="whitespace-nowrap font-mono text-[13px] font-medium tracking-[0.05em] text-eva-purple">
          ch33rsl0v3
          <span className="max-[420px]:hidden">
            <span className="mx-1.5 text-ink-mute">/</span>portfolio
          </span>
        </div>

        <ul className="flex list-none gap-6 max-[800px]:hidden">
          {navLinks.map((l) => (
            <li key={l.hash}>
              <a href={l.hash} className={linkClass}>
                {tc(l.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-[11px] text-ink-mute max-[800px]:hidden">
          <LangSwitch />
          <SocialLinks />
          <span className="inline-flex items-center gap-1.5">
            <span className="status-dot" />
            <span>{tc(ui.online)}</span>
          </span>
        </div>

        <div className="hidden items-center gap-3 max-[800px]:flex">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="cursor-pointer whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-ink-dim transition-colors hover:text-eva-purple"
          >
            [ {tc(open ? ui.menu.close : ui.menu.open)} ]
          </button>
        </div>
      </Wrap>

      {open && (
        <div id="mobile-menu" className="hidden border-t border-line max-[800px]:block">
          <Wrap className="flex flex-col gap-5 py-5">
            <ul className="flex list-none flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.hash}>
                  <a href={l.hash} onClick={() => setOpen(false)} className={linkClass}>
                    {tc(l.label)}
                  </a>
                </li>
              ))}
            </ul>
            <SocialLinks />
          </Wrap>
        </div>
      )}
    </nav>
  )
}
