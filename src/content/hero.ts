import type { HeroContent } from "./types"

export const hero: HeroContent = {
  name: ["Mark", "Redfield"],
  handle: "ch33rsl0v3",
  aka: { en: "a.k.a.", ru: "он же", es: "alias" },
  tag: {
    en: "Each man sacrifices himself for his ambitions.",
    ru: "Каждый человек жертвует собой ради достижения собственных целей.",
    es: "Todo hombre se sacrifica por sus ambiciones",
  },
  role: {
    en: "**Game Producer & Game Designer** with 2+ years shipping live titles end-to-end. Experienced in driving retention through data-informed design, managing a cross-functional team of 9, and running live ops at scale.",
    ru: "**Геймпродюсер и геймдизайнер** с опытом 2+ года: запускаю живые тайтлы от концепта до пострелизной поддержки. Гоняю ретеншн через дата-информированный дизайн, веду кросс-функциональную команду из 9 человек и запускаю live ops на масштабе.",
    es: "**Productor y diseñador de videojuegos** con más de 2 años lanzando títulos en vivo de principio a fin. Mejoro retención mediante diseño basado en datos, lidero un equipo multidisciplinario de 9 personas y opero live ops a escala.",
  },
  stats: [
    {
      label: { en: "Years developing", ru: "Лет в разработке", es: "Años de desarrollo" },
      value: { en: "2", ru: "2", es: "2" },
      sup: "+",
      sub: { en: "games & features", ru: "игры и фичи", es: "juegos y funciones" },
    },
    {
      label: { en: "Games shipped", ru: "Игр выпущено", es: "Juegos lanzados" },
      value: { en: "15", ru: "15", es: "15" },
      sup: "+",
      sub: { en: "incl. solo & team", ru: "соло и в команде", es: "solo y en equipo" },
    },
    {
      label: { en: "Cross-functional", ru: "Кросс-функционально", es: "Multidisciplinario" },
      value: { en: "9", ru: "9", es: "9" },
      sub: { en: "specialists led", ru: "специалистов вёл", es: "especialistas liderados" },
    },
    {
      label: { en: "Rip and Tear", ru: "Rip and Tear", es: "Rip and Tear" },
      value: { en: "yes", ru: "yes", es: "sí" },
      sub: { en: "Until it's Done.", ru: "Until it's Done.", es: "Hasta el final." },
    },
  ],
}
