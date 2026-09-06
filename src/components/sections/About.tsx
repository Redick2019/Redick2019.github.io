import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { personal, stats, experience, education, certifications } from "@/data"

/** Renders **bold** segments from the bio strings so copy lives in one place. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**")
          ? <strong key={i} className="text-[#dde4ed] font-medium">{part.slice(2, -2)}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  )
}

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
      <div className="flex flex-col justify-between gap-5 flex-1 pb-1">
        {experience.map((e, i) => (
          <motion.div key={e.role}
            initial={{opacity:0,x:-16}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.6,delay:.3+i*.15}}
            className="rounded-xl p-5"
            style={{background:'#0d1825',border:'1px solid #1a2d42'}}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-syne font-bold text-[16px] text-[#dde4ed]">{e.role}</span>
                  {e.meta && (
                    <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{background:'rgba(0,229,160,.08)',color:'#00e5a0',border:'1px solid rgba(0,229,160,.2)'}}>
                      {e.meta}
                    </span>
                  )}
                </div>
                <div className="font-mono text-[12px] text-[#00b4ff] mt-1">{e.org}</div>
              </div>
              <span className="font-mono text-[10px] text-[#5d7a96] flex-shrink-0 mt-1 text-right">{e.period}</span>
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
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

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

            {personal.bio.map((para, i) => (
              <motion.p key={i} initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:.6,delay:.1+i*.1}}
                className="text-[15px] text-[#5d7a96] leading-[1.88] mb-5 last:mb-0">
                <RichText text={para}/>
              </motion.p>
            ))}
          </div>

          <motion.div initial={{opacity:0,x:28}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.65,delay:.2}} className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.l} className="rounded-xl p-5 text-center"
                style={{background:'#0d1825',border:'1px solid #1a2d42'}}>
                <span className="block font-syne font-extrabold text-3xl mb-1"
                  style={{color:s.green?'#00e5a0':'#00b4ff'}}>{s.n}</span>
                <div className="font-mono text-[10px] tracking-wide text-[#5d7a96] leading-snug">{s.l}</div>
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

        {/* Education */}
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.35}} className="mt-20">
          <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-8 flex items-center gap-3">
            Education <span className="flex-1 h-px bg-[#1a2d42]"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((ed, i) => (
              <motion.div key={ed.qualification}
                initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:.5,delay:.45+i*.08}}
                className="rounded-xl p-5 transition-all duration-200"
                style={{background:'#0d1825',border:'1px solid #1a2d42'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(0,180,255,.3)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='#1a2d42'}}>
                <div className="font-mono text-[10px] text-[#5d7a96] mb-2.5">{ed.period}</div>
                <div className="font-syne font-bold text-[14px] text-[#dde4ed] leading-snug mb-2">{ed.qualification}</div>
                <div className="font-mono text-[11px] text-[#00b4ff] leading-snug">{ed.org}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.4}} className="mt-20">
          <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-8 flex items-center gap-3">
            Certifications <span className="flex-1 h-px bg-[#1a2d42]"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <motion.div key={c.name}
                initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:.5,delay:.5+i*.07}}
                className="rounded-xl p-5 flex flex-col gap-4 transition-all duration-200"
                style={{background:'#0d1825',border:'1px solid #1a2d42'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=c.held?'rgba(0,229,160,.3)':'rgba(245,166,35,.3)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='#1a2d42'}}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-syne font-bold text-[14px] text-[#dde4ed] leading-snug">{c.name}</div>
                    <div className="font-mono text-[11px] text-[#5d7a96] mt-1.5">{c.issuer}</div>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap"
                    style={c.held
                      ? {background:'rgba(0,229,160,.08)',color:'#00e5a0',border:'1px solid rgba(0,229,160,.2)'}
                      : {background:'rgba(245,166,35,.08)',color:'#f5a623',border:'1px solid rgba(245,166,35,.2)'}}>
                    {c.year}
                  </span>
                </div>
                {c.image && (
                  <button onClick={()=>setLightbox(c.image!)}
                    className="block w-full cursor-zoom-in mt-auto" aria-label={`View ${c.name} certificate`}>
                    <img src={c.image} alt={`${c.name} certificate`} loading="lazy"
                      className="w-full h-28 object-cover object-top rounded-lg transition-opacity hover:opacity-80"
                      style={{border:'1px solid #1a2d42'}}
                      onError={e=>{(e.currentTarget.parentElement as HTMLElement).style.display='none'}}/>
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 cursor-zoom-out"
          style={{background:'rgba(4,8,14,.9)',backdropFilter:'blur(6px)'}}
          onClick={()=>setLightbox(null)}>
          <img src={lightbox} alt="Certificate — full view"
            className="max-w-full max-h-[85vh] rounded-xl"
            style={{border:'1px solid #1a2d42',boxShadow:'0 32px 80px rgba(0,0,0,.6)'}}/>
          <button onClick={()=>setLightbox(null)}
            className="absolute top-5 right-7 font-mono text-[13px] text-[#5d7a96] hover:text-[#00b4ff] transition-colors">
            ✕ close [esc]
          </button>
        </div>
      )}
    </section>
  )
}
