import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { BackgroundBeams, PacketBars } from "../ui/effects"
import { personal } from "@/data"

const LINES = [
  '// DFIR Graduate — open to work',
  '{',
  '  "name": "Redick Chun-Yin Ng",',
  '  "degree": "BSc Cyber Security & DFIR (2:1)",',
  '  "location": "Cheltenham, UK",',
  '  "status": "open_to_work",',
  '  "tools": ["AXIOM", "EnCase", "Volatility3"],',
  '  "focus": "DFIR · Cloud · Space Sector"',
  '}',
]

function TerminalTypewriter() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    el.innerHTML = ''
    let li = 0, ci = 0, html = ''
    const color = (line: string) => {
      if (line.startsWith('//')) return `<span style="color:#5d7a96">${line}</span>`
      if (line === '{' || line === '}') return `<span style="color:#dde4ed">${line}</span>`
      return line
        .replace(/"([^"]+)":/g, '<span style="color:#f5a623">"$1"</span>:')
        .replace(/: "([^"]+)"/g, ': <span style="color:#00b4ff">"$1"</span>')
        .replace(/: \[([^\]]+)\]/g, (_,p) => {
          const items = p.split(',').map((s:string) => `<span style="color:#00b4ff">${s.trim()}</span>`).join(', ')
          return `: [${items}]`
        })
        .replace(/"open_to_work"/g, '<span style="color:#00e5a0">"open_to_work"</span>')
    }
    const cursor = '<span style="display:inline-block;width:8px;height:14px;background:#00b4ff;vertical-align:text-bottom;margin-left:2px;animation:blink .9s step-end infinite"></span>'
    const tick = () => {
      if (li >= LINES.length) { el.innerHTML = html + cursor; return }
      const line = LINES[li]
      if (ci <= line.length) {
        el.innerHTML = html + color(line.slice(0, ci) + (ci < line.length ? '▌' : '')) + cursor
        ci++; setTimeout(tick, ci === line.length + 1 ? 55 : 16)
      } else {
        html += color(line) + '<br>'; li++; ci = 0; setTimeout(tick, 75)
      }
    }
    const t = setTimeout(tick, 700)
    return () => clearTimeout(t)
  }, [])
  return <div ref={ref} className="font-mono text-[13px] leading-loose p-6" style={{minHeight:220}}/>
}

function GlitchName() {
  const ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const CHARS = 'X4K9#@!$%01DFIR'
    const TARGET = 'Redick'
    let iter = 0
    const id = setInterval(() => {
      el.textContent = TARGET.split('').map((c, i) =>
        i < iter ? c : CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join('')
      if (iter >= TARGET.length) { clearInterval(id); el.textContent = TARGET }
      iter += 0.35
    }, 38)
    return () => clearInterval(id)
  }, [])
  return (
    <h1 ref={ref} className="font-syne font-extrabold leading-none tracking-tighter mb-3 text-[#dde4ed]"
      style={{fontSize:'clamp(56px,8vw,96px)'}}>
      Redick
    </h1>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      <BackgroundBeams />
      <PacketBars />
      <div className="container mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
              transition={{duration:.7,delay:.2}}
              className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#00b4ff] mb-6">
              <span className="w-7 h-px bg-[#00b4ff] flex-shrink-0"/>
              Digital Forensics &amp; Incident Response
            </motion.div>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.3}}>
              <GlitchName />
            </motion.div>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
              transition={{duration:.7,delay:.5}}
              className="font-mono text-[13px] text-[#5d7a96] tracking-wide mb-7">
              {personal.role} · {personal.location}
            </motion.p>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
              transition={{duration:.7,delay:.65}}
              className="text-[15px] text-[#5d7a96] leading-relaxed max-w-md mb-10">
              {personal.tagline}
            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
              transition={{duration:.7,delay:.8}} className="flex gap-4 flex-wrap">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-mono text-[13px] font-medium bg-[#00b4ff] text-black transition-all hover:-translate-y-0.5 hover:bg-[#29c0ff] hover:shadow-[0_10px_32px_rgba(0,180,255,.35)]">
                View Projects →
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-mono text-[13px] text-[#dde4ed] border border-[#1a2d42] transition-all hover:border-[#00b4ff] hover:text-[#00b4ff] hover:-translate-y-0.5">
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
            transition={{duration:.8,delay:.4}} className="relative">
            <div className="absolute -top-5 -right-3 font-mono text-[11px] text-[#00e5a0] px-4 py-2.5 rounded-lg tracking-wide z-10"
              style={{background:'#0d1825',border:'1px solid rgba(0,229,160,.3)',boxShadow:'0 8px 24px rgba(0,0,0,.4)'}}>
              ✓ Available for hire
            </div>
            <div className="rounded-xl overflow-hidden"
              style={{background:'#0d1825',border:'1px solid #1a2d42',boxShadow:'0 32px 80px rgba(0,0,0,.6),0 0 0 1px rgba(0,180,255,.08)'}}>
              <div className="flex items-center gap-2 px-4 py-3"
                style={{background:'#111f30',borderBottom:'1px solid #1a2d42'}}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/>
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/>
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/>
                <span className="font-mono text-[11px] text-[#5d7a96] ml-2">~ profile.json</span>
              </div>
              <TerminalTypewriter />
            </div>
            <div className="absolute -bottom-4 -left-5 font-mono text-[11px] text-[#f5a623] px-4 py-2.5 rounded-lg tracking-wide"
              style={{background:'#0d1825',border:'1px solid rgba(245,166,35,.3)',boxShadow:'0 8px 24px rgba(0,0,0,.4)'}}>
              ⚡ Cyber Helpline · Active
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
