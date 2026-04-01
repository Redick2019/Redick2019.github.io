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
  {
    title: "Certifications & Platforms",
    pills: ["AWS CCP", "Azure AI-900", "Belkasoft Windows Forensics", "Splunk SOC Bootcamp", "ISC2 CC (Scheduled)", "ISC2 Associate Member"],
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
