// ─── PERSONAL ──────────────────────────────────────────────
export const personal = {
  name: "Redick Ng",
  fullName: "Redick Chun-Yin Ng",
  role: "DFIR Graduate · Cyber Helpline Responder",
  location: "Cheltenham, UK",
  email: "redickunitedkingdom@proton.me",
  github: "https://github.com/Redick2019",
  linkedin: "https://www.linkedin.com/in/redickng",
  tagline: "I investigate digital incidents and build AI-powered tools to solve real-world problems.",
  bio: [
    "BSc (Hons) Cyber Security and Digital Forensics graduate from UWE Bristol (2:1), currently working as a Helpline Responder Trainee at The Cyber Helpline while actively seeking my first DFIR analyst role.",
    "Across three years of structured forensic investigation, I've progressed from case analysis through live memory acquisition to managing a full multi-platform forensic lifecycle — laptop endpoint, cloud (M365), and mobile — producing a unified, defensible incident timeline using Magnet AXIOM, EnCase, and Autopsy.",
    "My dissertation explored digital forensics in cloud environments, including a 6-phase cloud forensics framework covering GDPR, the U.S. CLOUD Act, and chain-of-custody standards. I'm also passionate about using AI as a development partner to build practical tools that solve real-world problems.",
  ],
}

// ─── SKILLS ────────────────────────────────────────────────
export const skillGroups = [
  {
    title: "DFIR Tools",
    pills: ["Magnet AXIOM", "EnCase", "Autopsy", "KAPE", "Volatility3", "Belkasoft", "Wireshark"],
  },
  {
    title: "Windows Artefacts",
    pills: ["Event Logs", "Registry Hives", "Prefetch", "Amcache", "Shimcache", ".E01 Processing", "Live Capture"],
  },
  {
    title: "Acquisition & Cloud",
    pills: ["LiME", "AVML", "M365", "Azure", "Cloud Email Artefacts", "Mobile Forensics"],
  },
  {
    title: "Frameworks & Governance",
    pills: ["MITRE ATT&CK", "ISO/IEC 27001", "NIST CSF", "FAIR", "GDPR", "US Cloud Act", "Chain of Custody"],
  },
]

// ─── PROJECTS ──────────────────────────────────────────────
export type ProjectType = "dfir" | "life"

export interface Project {
  icon: string
  badge: string
  type: ProjectType
  title: string
  desc: string
  tags: string[]
  wip?: boolean
  dim?: boolean
  links: { label: string; href: string; amber?: boolean }[]
}

export const projects: Project[] = [
  {
    icon: "🔬",
    badge: "DFIR · UWE Bristol",
    type: "dfir",
    title: "Multi-Platform Forensic Lifecycle",
    desc: "Full post-acquisition forensic lifecycle across laptop endpoint, M365 cloud, and mobile device using Magnet AXIOM, EnCase and Autopsy. Produced a unified, defensible incident timeline linking activity across all three evidence sources.",
    tags: ["Magnet AXIOM", "EnCase", "Autopsy", "M365", "Windows Artefacts"],
    links: [{ label: "📄 Case Write-up (soon)", href: "#" }],
  },
  {
    icon: "☁️",
    badge: "DFIR · Dissertation",
    type: "dfir",
    title: "Cloud Forensics Research",
    desc: "7,071-word independent dissertation evaluating technical, legal and organisational challenges of digital forensics in cloud environments. Developed an original 6-phase cloud forensics framework covering GDPR, the U.S. CLOUD Act and SHA-256 chain-of-custody standards.",
    tags: ["Cloud Forensics", "GDPR", "NIST IR 8006", "ISO/IEC 27001", "Framework Design"],
    links: [{ label: "📄 Read Dissertation", href: "/FYP_22034405.pdf" }],
  },
  {
    icon: "🤖",
    badge: "DFIR · AI Tooling",
    type: "dfir",
    title: "AI Conversation Logger",
    desc: "A forensic-grade tool designed to capture, structure and analyse interactions with AI language models. Built to investigate the evidential and behavioural characteristics of LLM-generated outputs — exploring how conversational data can be preserved, examined and presented within a digital forensics investigation framework.",
    tags: ["Python", "LLM Analysis", "Log Forensics", "AI"],
    wip: true,
    links: [
      { label: "↗ GitHub", href: "https://github.com/Redick2019/ai-logging-tool" },
    ],
  },
  {
    icon: "🇬🇧",
    badge: "Life Labs · Civic Tech",
    type: "life",
    title: "BNO Settlement Checklist",
    desc: "AI-assisted web app helping Hong Kong BNO visa holders navigate UK settlement (ILR) applications. Auto-generates personalised document checklists, tracks the 180-day absence rule, and calculates the earliest eligible application date.",
    tags: ["Vanilla JS", "LocalStorage", "PWA", "Immigration Law"],
    links: [
      { label: "↗ Live App", href: "https://redick2019.github.io/BNO_CheckList/", amber: true },
      { label: "GitHub", href: "https://github.com/Redick2019/bno-checklist" },
    ],
  },
]

