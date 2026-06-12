import { Fragment } from "react"
import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { Icon } from "@/components/Icons"
import { contactRows } from "@/content/socials"
import { ui } from "@/content/ui"
import { tc, rich } from "@/lib/tc"
import { useLang } from "@/lib/useLang"

// Render the console hint, highlighting the "~" key in eva-purple.
function ConsoleHint({ text }: { text: string }) {
  const parts = text.split("~")
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="text-eva-purple">~</span>}
          {part}
        </Fragment>
      ))}
    </>
  )
}

export function Contact() {
  useLang()

  return (
    <section id="contact" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <Reveal className="grid grid-cols-2 items-start gap-16 max-[800px]:grid-cols-1 max-[800px]:gap-8">
          <div>
            <h2 className="mb-6 font-display text-5xl font-black leading-none tracking-[-0.02em] text-ink">
              {rich(ui.contact.title)}
            </h2>
            <p className="mb-8 text-ink-dim">{tc(ui.contact.body)}</p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.1em] text-ink-mute">
              <ConsoleHint text={tc(ui.contact.console)} />
            </p>
          </div>

          <ul className="list-none">
            {contactRows.map((row) => (
              <li
                key={row.value}
                className="grid grid-cols-[24px_100px_1fr] items-center gap-3 border-b border-line py-4 text-[13px] max-[800px]:grid-cols-[24px_80px_1fr]"
              >
                <span className={row.icon === "dot" ? "inline-flex text-ink-mute" : "inline-flex text-eva-purple"}>
                  {row.icon === "dot" ? "·" : <Icon name={row.icon} className="h-4 w-4 fill-current" />}
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-ink-mute">{tc(row.label)}</span>
                {row.href ? (
                  <a href={row.href} {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                    {row.value}
                  </a>
                ) : (
                  <span className="text-ink-dim">{row.valueLocalized ? tc(row.valueLocalized) : row.value}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Wrap>
    </section>
  )
}
