import { asset } from "@/lib/asset"
import { tc, rich } from "@/lib/tc"
import { useLang } from "@/lib/useLang"
import type { Artwork } from "@/content/types"

export function ArtworkItem({ art }: { art: Artwork }) {
  useLang() // subscribe to language changes

  return (
    <a
      href={art.href}
      target="_blank"
      rel="noopener"
      className="block w-[320px] flex-none cursor-pointer snap-start overflow-hidden border border-line bg-bg-2 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-eva-purple hover:no-underline max-[800px]:w-[260px]"
    >
      <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-bg-3 max-[800px]:h-[220px]">
        {art.kind === "image" && art.image ? (
          <img src={asset(art.image)} alt={tc(art.title)} className="h-full w-full object-cover" />
        ) : (
          <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
            {art.placeholder ? rich(art.placeholder) : null}
          </div>
        )}
      </div>
      <div className="border-t border-line p-[1rem_1.25rem]">
        <h4 className="mb-1 font-display text-base tracking-[-0.01em] text-ink">{tc(art.title)}</h4>
        <p className="text-[11px] uppercase tracking-[0.1em] text-ink-mute">{tc(art.caption)}</p>
      </div>
    </a>
  )
}
