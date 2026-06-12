import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { Btn } from "@/components/Btn"
import { Slider } from "@/components/Slider"
import { AchievementCard } from "@/components/AchievementCard"
import { about } from "@/content/about"
import { achievements } from "@/content/achievements"
import { sectionHeads, ui } from "@/content/ui"
import { tc, rich } from "@/lib/tc"
import { useLang } from "@/lib/useLang"

function SideList({ heading, rows }: { heading: string; rows: { name: string; level: string }[] }) {
  return (
    <>
      <h4 className="mb-3 mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-eva-purple first:mt-0">
        {heading}
      </h4>
      <ul className="list-none">
        {rows.map((r) => (
          <li
            key={r.name}
            className="flex justify-between border-b border-dashed border-line py-1 text-[13px] text-ink"
          >
            <span>{r.name}</span>
            <span className="text-[11px] text-eva-green">{r.level}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export function About() {
  useLang()

  return (
    <section id="about" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={tc(sectionHeads.about.title)} meta={tc(sectionHeads.about.subtitle!)} />

        <Reveal className="grid grid-cols-[2fr_1fr] items-start gap-16 max-[800px]:grid-cols-1 max-[800px]:gap-8">
            <div className="text-[17px] leading-[1.9] text-ink-dim">
            <p className="mb-5">{rich(about.bio)}</p>
            <p className="mt-8">
              <Btn href={about.resumeHref} primary arrow external>
                {tc(ui.buttons.resume)}
              </Btn>
            </p>
          </div>

          <aside className="border border-line-bright bg-bg-2 p-6">
            <SideList heading={tc(about.headings.skills)} rows={about.skills} />
            <SideList
              heading={tc(about.headings.languages)}
              rows={about.languages.map((l) => ({ name: tc(l.name), level: l.level }))}
            />
            <SideList heading={tc(about.headings.favorites)} rows={about.favorites} />
          </aside>
        </Reveal>

        <Reveal>
          <Slider title={tc(ui.achievements)} cardCount={achievements.length}>
            {achievements.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </Slider>
        </Reveal>
      </Wrap>
    </section>
  )
}
