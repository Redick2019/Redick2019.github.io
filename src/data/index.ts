// ─── PERSONAL ──────────────────────────────────────────────
export const personal = {
  name: "Redick Ng",
  fullName: "Redick Chun-Yin Ng",
  role: "Cyber Security & Digital Forensics Graduate",
  currentRole: "First Line Responder · The Cyber Helpline",
  location: "Cheltenham, UK",
  email: "redickunitedkingdom@proton.me",
  github: "https://github.com/Redick2019",
  linkedin: "https://www.linkedin.com/in/redickng",
  tagline: "I work live cybercrime cases as a first line responder, and I'm building my career in governance, risk and compliance.",
  // **text** renders as emphasised
  bio: [
    "Originally from **Hong Kong**, I moved to the United Kingdom to build a career in cyber security. I hold a **BSc (Hons) in Cyber Security and Digital Forensics (2:1)** from the University of the West of England, Bristol, after completing a computing foundation programme at Bellerbys College, Brighton.",
    "I volunteer as a **First Line Responder at The Cyber Helpline**, handling live cases involving phishing, malware and unauthorised access — carrying out triage, following escalation protocol, and documenting cases for handover.",
    "My strongest material sits in **governance, risk and compliance**: an ISO/IEC 27001 Annex A applicability scoping exercise, secure code remediation tested against the DISA STIG checklist, and framework selection analysis for an ISMS case study. My dissertation was a **secondary research study** on digital forensics in cloud computing, for which I designed a six-phase conceptual framework addressing jurisdiction, chain of custody, and the tension between GDPR and the U.S. CLOUD Act.",
  ],
}

// ─── SKILLS ────────────────────────────────────────────────
// Context note: unless stated otherwise, tooling below was applied in
// university coursework, certification labs, or volunteer casework.
export const skillsNote =
  "Applied in university coursework, certification labs and volunteer casework."

export const skillGroups = [
  {
    title: "Governance, Risk & Compliance",
    pills: [
      "ISO/IEC 27001",
      "Statement of Applicability",
      "NIST CSF",
      "FAIR",
      "DISA STIG",
      "Chain of Custody",
    ],
  },
  {
    title: "Legal & Standards",
    pills: [
      "GDPR",
      "US CLOUD Act",
      "ISO/IEC 27037",
      "NIST SP 800-86",
      "NISTIR 8006",
      "ACPO Good Practice Guide",
    ],
  },
  {
    title: "DFIR Tools",
    pills: ["Magnet AXIOM", "EnCase", "Autopsy", "KAPE", "Volatility3", "Belkasoft", "Wireshark"],
  },
  {
    title: "Acquisition & Artefacts",
    pills: [
      "LiME",
      "AVML",
      ".E01 Processing",
      "Live Capture",
      "Event Logs",
      "Registry Hives",
      "Prefetch",
      "Amcache",
      "Shimcache",
    ],
  },
  {
    title: "Cloud & Mobile Forensics",
    pills: ["M365", "Cloud Email Artefacts", "Mobile Forensics", "AWS", "Microsoft Azure"],
  },
  {
    title: "SIEM, AppSec & OSINT",
    pills: ["Splunk", "OWASP ZAP", "Shodan", "VirusTotal", "MITRE ATT&CK"],
  },
]

// ─── PROJECTS ──────────────────────────────────────────────
export type ProjectType = "dfir" | "grc" | "life"

export interface Project {
  icon: string
  badge: string
  type: ProjectType
  title: string
  desc: string
  tags: string[]
  wip?: boolean
  /** Decorative case reference shown in the card header */
  caseRef: string
  /** Group work context, e.g. "4-person group assignment · Jan–May 2025" */
  team?: string
  /** Numbered framework/model of my own design */
  phases?: string[]
  /** Show the word/phase counters (dissertation card only) */
  counters?: boolean
  links: { label: string; href: string; amber?: boolean }[]
}

