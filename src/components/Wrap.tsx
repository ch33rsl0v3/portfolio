import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// The legacy `.wrap` container: centered, max 1180px, 2rem side padding
// (1.25rem on phones, so the nav bar fits a 360px screen).
export function Wrap({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1180px] px-8 max-[800px]:px-5", className)}>{children}</div>
}
