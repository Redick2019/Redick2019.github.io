import Nav from "./components/sections/Nav"
import Hero from "./components/sections/Hero"
import Tracks from "./components/sections/Tracks"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import About from "./components/sections/About"
import Events from "./components/sections/Events"
import Contact from "./components/sections/Contact"
import { WaveDivider, ScanLine, BranchDivider } from "./components/ui/effects"

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Nav />
      <Hero />
      <WaveDivider />
      <Tracks />
      <ScanLine />
      <Projects />
      <BranchDivider />
      <Skills />
      <About />
      <Events />
      <Contact />
    </>
  )
}
