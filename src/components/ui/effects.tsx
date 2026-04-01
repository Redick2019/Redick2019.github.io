import { useEffect, useRef } from "react"

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className||""}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice" fill="none">
        <g id="hero-lines" stroke="#00b4ff" strokeOpacity=".13" strokeWidth="1">
          <line x1="1060" y1="100" x2="930" y2="270"/>
          <line x1="930" y1="270" x2="1110" y2="400"/>
          <line x1="1110" y1="400" x2="990" y2="560"/>
          <line x1="1060" y1="100" x2="1160" y2="320"/>
          <line x1="1160" y1="320" x2="1110" y2="400"/>
          <line x1="930" y1="270" x2="820" y2="390"/>
          <line x1="60" y1="180" x2="160" y2="340"/>
          <line x1="160" y1="340" x2="90" y2="470"/>
          <line x1="60" y1="180" x2="190" y2="120"/>
        </g>
        <g fill="#00b4ff" fillOpacity=".2">
          <circle cx="1060" cy="100" r="5"/><circle cx="930" cy="270" r="4"/>
          <circle cx="1110" cy="400" r="6"/><circle cx="990" cy="560" r="3"/>
          <circle cx="1160" cy="320" r="4"/><circle cx="820" cy="390" r="3"/>
          <circle cx="60" cy="180" r="4"/><circle cx="160" cy="340" r="5"/>
          <circle cx="90" cy="470" r="3"/><circle cx="190" cy="120" r="4"/>
        </g>
        <circle cx="700" cy="450" r="260" fill="none" stroke="#00b4ff" strokeOpacity=".03" strokeDasharray="4 10" strokeWidth="1"/>
        <circle cx="700" cy="450" r="400" fill="none" stroke="#00b4ff" strokeOpacity=".02" strokeDasharray="4 14" strokeWidth="1"/>
      </svg>
    </div>
  )
}

/* ── Packet bars (hero bg) ─────────────────────────── */
export function PacketBars() {
  const ref = useRef<any>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    let bars = Array.from({length:60}, () => Math.random())
    const render = () => {
      el.innerHTML = bars.map(h =>
        `<div style="flex:1;background:rgba(0,180,255,${(0.04+h*0.08).toFixed(3)});border-radius:1px 1px 0 0;height:${Math.round(h*32)}px"></div>`
      ).join('')
    }
    render()
    const id = setInterval(() => { bars.shift(); bars.push(Math.random()); render() }, 90)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-end gap-px pointer-events-none z-0 overflow-hidden" style={{height:40,opacity:.6}}>
      <div ref={ref} className="flex items-end gap-px w-full h-full" />
    </div>
  )
}

/* ── Hex dump background (skills) ─────────────────── */
export function HexDumpBg() {
  const ref = useRef<any>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const H = '0123456789ABCDEF'
    const rh = () => H[Math.floor(Math.random()*16)]+H[Math.floor(Math.random()*16)]
    const buildRow = () => Array.from({length:20}, rh).join(' ')
    let rows = Array.from({length:12}, buildRow)
    const render = () => { el.textContent = rows.join('\n') }
    render()
    const id = setInterval(() => { rows.shift(); rows.push(buildRow()); render() }, 110)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <pre ref={ref} className="font-mono text-[10px] leading-relaxed p-6 select-none"
        style={{color:'rgba(0,180,255,.07)',letterSpacing:'1px',whiteSpace:'pre-wrap',wordBreak:'break-all'}}/>
      <div className="absolute inset-0" style={{background:'linear-gradient(transparent 60%,#0d1825)'}}/>
    </div>
  )
}

/* ── Wave divider ─────────────────────────────────── */
export function WaveDivider() {
  const ref = useRef<any>(null)
  useEffect(() => {
    const p = ref.current; if (!p) return
    const len = p.getTotalLength()
    p.style.strokeDasharray = String(len); p.style.strokeDashoffset = String(len)
    const obs = new IntersectionObserver(es => {
      if (es[0].isIntersecting) { p.style.transition='stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)'; p.style.strokeDashoffset='0'; obs.disconnect() }
    }, {threshold:.4})
    obs.observe(p); return () => obs.disconnect()
  }, [])
  return (
    <div className="h-16 relative z-10 overflow-hidden" style={{background:'linear-gradient(#070e17,#0d1825)'}}>
      <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="w-full h-16 block">
        <path ref={ref} fill="none" strokeLinecap="round" strokeLinejoin="round"
          d="M0,32 C150,8 300,56 450,32 C600,8 750,56 900,32 C1050,8 1150,50 1200,32"
          stroke="#00b4ff" strokeOpacity=".2" strokeWidth="1.5"/>
        <path d="M0,38 C150,14 300,62 450,38 C600,14 750,62 900,38 C1050,14 1150,56 1200,38"
          stroke="#00b4ff" strokeOpacity=".07" strokeWidth="1" fill="none" strokeDasharray="5 10"/>
      </svg>
    </div>
  )
}

