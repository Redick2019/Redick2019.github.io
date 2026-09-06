import { useEffect, useRef, useState } from "react"

/* ═══════════════════════════════════════════════════════════
   Themed UI flourishes.
   These are decorative: the hashes, case numbers, custody log
   entries and risk plots are generated for atmosphere, not
   drawn from real casework.
   ═══════════════════════════════════════════════════════════ */

/** Deterministic hex string — same seed always yields the same "hash". */
function pseudoHash(seed: string, len = 64) {
  let h = 0x811c9dc5 >>> 0
  let out = ""
  let i = 0
  while (out.length < len) {
    h ^= seed.charCodeAt(i % seed.length) + i
    h = Math.imul(h, 0x01000193) >>> 0
    out += h.toString(16).padStart(8, "0")
    i++
  }
  return out.slice(0, len)
}

/** Fires once when the element scrolls into view. */
function useOnceInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      es => { if (es[0].isIntersecting) { setSeen(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, seen] as const
}

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

/* ── Evidence hash (DFIR project cards) ───────────── */
export function EvidenceHash({ seed, algo = "SHA-256" }: { seed: string; algo?: string }) {
  const [ref, seen] = useOnceInView<HTMLDivElement>(0.25)
  const target = pseudoHash(seed)
  const [chars, setChars] = useState(0)
  const done = chars >= target.length

  useEffect(() => {
    if (!seen) return
    const id = setInterval(() => {
      setChars(c => {
        if (c >= target.length) { clearInterval(id); return c }
        return c + 1
      })
    }, 16)
    return () => clearInterval(id)
  }, [seen, target.length])

  return (
    <div ref={ref} className="rounded-md p-3"
      style={{ background: "rgba(0,180,255,.05)", border: "1px solid rgba(0,180,255,.12)" }}>
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="font-mono text-[9px] text-[#5d7a96] tracking-[1.5px]">{algo} EVIDENCE HASH</span>
        <span className="font-mono text-[9px] tracking-[1.5px] whitespace-nowrap"
          style={{ color: done ? "#00e5a0" : "#5d7a96" }}>
          {done ? "● SEALED" : "○ HASHING"}
        </span>
      </div>
      <div className="font-mono text-[10px] text-[#00b4ff] break-all leading-relaxed" style={{ minHeight: 30 }}>
        {target.slice(0, chars)}{!done && seen && <span className="text-[#5d7a96]">_</span>}
      </div>
      <div className="font-mono text-[9px] mt-1.5 tracking-wide transition-opacity duration-500"
        style={{ color: "#00e5a0", opacity: done ? 1 : 0 }}>
        ✓ INTEGRITY VERIFIED · NO WRITE EVENTS
      </div>
    </div>
  )
}

/* ── Annex A applicability (GRC project cards) ─────── */
const ANNEX_A = [
  { id: "A.5.1",  name: "Policies for information security" },
  { id: "A.5.7",  name: "Threat intelligence" },
  { id: "A.5.23", name: "Security for cloud services" },
  { id: "A.5.30", name: "ICT readiness for continuity" },
  { id: "A.8.2",  name: "Privileged access rights" },
  { id: "A.8.9",  name: "Configuration management" },
  { id: "A.8.12", name: "Data leakage prevention" },
  { id: "A.8.16", name: "Monitoring activities" },
]

export function ControlMatrix({ seed }: { seed: string }) {
  const [ref, seen] = useOnceInView<HTMLDivElement>(0.25)
  const offset = parseInt(pseudoHash(seed, 4), 16) % ANNEX_A.length
  const rows = Array.from({ length: 4 }, (_, i) => {
    const c = ANNEX_A[(offset + i) % ANNEX_A.length]
    // deterministic per control, so a card always renders the same verdict
    const applicable = parseInt(pseudoHash(seed + c.id, 2), 16) % 5 !== 0
    return { ...c, applicable }
  })

  return (
    <div ref={ref} className="rounded-md p-3"
      style={{ background: "rgba(0,229,160,.04)", border: "1px solid rgba(0,229,160,.12)" }}>
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="font-mono text-[9px] text-[#5d7a96] tracking-[1.5px]">ANNEX A · APPLICABILITY</span>
        <span className="font-mono text-[9px] text-[#00e5a0] tracking-[1.5px] whitespace-nowrap">SoA</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div key={r.id}
            className="flex items-center gap-2 transition-all duration-500"
            style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : "translateX(-8px)", transitionDelay: `${i * 110}ms` }}>
            <span className="font-mono text-[9.5px] text-[#00b4ff] w-[42px] flex-shrink-0">{r.id}</span>
            <span className="font-mono text-[9.5px] text-[#5d7a96] flex-1 truncate">{r.name}</span>
            <span className="font-mono text-[8.5px] px-1.5 py-0.5 rounded flex-shrink-0 tracking-wide"
              style={r.applicable
                ? { background: "rgba(0,229,160,.1)", color: "#00e5a0" }
                : { background: "rgba(93,122,150,.12)", color: "#5d7a96" }}>
              {r.applicable ? "APPLICABLE" : "EXCLUDED"}
            </span>
          </div>
        ))}
      </div>
      <div className="font-mono text-[9px] mt-2.5 tracking-wide transition-opacity duration-500"
        style={{ color: "#00e5a0", opacity: seen ? 1 : 0, transitionDelay: "600ms" }}>
        ✓ JUSTIFICATION RECORDED
      </div>
    </div>
  )
}

