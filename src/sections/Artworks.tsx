import { useTranslation } from "react-i18next"
import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { ArtworkItem } from "@/components/ArtworkItem"
import { artworks } from "@/data/artworks"

export function Artworks() {
  const { t } = useTranslation()
  return (
    <section id="artworks" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={t("art.title")} meta={t("art.subtitle")} />
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
