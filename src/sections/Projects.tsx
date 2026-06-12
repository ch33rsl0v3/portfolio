import { useTranslation } from "react-i18next"
import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={t("proj.title")} meta={t("proj.subtitle")} />
        <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1">
          {projects.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
