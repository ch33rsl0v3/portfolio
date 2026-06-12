import { useEffect, useRef } from "react"

/**
 * Magnetic-pull hook. Attach the returned ref to an element; on mousemove it
 * translates toward the cursor (proportional to the offset from its centre,
 * clamped to `max` px per axis), and eases back to rest on mouseleave.
 *
 * - `strength` — pull factor (0..1). Default 0.3 (medium).
 * - `max`      — max translate per axis in px. Default 12.
 *
 * Disabled entirely under prefers-reduced-motion and on non-fine pointers
 * (touch), and cleans up its listeners on unmount.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.3, max = 12) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === "undefined") return

    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return

    // currently applied translate — used to recover the resting centre even
    // while the element is already shifted (avoids a feedback loop).
    let curX = 0
    let curY = 0
    const clamp = (v: number) => Math.max(-max, Math.min(max, v))

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2 - curX
      const cy = rect.top + rect.height / 2 - curY
      curX = clamp((e.clientX - cx) * strength)
      curY = clamp((e.clientY - cy) * strength)
      // follow the cursor with no lag while tracking
      el.style.transition = "none"
      el.style.transform = `translate(${curX}px, ${curY}px)`
    }

    const onLeave = () => {
      curX = 0
      curY = 0
      // smooth glide back to origin
      el.style.transition = "transform 0.3s ease-out"
      el.style.transform = "translate(0, 0)"
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      el.style.transform = ""
      el.style.transition = ""
    }
  }, [strength, max])

  return ref
}
