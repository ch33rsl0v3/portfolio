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
    en: "**Game Producer & Game Designer** making games since 2023, shipping live titles end-to-end on Roblox: titles I produced peaked at 1.6M DAU and earned 45M+ Robux. Experienced in driving retention through data-informed design, running launches on analytics, managing a cross-functional team of 9, and running live ops at scale.",
    ru: "**Геймпродюсер и геймдизайнер**: делаю игры с 2023 года, запускаю живые тайтлы в Roblox от концепта до пострелизной поддержки — мои тайтлы доходили до 1.6M DAU и заработали 45M+ Robux. Гоняю ретеншн через дата-информированный дизайн, веду запуски на аналитике, руковожу кросс-функциональной командой из 9 человек и запускаю live ops на масштабе.",
    es: "**Productor y diseñador de videojuegos**: hago juegos desde 2023 y lanzo títulos en vivo en Roblox de principio a fin — los títulos que produje alcanzaron 1.6M DAU y generaron más de 45M Robux. Mejoro retención mediante diseño basado en datos, dirijo lanzamientos con analítica, lidero un equipo multidisciplinario de 9 personas y opero live ops a escala.",
  },
  stats: [
    {
      label: { en: "Peak DAU", ru: "Пик DAU", es: "Pico de DAU" },
      value: "1.6M",
      sub: { en: "on titles I produced", ru: "на моих тайтлах", es: "en mis títulos" },
    },
    {
      label: { en: "Games shipped", ru: "Игр выпущено", es: "Juegos lanzados" },
      value: "60",
      sup: "+",
      sub: { en: "launches & live titles", ru: "запуски и живые тайтлы", es: "lanzamientos y títulos en vivo" },
    },
    {
      label: { en: "Cross-functional", ru: "Кросс-функционально", es: "Multidisciplinario" },
      value: "9",
      sub: { en: "specialists led", ru: "специалистов вёл", es: "especialistas liderados" },
    },
    {
      label: { en: "Robux earned", ru: "Заработано Robux", es: "Robux generados" },
      value: "45M",
      sup: "+",
      sub: { en: "across my titles", ru: "на моих тайтлах", es: "en mis títulos" },
    },
  ],
}
