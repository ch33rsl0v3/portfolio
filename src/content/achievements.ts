import type { Achievement } from "./types"

const ALL = {
  en: "ALL ACHIEVEMENTS",
  ru: "ВСЕ ДОСТИЖЕНИЯ",
  es: "TODOS LOS LOGROS",
}

// PERSONAL ACHIEVEMENTS slider (inside #about). Images as bare filenames.
export const achievements: Achievement[] = [
  { id: "ach01", image: "ach01.jpg", title: "[ Hotline Miami ]", tag: "2019", desc: ALL },
  { id: "ach02", image: "ach02.jpg", title: "[ Hotline Miami 2 ]", tag: "2021", desc: ALL },
  { id: "ach03", image: "ach03.jpg", title: "[ Sekiro: Shadows Die Twice ]", tag: "2020", desc: ALL },
  { id: "ach04", image: "ach04.jpg", title: "[ Elden Ring ]", tag: "2025", desc: ALL },
  { id: "ach05", image: "ach05.jpg", title: "[ Sifu ]", tag: "2023", desc: ALL },
  { id: "ach06", image: "ach06.jpg", title: "[ Cuphead ]", tag: "2022", desc: ALL },
]
