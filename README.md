# Shivani Kapoor — Full Stack Software Engineer Portfolio

An interview-focused, production-grade portfolio designed specifically for **Full Stack, Backend, and Frontend** technical interviews and hiring manager evaluations.

---

## 🌟 Why This Portfolio Gets You Selected

Most developer portfolios only list links and generic skills. This portfolio is engineered to pass technical screenings by providing:

1. **STAR + Architecture Case Studies**: Every project has an interactive modal detailing:
   - Real-world Problem Statement
   - System Architecture & Data Flow
   - Technology Rationale (trade-offs explaining **why** each tool was chosen)
   - Real Engineering Roadblocks & Solutions
   - Measurable Performance Metrics (<80ms API latency, 60 FPS WebGL rendering, TimescaleDB aggregates)
2. **Interactive Code & Architecture Previews**: Includes clean code samples demonstrating system patterns, distributed locking, and canvas lifecycle management.
3. **Embedded Interview Q&A**: Anticipates tough questions hiring managers ask (e.g., PostgreSQL vs NoSQL for spatial graphs, Pixi.js WebGL vs DOM, cryptographic erasure with HashiCorp Vault).
4. **Quantified Work Experience**: Real achievements at Oodles Technologies highlighting scale and impact.

---

## 🚀 Quick Start

### 1. Run in Development Mode
```bash
cd /home/shivani/Desktop/port
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure & Customization

```
/home/shivani/Desktop/port/
├── src/
│   ├── data/
│   │   └── portfolioData.ts    <-- ⭐ Update your projects, stats, links & bio here
│   ├── components/
│   │   ├── Navbar.tsx          <-- Brand navigation & status pill
│   │   ├── Hero.tsx            <-- Role, value proposition & primary CTAs
│   │   ├── StatsBar.tsx        <-- Quantified metrics strip
│   │   ├── ProjectsSection.tsx <-- Filterable case study cards
│   │   ├── ProjectModal.tsx    <-- Deep dive modal with architecture & interview Q&A
│   │   ├── SkillsSection.tsx   <-- Categorized skill matrix with production context
│   │   ├── ExperienceSection.tsx <-- Experience at Oodles Technologies
│   │   ├── InterviewGuideSection.tsx <-- Bonus: How I answer interview questions
│   │   ├── ContactSection.tsx  <-- Direct email copy, LinkedIn, and contact form
│   │   ├── Footer.tsx
│   │   └── Icons.tsx
│   ├── types.ts                <-- TypeScript interfaces for data safety
│   ├── index.css               <-- Tailwind CSS v4 styling & glassmorphism
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

### To add or update projects:
Simply open [`src/data/portfolioData.ts`](file:///home/shivani/Desktop/port/src/data/portfolioData.ts) and edit the `PROJECTS` array. All UI components update automatically!

---

## 🌐 1-Click Deployment

### Deploy to Vercel (Recommended)
1. Push this folder to your GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "feat: interview-ready portfolio"
   git remote add origin https://github.com/shivaniKapoor-Dev/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) -> **Add New Project** -> Select your repo -> Click **Deploy**.
