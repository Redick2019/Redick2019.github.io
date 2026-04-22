import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { events } from "@/data"

function PhotoSlot({ src, main }: { src: string; main?: boolean }) {
  const w = main ? "w-[220px]" : "w-[140px]"
  if (src) {
    return (
      <img src={src} alt="event"
        className={`${w} h-[140px] rounded-xl object-cover flex-shrink-0`}
        style={{ border: "1px solid #1a2d42" }}/>
    )
  }
  return (
    <div className={`${w} h-[140px] rounded-xl flex-shrink-0 flex items-center justify-center font-mono text-[10px] text-[#5d7a96] tracking-widest`}
      style={{ background: "#0d1825", border: "1px solid #1a2d42" }}>
      PHOTO SOON
    </div>
  )
}

export default function Events() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="events" ref={ref} className="py-28" style={{ background: "#070e17" }}>
      <div className="container mx-auto px-7">

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[3px] uppercase text-[#5d7a96] mb-4">
          Community &amp; Industry <span className="flex-1 h-px bg-[#1a2d42]" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-extrabold tracking-tighter leading-tight mb-4"
          style={{ fontSize: "clamp(30px,4vw,46px)" }}>
          Events &amp; Conferences
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[15px] text-[#5d7a96] leading-relaxed max-w-lg mb-16">
          Industry events attended outside of work and study — building awareness, perspective and community beyond the classroom.
        </motion.p>

        {/* Timeline */}
        <div className="flex flex-col">
          {events.map((ev, i) => (
            <motion.div key={ev.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.15 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-0">

              {/* Left — date + line */}
              <div className="hidden md:flex flex-col items-end pr-8 relative">
                {i < events.length - 1 && (
                  <div className="absolute right-[31px] top-[10px] w-px bg-[#1a2d42]"
                    style={{ bottom: "-64px" }} />
                )}
                <div className="absolute right-[27px] top-[4px] w-2.5 h-2.5 rounded-full bg-[#00b4ff] flex-shrink-0"
                  style={{ boxShadow: "0 0 0 3px rgba(0,180,255,.15)" }} />
                <div className="font-mono text-[11px] text-[#5d7a96] text-right mt-0 leading-snug">
                  {ev.year}
                </div>
                <div className="font-mono text-[12px] text-[#00b4ff] text-right mt-1 leading-snug">
                  {ev.date.replace(ev.year, "").trim().replace(/\s*\d{4}/, "")}
                </div>
              </div>

              {/* Right — content */}
              <div className="pb-16 md:pl-8">
                {/* Mobile date */}
                <div className="flex items-center gap-3 mb-4 md:hidden">
                  <div className="w-2 h-2 rounded-full bg-[#00b4ff] flex-shrink-0" />
                  <span className="font-mono text-[11px] text-[#00b4ff]">{ev.date}</span>
                </div>

                {/* Tag */}
                <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#5d7a96] border border-[#1a2d42] rounded px-3 py-1 mb-4 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4ff]" />
                  {ev.tag}
                </div>

                <h3 className="font-syne font-bold text-[22px] tracking-tight mb-2">{ev.name}</h3>

                <div className="flex items-center gap-2 font-mono text-[12px] text-[#5d7a96] mb-5">
                  <span>📍</span>{ev.location}
                </div>

                {/* Photos */}
                <div className="flex gap-3 mb-5 flex-wrap">
                  <PhotoSlot src={ev.photos[0] || ""} main />
                  <PhotoSlot src={ev.photos[1] || ""} />
                </div>

                {/* About */}
                <p className="text-[14px] text-[#5d7a96] leading-relaxed mb-5 max-w-2xl">
                  {ev.about}
                </p>

                {/* Reflection */}
                <div className="max-w-2xl rounded-r-xl p-5"
                  style={{ background: "#0d1825", borderLeft: "3px solid #00b4ff", border: "1px solid #1a2d42", borderLeftWidth: "3px" }}>
                  <div className="font-mono text-[9px] tracking-[2px] text-[#00b4ff] mb-3 uppercase">
                    My Reflection
                  </div>
                  {ev.reflection.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-[14px] text-[#5d7a96] leading-relaxed italic mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
