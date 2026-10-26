import { asset } from "@/lib/asset"
import { tc } from "@/lib/tc"
import { useSpotlight } from "@/lib/useSpotlight"
import type { Achievement } from "@/content/types"

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const spot = useSpotlight()
  return (
    <article
      ref={spot}
      data-card
      className="spotlight flex w-[280px] flex-none snap-start flex-col overflow-hidden border border-line bg-bg transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-eva-purple max-[800px]:w-[240px]"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,var(--color-bg-3),var(--color-bg-2)),repeating-linear-gradient(45deg,var(--color-line)_0_1px,transparent_1px_14px)]">
        <img src={asset(achievement.image)} alt={achievement.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-[0.9rem_1.1rem]">
        <h5 className="mb-0.5 font-display text-[15px] leading-[1.2] tracking-[-0.01em] text-ink">
          {achievement.title}
        </h5>
        <div className="mb-2 text-[10px] uppercase tracking-[0.15em] text-eva-purple">{achievement.tag}</div>
        <p className="text-xs leading-[1.55] text-ink-dim">{tc(achievement.desc)}</p>
      </div>
    </article>
  )
}
