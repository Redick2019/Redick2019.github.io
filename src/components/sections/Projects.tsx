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

function HashVerifier() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as any, {once:true, margin:"-40px"})
  const [hash, setHash] = useState('')
  const [done, setDone] = useState(false)
  const FAKE = 'a3f8c2e1b7d94f56ef2c18a3f8c2e1b7d94f56ef2c18a3f8c2e1b7d94f560012'

  useEffect(() => {
    if (!inView) return
    let i = 0
    const id = setInterval(() => {
      if (i >= FAKE.length) { clearInterval(id); setHash(FAKE); setDone(true); return }
      setHash(FAKE.slice(0, i) + '_')
      i++
    }, 20)
    return () => clearInterval(id)
  }, [inView])

  return (
    <div ref={ref} className="mx-6 mb-3 rounded-md p-3" style={{background:'rgba(0,180,255,.05)',border:'1px solid rgba(0,180,255,.12)'}}>
      <div className="font-mono text-[9px] text-[#5d7a96] mb-1 tracking-widest">SHA-256 EVIDENCE HASH</div>
      <div className="font-mono text-[10px] text-[#00b4ff] break-all leading-relaxed">{hash || '...'}</div>
      {done && (
        <div className="font-mono text-[9px] text-[#00e5a0] mt-1.5 tracking-wide">✓ INTEGRITY VERIFIED</div>
      )}
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, {once:true, margin:"-60px"})
  const words = useCountUp(7071, inView, 1800)
  const refs = useCountUp(29, inView, 1400)
  const phases = useCountUp(6, inView, 900)

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
          style={{fontSize:'clamp(30px,4vw,46px)'}}>Projects</motion.h2>
        <motion.p initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.2}}
          className="text-[15px] text-[#5d7a96] leading-relaxed max-w-lg mb-14">
          DFIR investigations and degree work alongside AI-built tools for everyday challenges.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const hoverBorder = p.type==='dfir' ? 'rgba(0,180,255,.25)' : 'rgba(245,166,35,.3)'
            const badgeStyle = p.type==='dfir'
              ? {background:'rgba(0,180,255,.08)',color:'#00b4ff',border:'1px solid rgba(0,180,255,.15)'}
              : {background:'rgba(245,166,35,.1)',color:'#f5a623',border:'1px solid rgba(245,166,35,.2)'}
            const isCloud = p.title === 'Cloud Forensics Research'

            return (
              <motion.div key={p.title}
                initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:.6,delay:.15+i*.1}}
                className="flex flex-col rounded-2xl overflow-hidden"
                style={{background:'#0d1825',border:'1px solid #1a2d42',
                  opacity:p.dim?0.42:1,pointerEvents:p.dim?'none':'auto',
                  transition:'transform .25s,box-shadow .25s,border-color .25s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=hoverBorder;e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 20px 52px rgba(0,0,0,.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='#1a2d42';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>

                <div className="flex justify-between items-start px-6 pt-6">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="font-mono text-[10px] tracking-wide px-3 py-1 rounded-full" style={badgeStyle}>{p.badge}</span>
                </div>

                {p.wip && (
                  <div className="mx-6 mt-3 flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[10px] text-[#00b4ff] tracking-wide"
                    style={{background:'rgba(0,180,255,.06)',border:'1px solid rgba(0,180,255,.14)'}}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00b4ff]" style={{animation:'pulseDot 1.5s ease infinite'}}/>
                    WORK IN PROGRESS
                  </div>
                )}

                {/* SHA hash verifier on cloud forensics card */}
                {isCloud && <HashVerifier />}

                {/* Evidence counters on cloud forensics card */}
                {isCloud && (
                  <div className="mx-6 mb-2 grid grid-cols-3 gap-2">
                    {[{v:words,l:'words'},{v:refs,l:'references'},{v:phases,l:'phases'}].map(s=>(
                      <div key={s.l} className="rounded-md p-2 text-center" style={{background:'#111f30',border:'1px solid #1a2d42'}}>
                        <div className="font-syne font-bold text-[16px] text-[#00b4ff]">{s.v.toLocaleString()}</div>
                        <div className="font-mono text-[9px] text-[#5d7a96] mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex-1 px-6 py-4">
                  <div className="font-syne font-bold text-[17px] mb-2">{p.title}</div>
                  <p className="text-[14px] text-[#5d7a96] leading-relaxed mb-4">{p.desc}</p>
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
                      <a key={l.label} href={l.href}
                        target={l.href!=='#'?'_blank':undefined} rel="noreferrer"
                        className="font-mono text-[11px] text-[#5d7a96] no-underline flex items-center gap-1 transition-colors"
                        onMouseEnter={e=>e.currentTarget.style.color=l.amber?'#f5a623':'#00b4ff'}
                        onMouseLeave={e=>e.currentTarget.style.color='#5d7a96'}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
                {p.dim && (
                  <div className="px-6 py-3.5" style={{borderTop:'1px solid #1a2d42'}}>
                    <span className="font-mono text-[11px] text-[#5d7a96]">⏳ Coming Soon</span>
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
