// PERSONAL ACHIEVEMENTS — image + text cards in the slider inside #about.

export interface Achievement {
  id: string
  image: string
  title: string // literal, e.g. "[ Hotline Miami ]"
  tag: string // literal year/type
  descKey: string // i18n key, e.g. "ach.all"
}

export const achievements: Achievement[] = [
  { id: "ach01", image: "images/ach01.jpg", title: "[ Hotline Miami ]", tag: "2019", descKey: "ach.all" },
  { id: "ach02", image: "images/ach02.jpg", title: "[ Hotline Miami 2 ]", tag: "2021", descKey: "ach.all" },
  { id: "ach03", image: "images/ach03.jpg", title: "[ Sekiro: Shadow Die Twice ]", tag: "2020", descKey: "ach.all" },
  { id: "ach04", image: "images/ach04.jpg", title: "[ Elden Ring ]", tag: "2025", descKey: "ach.all" },
  { id: "ach05", image: "images/ach05.jpg", title: "[ Sifu ]", tag: "2023", descKey: "ach.all" },
  { id: "ach06", image: "images/ach06.jpg", title: "[ Cuphead ]", tag: "2022", descKey: "ach.all" },
]