export const projects: Project[] = [
  {
    icon: "🛡️",
    badge: "GRC · UWE Bristol",
    type: "grc",
    caseRef: "CASE-GRC-2025-001",
    title: "ISO/IEC 27001 ISMS Proposal",
    team: "4-person group assignment · Jan–May 2025",
    desc: "An Information Security Management System proposal aligned to ISO/IEC 27001, pairing Annex A control scoping with hands-on remediation of a deliberately vulnerable codebase. Completed an Annex A applicability scoping exercise in Excel — deciding which controls were relevant and documenting the justification for each to form the Statement of Applicability — then tested a pre-built codebase with known security gaps against the DISA STIG checklist, making direct remediation changes for issues including HTTPS enforcement and password protection, and tracking findings from critical to low priority within the deadline. Built and delivered the presentation explaining the methodology and the reasoning behind each control decision.",
    tags: ["ISO/IEC 27001", "Statement of Applicability", "DISA STIG", "Secure Code Remediation", "Risk Prioritisation"],
    links: [],
  },
  {
    icon: "🏛️",
    badge: "GRC · UFCFRB-15-3",
    type: "grc",
    caseRef: "CASE-GRC-2025-002",
    title: "ISMS Case Study & Framework Selection",
    team: "6-person group assignment · Jan–Mar 2025",
    desc: "Security Management in Practice — presenting an information security management case study to the executive team of a fictional organisation. Justified why a formal ISMS was critical to the business and recommended a framework by weighing ISO/IEC 27001 against the NIST Cybersecurity Framework, alongside FAIR risk quantification to express exposure in terms the executive audience could act on.",
    tags: ["ISO/IEC 27001", "NIST CSF", "FAIR", "ISMS", "Executive Communication"],
    links: [],
  },
  {
    icon: "☁️",
    badge: "Research · Dissertation",
    type: "dfir",
    caseRef: "CASE-RES-2025-001",
    title: "Digital Forensics in Cloud Computing",
    desc: "7,071-word dissertation on the challenges, techniques and legal implications of digital forensics in cloud environments. Reviews jurisdiction, multi-tenancy, encryption and data volatility through existing literature — citing tooling used in other researchers' work (FROST, Magnet AXIOM Cloud, Cellebrite UFED, AWS CloudTrail, EnCase, Volatility) — alongside a comparative analysis of GDPR against the U.S. CLOUD Act, referenced to ISO/IEC 27037, ISO/IEC 27001, NIST SP 800-86, NISTIR 8006 and the ACPO Good Practice Guide. Culminates in a six-phase conceptual framework of my own design.",
    phases: [
      "Incident Identified and Scope",
      "Legal Authorization and Jurisdiction Assessment",
      "Evidence Collection Orchestration",
      "Evidence Preservation and Storage",
      "Evidence Examination and Analysis",
      "Report Generation and Legal Presentation",
    ],
    counters: true,
    tags: ["Cloud Forensics", "GDPR", "US CLOUD Act", "ISO/IEC 27037", "NIST SP 800-86", "NISTIR 8006", "ACPO Guidelines"],
    links: [{ label: "📄 Read Dissertation", href: "/FYP_22034405.pdf" }],
  },
  {
    icon: "🔬",
    badge: "DFIR · UWE Bristol",
    type: "dfir",
    caseRef: "CASE-DFIR-2025-003",
    title: "Multi-Platform Forensic Lifecycle",
    desc: "Year 3 coursework covering the post-acquisition forensic lifecycle across a laptop endpoint, M365 cloud environment and mobile device using Magnet AXIOM, EnCase and Autopsy — processing .E01 images and Windows artefacts including event logs, registry hives, Prefetch, Amcache and Shimcache, then building a unified incident timeline linking activity across all three evidence sources.",
    tags: ["Magnet AXIOM", "EnCase", "Autopsy", ".E01 Processing", "M365", "Mobile Forensics", "Timeline Analysis"],
    links: [],
  },
  {
    icon: "🇬🇧",
    badge: "Life Labs · Civic Tech",
    type: "life",
    caseRef: "PROJ-LIFE-2024-001",
    title: "BNO Settlement Checklist",
    desc: "A React and TypeScript web application helping Hong Kong BN(O) visa holders navigate the UK settlement (ILR) process. Auto-generates personalised document checklists, tracks the 180-day absence rule, and calculates the earliest eligible application date. Designed, built and deployed independently, then restructured over several rounds in response to real user feedback. Built with AI tooling (including Claude) as a development partner — I directed the architecture and the decisions, and used AI to accelerate debugging and refactoring.",
    tags: ["React", "TypeScript", "AI-Assisted Development", "UK Immigration Rules"],
    links: [
      { label: "↗ Live App", href: "https://redick2019.github.io/BNO_CheckList/", amber: true },
      { label: "GitHub", href: "https://github.com/Redick2019/BNO_CheckList" },
    ],
  },
  {
    icon: "🤖",
    badge: "DFIR · AI Tooling",
    type: "dfir",
    caseRef: "CASE-DFIR-2026-001",
    title: "AI Conversation Logger",
    desc: "A forensic-grade tool designed to capture, structure and analyse interactions with AI language models — exploring how conversational data generated by LLMs could be preserved, examined and presented within a digital forensics investigation framework.",
    tags: ["Python", "LLM Analysis", "Log Forensics", "AI"],
    wip: true,
    links: [],
  },
]

