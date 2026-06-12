import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/Icons"

interface BtnProps {
  children: ReactNode
  href?: string
  primary?: boolean
  arrow?: boolean
  external?: boolean
  className?: string
}

// The shared `.btn` from legacy, with an optional trailing arrow that nudges
// right on hover. Renders an <a> when href is set, else a <button>.
export function Btn({ children, href, primary, arrow, external, className }: BtnProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 border px-[18px] py-[10px] font-mono text-xs uppercase tracking-[0.1em] transition-colors cursor-pointer",
    primary
      ? "border-eva-green text-eva-green hover:bg-eva-green hover:border-eva-green hover:text-bg"
      : "border-line-bright text-ink hover:bg-eva-purple hover:border-eva-purple hover:text-bg",
    "hover:no-underline",
    className,
  )

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrow"
          className="h-3.5 w-3.5 fill-current transition-transform group-hover:translate-x-[3px]"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={classes}>
      {inner}
    </button>
  )
}
