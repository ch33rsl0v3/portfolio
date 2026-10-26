import type { AboutContent } from "./types"

// ABOUT (#about): long bio, side panel (skills / languages / favorite games).
// Skill and game names are literal; language names and headings are localized.
export const about: AboutContent = {
  bio: {
    en: "I've always wanted to make games. I started with programming and learned 3D modeling. But all of that pales in comparison to game design. It's my passion. Just like my piano, electric guitar, or blueberries. I made this website myself. There are about 10 Easter Eggs here, and I'll be adding more as development progresses. And if you want to check out my resume, enjoy →",
    ru: "Я всегда хотел делать игры. Начинал с программирования, потом учился 3D-моделированию. Но всё это меркнет рядом с геймдизайном. Это моя страсть. Как моё пианино, электрогитара или черника. Этот сайт я сделал сам. Тут около 10 пасхалок, и я буду добавлять ещё по ходу разработки. А если хочешь посмотреть резюме — велкам →",
    es: "Siempre quise hacer videojuegos. Empecé programando y aprendí modelado 3D. Pero todo eso palidece frente al diseño de juegos. Es mi pasión. Como mi piano, mi guitarra eléctrica o los arándanos. Hice esta web yo mismo. Hay unos 10 Easter Eggs por aquí, y añadiré más con el tiempo. Y si quieres ver mi CV, adelante →",
  },
  // one-page PDFs built from resume/resume_{en,ru}.html (resume/build.sh); Spanish page gets the English one
  resumeHref: {
    en: `${import.meta.env.BASE_URL}resume_en.pdf`,
    ru: `${import.meta.env.BASE_URL}resume_ru.pdf`,
    es: `${import.meta.env.BASE_URL}resume_en.pdf`,
  },
  headings: {
    skills: {
      en: "HARD SKILLS & SOFTWARE",
      ru: "НАВЫКИ И СОФТ",
      es: "HABILIDADES Y SOFTWARE",
    },
    languages: { en: "Languages", ru: "Языки", es: "Idiomas" },
    favorites: { en: "Favorite games", ru: "Любимые игры", es: "Juegos favoritos" },
  },
  skills: [
    { name: "Unity", level: "★★★★" },
    { name: "Unreal Engine", level: "★★★" },
    { name: "C#", level: "★★" },
    { name: "CSS // HTML", level: "★★★" },
    { name: "Python", level: "★★★" },
    { name: "Lua", level: "★★" },
    { name: "Blender", level: "★★★★" },
    { name: "ZBrush", level: "★★★" },
    { name: "Substance Painter", level: "★★★" },
  ],
  languages: [
    { name: { en: "Russian", ru: "Русский", es: "Ruso" }, level: "C2" },
    { name: { en: "English", ru: "Английский", es: "Inglés" }, level: "C1" },
    { name: { en: "Spanish", ru: "Испанский", es: "Español" }, level: "A2" },
    { name: { en: "Portuguese", ru: "Португальский", es: "Portugués" }, level: "A2" },
  ],
  favorites: [
    { name: "Baldur’s Gate 3", level: "AA" },
    { name: "The Binding of Isaac", level: "300+ h" },
    { name: "Sekiro: Shadows Die Twice", level: "AA" },
    { name: "Resident Evil Series", level: "110+ h" },
    { name: "Metal Gear Solid Series", level: "150+ h" },
  ],
}
