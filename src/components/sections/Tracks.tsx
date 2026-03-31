import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const tracks = [
  {
    num: "01 / CAREER",
    emoji: "🔬",
    title: "DFIR Work",
    desc: "Digital Forensics & Incident Response — AI-assisted log investigation, packet analysis, memory forensics, and case studies demonstrating real investigative methodology and evidential standards.",
    color: "#00b4ff",
    glow: "rgba(0,180,255,.06)",
    border: "rgba(0,180,255,.25)",
    dir: -1,
  },
  {
    num: "02 / HOBBY",
    emoji: "⚗️",
    title: "Life Labs",
    desc: "Real-world problems solved with AI-assisted development — from civic technology tools to everyday utilities. Proof that technology should work for people, not the other way around.",
    color: "#f5a623",
    glow: "rgba(245,166,35,.06)",
    border: "rgba(245,166,35,.3)",
    dir: 1,
  },
]

export default function Tracks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-28"
      style={{ background: "#0d1825", borderTop: "1px solid #1a2d42", borderBottom: "1px solid #1a2d42" }}>
      <div className="container mx-auto px-7">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">
          What I do <span className="flex-1 h-px bg-[#1a2d42]" />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-extrabold tracking-tighter leading-tight mb-12"
          style={{ fontSize: "clamp(30px,4vw,46px)" }}>
          Two Tracks.<br />One Mission.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tracks.map((t, i) => (
            <motion.div key={t.title}
              initial={{ opacity: 0, x: t.dir * 28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="relative rounded-2xl p-10 overflow-hidden transition-all duration-300"
              style={{ background: `linear-gradient(140deg,${t.glow} 0%,#070e17 55%)`, border: "1px solid #1a2d42" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = t.border}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1a2d42"}>
              <div className="absolute w-44 h-44 rounded-full top-[-40px] right-[-40px] pointer-events-none"
                style={{ background: t.color, filter: "blur(70px)", opacity: 0.1 }} />
              <div className="font-mono text-[11px] tracking-widest text-[#5d7a96] mb-5">{t.num}</div>
              <span className="text-3xl mb-4 block">{t.emoji}</span>
              <div className="font-syne font-bold text-xl mb-3" style={{ color: t.color }}>{t.title}</div>
              <p className="text-[14px] text-[#5d7a96] leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
