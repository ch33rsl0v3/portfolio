import { useTranslation } from "react-i18next"
import { Wrap } from "@/components/Wrap"
import { LangSwitch } from "@/components/LangSwitch"
import { Icon } from "@/components/Icons"
import { socials } from "@/data/socials"

const NAV_LINKS = [
  { hash: "#experience", key: "nav.experience" },
  { hash: "#projects", key: "nav.projects" },
  { hash: "#artworks", key: "nav.artworks" },
  { hash: "#about", key: "nav.about" },
  { hash: "#contact", key: "nav.letter" },
]

export function Nav() {
  const { t } = useTranslation()

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-[rgba(10,6,18,0.88)] backdrop-blur-[8px]">
      <Wrap className="flex h-14 items-center justify-between gap-8">
        <div className="font-mono text-[13px] font-medium tracking-[0.05em] text-eva-purple">
          ch33rsl0v3<span className="mx-1.5 text-ink-mute">/</span>portfolio
        </div>

        <ul className="flex list-none gap-6 max-[800px]:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.hash}>
              <a
                href={l.hash}
                className="border-b border-transparent py-1 text-xs uppercase tracking-[0.1em] text-ink-dim transition-colors hover:border-eva-purple hover:text-eva-purple hover:no-underline"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-[11px] text-ink-mute max-[800px]:hidden">
          <LangSwitch />
          <div className="flex items-center gap-[0.85rem]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="inline-flex items-center text-ink-dim transition-colors hover:text-eva-green"
              >
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5">
            <span className="status-dot" />
            <span>{t("nav.online")}</span>
          </span>
        </div>
      </Wrap>
    </nav>
  )
}
