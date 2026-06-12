import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { ArtworkItem } from "@/components/ArtworkItem"
import { artworks } from "@/content/artworks"
import { sectionHeads } from "@/content/ui"
import { tc } from "@/lib/tc"
import { useLang } from "@/lib/useLang"

export function Artworks() {
  useLang()
  return (
    <section id="artworks" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={tc(sectionHeads.artworks.title)} meta={tc(sectionHeads.artworks.subtitle!)} />
        <Reveal className="relative">
          <div className="gallery-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5">
            {artworks.map((art) => (
              <ArtworkItem key={art.id} art={art} />
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  )
}
