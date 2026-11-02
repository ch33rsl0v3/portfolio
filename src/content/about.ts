import type { AboutContent } from "./types"

// ABOUT (#about): long bio, side panel (skills / languages / favorite games).
// Skill and game names are literal; language names and headings are localized.
export const about: AboutContent = {
  bio: {
    en: "What I love most is inventing mechanics: finding something nobody has tried yet and turning it into a game. Production is how I make sure those ideas actually ship. In my free time I port PC games to my New 3DS XL (C, devkitPro), write my own tools in Python and sculpt characters in Blender and ZBrush. I can play piano and electric guitar, and I adore blueberries. I made this website myself. There are about 10 Easter Eggs here, and I'll keep adding more. And if you want to check out my resume, enjoy →",
    ru: "Больше всего я люблю придумывать механики: находить то, чего ещё никто не пробовал, и превращать это в игру. Продакшн — это то, как я добиваюсь, чтобы эти идеи реально выходили. В свободное время портирую игры с ПК на свою New 3DS XL (C, devkitPro), пишу свои инструменты на Python и леплю персонажей в Blender и ZBrush. Умею играть на пианино и электрогитаре, обожаю чернику. Этот сайт я сделал сам. Тут около 10 пасхалок, и я буду добавлять ещё. А если хочешь посмотреть резюме — велкам →",
    es: "Lo que más me gusta es inventar mecánicas: encontrar algo que nadie ha probado todavía y convertirlo en un juego. La producción es cómo me aseguro de que esas ideas salgan de verdad. En mi tiempo libre porto juegos de PC a mi New 3DS XL (C, devkitPro), programo mis propias herramientas en Python y esculpo personajes en Blender y ZBrush. Sé tocar el piano y la guitarra eléctrica, y adoro los arándanos. Hice esta web yo mismo. Hay unos 10 Easter Eggs por aquí, y añadiré más. Y si quieres ver mi CV, adelante →",
  },
  // the live CV is the Notion page (user, 2026-10-27); PDFs for application forms stay at
  // /portfolio/resume_{en,ru}.pdf (resume/build.sh) and are linked from that page
  resumeHref: "https://app.notion.com/p/Mark-Redfield-CV-a95ce3d833fd83f9b3140137e2564957",
  headings: {
    // work skills moved to the Skills section (2026-11-02); 3D art stays here as a hobby
    skills: {
      en: "3D ART · HOBBY",
      ru: "3D-АРТ · ХОББИ",
      es: "ARTE 3D · HOBBY",
    },
    languages: { en: "Languages", ru: "Языки", es: "Idiomas" },
    favorites: { en: "Favorite games", ru: "Любимые игры", es: "Juegos favoritos" },
  },
  skills: [
    { name: "Blender", level: "★★★★" },
    { name: "ZBrush", level: "★★★" },
    { name: "Substance Painter", level: "★★★" },
  ],
  languages: [
    { name: { en: "Russian", ru: "Русский", es: "Ruso" }, level: "C2" },
    { name: { en: "English", ru: "Английский", es: "Inglés" }, level: "C1" },
    { name: { en: "Spanish", ru: "Испанский", es: "Español" }, level: "A2" },
  ],
  favorites: [
    { name: "Baldur’s Gate 3", level: "AA" },
    { name: "The Binding of Isaac", level: "300+ h" },
    { name: "Sekiro: Shadows Die Twice", level: "AA" },
    { name: "Resident Evil Series", level: "110+ h" },
    { name: "Metal Gear Solid Series", level: "150+ h" },
  ],
}
