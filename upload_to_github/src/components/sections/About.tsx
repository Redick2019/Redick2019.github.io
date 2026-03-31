import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { stats, certifications, experience } from "@/data"

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:"-60px" })

  return (
    <section id="about" ref={ref} className="py-28" style={{ background:"#070e17" }}>
      <div className="container mx-auto px-7">
        <motion.div initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">
          Background <span className="flex-1 h-px bg-[#1a2d42]"/>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start mb-20">
          <div>
            <motion.h2 initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.6 }}
              className="font-syne font-extrabold tracking-tighter leading-tight mb-7"
              style={{ fontSize:"clamp(30px,4vw,46px)" }}>About Me</motion.h2>

            <motion.p initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.6, delay:0.1 }}
              className="text-[15px] text-[#5d7a96] leading-[1.88] mb-5">
              <strong className="text-[#dde4ed]">BSc (Hons) Cyber Security and Digital Forensics graduate</strong> from UWE Bristol (2:1), currently working as a Helpline Responder Trainee at <strong className="text-[#dde4ed]">The Cyber Helpline</strong> while actively seeking my first DFIR analyst role.
            </motion.p>
            <motion.p initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.6, delay:0.2 }}
              className="text-[15px] text-[#5d7a96] leading-[1.88] mb-5">
              Three years of structured forensic investigation — from case analysis through live memory acquisition to a <strong className="text-[#dde4ed]">full multi-platform forensic lifecycle</strong> across laptop endpoint, M365 cloud, and mobile using Magnet AXIOM, EnCase, and Autopsy. Delivered expert-witness testimony in a simulated adversarial court proceeding.
            </motion.p>
            <motion.p initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.6, delay:0.3 }}
              className="text-[15px] text-[#5d7a96] leading-[1.88]">
              My dissertation explored <strong className="text-[#dde4ed]">digital forensics in cloud environments</strong>, including a 6-phase framework covering GDPR, the U.S. CLOUD Act, and chain-of-custody standards. I'm also passionate about using AI as a development partner to build practical tools that solve real-world problems.
            </motion.p>
          </div>
          <motion.div initial={{ opacity:0, x:28 }} animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.65, delay:0.2 }} className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.l} className="rounded-xl p-5 text-center"
                style={{ background:"#0d1825", border:"1px solid #1a2d42" }}>
                <span className="block font-syne font-extrabold text-3xl mb-1"
                  style={{ color: s.green ? "#00e5a0" : "#00b4ff" }}>{s.n}</span>
                <div className="font-mono text-[10px] tracking-wide text-[#5d7a96]">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6, delay:0.3 }} className="mb-20">
          <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-8 flex items-center gap-3">
            Experience <span className="flex-1 h-px bg-[#1a2d42]"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {experience.map(e => (
              <div key={e.role} className="rounded-xl p-6"
                style={{ background:"#0d1825", border:"1px solid #1a2d42" }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="font-syne font-bold text-[16px] text-[#dde4ed]">{e.role}</div>
                    <div className="font-mono text-[12px] text-[#00b4ff] mt-1">{e.org}</div>
                  </div>
                  <span className="font-mono text-[10px] text-[#5d7a96] flex-shrink-0 mt-1">{e.period}</span>
                </div>
                <ul className="space-y-2">
                  {e.points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-[13px] text-[#5d7a96] leading-relaxed">
                      <span className="text-[#00b4ff] flex-shrink-0 mt-0.5">›</span>{pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6, delay:0.4 }}>
          <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-8 flex items-center gap-3">
            Certifications <span className="flex-1 h-px bg-[#1a2d42]"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map(c => (
              <div key={c.name} className="rounded-xl p-4 flex items-start gap-3"
                style={{ background:"#0d1825", border:`1px solid ${c.active ? "#1a2d42" : "rgba(0,180,255,.2)"}` }}>
                <span className="text-lg flex-shrink-0 mt-0.5">{c.active ? "✅" : "⏳"}</span>
                <div>
                  <div className="font-mono text-[12px] text-[#dde4ed] leading-snug mb-1">{c.name}</div>
                  <div className="font-mono text-[10px] text-[#5d7a96]">{c.issuer} · {c.year}</div>
                  {!c.active && <div className="font-mono text-[10px] text-[#00b4ff] mt-1">Scheduled</div>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
