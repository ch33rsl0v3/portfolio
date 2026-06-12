import { Nav } from "@/components/Nav"
import { Marquee } from "@/components/Marquee"
import { Hero } from "@/sections/Hero"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { Artworks } from "@/sections/Artworks"
import { About } from "@/sections/About"
import { Contact } from "@/sections/Contact"
import { Footer } from "@/sections/Footer"

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Marquee />
        <Artworks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
