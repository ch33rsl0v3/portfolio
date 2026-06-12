import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

const AUTOPLAY_MS = 4500 // how often to advance during autoplay
const RESUME_AFTER_MANUAL_MS = 8000 // how long autoplay stays paused after a click

interface SliderProps {
  // Heading line on the left of the slider header (already translated).
  title: string
  // Number of cards — used for the "n / total" counter.
  cardCount: number
  // The cards. Each card MUST carry `data-card` and a fixed flex-basis width.
  children: ReactNode
  className?: string
}

/**
 * Horizontal auto-paginating slider. Ported from the legacy generic `Slider`
 * class. Detects overflow, shows arrows + autoplays only when cards overflow,
 * pauses on hover/focus/hidden-tab/after a manual click, and respects
 * prefers-reduced-motion (no autoplay).
 */
export function Slider({ title, cardCount, children, className }: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [counter, setCounter] = useState("")
  const manualPauseUntil = useRef(0)
  const hovering = useRef(false)

  // width of one card + gap (one scroll step)
  const cardStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 280
    const card = track.querySelector<HTMLElement>("[data-card]")
    if (!card) return 280
    const gap = parseFloat(getComputedStyle(track).gap) || 16
    return card.offsetWidth + gap
  }, [])

  const updateCounter = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    if (track.scrollWidth <= track.clientWidth + 2) {
      setCounter("")
      return
    }
    const step = cardStep()
    if (step <= 0) return
    const cur = Math.round(track.scrollLeft / step) + 1
    setCounter(`${cur} / ${cardCount}`)
  }, [cardStep, cardCount])

  const scroll = useCallback(
    (dir: number) => {
      const track = trackRef.current
      if (!track) return
      const step = cardStep()
      const max = track.scrollWidth - track.clientWidth
      // wrap-around: past the end -> snap to start (and vice versa)
      if (dir > 0 && track.scrollLeft >= max - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" })
        return
      }
      if (dir < 0 && track.scrollLeft <= 5) {
        track.scrollTo({ left: max, behavior: "smooth" })
        return
      }
      track.scrollTo({ left: track.scrollLeft + dir * step, behavior: "smooth" })
    },
    [cardStep],
  )

  const manual = useCallback(
    (dir: number) => {
      scroll(dir)
      manualPauseUntil.current = Date.now() + RESUME_AFTER_MANUAL_MS
    },
    [scroll],
  )

  // overflow detection + counter, kept fresh on resize
  useEffect(() => {
    const update = () => {
      const track = trackRef.current
      if (!track) return
      setHasOverflow(track.scrollWidth > track.clientWidth + 2)
      updateCounter()
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [updateCounter])

  // autoplay — single guarded interval, only while overflowing
  useEffect(() => {
    if (!hasOverflow) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => {
      if (document.hidden) return
      if (Date.now() < manualPauseUntil.current) return
      if (hovering.current) return
      scroll(1)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [hasOverflow, scroll])

  return (
    <div
      className={cn("mt-8 border-t border-dashed border-line pt-6", className)}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onFocus={() => (hovering.current = true)}
      onBlur={() => (hovering.current = false)}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-eva-purple before:text-ink-mute before:content-['//_']">
          {title}
        </h4>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.15em] text-ink-mute">{counter}</span>
          {hasOverflow && (
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => manual(-1)}
                className="inline-flex h-7 w-7 items-center justify-center border border-line-bright font-display text-lg leading-none text-ink transition-colors hover:border-eva-purple hover:bg-eva-purple hover:text-bg"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => manual(1)}
                className="inline-flex h-7 w-7 items-center justify-center border border-line-bright font-display text-lg leading-none text-ink transition-colors hover:border-eva-purple hover:bg-eva-purple hover:text-bg"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        ref={trackRef}
        onScroll={updateCounter}
        className="no-scrollbar flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scroll-behavior:smooth]"
      >
        {children}
      </div>
    </div>
  )
}