// ─── EXPERIENCE ────────────────────────────────────────────
export interface Role {
  role: string
  org: string
  period: string
  meta?: string
  points: string[]
}

export const experience: Role[] = [
  {
    role: "First Line Responder",
    org: "The Cyber Helpline",
    period: "Jan 2026 – Present",
    meta: "Voluntary",
    points: [
      "Handle live cases involving phishing, malware and unauthorised access, supporting victims of cybercrime directly.",
      "Carry out live triage and apply the escalation protocol for cases needing specialist support.",
      "Produce structured case documentation for handover within a shared ticket system.",
    ],
  },
  {
    role: "Operations Team Member",
    org: "Auntie Anne's Pretzel Bar, Cheltenham",
    period: "Sept 2022 – Present",
    points: [
      "Maintain documentation and process compliance across daily operations.",
      "Trusted with cash handling within six months of joining.",
    ],
  },
  {
    role: "Photography Assistant",
    org: "KaFu Studio, Greenwich, London",
    period: "Apr – Jul 2022",
    points: [
      "Coordinated logistics and communication between clients, photographers and on-site staff for wedding shoots.",
      "Maintained and prepared clothing used across shoots.",
    ],
  },
  {
    role: "Office Assistant",
    org: "Brighten HK, Taiwan",
    period: "2020 – 2021",
    points: [
      "Liaised with suppliers and dealers on pricing and samples.",
      "Maintained sales and stock records in Excel and built PowerPoint presentations.",
    ],
  },
]

// ─── EDUCATION ─────────────────────────────────────────────
export const education = [
  {
    qualification: "BSc (Hons) Cyber Security and Digital Forensics — 2:1",
    org: "University of the West of England, Bristol",
    period: "2022 – 2025",
  },
  {
    qualification: "Foundation Programme (Computing)",
    org: "Bellerbys College, Brighton",
    period: "2021 – 2022",
  },
  {
    qualification: "Secondary education to Form 6",
    org: "Hong Kong",
    period: "— 2021",
  },
]

// ─── CERTIFICATIONS ────────────────────────────────────────
export interface Certification {
  name: string
  issuer: string
  /** Award date, or validity window */
  year: string
  /** false = actively studying towards, not yet held */
  held: boolean
  /** screenshot in public/certs/ — the card hides the image if the file is missing */
  image?: string
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "Valid to May 2028",
    held: true,
    image: "/certs/aws-ccp.png",
  },
  {
    name: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "May 2024",
    held: true,
    image: "/certs/azure-ai-900.png",
  },
  {
    name: "Belkasoft Windows Forensics",
    issuer: "Belkasoft",
    year: "Feb 2025",
    held: true,
    image: "/certs/belkasoft-windows-forensics.png",
  },
  {
    name: "SOC Operations Bootcamp (Splunk)",
    issuer: "ThinkCloudy",
    year: "2025",
    held: true,
    image: "/certs/soc-bootcamp.png",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "Studying towards",
    held: false,
  },
]

// ─── STATS ─────────────────────────────────────────────────
export const stats = [
  { n: "2:1", l: "BSc Cyber Security & DFIR" },
  { n: "4", l: "Certifications Held" },
  { n: "6", l: "Projects & Research" },
  { n: "Open", l: "To Opportunities", green: true },
]

// ─── CURRENT FOCUS ─────────────────────────────────────────
export interface FocusItem {
  status: string
  statusColor: "blue" | "amber" | "green"
  title: string
  desc: string
}

export const currentFocus: FocusItem[] = [
  {
    status: "Studying",
    statusColor: "blue",
    title: "CompTIA Security+",
    desc: "Actively studying towards certification — building the baseline security knowledge that GRC and SOC roles ask for.",
  },
  {
    status: "Scoping",
    statusColor: "amber",
    title: "Personal Home Lab",
    desc: "In the early stages of scoping a home lab for hands-on risk and security assessment practice. Not yet built — this is planning, not a finished environment.",
  },
  {
    status: "Searching",
    statusColor: "green",
    title: "GRC / Compliance & SOC Analyst Roles",
    desc: "Actively job searching across the UK. Leaning towards governance, risk and compliance where my strongest material sits, while keeping SOC and technical analyst options open.",
  },
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
