import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { projects } from "@/data"

function useCountUp(target: number, trigger: boolean, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.round(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, target, duration])
  return val
}

const ACCENT = {
  dfir: { color: '#00b4ff', hover: 'rgba(0,180,255,.25)', badge: {background:'rgba(0,180,255,.08)',color:'#00b4ff',border:'1px solid rgba(0,180,255,.15)'} },
  grc:  { color: '#00e5a0', hover: 'rgba(0,229,160,.3)',  badge: {background:'rgba(0,229,160,.08)',color:'#00e5a0',border:'1px solid rgba(0,229,160,.2)'} },
  life: { color: '#f5a623', hover: 'rgba(245,166,35,.3)', badge: {background:'rgba(245,166,35,.1)',color:'#f5a623',border:'1px solid rgba(245,166,35,.2)'} },
} as const

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, {once:true, margin:"-60px"})
  const words = useCountUp(7071, inView, 1800)
  const phaseCount = useCountUp(6, inView, 900)

  return (
    <section id="projects" ref={ref} className="py-28" style={{background:'#070e17'}}>
      <div className="container mx-auto px-7">
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">
          Work <span className="flex-1 h-px bg-[#1a2d42]"/>
        </motion.div>
        <motion.h2 initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.1}}
          className="font-syne font-extrabold tracking-tighter leading-tight mb-4"
          style={{fontSize:'clamp(30px,4vw,46px)'}}>Projects &amp; Research</motion.h2>
        <motion.p initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.2}}
          className="text-[15px] text-[#5d7a96] leading-relaxed max-w-xl mb-5">
          Governance and compliance work, forensic coursework and research from my degree, alongside tools I build independently.
        </motion.p>
        <motion.p initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.25}}
          className="font-mono text-[11px] text-[#5d7a96] leading-relaxed max-w-xl mb-14 rounded-lg px-4 py-3"
          style={{background:'#0d1825',border:'1px solid #1a2d42'}}>
          <span className="text-[#00b4ff]">ℹ</span> Where work was produced in a group, my individual contribution is stated separately.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const accent = ACCENT[p.type]

            return (
              <motion.div key={p.title}
                initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:.6,delay:.15+i*.1}}
                className="flex flex-col rounded-2xl overflow-hidden"
                style={{background:'#0d1825',border:'1px solid #1a2d42',
                  transition:'transform .25s,box-shadow .25s,border-color .25s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=accent.hover;e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 20px 52px rgba(0,0,0,.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='#1a2d42';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>

                <div className="flex justify-between items-start gap-3 px-6 pt-6">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="font-mono text-[10px] tracking-wide px-3 py-1 rounded-full" style={accent.badge}>{p.badge}</span>
                </div>

                {p.wip && (
                  <div className="mx-6 mt-3 flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[10px] text-[#00b4ff] tracking-wide"
                    style={{background:'rgba(0,180,255,.06)',border:'1px solid rgba(0,180,255,.14)'}}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b4ff]" style={{animation:'pulseDot 1.5s ease infinite'}}/>
                    WORK IN PROGRESS
                  </div>
                )}

                <div className="flex-1 px-6 py-4">
                  <div className="font-syne font-bold text-[17px] mb-1.5">{p.title}</div>

                  {p.team && (
                    <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#5d7a96] mb-3">
                      <span style={{color:accent.color}}>◈</span> {p.team}
                    </div>
                  )}

                  <p className="text-[14px] text-[#5d7a96] leading-relaxed mb-4">{p.desc}</p>

                  {/* Dissertation counters */}
                  {p.counters && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[{v:words.toLocaleString(),l:'words'},{v:phaseCount,l:'phase framework'}].map(s=>(
                        <div key={s.l} className="rounded-md p-2 text-center" style={{background:'#111f30',border:'1px solid #1a2d42'}}>
                          <div className="font-syne font-bold text-[16px] text-[#00b4ff]">{s.v}</div>
                          <div className="font-mono text-[9px] text-[#5d7a96] mt-0.5">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Self-designed framework phases */}
                  {p.phases && (
                    <div className="rounded-lg p-4 mb-4" style={{background:'#111f30',border:'1px solid #1a2d42'}}>
                      <div className="font-mono text-[9px] tracking-[2px] uppercase mb-3" style={{color:accent.color}}>
                        Framework I designed
                      </div>
                      <ol className="space-y-1.5">
                        {p.phases.map((ph, pi)=>(
                          <li key={pi} className="flex gap-2.5 text-[12px] text-[#5d7a96] leading-snug">
                            <span className="font-mono text-[10px] flex-shrink-0 mt-0.5" style={{color:accent.color}}>
                              {String(pi+1).padStart(2,'0')}
                            </span>
                            {ph}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* My individual contribution — kept distinct from group output */}
                  {p.contribution && (
                    <div className="rounded-lg p-4 mb-4"
                      style={{background:'rgba(0,180,255,.04)',borderLeft:`3px solid ${accent.color}`}}>
                      <div className="font-mono text-[9px] tracking-[2px] uppercase mb-2.5" style={{color:accent.color}}>
                        {p.team ? 'My contribution' : 'How I built it'}
                      </div>
                      <ul className="space-y-2">
                        {p.contribution.map((c, ci)=>(
                          <li key={ci} className="flex gap-2 text-[12.5px] text-[#5d7a96] leading-relaxed">
                            <span className="flex-shrink-0 mt-0.5" style={{color:accent.color}}>›</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Scope limitation */}
                  {p.caveat && (
                    <div className="flex gap-2 rounded-md px-3 py-2.5 mb-4 font-mono text-[10.5px] text-[#5d7a96] leading-relaxed"
                      style={{background:'rgba(245,166,35,.05)',border:'1px solid rgba(245,166,35,.15)'}}>
                      <span className="text-[#f5a623] flex-shrink-0">⚠</span>{p.caveat}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t=>(
                      <span key={t} className="font-mono text-[10px] px-2 py-1 rounded text-[#5d7a96]"
                        style={{background:'#111f30',border:'1px solid #1a2d42'}}>{t}</span>
                    ))}
                  </div>
                </div>

                {p.links.length>0 && (
                  <div className="flex gap-5 px-6 py-3.5" style={{borderTop:'1px solid #1a2d42'}}>
                    {p.links.map(l=>(
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                        className="font-mono text-[11px] text-[#5d7a96] no-underline flex items-center gap-1 transition-colors"
                        onMouseEnter={e=>e.currentTarget.style.color=l.amber?'#f5a623':'#00b4ff'}
                        onMouseLeave={e=>e.currentTarget.style.color='#5d7a96'}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
