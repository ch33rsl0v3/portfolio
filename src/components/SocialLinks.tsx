import { cn } from "@/lib/utils"
import { Icon } from "@/components/Icons"
import { socials } from "@/content/socials"

// Top-nav socials. Иконки раскрывают название бренда по hover/focus
// плавающим моно-тегом. Тег absolute (вне потока) — ширина ряда не меняется,
// поэтому статус "Online" справа не дёргается.
// Бренд-лейблы литеральны на всех языках → i18n здесь намеренно нет.
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex list-none items-center gap-3.5", className)}>
      {socials.map((s) => (
        <li key={s.label} className="flex items-center">
          <a
            href={s.href}
            target="_blank"
            rel="noopener"
            aria-label={s.label}
            className="group relative inline-flex h-8 items-center text-ink-dim outline-none transition-colors hover:text-eva-green focus-visible:text-eva-green hover:[filter:drop-shadow(0_0_5px_currentColor)] focus-visible:[filter:drop-shadow(0_0_5px_currentColor)]"
          >
            <Icon name={s.icon} className="block h-4 w-4 shrink-0 fill-current" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-[-2px] whitespace-nowrap rounded-sm border border-eva-green/40 bg-black/85 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-eva-green opacity-0 transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none motion-reduce:translate-y-0"
            >
              {s.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}