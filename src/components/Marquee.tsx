import { Fragment } from "react"
import { cn } from "@/lib/utils"
import { marquee } from "@/content/ui"

interface MarqueeProps {
  /** Phrases shown in the loop. */
  items?: string[]
  className?: string
}

// Decorative infinite CRT ticker (section divider). Seamless loop = the same
// sequence rendered twice with the track shifted by -50% (see .marquee in CSS).
export function Marquee({ items = marquee, className }: MarqueeProps) {
  const sequence = (
    <div className="flex shrink-0 items-center font-mono text-[11px] uppercase tracking-[0.35em] text-ink-mute">
      {items.map((item, i) => (
        <Fragment key={i}>
          <span className="px-6">{item}</span>
          <span className="text-eva-purple">//</span>
        </Fragment>
      ))}
    </div>
  )

  return (
    <div className={cn("marquee py-3", className)} aria-hidden="true">
      <div className="marquee-track">
        {sequence}
        {sequence}
      </div>
    </div>
  )
}
