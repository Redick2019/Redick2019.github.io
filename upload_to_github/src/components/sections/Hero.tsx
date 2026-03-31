import { motion } from "framer-motion"
import { BackgroundBeams } from "../ui/effects"
import { personal } from "@/data"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.2 }}
              className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#00b4ff] mb-6">
              <span className="w-7 h-px bg-[#00b4ff] flex-shrink-0" />
              Digital Forensics &amp; Incident Response
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.35 }}
              className="font-syne font-extrabold leading-none tracking-tighter mb-3"
              style={{ fontSize:"clamp(44px,6vw,74px)" }}>
              {personal.name.split(" ")[0]}<br />
              <em className="not-italic text-[#00b4ff]">{personal.name.split(" ")[1]}</em>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.5 }}
              className="font-mono text-[13px] text-[#5d7a96] tracking-wide mb-7">
              {personal.role} · {personal.location}
            </motion.p>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.65 }}
              className="text-[15px] text-[#5d7a96] leading-relaxed max-w-md mb-10">
              {personal.tagline}
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.8 }}
              className="flex gap-4 flex-wrap">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-mono text-[13px] font-medium bg-[#00b4ff] text-black transition-all hover:-translate-y-0.5 hover:bg-[#29c0ff] hover:shadow-[0_10px_32px_rgba(0,180,255,.35)]">
                View Projects →
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-mono text-[13px] text-[#dde4ed] border border-[#1a2d42] transition-all hover:border-[#00b4ff] hover:text-[#00b4ff] hover:-translate-y-0.5">
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.5 }} className="relative">

            <div className="absolute -top-5 -right-3 font-mono text-[11px] text-[#00e5a0] px-4 py-2.5 rounded-lg tracking-wide z-10"
              style={{ background:"#0d1825", border:"1px solid rgba(0,229,160,.3)", boxShadow:"0 8px 24px rgba(0,0,0,.4)" }}>
              ✓ Available for hire
            </div>

            <div className="rounded-xl overflow-hidden"
              style={{ background:"#0d1825", border:"1px solid #1a2d42", boxShadow:"0 32px 80px rgba(0,0,0,.6),0 0 0 1px rgba(0,180,255,.08)" }}>
              <div className="flex items-center gap-2 px-4 py-3"
                style={{ background:"#111f30", borderBottom:"1px solid #1a2d42" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[11px] text-[#5d7a96] ml-2">~ profile.json</span>
              </div>
              <div className="p-6 font-mono text-[13px] leading-loose">
                <span className="text-[#5d7a96]">// DFIR Graduate — open to work</span><br />
                {"{"}<br />
                &nbsp;&nbsp;<span className="text-[#f5a623]">"name"</span>: <span className="text-[#00b4ff]">"{personal.fullName}"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#f5a623]">"degree"</span>: <span className="text-[#00b4ff]">"BSc Cyber Security &amp; DFIR (2:1)"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#f5a623]">"location"</span>: <span className="text-[#00b4ff]">"{personal.location}"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#f5a623]">"status"</span>: <span className="text-[#00e5a0]">"open_to_work"</span>,<br />
                &nbsp;&nbsp;<span className="text-[#f5a623]">"tools"</span>: [<span className="text-[#00b4ff]">"AXIOM"</span>, <span className="text-[#00b4ff]">"EnCase"</span>, <span className="text-[#00b4ff]">"Volatility3"</span>],<br />
                &nbsp;&nbsp;<span className="text-[#f5a623]">"focus"</span>: <span className="text-[#00b4ff]">"DFIR × AI Tooling"</span><br />
                {"}"}
                <span className="inline-block w-2 h-3.5 bg-[#00b4ff] align-text-bottom ml-0.5"
                  style={{ animation:"blink .9s step-end infinite" }} />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-5 font-mono text-[11px] text-[#f5a623] px-4 py-2.5 rounded-lg tracking-wide"
              style={{ background:"#0d1825", border:"1px solid rgba(245,166,35,.3)", boxShadow:"0 8px 24px rgba(0,0,0,.4)" }}>
              ⚡ Cyber Helpline · Active
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
