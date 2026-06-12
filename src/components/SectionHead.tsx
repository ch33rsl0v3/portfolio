import { Reveal } from "@/components/Reveal"

interface SectionHeadProps {
  title: string
  meta?: string
}

// The `// TITLE  ·············· meta` header used by every section.
export function SectionHead({ title, meta }: SectionHeadProps) {
  return (
    <Reveal className="mb-12 flex flex-wrap items-baseline justify-between gap-8">
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.3em] text-ink before:text-eva-purple before:content-['//_']">
        {title}
      </h2>
      {meta && <span className="text-[11px] tracking-[0.1em] text-ink-mute">{meta}</span>}
    </Reveal>
  )
}
