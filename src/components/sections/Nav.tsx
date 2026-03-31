import { useEffect, useState } from "react"


const links = ["projects", "skills", "about", "contact"]

export default function Nav() {
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      let cur = ""
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 90) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-7 h-14"
        style={{ background:"rgba(7,14,23,.92)", backdropFilter:"blur(20px)", borderBottom:"1px solid #1a2d42" }}>
        <a href="#home" className="font-mono text-[15px] text-[#dde4ed] no-underline">
          <span className="text-[#00b4ff]">&gt;</span> Redick, Chun-Yin Ng
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-9 list-none">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`}
                className="font-mono text-[11px] tracking-widest uppercase no-underline transition-colors duration-200"
                style={{ color: active === l ? "#00b4ff" : "#5d7a96" }}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-wide text-[#00e5a0]">
          <span className="w-2 h-2 rounded-full bg-[#00e5a0]" style={{ animation:"pulseDot 2.2s ease infinite" }} />
          OPEN_TO_WORK
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu">
          <span className="w-5 h-px bg-[#dde4ed] block transition-all" style={{ transform: menuOpen ? "rotate(45deg) translate(1px,4px)" : "none" }} />
          <span className="w-5 h-px bg-[#dde4ed] block transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="w-5 h-px bg-[#dde4ed] block transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translate(1px,-4px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 py-4 px-7 flex flex-col gap-4"
          style={{ background:"rgba(7,14,23,.97)", borderBottom:"1px solid #1a2d42" }}>
          {links.map((l) => (
            <a key={l} href={`#${l}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[13px] tracking-widest uppercase text-[#5d7a96] no-underline py-2 hover:text-[#00b4ff] transition-colors">
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
