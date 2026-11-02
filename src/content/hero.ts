import type { HeroContent } from "./types"

export const hero: HeroContent = {
  name: ["Mark", "Redfield"],
  handle: "ch33rsl0v3",
  aka: { en: "a.k.a.", ru: "он же", es: "alias" },
  tag: {
    en: "Each man sacrifices himself for his ambitions.",
    ru: "Каждый человек жертвует собой ради достижения собственных целей.",
    es: "Todo hombre se sacrifica por sus ambiciones.",
  },
  role: {
    en: "**Game Producer & Game Designer** making games since 2023, shipping live titles end-to-end on Roblox: titles I produced peaked at 1.6M DAU and earned 50M+ Robux. Experienced in driving retention through data-informed design, running launches on analytics, managing 15+ people across parallel titles, and running live ops at scale.",
    ru: "**Геймпродюсер и геймдизайнер**: делаю игры с 2023 года, запускаю живые тайтлы в Roblox от концепта до пострелизной поддержки — мои тайтлы доходили до 1.6M DAU и заработали 50M+ Robux. Гоняю ретеншн через дата-информированный дизайн, веду запуски на аналитике, управляю 15+ людьми на нескольких тайтлах параллельно и запускаю live ops на масштабе.",
    es: "**Productor y diseñador de videojuegos**: hago juegos desde 2023 y lanzo títulos en vivo en Roblox de principio a fin — los títulos que produje alcanzaron 1.6M DAU y generaron más de 50M Robux. Mejoro retención mediante diseño basado en datos, dirijo lanzamientos con analítica, gestiono a más de 15 personas en varios títulos a la vez y opero live ops a escala.",
  },
  stats: [
    {
      label: { en: "Peak DAU", ru: "Пик DAU", es: "Pico de DAU" },
      value: "1.6M",
      sub: { en: "on titles I produced", ru: "на моих тайтлах", es: "en mis títulos" },
    },
    // squares = 1 scale + 3 management (user, 2026-11-02: Robux means nothing outside Roblox)
    {
      label: { en: "People managed", ru: "Людей в управлении", es: "Personas a cargo" },
      value: "15",
      sup: "+",
      sub: { en: "across parallel titles", ru: "на нескольких тайтлах сразу", es: "en varios títulos a la vez" },
    },
    {
      label: { en: "Launches", ru: "Запусков", es: "Lanzamientos" },
      value: "50",
      sup: "+",
      sub: { en: "in 6 months at my current studio", ru: "за 6 месяцев в текущей студии", es: "en 6 meses en mi estudio actual" },
    },
    {
      // the site's slogan (user's pick, 2026-11-02) — deliberately English everywhere
      label: { en: "Work mode", ru: "Режим работы", es: "Modo de trabajo" },
      value: "RIP & TEAR",
      sub: "until it's done",
    },
  ],
}