/* ── Chain of custody log (section band) ──────────── */
const CUSTODY = [
  { t: "09:14:02", ev: "EVIDENCE ACQUIRED",   d: "disk image · E01 · write-blocked" },
  { t: "09:41:18", ev: "HASH VERIFIED",       d: "SHA-256 match · acquisition = source" },
  { t: "10:02:55", ev: "CUSTODY TRANSFERRED", d: "examiner: R. NG · signed" },
  { t: "11:30:07", ev: "ANALYSIS COMMENCED",  d: "AXIOM · Autopsy · Volatility3" },
  { t: "15:48:33", ev: "FINDINGS DOCUMENTED", d: "timeline reconciled · 3 sources" },
]

export function ChainOfCustody() {
  const [ref, seen] = useOnceInView<HTMLDivElement>(0.2)

  return (
    <div ref={ref} className="relative z-10 overflow-hidden"
      style={{ background: "linear-gradient(#070e17,#0d1825)", borderTop: "1px solid #1a2d42", borderBottom: "1px solid #1a2d42" }}>
      <div className="container mx-auto px-7 py-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00b4ff] flex-shrink-0"
            style={{ animation: "pulseDot 2.2s ease infinite" }}/>
          <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#5d7a96]">
            chain_of_custody.log
          </span>
          <span className="flex-1 h-px bg-[#1a2d42]"/>
          <span className="font-mono text-[9px] tracking-[1.5px] text-[#5d7a96] hidden sm:inline">TAIL -F</span>
        </div>
        <div className="space-y-1.5 overflow-x-auto">
          {CUSTODY.map((c, i) => (
            <div key={c.ev}
              className="flex items-center gap-3 font-mono text-[10.5px] whitespace-nowrap transition-all duration-500"
              style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : "translateY(6px)", transitionDelay: `${i * 130}ms` }}>
              <span className="text-[#5d7a96] flex-shrink-0">[{c.t}]</span>
              <span className="text-[#00b4ff] flex-shrink-0" style={{ minWidth: 168, display: "inline-block" }}>{c.ev}</span>
              <span className="text-[#5d7a96] flex-shrink-0">· {c.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── 5×5 risk matrix (GRC visual) ─────────────────── */
const LIKELIHOOD = ["Rare", "Unlikely", "Possible", "Likely", "Certain"]
const IMPACT = ["Severe", "Major", "Moderate", "Minor", "Low"]
// plotted cell: [column index, row index] — illustrative only
const PLOT = { col: 3, row: 1 }

function riskColor(score: number) {
  if (score <= 4)  return { bg: "rgba(0,229,160,.14)",  fg: "#00e5a0" }
  if (score <= 9)  return { bg: "rgba(245,166,35,.12)", fg: "#f5a623" }
  if (score <= 14) return { bg: "rgba(245,120,35,.16)", fg: "#ff9d4d" }
  return { bg: "rgba(255,95,87,.16)", fg: "#ff5f57" }
}

export function RiskMatrix() {
  const [ref, seen] = useOnceInView<HTMLDivElement>(0.25)

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#5d7a96]">Risk Matrix</span>
        <span className="flex-1 h-px bg-[#1a2d42]"/>
        <span className="font-mono text-[9px] text-[#5d7a96] tracking-wide">5 × 5</span>
      </div>

      <div className="flex gap-2">
        {/* Impact axis */}
        <div className="flex flex-col justify-around flex-shrink-0" style={{ width: 56 }}>
          {IMPACT.map(l => (
            <div key={l} className="font-mono text-[8.5px] text-[#5d7a96] text-right pr-1 leading-none"
              style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              {l}
            </div>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-5 gap-1">
            {IMPACT.map((_, row) =>
              LIKELIHOOD.map((_, col) => {
                const score = (5 - row) * (col + 1)
                const c = riskColor(score)
                const plotted = col === PLOT.col && row === PLOT.row
                const delay = (row * 5 + col) * 22
                return (
                  <div key={`${row}-${col}`}
                    className="rounded flex items-center justify-center font-mono text-[9px] transition-all duration-500"
                    style={{
                      height: 30,
                      background: c.bg,
                      color: c.fg,
                      border: plotted ? `1.5px solid ${c.fg}` : "1px solid transparent",
                      boxShadow: plotted && seen ? `0 0 14px ${c.bg}` : "none",
                      opacity: seen ? 1 : 0,
                      transform: seen ? "none" : "scale(.85)",
                      transitionDelay: `${delay}ms`,
                    }}>
                    {plotted ? "◉" : score}
                  </div>
                )
              })
            )}
          </div>

          {/* Likelihood axis */}
          <div className="grid grid-cols-5 gap-1 mt-1.5">
            {LIKELIHOOD.map(l => (
              <div key={l} className="font-mono text-[8.5px] text-[#5d7a96] text-center leading-none truncate">{l}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 font-mono text-[9px] text-[#5d7a96] transition-opacity duration-700"
        style={{ opacity: seen ? 1 : 0, transitionDelay: "800ms" }}>
        <span className="text-[#f5a623]">◉</span>
        Residual risk after controls · reviewed quarterly
      </div>
    </div>
  )
}

/* ── Document control footer strip ────────────────── */
export function ClassificationBar() {
  const items = [
    { label: "DOC-ID: RNG-PORTFOLIO-2026" },
    { label: "REV 3.0" },
    { label: "RETENTION: INDEFINITE" },
    { label: "● TLP:CLEAR", color: "#00e5a0" },
    { label: "✓ INTEGRITY VERIFIED", color: "#00e5a0" },
  ]
  return (
    <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 px-7 py-3 font-mono text-[9px] tracking-[1.5px] uppercase"
      style={{ background: "#0b1420", borderTop: "1px solid #1a2d42", color: "#5d7a96" }}>
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-5">
          {i > 0 && <span className="text-[#1a2d42] hidden sm:inline">│</span>}
          <span style={it.color ? { color: it.color } : undefined}>{it.label}</span>
        </span>
      ))}
    </div>
  )
}
