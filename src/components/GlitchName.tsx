import { cn } from "@/lib/utils"

interface GlitchNameProps {
  /** Name split into lines (e.g. ["Mark", "Redfield"]). Each line glitches on its own. */
  lines: string[]
  className?: string
}

/**
 * CRT RGB-split glitch for the hero name. Clean at rest; on hover each line
 * grows red/cyan ::before/::after layers (text pulled via attr(data-text)) that
 * slice with clip-path and jitter horizontally. Pure CSS — see .glitch rules in
 * index.css — and fully disabled under prefers-reduced-motion. The layers are
 * absolutely positioned, so the heading layout never shifts.
 */
export function GlitchName({ lines, className }: GlitchNameProps) {
  return (
    <span className={cn("glitch", className)}>
      {lines.map((line) => (
        <span key={line} className="glitch-line" data-text={line}>
          {line}
        </span>
      ))}
    </span>
  )
}
