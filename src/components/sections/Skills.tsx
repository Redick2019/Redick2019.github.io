import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { skillGroups } from "@/data"
import { HexDumpBg } from "../ui/effects"

const nodes = [
  {cx:210,cy:58, r:34,icon:'🔍',label:'Forensics'},
  {cx:342,cy:118,r:30,icon:'💾',label:'Memory'},
  {cx:370,cy:252,r:28,icon:'📡',label:'Network'},
  {cx:292,cy:332,r:28,icon:'☁️', label:'Cloud'},
  {cx:120,cy:322,r:30,icon:'🤖',label:'AI/Dev'},
  {cx:54, cy:242,r:26,icon:'🏛️',label:'GRC'},
  {cx:78, cy:110,r:28,icon:'🚨',label:'IR'},
]
const edges = [
  [210,190,210,58],[210,190,342,118],[210,190,370,252],[210,190,292,332],
  [210,190,120,322],[210,190,54,242],[210,190,78,110],
  [210,58,342,118],[342,118,370,252],[54,242,78,110],[120,322,292,332],
]

function NetworkDiagram() {
  const svgRef = useRef<SVGSVGElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapRef as any, {once:true,margin:'-60px'})

  useEffect(() => {
    if (!inView||!svgRef.current) return
    const lines = svgRef.current.querySelectorAll<SVGLineElement>('.edge')
    lines.forEach((ln,i) => {
      const len = Math.hypot(+ln.x2.baseVal.value - +ln.x1.baseVal.value, +ln.y2.baseVal.value - +ln.y1.baseVal.value)
      ln.style.strokeDasharray=String(len); ln.style.strokeDashoffset=String(len)
      setTimeout(()=>{ln.style.transition='stroke-dashoffset .7s cubic-bezier(.4,0,.2,1)';ln.style.strokeDashoffset='0'},i*70)
    })
    const ng = svgRef.current.querySelector<SVGGElement>('#diag-nodes')
    if(ng) setTimeout(()=>{ng.style.opacity='1'},lines.length*70+200)
    const ring = svgRef.current.querySelector<SVGCircleElement>('#pulse-ring')
    const doPulse = () => {
      if(!ring)return
      ring.style.transition='none';ring.setAttribute('r','44');ring.setAttribute('stroke-opacity','.4')
      setTimeout(()=>{ring.style.transition='r 2s ease,stroke-opacity 2s ease';ring.setAttribute('r','180');ring.setAttribute('stroke-opacity','0')},50)
    }
    const tid = setTimeout(()=>{doPulse();const id=setInterval(doPulse,4000);return()=>clearInterval(id)},lines.length*70+800)
    return()=>clearTimeout(tid)
  },[inView])

  return (
    <div ref={wrapRef} className="hidden lg:block w-[400px] h-[380px] flex-shrink-0 relative">
      <svg ref={svgRef} viewBox="0 0 420 380" className="absolute inset-0 w-full h-full overflow-visible">
        <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        {edges.map(([x1,y1,x2,y2],i)=>(
          <line key={i} className="edge" x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#00b4ff" strokeOpacity={i<7?.35:.1} strokeWidth={i<7?1.5:1} fill="none" strokeLinecap="round"/>
        ))}
        <g id="diag-nodes" style={{opacity:0,transition:'opacity .4s ease .8s'}}>
          {nodes.map((n,i)=>(
            <g key={i}>
              <circle cx={n.cx} cy={n.cy} r={n.r} fill="#111f30" stroke="#1a2d42" strokeWidth="1.5"/>
              <text x={n.cx} y={n.cy-7} fontSize="13" textAnchor="middle" dominantBaseline="central">{n.icon}</text>
              <text x={n.cx} y={n.cy+9} fontSize="9" fill="#5d7a96" textAnchor="middle" dominantBaseline="central" fontFamily="'DM Mono',monospace">{n.label}</text>
            </g>
          ))}
        </g>
        <circle cx="210" cy="190" r="44" fill="rgba(0,180,255,.1)" stroke="#00b4ff" strokeWidth="2" filter="url(#glow)"/>
        <circle cx="210" cy="190" r="50" fill="none" stroke="#00b4ff" strokeOpacity=".08" strokeDasharray="4 8">
          <animateTransform attributeName="transform" type="rotate" from="0 210 190" to="360 210 190" dur="18s" repeatCount="indefinite"/>
        </circle>
        <text x="210" y="185" fontSize="10" fill="#00b4ff" textAnchor="middle" dominantBaseline="central" fontFamily="'DM Mono',monospace">DFIR</text>
        <text x="210" y="199" fontSize="9" fill="#00b4ff" textAnchor="middle" dominantBaseline="central" fontFamily="'DM Mono',monospace">analyst</text>
        <circle id="pulse-ring" cx="210" cy="190" r="44" fill="none" stroke="#00b4ff" strokeOpacity="0" strokeWidth="1.5"/>
      </svg>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, {once:true,margin:'-60px'})

  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden"
      style={{background:'#0d1825',borderTop:'1px solid #1a2d42',borderBottom:'1px solid #1a2d42'}}>
      <HexDumpBg />
      <div className="container mx-auto px-7 relative z-10">
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">
          Capabilities <span className="flex-1 h-px bg-[#1a2d42]"/>
        </motion.div>
        <motion.h2 initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.1}}
          className="font-syne font-extrabold tracking-tighter leading-tight mb-14"
          style={{fontSize:'clamp(30px,4vw,46px)'}}>Skills &amp; Tools</motion.h2>

        <div className="flex gap-16 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 flex-1">
            {skillGroups.map((g,gi)=>(
              <motion.div key={g.title} initial={{opacity:0,y:24}}
                animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:.6,delay:.1+gi*.08}}>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#5d7a96] mb-3 pb-2"
                  style={{borderBottom:'1px solid #1a2d42'}}>{g.title}</div>
                <div className="flex flex-wrap gap-2">
                  {g.pills.map(p=>(
                    <span key={p} className="text-[13px] px-3 py-1 rounded text-[#dde4ed] cursor-default transition-all hover:text-[#00b4ff] hover:border-[#00b4ff]"
                      style={{background:'#111f30',border:'1px solid #1a2d42'}}>{p}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{opacity:0,x:28}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.65,delay:.3}}>
            <NetworkDiagram/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
