import type { Project } from "./types"

// PERSONAL PROJECTS (#projects). Media stored as bare filenames.
export const projects: Project[] = [
  {
    id: "msa",
    title: "MUSIC. STRINGS. ACTION!",
    cover: "prj01.jpg",
    // legacy ru/es fell back to en for this card — preserved verbatim
    role: { en: "Father · 2026", ru: "Father · 2026", es: "Father · 2026" },
    desc: {
      en: "A teenage mouse with an electric guitar searches for his missing mother in a 60s “American Dream” city that turns out to be a social experiment. Narrative Roguelite String Battler with adventure elements.",
      ru: "A teenage mouse with an electric guitar searches for his missing mother in a 60s “American Dream” city that turns out to be a social experiment. Narrative Roguelite String Battler with adventure elements.",
      es: "A teenage mouse with an electric guitar searches for his missing mother in a 60s “American Dream” city that turns out to be a social experiment. Narrative Roguelite String Battler with adventure elements.",
    },
    actions: [
      { label: { en: "NOT", ru: "NOT", es: "NOT" }, href: "#" },
      { label: { en: "YET", ru: "YET", es: "YET" }, href: "#" },
    ],
  },
  {
    id: "roll",
    title: "Roll the Luck Next Time",
    video: "vid01.mp4",
    dice: true,
    tag: { en: "Team of 3 · 30 days", ru: "Соло · 30 дней", es: "Solo · 30 días" },
    role: {
      en: "Designer · 2D artist · C# · 2023",
      ru: "Дизайнер · 2D-художник · C# · 2023",
      es: "Diseñador · artista 2D · C# · 2023",
    },
    desc: {
      en: "Roguelike where dice rolls move you, fight enemies, and pay the bills. Built in team of 3 in 30 days. Designed the core loop, level generator, and progression curve.",
      ru: "Рогалик, где броски кубиков двигают тебя, бьют врагов и оплачивают счета. Сделан соло за 30 дней. Спроектировал основной луп, генератор уровней и кривую прогрессии.",
      es: "Roguelike donde los dados te mueven, luchan y pagan las cuentas. Hecho en solitario en 30 días. Diseñé el loop principal, el generador de niveles y la curva de progresión.",
    },
    actions: [
      {
        label: { en: "GDD", ru: "GDD", es: "GDD" },
        href: "https://docs.google.com/document/d/17oyeH3imldELEgknJGIvGNp7SO51-JLQJsSaMBTylEA/edit?usp=sharing",
      },
      {
        label: { en: "Play", ru: "Играть", es: "Jugar" },
        href: "https://ch33rs.itch.io/roll-the-luck-next-time",
      },
    ],
  },
  {
    id: "twt",
    title: "TwT",
    video: "vid02.mp4",
    tag: { en: "Team of 2 · 3 months", ru: "Соло · 14 дней", es: "Solo · 14 días" },
    ascii: `  ┌─────────┐
  │  ╱╲ ╱╲  │
  │ ╱  ╳  ╲ │
  │ ╲  ╳  ╱ │
  │  ╲╱ ╲╱  │
  └─────────┘
   T · w · T`,
    role: {
      en: "Designer · Unity · 2023",
      ru: "Дизайнер · Unity · 2023",
      es: "Diseñador · Unity · 2023",
    },
    desc: {
      en: "Puzzle game built around a single mechanic: rotate the camera to solve a level. Small, weird, finished.",
      ru: "Головоломка вокруг одной механики: вращение камеры решает уровень. Маленькая, странная, законченная.",
      es: "Puzle construido sobre una sola mecánica: rota la cámara para resolver el nivel. Pequeño, raro, terminado.",
    },
    actions: [
      {
        label: { en: "GDD", ru: "GDD", es: "GDD" },
        href: "https://docs.google.com/document/d/147rXtd2zQIqs6l-NS7G5kbPCuRCZ8fQ0jnLNrcHyWiE/edit?usp=sharing",
      },
      {
        label: { en: "Play", ru: "Играть", es: "Jugar" },
        href: "https://ch33rs.itch.io/twt",
      },
    ],
  },
]
