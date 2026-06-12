import { useEffect, useRef } from "react"

/**
 * Cursor-following spotlight glow. Attach the returned ref to a card; on
 * mousemove it writes the cursor position (in %) into the `--mx`/`--my` CSS
 * variables on the element. The glow itself is drawn by the `.spotlight::before`
 * radial-gradient in index.css — so there are no React re-renders, just two CSS
 * var writes per move.
 *
 * Skipped on coarse (touch) pointers.
 */
export function useSpotlight<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === "undefined") return
    if (!window.matchMedia("(pointer: fine)").matches) return

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`)
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`)
    }

    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  return ref
}
