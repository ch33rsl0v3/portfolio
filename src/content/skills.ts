import type { SkillsContent } from "./types"

// SKILLS (#skills): right after the hero. Four discipline blocks + the tools
// list with stars (the user keeps the stars). Game design goes first on purpose;
// market reading lives inside Data, management got its own block (user, 2026-11-02).
export const skills: SkillsContent = {
  blocks: [
    {
      code: "design",
      title: { en: "Game design", ru: "Геймдизайн", es: "Diseño de juegos" },
      desc: {
        en: "Core loops, F2P economy, onboarding and live-ops events. Reworked onboarding for **+14% D1**, designed an event that lifted **DAU +20%**. GDDs, economy specs, event calendars.",
        ru: "Кор-лупы, F2P-экономика, онбординг и live-ops ивенты. Переделал онбординг — **+14% D1**, придумал ивент, который поднял **DAU на 20%**. GDD, экономические спеки, календари ивентов.",
        es: "Core loops, economía F2P, onboarding y eventos live-ops. Rediseñé el onboarding para **+14% D1** y diseñé un evento que subió el **DAU un 20%**. GDDs, specs de economía, calendarios de eventos.",
      },
    },
    {
      code: "production",
      title: { en: "Game production", ru: "Продакшн игр", es: "Producción de juegos" },
      desc: {
        en: "Concept to launch to live ops, on several titles at once. Roadmaps, scope, milestones, go-to-market. **50+ launches in 6 months** on a reusable game pipeline.",
        ru: "От концепта до релиза и live ops, сразу на нескольких тайтлах. Роадмапы, скоуп, майлстоуны, go-to-market. **50+ запусков за 6 месяцев** на переиспользуемом пайплайне.",
        es: "Del concepto al lanzamiento y live ops, en varios títulos a la vez. Roadmaps, alcance, hitos, go-to-market. **50+ lanzamientos en 6 meses** con un pipeline reutilizable.",
      },
    },
    {
      code: "management",
      title: { en: "Team management", ru: "Управление командой", es: "Gestión de equipos" },
      desc: {
        en: "Manage **15+ people** across parallel teams. Hiring, interviews, onboarding. Production standards, clear handoffs and process tuning so the team ships more with the same people.",
        ru: "Управляю **15+ людьми** в нескольких параллельных командах. Найм, собеседования, онбординг. Производственные стандарты, понятные передачи задач и настройка процессов — чтобы та же команда выпускала больше.",
        es: "Gestiono a **más de 15 personas** en equipos paralelos. Contratación, entrevistas, onboarding. Estándares de producción, traspasos claros y ajuste de procesos para que el mismo equipo lance más.",
      },
    },
    {
      code: "data",
      title: { en: "Data & live ops", ru: "Данные и live ops", es: "Datos y live ops" },
      desc: {
        en: "D1/D7, session length, payer conversion, ARPDAU. Thumbnail A/B tests, paid-ads tests with kill/keep gates **backtested on 45 launches**. Daily market scan of thousands of games on **a scanner I built myself**.",
        ru: "D1/D7, длина сессии, конверсия в платящих, ARPDAU. A/B-тесты тамбнейлов, тесты рекламы с правилами «закрыть / оставить», **проверенными на 45 запусках**. Каждый день смотрю рынок — тысячи игр — на **сканере, который написал сам**.",
        es: "D1/D7, duración de sesión, conversión a pago, ARPDAU. A/B tests de miniaturas y pruebas de anuncios con reglas de cerrar/mantener **validadas en 45 lanzamientos**. Escaneo diario del mercado — miles de juegos — con **un escáner que hice yo mismo**.",
      },
    },
  ],
  toolsHeading: { en: "Tools & code", ru: "Инструменты и код", es: "Herramientas y código" },
  // order (user): languages → engines → workflow
  tools: [
    { name: "Python", level: "★★★" },
    { name: "SQL", level: "★" },
    { name: "C#", level: "★★" },
    { name: "CSS // HTML · React", level: "★★★" },
    { name: "Roblox Studio · Luau", level: "★★★" },
    { name: "Unity", level: "★★★★" },
    { name: "Unreal Engine", level: "★★★" },
    { name: "C · devkitPro", level: "★" },
    { name: "Notion", level: "★★★★" },
    { name: "AI coding agents", level: "★★★★" },
  ],
}
