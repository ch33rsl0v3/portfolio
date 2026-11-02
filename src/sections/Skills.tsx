import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { skills } from "@/content/skills"
import { sectionHeads } from "@/content/ui"
import { tc, rich } from "@/lib/tc"

// SKILLS (#skills): four discipline cards + the starred tools list, styled like
// the About side panel so it reads as part of the same site.
export function Skills() {
  return (
    <section id="skills" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={tc(sectionHeads.skills.title)} meta={tc(sectionHeads.skills.subtitle!)} />

        <Reveal className="grid grid-cols-[2fr_1fr] items-stretch gap-8 max-[900px]:grid-cols-1">
          <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
            {skills.blocks.map((b) => (
              <article
                key={b.code}
                className="flex flex-col gap-3 border border-line bg-bg-2 p-6 transition-colors hover:border-eva-purple"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-eva-purple">[{b.code}]</span>
                <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-ink">{tc(b.title)}</h3>
                <p className="text-[13px] leading-[1.7] text-ink-dim">{rich(b.desc)}</p>
              </article>
            ))}
          </div>

          <aside className="border border-line-bright bg-bg-2 p-6">
            <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-eva-purple">
              {tc(skills.toolsHeading)}
            </h4>
            <ul className="list-none">
              {skills.tools.map((t) => (
                <li
                  key={t.name}
                  className="flex justify-between border-b border-dashed border-line py-1 text-[13px] text-ink"
                >
                  <span>{t.name}</span>
                  <span className="text-[11px] text-eva-green">{t.level}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </Wrap>
    </section>
  )
}
