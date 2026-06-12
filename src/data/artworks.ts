// ARTWORKS — horizontal-scroll gallery in the #artworks section.

export interface Artwork {
  id: string
  // Real image card, or the final "see archive" placeholder card.
  kind: "image" | "archive"
  href: string
  title: string // literal title or i18n key (see titleKey)
  titleKey?: string // i18n key (used by the archive card -> "art.archive")
  captionKey?: string // i18n key for caption (e.g. "art.aw01")
  caption?: string // literal caption (e.g. "artstation.com/ch33rsl0v3")
  image?: string
  // i18n key for the placeholder block (contains <br/> -> render with Trans)
  placeholderKey?: string
}

export const artworks: Artwork[] = [
  {
    id: "aw01",
    kind: "image",
    href: "https://www.artstation.com/artwork/5vzZ0O",
    title: "Rough Work 01",
    captionKey: "art.aw01",
    image: "images/aw01.jpg",
  },
  {
    id: "aw02",
    kind: "image",
    href: "https://www.artstation.com/artwork/obkwzm",
    title: "Saint Goddess",
    captionKey: "art.aw02",
    image: "images/aw02.jpg",
  },
  {
    id: "archive",
    kind: "archive",
    href: "https://www.artstation.com/ch33rsl0v3",
    title: "",
    titleKey: "art.archive",
    caption: "artstation.com/ch33rsl0v3",
    placeholderKey: "art.more",
  },
]
