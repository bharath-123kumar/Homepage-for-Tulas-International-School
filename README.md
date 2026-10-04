# TIS — Tula's International School (Homepage Redesign)

A modern, high-converting, agency-quality frontend redesign for **Tula's International School (TIS)**, Dehradun's premier CBSE co-educational residential boarding institution.

Official Reference: [https://tis.edu.in/](https://tis.edu.in/)

---

## 🌟 Project Overview

This project is a complete, production-ready frontend redesign created with **React.js**, **Tailwind CSS**, **Framer Motion**, and **Vite**. It retains the authentic branding, values, contact details, and institutional facts of Tula's International School ("The Modern Gurukul") while elevating the user experience through smooth micro-animations, glassmorphism UI, a custom spring cursor, scroll progress indicator, and responsive bento grids.

---

## ✨ Key Features

- **Modern Hero Section**: High-impact visual composition featuring large typography, floating badge cards, staggered Framer Motion entrances, and quick admission triggers.
- **Interactive Top Navbar**: Sticky glassmorphism navigation with scroll detection, top announcement bar with verified school contact info, and animated full-width mobile dropdown menu.
- **Scroll Progress Indicator**: Top spring-animated progress bar tracking scroll position from 0% to 100%.
- **Custom Precision Cursor**: Smooth spring-following cursor ring with hover state expansion and automatic mobile/touch device disabling.
- **Viewport Scroll Reveals**: Reusable `<SectionReveal />` component supporting `fade-up`, `fade-left`, `fade-right`, and `scale` transitions.
- **Editorial About Section**: Storytelling layout focusing on TIS's "Modern Gurukul" ethos (Mind, Body & Soul).
- **Animated Statistics Counter**: Factual, verified numbers (14+ Years, 22+ Acres, 15+ Olympic Sports, 20,000+ Books, 100% CBSE Pass Rate) animated when entering the viewport.
- **Academic Program Pathways**: Interactive cards covering Primary, Middle, Secondary, and Senior Secondary stages.
- **Bento Grid ("Why TIS")**: Asymmetric modern grid showcasing core institutional pillars.
- **Interactive Infrastructure Gallery**: Filterable facilities grid with animated lightbox previews for classrooms, equestrian sports, shooting range, STEM labs, and boarding houses.
- **Co-Curricular Student Life**: Rich card grid detailing clubs, MUN, robotics, classical music, and eco-farming.
- **Testimonials Showcase**: Responsive card grid featuring parent, alumni, and head boy reviews with 5-star ratings.
- **High-Converting Admissions CTA & Modal**: Dedicated conversion block with instant popup enquiry form.
- **Verified Contact & Map Integration**: Authentic address, helpline numbers (`+91-9837983791`), email (`info@tis.edu.in`), office hours, and Google Maps link.
- **Accessibility & Motion Safety**: Built with semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), visible focus states, ARIA labels, and `prefers-reduced-motion` CSS overrides.

---

## 🛠️ Technology Stack

- **Framework**: [React.js](https://react.dev/) (v18+)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3) + PostCSS + Autoprefixer
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility Helpers**: `clsx`, `tailwind-merge`

---

## 📁 Required Project Structure

```
homepage for Tulas International School/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Statistics.jsx
│   │   ├── Programs.jsx
│   │   ├── WhyTIS.jsx
│   │   ├── Facilities.jsx
│   │   ├── CampusLife.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionReveal.jsx
│   │   └── AdmissionsModal.jsx
│   ├── data/
│   │   └── schoolData.js
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/tis-school-website.git
cd tis-school-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local dev server
```bash
npm run dev
```

Local URL:
[http://localhost:5173/](http://localhost:5173/)

---

## 📦 Production Build & Testing

To create and preview an optimized production bundle:

```bash
# Build production assets in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### Method A — Vercel (Recommended)

#### Option 1: Vercel Dashboard
1. Push project repository to GitHub.
2. Log into [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository `tis-school-website`.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

#### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel

# Deploy to production:
vercel --prod
```

---

### Method B — Netlify

#### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init

# Deploy preview:
netlify deploy

# Deploy to production:
netlify deploy --prod --dir=dist
```

#### Option 2: Netlify Dashboard
1. Build command: `npm run build`
2. Publish directory: `dist`

---

## 🌿 Git Workflow Commands

```bash
git init
git add .
git commit -m "Initial TIS homepage redesign"
git branch -M main
git remote add origin https://github.com/your-username/tis-school-website.git
git push -u origin main
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` if local environment variables are required:
```bash
cp .env.example .env
```
*Note: Vite exposes variables prefixed with `VITE_` to client-side code.*

---

## 📱 Responsive & Motion Design Principles

1. **Breakpoints Tested**:
   - **Desktop**: 1440px+
   - **Laptop**: 1024px
   - **Tablet**: 768px
   - **Mobile**: 480px & 375px
2. **Micro Interactions**:
   - Buttons: Subtle glow, elevation on hover, active compression.
   - Cards: Subtle `translateY(-5px)` shift with border glow.
   - Images: Slow `scale(1.05)` zoom on hover.
3. **Accessibility**:
   - Explicit `alt` descriptions on images.
   - Full keyboard navigation support.
   - High contrast ratios adhering to WCAG 2.1 AA.
   - Automatic animation disabling when OS `prefers-reduced-motion` is active.

---

## 🔮 Future Enhancements

- Virtual 360-degree campus tour integration.
- Online fee calculator & boarding portal login.
- Multi-language support (Hindi / English toggle).
