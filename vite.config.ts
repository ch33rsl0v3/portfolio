import path from "node:path"
import { execSync } from "node:child_process"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// Short hash of the commit being built — shown in the footer ("build a1b2c3d").
// CI exposes GITHUB_SHA; locally ask git; no git at all -> "dev".
function buildHash() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7)
  try {
    return execSync("git rev-parse --short=7 HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim()
  } catch {
    return "dev"
  }
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __BUILD__: JSON.stringify(buildHash()),
  },
  // Served from https://ch33rsl0v3.github.io/portfolio/ via GitHub Pages.
  base: "/portfolio/",
  server: {
    // Bind IPv4 explicitly. On Windows "localhost" can resolve to ::1 only,
    // leaving the browser unable to connect on 127.0.0.1. Forcing 127.0.0.1
    // makes http://localhost:5173 reachable. open: auto-launches the /portfolio/
    // path so you never land on the bare root (which the base path doesn't serve).
    host: "127.0.0.1",
    port: 5173,
    open: "/portfolio/",
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
