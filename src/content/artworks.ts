import type { Artwork } from "./types"

// ARTWORKS gallery (#artworks). Images stored as bare filenames.
export const artworks: Artwork[] = [
  {
    id: "aw01",
    kind: "image",
    href: "https://www.artstation.com/artwork/5vzZ0O",
    image: "aw01.jpg",
    title: { en: "Rough Work 01", ru: "Rough Work 01", es: "Rough Work 01" },
    caption: {
      en: "Japanese demon · 2023",
      ru: "Японский демон · 2023",
      es: "Demonio japonés · 2023",
    },
  },
  {
    id: "aw02",
    kind: "image",
    href: "https://www.artstation.com/artwork/obkwzm",
    image: "aw02.jpg",
    title: { en: "Saint Goddess", ru: "Saint Goddess", es: "Saint Goddess" },
    caption: {
      en: "Forest nymph study",
      ru: "Этюд лесной нимфы",
      es: "Estudio de ninfa del bosque",
    },
  },
  {
    id: "archive",
    kind: "archive",
    href: "https://www.artstation.com/ch33rsl0v3",
    title: { en: "See full archive", ru: "Полный архив", es: "Ver archivo completo" },
    caption: {
      en: "artstation.com/ch33rsl0v3",
      ru: "artstation.com/ch33rsl0v3",
      es: "artstation.com/ch33rsl0v3",
    },
    placeholder: {
      en: "[ ⨯ ]\nmore on ArtStation\n↗",
      ru: "[ ⨯ ]\nбольше на ArtStation\n↗",
      es: "[ ⨯ ]\nmás en ArtStation\n↗",
    },
  },
]
