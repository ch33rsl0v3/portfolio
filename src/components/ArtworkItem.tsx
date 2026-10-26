import { asset } from "@/lib/asset"
import { tc, rich } from "@/lib/tc"
import { useSpotlight } from "@/lib/useSpotlight"
import type { Artwork } from "@/content/types"
import { ui } from "@/content/ui"

export function ArtworkItem({ art }: { art: Artwork }) {
  const spot = useSpotlight<HTMLAnchorElement>()

  return (
    <a
      ref={spot}
      href={art.href}
      target="_blank"
      rel="noopener"
      className="spotlight group relative block w-[320px] flex-none cursor-pointer snap-start overflow-hidden border border-line bg-bg-2 outline-none transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-eva-purple hover:no-underline hover:shadow-[0_0_20px_-4px_var(--eva-purple)] focus-visible:border-eva-purple focus-visible:shadow-[0_0_20px_-4px_var(--eva-purple)] max-[800px]:w-[260px]"
    >
      <div className="relative h-[280px] overflow-hidden bg-bg-3 max-[800px]:h-[220px]">
        {art.kind === "image" && art.image ? (
          <>
            <img
              src={asset(art.image)}
              alt={tc(art.title)}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden [background:repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.18)_3px)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(to_top,rgba(0,0,0,0.7),transparent)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-eva-green [filter:drop-shadow(0_0_4px_currentColor)]">
                {tc(ui.artworkView)}
              </span>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute transition-colors duration-200 group-hover:text-eva-green">
            {art.placeholder ? rich(art.placeholder) : null}
          </div>
        )}
      </div>

      <div className="border-t border-line p-[1rem_1.25rem]">
        <h4 className="mb-1 font-display text-base tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-eva-purple">
          {tc(art.title)}
        </h4>
        <p className="text-[11px] uppercase tracking-[0.1em] text-ink-mute">{tc(art.caption)}</p>
      </div>
    </a>
  )
}