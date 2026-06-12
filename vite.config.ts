import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
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
