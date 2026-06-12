import { useTranslation } from "react-i18next"
import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { Btn } from "@/components/Btn"
import { Slider } from "@/components/Slider"
import { AchievementCard } from "@/components/AchievementCard"
import { hardSkills, languages, favoriteGames, resumeHref } from "@/data/about"
import { achievements } from "@/data/achievements"

function SideList({
  heading,
  rows,
}: {
  heading: string
  rows: { name: string; level: string }[]
}) {
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
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={t("about.title")} meta={t("about.subtitle")} />

        <Reveal className="grid grid-cols-[2fr_1fr] gap-16 max-[800px]:grid-cols-1 max-[800px]:gap-8">
          <div className="text-sm leading-[1.85] text-ink-dim">
            <p className="mb-5">{t("about.bio")}</p>
            <p className="mt-8">
              <Btn href={resumeHref} primary arrow external>
                {t("btn.resume")}
              </Btn>
            </p>
          </div>

          <aside className="border border-line-bright bg-bg-2 p-6">
            <SideList heading={t("about.skills")} rows={hardSkills} />
            <SideList
              heading={t("about.langs")}
              rows={languages.map((l) => ({ name: t(l.nameKey), level: l.level }))}
            />
            <SideList heading={t("about.fav")} rows={favoriteGames} />
          </aside>
        </Reveal>

        <Reveal>
          <Slider title={t("ach.title")} cardCount={achievements.length}>
            {achievements.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </Slider>
        </Reveal>
      </Wrap>
    </section>
  )
}
