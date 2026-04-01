import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { stats, experience } from "@/data"

function TimelineDraw({ inView }: { inView: boolean }) {
  const lineRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!inView || !lineRef.current) return
    lineRef.current.style.transition = 'height 1.6s cubic-bezier(.4,0,.2,1)'
    lineRef.current.style.height = '100%'
  }, [inView])

  return (
    <div className="flex gap-6">
      {/* Timeline rail */}
      <div className="flex flex-col items-center flex-shrink-0" style={{paddingTop:4}}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#00b4ff] flex-shrink-0"/>
        <div className="w-px flex-1 relative overflow-hidden" style={{background:'#1a2d42',minHeight:120}}>
          <div ref={lineRef} className="absolute top-0 left-0 right-0 bg-[#00b4ff]" style={{height:'0%'}}/>
        </div>
        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{background:'#0d1825',border:'2px solid #00b4ff'}}/>
      </div>

      {/* Entries */}
      <div className="flex flex-col justify-between gap-8 flex-1 pb-1">
        {experience.map((e, i) => (
          <motion.div key={e.role}
            initial={{opacity:0,x:-16}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.6,delay:.3+i*.2}}
            className="rounded-xl p-5"
            style={{background:'#0d1825',border:'1px solid #1a2d42'}}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="font-syne font-bold text-[16px] text-[#dde4ed]">{e.role}</div>
                <div className="font-mono text-[12px] text-[#00b4ff] mt-1">{e.org}</div>
              </div>
              <span className="font-mono text-[10px] text-[#5d7a96] flex-shrink-0 mt-1">{e.period}</span>
            </div>
            <ul className="space-y-2">
              {e.points.map((pt, j) => (
                <li key={j} className="flex gap-2 text-[13px] text-[#5d7a96] leading-relaxed">
                  <span className="text-[#00b4ff] flex-shrink-0 mt-0.5">›</span>{pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, {once:true,margin:'-60px'})

  return (
    <section id="about" ref={ref} className="py-28" style={{background:'#070e17'}}>
      <div className="container mx-auto px-7">
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">
          Background <span className="flex-1 h-px bg-[#1a2d42]"/>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start mb-20">
          <div>
            <motion.h2 initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.6}}
              className="font-syne font-extrabold tracking-tighter leading-tight mb-7"
              style={{fontSize:'clamp(30px,4vw,46px)'}}>About Me</motion.h2>

            <motion.p initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.6,delay:.1}}
              className="text-[15px] text-[#5d7a96] leading-[1.88] mb-5">
              Originally from <strong className="text-[#dde4ed]">Hong Kong</strong>, I relocated to the United Kingdom to pursue a career in cyber security and digital forensics. I hold a <strong className="text-[#dde4ed]">BSc (Hons) in Cyber Security and Digital Forensics (2:1)</strong> from the University of the West of England, Bristol — a programme that provided rigorous, hands-on training across the full spectrum of DFIR disciplines.
            </motion.p>
            <motion.p initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.6,delay:.2}}
              className="text-[15px] text-[#5d7a96] leading-[1.88] mb-5">
              Across three years of structured forensic investigation, I progressed from foundational case analysis through live memory acquisition, ultimately managing a <strong className="text-[#dde4ed]">complete multi-platform forensic lifecycle</strong> — spanning a laptop endpoint, Microsoft 365 cloud environment, and mobile device. I currently serve as a <strong className="text-[#dde4ed]">Helpline Responder Trainee at The Cyber Helpline</strong>, applying investigative triage and documentation skills in a live operational environment.
            </motion.p>
            <motion.p initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.6,delay:.3}}
              className="text-[15px] text-[#5d7a96] leading-[1.88]">
              I have a strong interest in the intersection of <strong className="text-[#dde4ed]">AI, cloud environments, and the space sector</strong> — actively seeking opportunities where digital forensics and emerging technology converge. I also build practical AI-assisted tools that address real-world challenges, demonstrating initiative and technical breadth beyond traditional DFIR.
            </motion.p>
          </div>

          <motion.div initial={{opacity:0,x:28}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.65,delay:.2}} className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.l} className="rounded-xl p-5 text-center"
                style={{background:'#0d1825',border:'1px solid #1a2d42'}}>
                <span className="block font-syne font-extrabold text-3xl mb-1"
                  style={{color:s.green?'#00e5a0':'#00b4ff'}}>{s.n}</span>
                <div className="font-mono text-[10px] tracking-wide text-[#5d7a96]">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Experience with animated timeline */}
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.3}}>
          <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-8 flex items-center gap-3">
            Experience <span className="flex-1 h-px bg-[#1a2d42]"/>
          </div>
          <TimelineDraw inView={inView} />
        </motion.div>
      </div>
    </section>
  )
}
