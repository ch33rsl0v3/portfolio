import type { Social, ContactRow } from "./types"

// Top-nav social links (icon-only).
export const socials: Social[] = [
  { label: "Twitter", href: "https://twitter.com/ch33rsl0v3", icon: "twitter" },
  { label: "Telegram", href: "https://t.me/ch33rsl0v3", icon: "telegram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ch33rsl0v3/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/Ch33rsL0v3", icon: "github" },
  { label: "ArtStation", href: "https://www.artstation.com/ch33rsl0v3", icon: "artstation" },
  { label: "Steam", href: "https://steamcommunity.com/id/ch33rsl0v3/", icon: "steam" },
]

// Contact section (#contact) rows. Brand labels are literal across languages;
// "Email"/"Location" labels and the country value are localized.
const lit = (s: string): { en: string; ru: string; es: string } => ({ en: s, ru: s, es: s })

export const contactRows: ContactRow[] = [
  {
    icon: "mail",
    label: { en: "Email", ru: "Email", es: "Email" },
    value: "notch33rsl0ve@gmail.com",
    href: "mailto:notch33rsl0ve@gmail.com",
  },
  { icon: "telegram", label: lit("Telegram"), value: "@ch33rsl0v3", href: "https://t.me/ch33rsl0v3" },
  { icon: "twitter", label: lit("Twitter"), value: "@ch33rsl0v3", href: "https://twitter.com/ch33rsl0v3" },
  { icon: "github", label: lit("GitHub"), value: "Ch33rsL0v3", href: "https://github.com/Ch33rsL0v3" },
  { icon: "artstation", label: lit("ArtStation"), value: "/ch33rsl0v3", href: "https://www.artstation.com/ch33rsl0v3" },
  { icon: "linkedin", label: lit("LinkedIn"), value: "Ch33rsL0v3", href: "https://www.linkedin.com/in/ch33rsl0v3/" },
  { icon: "steam", label: lit("Steam"), value: "/ch33rsl0v3", href: "https://steamcommunity.com/id/ch33rsl0v3/" },
  {
    icon: "dot",
    label: { en: "Location", ru: "Локация", es: "Ubicación" },
    value: "Russia",
    valueLocalized: { en: "Russia", ru: "Россия", es: "Rusia" },
  },
]
