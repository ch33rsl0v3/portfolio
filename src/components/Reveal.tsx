import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Optional stagger in ms before the fade-up plays. */
  delay?: number
}

// Fade-up-on-scroll wrapper (IntersectionObserver, fires once). Visual + the
// reduced-motion override live in index.css (.reveal / .reveal.in).
export function Reveal({ children, className, as: Tag = "div", delay }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      // start slightly before fully in view
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn("reveal", shown && "in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
