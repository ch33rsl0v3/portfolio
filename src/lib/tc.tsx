import { Fragment, type ReactNode } from "react"
import { getLang } from "@/lib/i18n"
import type { Text } from "@/content/types"

/** Resolve a Text for the active language: plain strings pass through, Localized falls back to en. */
export function tc(field: Text): string {
  if (typeof field === "string") return field
  return field[getLang()] ?? field.en
}

// inline **bold** -> <strong>
function parseBold(line: string, keyBase: string): ReactNode[] {
  return line.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyBase}-${i}`} className="font-medium text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <Fragment key={`${keyBase}-${i}`}>{part}</Fragment>
  })
}

/**
 * Like tc(), but returns ReactNode and renders lightweight markup:
 *   **bold** -> <strong>, \n -> <br>.
 */
export function rich(field: Text): ReactNode {
  const text = tc(field)
  const lines = text.split("\n")
  return lines.map((line, li) => (
    <Fragment key={li}>
      {li > 0 && <br />}
      {parseBold(line, String(li))}
    </Fragment>
  ))
}
