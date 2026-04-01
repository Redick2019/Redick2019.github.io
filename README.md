# Redick2019.github.io — DFIR & Life Labs Portfolio

Personal portfolio website for Redick Chun-Yin Ng, a Digital Forensics & Incident Response graduate.

Live: https://redick2019.github.io

---

## Stack

| Technology | Purpose |
|------------|---------|
| React 18 + TypeScript | Frontend framework |
| Vite | Build tool |
| Tailwind CSS v3 | Styling |
| Framer Motion | Scroll animations |
| GitHub Actions | CI/CD auto-deploy |

---

## Git Workflow

This project follows Git Flow branching strategy:

| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deployed via GitHub Actions |
| `develop` | Integration branch — all features merge here first |
| `feature/*` | Individual features (e.g. `feature/add-animations`) |
| `hotfix/*` | Urgent production fixes |

**Standard flow:**
```
feature/xxx → develop → main → auto-deploy
```

**To contribute or experiment:**
```bash
git checkout develop
git checkout -b feature/your-feature-name
# make changes
git commit -m "feat: description of change"
git push origin feature/your-feature-name
# open Pull Request → develop
```

---

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use case |
|--------|---------|
| `feat:` | New feature or section |
| `fix:` | Bug fix |
| `style:` | Visual/CSS changes |
| `content:` | Text or data updates |
| `chore:` | Config, dependencies |

Examples:
```
feat: add SHA-256 hash animation to project cards
fix: correct BNO checklist URL
content: update AI Logger project description
style: adjust hero name sizing on mobile
```

---

## Project Structure

```
src/
├── data/
│   └── index.ts          ← All content lives here (single source of truth)
├── components/
│   ├── ui/
│   │   └── effects.tsx   ← All animation components
│   └── sections/
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── Tracks.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── About.tsx
│       └── Contact.tsx
├── lib/utils.ts
├── App.tsx
└── index.css
```

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

```bash
git checkout develop
git checkout -b feature/your-change
# make changes
git add .
git commit -m "feat: your change"
git push origin feature/your-change
# merge to develop, then to main
```

---

*Open to DFIR analyst roles. Built with React + Vite.*
