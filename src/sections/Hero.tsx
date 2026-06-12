import { Trans, useTranslation } from "react-i18next"
import { Wrap } from "@/components/Wrap"
import { stats } from "@/data/about"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="bg-pattern relative border-b border-line py-28 pb-20 max-[800px]:py-16 max-[800px]:pb-12">
      <Wrap>
        <div className="mb-6 text-[11px] uppercase tracking-[0.2em] text-ink-mute before:text-eva-purple before:content-['>_']">
          {t("hero.tag")}
        </div>

        <h1 className="mb-8 font-display text-[clamp(48px,9vw,120px)] font-black leading-[0.92] tracking-[-0.02em] text-ink">
          Mark
          <br />
          Redfield
          <span className="mt-6 block font-mono text-[0.18em] font-normal tracking-[0.15em] text-eva-green">
            {t("hero.aka")} ch33rsl0v3
          </span>
        </h1>

        <p className="mb-12 max-w-[580px] font-mono text-base text-ink-dim">
          <Trans i18nKey="hero.role" components={{ b: <b className="font-medium text-ink" /> }} />
        </p>

        <div className="grid grid-cols-4 gap-px border border-line-bright bg-line max-[800px]:grid-cols-2">
          {stats.map((s) => (
            <div key={s.labelKey} className="bg-bg-2 px-6 py-5">
              <div className="mb-2 text-[10px] uppercase tracking-[0.15em] text-ink-mute">
                {t(s.labelKey)}
              </div>
              <div className="mb-1.5 font-display text-[28px] font-bold leading-none text-eva-green">
                {s.valueKey ? t(s.valueKey) : s.value}
                {s.sup && <span className="text-[0.6em] text-ink-mute">{s.sup}</span>}
              </div>
              <div className="text-[11px] text-ink-dim">{t(s.subKey)}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
