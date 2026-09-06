import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { currentFocus } from "@/data"

const COLORS = {
  blue:  { hex: '#00b4ff', bg: 'rgba(0,180,255,.08)',  border: 'rgba(0,180,255,.2)' },
  amber: { hex: '#f5a623', bg: 'rgba(245,166,35,.08)', border: 'rgba(245,166,35,.2)' },
  green: { hex: '#00e5a0', bg: 'rgba(0,229,160,.08)',  border: 'rgba(0,229,160,.2)' },
} as const

export default function Now() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="now" ref={ref} className="py-28 relative overflow-hidden"
      style={{ background: '#0d1825', borderTop: '1px solid #1a2d42', borderBottom: '1px solid #1a2d42' }}>
      <div className="absolute w-[420px] h-[420px] rounded-full top-[-160px] right-[-120px] pointer-events-none"
        style={{ background: '#00b4ff', filter: 'blur(140px)', opacity: 0.05 }} />

      <div className="container mx-auto px-7 relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">
          Right Now <span className="flex-1 h-px bg-[#1a2d42]" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .6, delay: .1 }}
          className="font-syne font-extrabold tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(30px,4vw,46px)' }}>
          What I'm Working On
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .6, delay: .2 }}
          className="text-[15px] text-[#5d7a96] leading-relaxed max-w-xl mb-14">
          Where I am today, stated plainly — what is finished, what is in progress, and what is still only a plan.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentFocus.map((f, i) => {
            const c = COLORS[f.statusColor]
            return (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .6, delay: .25 + i * .12 }}
                className="rounded-2xl p-7 flex flex-col transition-all duration-300"
                style={{ background: '#070e17', border: '1px solid #1a2d42' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2d42'; e.currentTarget.style.transform = 'translateY(0)' }}>

                <div className="inline-flex items-center gap-2 self-start font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
                  style={{ background: c.bg, color: c.hex, border: `1px solid ${c.border}` }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.hex }} />
                  {f.status}
                </div>

                <div className="font-syne font-bold text-[17px] text-[#dde4ed] leading-snug mb-3">{f.title}</div>
                <p className="text-[13.5px] text-[#5d7a96] leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
