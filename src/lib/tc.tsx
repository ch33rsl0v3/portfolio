import { Fragment, type ReactNode } from "react"
import i18n from "@/lib/i18n"
import type { Lang, Localized } from "@/content/types"

function currentLang(): Lang {
  const l = (i18n.language || "en").slice(0, 2)
  return (l === "ru" || l === "es" ? l : "en") as Lang
}

/** Resolve a Localized string for the active language, falling back to en. */
export function tc(field: Localized): string {
  const lang = currentLang()
  return field[lang] ?? field.en
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
export function rich(field: Localized): ReactNode {
  const text = tc(field)
  const lines = text.split("\n")
  return lines.map((line, li) => (
    <Fragment key={li}>
      {li > 0 && <br />}
      {parseBold(line, String(li))}
    </Fragment>
  ))
}
