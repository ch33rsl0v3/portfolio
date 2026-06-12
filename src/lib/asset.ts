// Resolve a public asset path against the Vite base (/portfolio/ in prod),
// so /images/... and /videos/... keep working under GitHub Pages.
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`
