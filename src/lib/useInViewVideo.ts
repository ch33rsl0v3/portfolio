import { useEffect, useRef } from "react"

/**
 * Plays a <video> only while it's on screen and the tab is visible; pauses it
 * otherwise. Saves CPU/battery from the looping card previews (which keep
 * decoding even when scrolled off or hidden under the hover overlay).
 *
 * Attach the returned ref to a muted/loop/playsInline <video>. Autoplay is
 * driven here (don't also set the `autoPlay` attribute).
 */
export function useInViewVideo<T extends HTMLVideoElement = HTMLVideoElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const v = ref.current
    if (!v || typeof window === "undefined") return

    const tryPlay = () => {
      // muted + playsInline lets this resolve without a user gesture; ignore
      // the promise rejection browsers throw when autoplay is still blocked.
      const p = v.play()
      if (p && typeof p.catch === "function") p.catch(() => {})
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !document.hidden) tryPlay()
          else v.pause()
        })
      },
      { threshold: 0.1 },
    )
    io.observe(v)

    const onVisibility = () => {
      if (document.hidden) {
        v.pause()
        return
      }
      const r = v.getBoundingClientRect()
      if (r.bottom > 0 && r.top < window.innerHeight) tryPlay()
    }
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return ref
}
