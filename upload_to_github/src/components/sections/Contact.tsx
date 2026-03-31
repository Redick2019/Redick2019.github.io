import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { personal } from "@/data"

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:"-60px" })

  const links = [
    { label:"✉ Email", href:`mailto:${personal.email}` },
    { label:"in LinkedIn", href:personal.linkedin },
    { label:"⌥ GitHub", href:personal.github },
  ]

  return (
    <>
      <section id="contact" ref={ref} className="py-28 text-center" style={{ background:"#070e17" }}>
        <div className="container mx-auto px-7">
          <motion.div initial={{ opacity:0, y:28 }} animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.65 }}
            className="relative rounded-2xl py-16 px-10 max-w-xl mx-auto overflow-hidden"
            style={{ background:"#0d1825", border:"1px solid #1a2d42" }}>
            <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
              style={{ background:"#00b4ff", filter:"blur(100px)", opacity:0.05 }}/>
            <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">Get in Touch</div>
            <h2 className="font-syne font-extrabold tracking-tighter mb-4" style={{ fontSize:"clamp(28px,4vw,40px)" }}>
              Let's Talk.
            </h2>
            <p className="text-[15px] text-[#5d7a96] leading-relaxed max-w-sm mx-auto mb-8">
              Open to DFIR analyst roles, IR positions, and collaborations. Also happy to chat about forensics, AI tooling, or cloud security.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {links.map(l => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-[12px] no-underline transition-all"
                  style={{ background:"#111f30", border:"1px solid #1a2d42", color:"#5d7a96" }}
                  onMouseEnter={e => { e.currentTarget.style.color="#00b4ff"; e.currentTarget.style.borderColor="rgba(0,180,255,.4)"; e.currentTarget.style.background="rgba(0,180,255,.06)"; e.currentTarget.style.transform="translateY(-2px)" }}
                  onMouseLeave={e => { e.currentTarget.style.color="#5d7a96"; e.currentTarget.style.borderColor="#1a2d42"; e.currentTarget.style.background="#111f30"; e.currentTarget.style.transform="translateY(0)" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="flex justify-between items-center px-7 py-6 font-mono text-[11px] text-[#5d7a96] flex-wrap gap-2"
        style={{ borderTop:"1px solid #1a2d42" }}>
        <span>© 2026 {personal.name} — React + Vite · GitHub Pages</span>
        <a href="#home" className="text-[#5d7a96] no-underline transition-colors hover:text-[#00b4ff]">↑ back_to_top</a>
      </footer>
    </>
  )
}
