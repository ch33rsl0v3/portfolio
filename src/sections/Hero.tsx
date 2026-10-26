import { Wrap } from "@/components/Wrap"
import { GlitchName } from "@/components/GlitchName"
import { hero } from "@/content/hero"
import { tc, rich } from "@/lib/tc"

export function Hero() {
  return (
    <section className="bg-pattern relative border-b border-line py-28 pb-20 max-[800px]:py-16 max-[800px]:pb-12">
      <Wrap>
        <div className="mb-6 text-[11px] uppercase tracking-[0.2em] text-ink-mute before:text-eva-purple before:content-['>_']">
          {tc(hero.tag)}
        </div>

        <h1 className="mb-8 font-display text-[clamp(48px,9vw,120px)] font-black leading-[0.92] tracking-[-0.02em] text-ink">
          <GlitchName lines={hero.name} />
          <span className="mt-6 block font-mono text-[0.18em] font-normal tracking-[0.15em] text-eva-green">
            {tc(hero.aka)} {hero.handle}
          </span>
        </h1>

        <p className="mb-12 max-w-[580px] font-mono text-base text-ink-dim">{rich(hero.role)}</p>

        <div className="grid grid-cols-4 gap-px border border-line-bright bg-line max-[800px]:grid-cols-2">
          {hero.stats.map((s, i) => (
            <div key={i} className="bg-bg-2 px-6 py-5">
              <div className="mb-2 text-[10px] uppercase tracking-[0.15em] text-ink-mute">{tc(s.label)}</div>
              <div className="mb-1.5 font-display text-[28px] font-bold leading-none text-eva-green">
                {tc(s.value)}
                {s.sup && <span className="text-[0.6em] text-ink-mute">{s.sup}</span>}
              </div>
              <div className="text-[11px] text-ink-dim">{tc(s.sub)}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