// ─── EXPERIENCE ────────────────────────────────────────────
export const experience = [
  {
    role: "Helpline Responder Trainee",
    org: "The Cyber Helpline",
    period: "Jan 2026 – Present",
    type: "dfir" as ProjectType,
    points: [
      "Triaged and escalated across the full digital threat taxonomy: account compromise, malware, stalking, fraud, and identity theft.",
      "Produced structured internal case notes from live calls for handover within a shared ticket system — demonstrating DFIR-grade documentation discipline.",
      "Passed simulated live assessment under emotional pressure before live deployment.",
    ],
  },
  {
    role: "BSc Cyber Security & Digital Forensics (2:1)",
    org: "University of the West of England, Bristol",
    period: "Sept 2022 – July 2025",
    type: "dfir" as ProjectType,
    points: [
      "Year 3: Full multi-platform forensic lifecycle (laptop, M365 cloud, mobile) using Magnet AXIOM, EnCase, Autopsy.",
      "Year 2: Live memory acquisition with LiME, AVML, KAPE; analysis with Volatility3 and Wireshark.",
      "Delivered expert-witness testimony in a simulated adversarial court proceeding.",
    ],
  },
]

// ─── CERTIFICATIONS ────────────────────────────────────────
export const certifications = [
  { name: "AWS Cloud Practitioner (CCP)", issuer: "Amazon Web Services", year: "2025", active: true },
  { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft", year: "2024", active: true },
  { name: "Belkasoft: Windows Forensics", issuer: "Belkasoft", year: "Feb 2025", active: true },
  { name: "SOC Operations Bootcamp (Splunk)", issuer: "ThinkCloudy", year: "2025", active: true },
  { name: "ISC2 CC (Certified in Cybersecurity)", issuer: "ISC2", year: "May 2026", active: false },
  { name: "ISC2 Associate Member", issuer: "ISC2", year: "2024–Present", active: true },
]

// ─── STATS ─────────────────────────────────────────────────
export const stats = [
  { n: "2:1", l: "BSc DFIR Degree" },
  { n: "4", l: "Live Projects" },
  { n: "5+", l: "Certifications" },
  { n: "Open", l: "To Opportunities", green: true },
]

// ─── EVENTS ────────────────────────────────────────────────
export interface Event {
  year: string
  date: string
  tag: string
  name: string
  location: string
  about: string
  reflection: string
  photos: string[]
}

export const events: Event[] = [
  {
    year: "2024",
    date: "30–31 Aug 2024",
    tag: "Cybersecurity Conference",
    name: "BSides Bristol 2024",
    location: "UWE Frenchay Campus, Bristol",
    about: "A community-led, not-for-profit cybersecurity conference at UWE Bristol's Frenchay Campus. A two-day event covering blue-team and red-team disciplines, with workshops, expert talks, CTF challenges and a Rookie Track for newcomers to the industry. Attended by professionals, students, and career changers across the InfoSec community.",
    reflection: "At the time, I was still deep in university life, focused on coursework, assignments and project deadlines. BSides Bristol was one of my first real encounters with the industry beyond the classroom. Hearing practitioners speak candidly about the challenges they face day-to-day gave me a perspective that no module had quite captured. The gap between academic theory and operational reality is significant, and understanding that early matters. The event broadened my view of where cyber security is heading, not just as a technical discipline, but as a field shaped by real-world pressures, emerging threats, and human decisions under uncertainty.\n\nWhat I did not expect was what it would reveal about the nature of the industry itself. Coming from a background where professional environments tend to be competitive and individually driven, BSides showed me something different. The people in that room were not guarding their knowledge or positioning themselves against one another. They were sharing it openly, across disciplines, experience levels and organisations. Cyber security, at least in the community I encountered that day, is a collective endeavour. Everyone present was contributing their piece to a much larger picture, and that culture of openness and collaboration left a lasting impression on me. It was also the event that set everything else in motion. The conversations I had, the topics I was exposed to and the sense that this was a field worth investing myself in fully, all of it led me to the conferences and communities that followed.",
    photos: []
  },
  {
    year: "2025",
    date: "June 2025",
    tag: "Science & Technology Festival",
    name: "Cheltenham Science Festival",
    location: "Hotel Du Vin & Town Hall, Cheltenham",
    about: "A flagship UK science engagement event featuring keynote addresses on securing space technologies, interactive workshops, panel discussions on the future of the space sector, and an evening networking session at The Arcade. Partnered with GCHQ, CyNam, CyberFirst, and leading aerospace organisations including Lockheed Martin and Northrop Grumman.",
    reflection: "Space and cyber security have long felt like two fields on a collision course. My own work in cloud forensics had already pushed me to think about how digital evidence behaves in distributed, volatile environments, and space is simply the next frontier of that same problem. What struck me about this event was how rapidly the conversation is shifting. As space technology becomes more commercially accessible, the attack surface expands into territory that most security frameworks were never designed to address. The practitioners and researchers speaking that day made clear that this is no longer a theoretical concern reserved for government agencies. It is an emerging operational reality, and one where the field of digital forensics has an important role to play.\n\nOne of the clearest illustrations of this was a point raised about the fundamental difference between terrestrial and space-based communications. Conventional networks rely on physical infrastructure, fibre optic cables, data centres, and fixed interconnects, where the attack surface is at least partially bounded by geography. Satellite communication operates differently. The link between a satellite, a ground station, and an end device is maintained through radio frequency signals transmitted across open atmosphere, with no physical medium connecting them. That openness creates a vulnerability that conventional security training rarely addresses. GPS spoofing, where an adversary intercepts and replaces a legitimate signal with a fabricated one to manipulate positioning data, is a real and documented attack vector. Nation-state actors have already demonstrated a willingness to exploit it. The idea that something as routine as vehicle navigation could be weaponised through signal manipulation was not something I had seriously considered before that day, and it made me realise how much of the attack surface in a space-dependent world remains outside the mainstream conversation in cyber security.\n\nIt was a perspective I had been developing quietly during my final year dissertation, and hearing it reflected in an industry setting gave it considerably more weight. It also sharpened my awareness of the kind of work I want to pursue, sitting at the intersection of cloud security, digital forensics and the emerging challenges of securing critical infrastructure beyond the atmosphere.",
    photos: []
  },
  {
    year: "2026",
    date: "16 Apr 2026",
    tag: "Cyber Security Conference",
    name: "CyNam: In the Eye of the Storm",
    location: "Dunkertons, Dowdeswell Park, Cheltenham",
    about: "CyNam's flagship 2026 headline event exploring what truly happens when a serious cyber incident strikes. Speakers included former senior government officials, AWS executives, and principals from Palo Alto Networks and Gigamon, covering real-world crisis response, disinformation operations, operational resilience and post-incident threat hunting. Held in Cheltenham, the heart of the UK's cyber security ecosystem.",
    reflection: "What this event made clear is that cyber security, at its most consequential, cannot be reduced to any single dimension. In academic and professional training, we learn early that effective security depends on the interplay between people, process and technology. No one element is sufficient on its own, and the failure of any one can undermine the others entirely. What the speakers that evening did was bring that principle to life in a way that no textbook quite manages.\n\nThe story of Project Sunflower stayed with me most. When AWS mobilised to protect Ukrainian infrastructure ahead of the Russian invasion, the decision to physically move data out of harm's way was not a simple operational call. It required the technology to exist, the processes to be in place, and the people at every level to act with both speed and conviction. The speaker was candid about the doubt involved. Even for those with the authority and the resources to act, knowing whether the timing is right and whether the decision is correct is something no framework resolves for you. That kind of responsibility sits differently when you hear it described by someone who lived it.\n\nA separate account, from someone at GCHQ, added another dimension to that same theme. When manipulated footage created a disinformation risk, the pressure to escalate immediately was real. But the judgement made in that case was the opposite: to work through existing channels, manage the situation without confrontation, and let the process resolve it. It did, within days. What both stories share is a reminder that the most consequential moments in cyber security are never decided by technology alone. The process has to be trusted, and the people operating within it have to exercise judgement that no policy document can fully prescribe. Attending this event gave me a more honest picture of how those three elements interact under genuine pressure, and it is a perspective I want to carry with me as my career develops.",
    photos: []
  },
]
