import { useEffect, useState } from "react"
import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { ProjectCard } from "@/components/ProjectCard"
import { Icon } from "@/components/Icons"
import { projects } from "@/content/projects"
import { sectionHeads } from "@/content/ui"
import { tc } from "@/lib/tc"
import { useLang } from "@/lib/useLang"

const PER_PAGE = 4

// split projects into pages of 4
const pages: (typeof projects)[] = []
for (let i = 0; i < projects.length; i += PER_PAGE) {
  pages.push(projects.slice(i, i + PER_PAGE))
}

export function Projects() {
  useLang()

  const totalPages = pages.length
  const [page, setPage] = useState(0)
  const [dir, setDir] = useState(0) // 1 = next, -1 = prev
  const [entered, setEntered] = useState(true)

  const go = (next: number) => {
    if (next < 0 || next >= totalPages || next === page) return
    setDir(next > page ? 1 : -1)
    setEntered(false)
    setPage(next)
  }

  // replay slide-in after page change
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [page])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <section id="projects" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={tc(sectionHeads.projects.title)} meta={tc(sectionHeads.projects.subtitle!)} />

        <Reveal>
          <div
            className={`flex flex-wrap justify-center gap-6 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-x-0 motion-reduce:opacity-100 ${
              entered
                ? "translate-x-0 opacity-100"
                : dir >= 0
                  ? "translate-x-6 opacity-0"
                  : "-translate-x-6 opacity-0"
            }`}
          >
            {pages[page].map((p) => (
              <div key={p.id} className="flex basis-[calc(50%-0.75rem)] max-[800px]:basis-full">
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </Reveal>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(page - 1)}
              disabled={page === 0}
              aria-label="Previous projects"
              className="inline-flex items-center text-ink-dim outline-none transition-colors hover:text-eva-purple focus-visible:text-eva-purple hover:[filter:drop-shadow(0_0_5px_currentColor)] disabled:pointer-events-none disabled:opacity-25"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>

            <span className="font-mono text-xs tracking-[0.2em] text-ink-mute">
              <span className="text-eva-purple">{pad(page + 1)}</span>
              <span className="mx-1.5">/</span>
              {pad(totalPages)}
            </span>

            <button
              type="button"
              onClick={() => go(page + 1)}
              disabled={page === totalPages - 1}
              aria-label="Next projects"
              className="inline-flex items-center text-ink-dim outline-none transition-colors hover:text-eva-purple focus-visible:text-eva-purple hover:[filter:drop-shadow(0_0_5px_currentColor)] disabled:pointer-events-none disabled:opacity-25"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        )}
      </Wrap>
    </section>
  )
}