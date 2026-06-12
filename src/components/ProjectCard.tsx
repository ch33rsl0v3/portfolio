import { useTranslation } from "react-i18next"
import { Btn } from "@/components/Btn"
import { asset } from "@/lib/asset"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const { cover } = project

  return (
    <article className="group relative flex flex-col border border-line bg-bg-2 transition-colors hover:border-eva-purple">
      <div className="relative flex h-[220px] items-center justify-center overflow-hidden border-b border-line bg-[linear-gradient(135deg,var(--color-bg-3)_0%,var(--color-bg)_100%)]">
        {cover.tagKey && (
          <span className="absolute right-3 top-3 z-10 text-[10px] uppercase tracking-[0.1em] text-ink-mute">
            {t(cover.tagKey)}
          </span>
        )}

        {cover.dice && (
          <span className="inline-block font-display text-[80px] font-black text-eva-purple transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[360deg] group-hover:scale-110">
            ⚀
          </span>
        )}

        {cover.ascii && (
          <pre className="select-none whitespace-pre font-mono text-[7px] leading-[1.1] text-eva-purple opacity-70">
            {cover.ascii}
          </pre>
        )}

        {cover.image && (
          <img
            src={asset(cover.image)}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {cover.video && (
          <video
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover opacity-100 transition-opacity duration-[400ms] group-hover:opacity-0"
            src={asset(cover.video)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-1.5 font-display text-xl font-bold tracking-[-0.01em] text-ink">{project.title}</h3>
        <div className="mb-4 text-[10px] uppercase tracking-[0.15em] text-ink-mute">{t(project.roleKey)}</div>
        <p className="mb-5 text-[13px] leading-[1.6] text-ink-dim">{t(project.descKey)}</p>
        <div className="flex flex-wrap gap-3 text-[11px]">
          {project.actions.map((a, i) => (
            <Btn key={a.labelKey} href={a.href} external arrow={i === 0}>
              {t(a.labelKey)}
            </Btn>
          ))}
        </div>
      </div>
    </article>
  )
}