/* ── Scan line ────────────────────────────────────── */
export function ScanLine() {
  const ref = useRef<any>(null)
  useEffect(() => {
    const svg = ref.current; if (!svg) return
    const obs = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return
      const beam = svg.querySelector('#scan-beam') as SVGLineElement
      const ticks = svg.querySelector('#scan-ticks') as SVGGElement
      const label = svg.querySelector('#scan-label') as SVGTextElement
      const pct = svg.querySelector('#scan-pct') as SVGTextElement
      if (!beam||!ticks||!label||!pct) return
      pct.style.fillOpacity='0.4'; let p=0; const W=1200
      const run = () => {
        p=Math.min(p+9,W); beam.setAttribute('x2',String(p))
        pct.textContent=Math.round(p/W*100)+'%'
        if(p%80<9&&p<W){const t=document.createElementNS('http://www.w3.org/2000/svg','line');t.setAttribute('x1',String(p));t.setAttribute('y1','20');t.setAttribute('x2',String(p));t.setAttribute('y2','36');ticks.appendChild(t)}
        if(p<W) requestAnimationFrame(run)
        else{label.style.transition='fill-opacity .5s';label.setAttribute('fill-opacity','0.45')}
      }
      setTimeout(()=>requestAnimationFrame(run),200); obs.disconnect()
    },{threshold:.5})
    obs.observe(svg); return ()=>obs.disconnect()
  },[])
  return (
    <div className="h-14 relative z-10 overflow-hidden" style={{background:'#0d1825',borderBottom:'1px solid #1a2d42'}}>
      <svg ref={ref} viewBox="0 0 1200 56" preserveAspectRatio="none" className="w-full h-14 block">
        <line id="scan-beam" x1="0" y1="28" x2="0" y2="28" stroke="#00b4ff" strokeOpacity=".6" strokeWidth="1.5"/>
        <g id="scan-ticks" stroke="#00b4ff" strokeOpacity=".25" strokeWidth="1"/>
        <text id="scan-label" x="16" y="46" fontFamily="'DM Mono',monospace" fontSize="9" fill="#00b4ff" style={{fillOpacity:0}} letterSpacing="2">EVIDENCE_SCAN.LOG</text>
        <text id="scan-pct" x="1184" y="28" fontFamily="'DM Mono',monospace" fontSize="10" fill="#00b4ff" style={{fillOpacity:0}} textAnchor="end" dominantBaseline="middle">0%</text>
      </svg>
    </div>
  )
}

/* ── Branch divider ───────────────────────────────── */
export function BranchDivider() {
  const ref = useRef<any>(null)
  useEffect(() => {
    const svg = ref.current; if (!svg) return
    const paths = ['#bm','#bu','#bd'].map(id=>svg.querySelector(id) as SVGPathElement)
    const nodes = ['#bn1','#bn2','#bn3'].map(id=>svg.querySelector(id) as SVGCircleElement)
    paths.forEach(p=>{if(!p)return;const l=p.getTotalLength();p.style.strokeDasharray=String(l);p.style.strokeDashoffset=String(l)})
    const obs = new IntersectionObserver(es=>{
      if(!es[0].isIntersecting)return
      paths.forEach((p,i)=>{if(!p)return;setTimeout(()=>{p.style.transition=`stroke-dashoffset ${.7+i*.2}s cubic-bezier(.4,0,.2,1)`;p.style.strokeDashoffset='0'},i*180)})
      setTimeout(()=>nodes.forEach((n,i)=>{if(!n)return;setTimeout(()=>{n.style.transition='stroke-opacity .3s';n.setAttribute('stroke-opacity','0.5')},i*120)}),700)
      obs.disconnect()
    },{threshold:.4})
    obs.observe(svg); return ()=>obs.disconnect()
  },[])
  return (
    <div className="h-20 relative z-10 overflow-hidden" style={{background:'linear-gradient(#070e17,#0d1825)'}}>
      <svg ref={ref} viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-20 block">
        <path id="bm" fill="none" strokeLinecap="round" d="M0,40 L400,40 L600,20 L800,40 L1200,40" stroke="#00b4ff" strokeOpacity=".2" strokeWidth="1.5"/>
        <path id="bu" fill="none" strokeLinecap="round" d="M600,20 L600,4" stroke="#00b4ff" strokeOpacity=".2" strokeWidth="1"/>
        <path id="bd" fill="none" strokeLinecap="round" d="M600,20 L600,60" stroke="#00b4ff" strokeOpacity=".2" strokeWidth="1"/>
        <circle id="bn1" cx="400" cy="40" r="3" fill="none" stroke="#00b4ff" strokeOpacity="0" strokeWidth="1.5"/>
        <circle id="bn2" cx="600" cy="20" r="4" fill="none" stroke="#00b4ff" strokeOpacity="0" strokeWidth="1.5"/>
        <circle id="bn3" cx="800" cy="40" r="3" fill="none" stroke="#00b4ff" strokeOpacity="0" strokeWidth="1.5"/>
      </svg>
    </div>
  )
}
