import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/content/projects"
import { sectionHeads } from "@/content/ui"
import { tc } from "@/lib/tc"
import { useLang } from "@/lib/useLang"

export function Projects() {
  useLang()
  return (
    <section id="projects" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={tc(sectionHeads.projects.title)} meta={tc(sectionHeads.projects.subtitle!)} />
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
