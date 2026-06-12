// Resolve a bare media filename to a public URL under the Vite base path.
// Video extensions go to /videos/, everything else to /images/.
const VIDEO_RE = /\.(mp4|webm|ogg|mov|m4v)$/i

export const asset = (name: string) => {
  const dir = VIDEO_RE.test(name) ? "videos" : "images"
  return `${import.meta.env.BASE_URL}${dir}/${name}`
}
