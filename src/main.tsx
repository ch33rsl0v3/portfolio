import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import "@/lib/i18n"
import App from "./App.tsx"
import { asset } from "@/lib/asset"

// Inject the section background image with the correct base path so .bg-pattern
// resolves it under /portfolio/ (see src/index.css).
document.documentElement.style.setProperty("--bg-image", `url("${asset("bg.jpg")}")`)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
