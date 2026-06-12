import { Trans, useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { Btn } from "@/components/Btn"
import { Slider } from "@/components/Slider"
import type { Contract, ContractProject } from "@/data/contracts"

function ProjectCard({ project }: { project: ContractProject }) {
  const { t } = useTranslation()
  return (
    <article
      data-card
      className="flex w-[280px] flex-none snap-start flex-col border border-line bg-bg p-[1rem_1.1rem] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-eva-purple max-[800px]:w-[240px]"
    >
      <h5 className="mb-1 font-display text-base tracking-[-0.01em] text-ink">{project.title}</h5>
      <div className="mb-2.5 text-[10px] uppercase tracking-[0.15em] text-eva-purple">{project.tag}</div>
      <p className="mb-3 flex-grow text-xs leading-[1.6] text-ink-dim">{t(project.descKey)}</p>
      <div className="flex flex-wrap gap-[0.85rem] text-[11px]">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener"
            className="uppercase tracking-[0.1em] text-eva-green"
          >
            → {link.labelKey ? t(link.labelKey) : link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export function ContractCard({ contract }: { contract: Contract }) {
  const { t } = useTranslation()
  const active = contract.status === "active"

  return (
    <article
      className={cn(
        "relative border bg-bg-2",
        active ? "border-eva-purple" : "border-line-bright",
      )}
    >
      {/* active sheen overlay (legacy .contract.active::before) */}
      {active && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(162,108,255,0.06)_0%,transparent_60%)]"
        />
      )}

      <div className="flex items-center justify-between border-b border-line bg-bg-3 px-6 py-[0.85rem] font-mono text-[11px] uppercase tracking-[0.15em]">
        <div className="font-medium text-eva-purple">
          {t("exp.contract")} <span className="mx-1.5 text-ink-mute">//</span> {contract.id}
        </div>
        {active ? (
          <div className="border border-eva-green bg-[rgba(156,255,0,0.06)] px-2.5 py-[3px] text-[10px] font-medium tracking-[0.2em] text-eva-green">
            <span className="status-dot mr-1.5 !shadow-none" />
            {t("exp.status.active")}
          </div>
        ) : (
          <div className="border border-line-bright px-2.5 py-[3px] text-[10px] font-medium tracking-[0.2em] text-ink-mute">
            {t("exp.status.fulfilled")}
          </div>
        )}
      </div>

      <div className="relative z-[1] px-6 py-7">
        <h3 className="mb-1.5 font-display text-2xl font-bold leading-[1.15] tracking-[-0.01em] text-ink">
          {t(contract.roleKey)}
        </h3>
        <div className="mb-1.5 text-xs uppercase tracking-[0.1em] text-ink-dim">
          {contract.party} <span className="mx-2 text-ink-mute">⟷</span>{" "}
          <b className="font-medium text-eva-purple">{contract.company}</b>
        </div>
        <div className="mb-5 border-b border-dashed border-line pb-5 text-[11px] uppercase tracking-[0.1em] text-ink-mute">
          <Trans i18nKey={contract.effectiveKey} components={{ b: <b className="font-medium text-ink" /> }} />
        </div>

        <ul className="mb-6 list-none">
          {contract.termKeys.map((key) => (
            <li
              key={key}
              className="relative py-[5px] pl-6 text-[13px] leading-[1.65] text-ink-dim before:absolute before:left-0 before:font-display before:font-bold before:text-eva-purple before:content-['§']"
            >
              {t(key)}
            </li>
          ))}
        </ul>

        <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
          {contract.metrics.map((m) => (
            <div key={m.labelKey} className="border border-line bg-bg px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.1em] text-ink-mute">{t(m.labelKey)}</div>
              <div className="mt-0.5 font-display text-lg font-bold text-eva-green">{m.value}</div>
            </div>
          ))}
        </div>

        {contract.projects.length > 0 && (
          <Slider title={t("exp.shipped")} cardCount={contract.projects.length}>
            {contract.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </Slider>
        )}

        {contract.commentary && <div className="commentary">{contract.commentary}</div>}

        <div className="mt-6 flex flex-wrap gap-3">
          {contract.actions.map((a) => (
            <Btn key={a.labelKey} href={a.href} primary={a.primary} arrow={a.primary} external={a.primary}>
              {t(a.labelKey)}
            </Btn>
          ))}
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute opacity-60">
          {t(contract.sealKey)}
        </div>
      </div>
    </article>
  )
}
