import type { Project } from "./types"

// PERSONAL PROJECTS (#projects). Media stored as bare filenames.
export const projects: Project[] = [
  {
    id: "msa",
    title: "MUSIC. STRINGS. ACTION!",
    cover: "prj01.jpg",
    role: { en: "Father · 2026", ru: "Отец · 2026", es: "Padre · 2026" },
    desc: {
      en: "A teenage mouse with an electric guitar searches for his missing mother in a 60s “American Dream” city that turns out to be a social experiment. Narrative Roguelite String Battler with adventure elements.",
      ru: "Мышонок-подросток с электрогитарой ищет пропавшую мать в городе 60-х в духе «американской мечты», который оказывается социальным экспериментом. Нарративный рогалайт-баттлер на струнах с элементами приключений.",
      es: "Un ratón adolescente con una guitarra eléctrica busca a su madre desaparecida en una ciudad sesentera del «Sueño Americano» que resulta ser un experimento social. Battler de cuerdas roguelite narrativo con elementos de aventura.",
    },
    actions: [
      { label: { en: "Play", ru: "Играть", es: "Jugar" }, href: "#", primary: true },
      { label: { en: "Git", ru: "Git", es: "Git" }, href: "https://github.com/3303AJFA/MSA-Demo", arrow: true },
      { label: { en: "DOC", ru: "DOC", es: "DOC" }, href: "#", arrow: true },
    ],
  },
  {
    id: "roll",
    title: "Roll the Luck Next Time",
    video: "vid01.mp4",
    dice: true,
    tag: { en: "Team of 3 · 30 days", ru: "Команда из 3 · 30 дней", es: "Equipo de 3 · 30 días" },
    role: {
      en: "Designer · 2D artist · C# · 2023",
      ru: "Дизайнер · 2D-художник · C# · 2023",
      es: "Diseñador · artista 2D · C# · 2023",
    },
    desc: {
      en: "Roguelike where dice rolls move you, fight enemies, and pay the bills. Built in team of 3 in 30 days. Designed the core loop, level generator, and progression curve.",
      ru: "Рогалик, где броски кубиков двигают тебя, бьют врагов и оплачивают счета. Сделан командой из 3 за 30 дней. Спроектировал основной луп, генератор уровней и кривую прогрессии.",
      es: "Roguelike donde los dados te mueven, luchan y pagan las cuentas. Hecho en equipo de 3 en 30 días. Diseñé el loop principal, el generador de niveles y la curva de progresión.",
    },
    actions: [
      { label: { en: "Play", ru: "Играть", es: "Jugar" }, href: "https://ch33rs.itch.io/roll-the-luck-next-time", primary: true },
      { label: { en: "Git", ru: "Git", es: "Git" }, href: "https://github.com/ch33rsl0v3/RTLNT", arrow: true },
      {
        label: { en: "DOC", ru: "DOC", es: "DOC" },
        href: "https://docs.google.com/document/d/17oyeH3imldELEgknJGIvGNp7SO51-JLQJsSaMBTylEA/edit?usp=sharing",
        arrow: true,
      },
    ],
  },
  {
    id: "twt",
    title: "TwT",
    video: "vid02.mp4",
    tag: { en: "Team of 2 · 3 months", ru: "Команда из 2 · 3 месяца", es: "Equipo de 2 · 3 meses" },
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
      { label: { en: "Play", ru: "Играть", es: "Jugar" }, href: "https://ch33rs.itch.io/twt", primary: true },
      { label: { en: "Git", ru: "Git", es: "Git" }, href: "https://github.com/3303AJFA/TwT", arrow: true },
      {
        label: { en: "DOC", ru: "DOC", es: "DOC" },
        href: "https://docs.google.com/document/d/147rXtd2zQIqs6l-NS7G5kbPCuRCZ8fQ0jnLNrcHyWiE/edit?usp=sharing",
        arrow: true,
      },
    ],
  },
]