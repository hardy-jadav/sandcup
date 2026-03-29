# 🚀 Leadership Homepage

A modern, responsive **single-page leadership/political homepage** built using React and Vite, focused on communicating credibility, trust, and a clean UI hierarchy.

## 🎯 Core Objective

- Communicate **leadership, trust, and authority**.
- Maintain a **clean UI with strong visual hierarchy** and gold/navy accenting.
- Ensure **performance, scalability, and maintainability** using modern React.
- Prepare the foundation for **future CMS/API integration** for news and initiatives.

---

## 🧩 Features & Sections

The homepage includes the following interactive and heavily animated components:

- ✅ **Sticky Navbar** with smooth scrolling to sections.
- ✅ **Hero Section** featuring an SVG line-drawing stroke animation for dynamic text and staggered metric counters.
- ✅ **About Section** with pulse-ring avatars and floating statistics.
- ✅ **Vision Section** arraying core beliefs with custom glassmorphic cards and numbered badges.
- ✅ **Initiatives (Card Grid)** demonstrating key projects with sliding hover-arrows.
- ✅ **News Component** using a grid format to track real-world progress.
- ✅ **Testimonials (Carousel)** utilizing Swiper.js to present authoritative quotes.
- ✅ **Call-to-Action Section** with a compelling "Get Involved" flow surrounded by floating particle effects.
- ✅ **Footer** with quick links, back-to-top floating button, and smooth scroll-triggered reveals.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (v4) & Vanilla CSS for specific custom properties/animations (`index.css`)
- **Animations:** Framer Motion (for staggered fades, spring physics, and viewport triggers)
- **Carousels:** Swiper.js
- **Icons:** React Icons (`react-icons/hi`, `fa`, etc.)

---

## 🧱 Project Structure

```text
src/
│
├── components/          # Reusable section components
│   ├── About.jsx        # Background and mission overview
│   ├── CTA.jsx          # "Get Involved" call-to-action block
│   ├── Footer.jsx       # Bottom layout and navigation links
│   ├── Hero.jsx         # Highly animated above-the-fold content
│   ├── Initiatives.jsx  # Grid outlining current projects/campaigns
│   ├── Navbar.jsx       # Sticky header with anchor links
│   ├── News.jsx         # Latest updates and insights
│   ├── Testimonials.jsx # Swiper-powered user quote carousel
│   └── Vision.jsx       # Core values and policies
│
├── pages/               # Page-level containers
│   └── Home.jsx         # Main orchestration of all components
│
├── App.jsx              # Root component rendering the Home page
├── main.jsx             # React entry point
└── index.css            # Global design tokens, variables, & custom animations
```

---

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:** Visit `http://localhost:5173/`

5. **Live Demo:** https://sandcup.vercel.app/

## 💡 Notes on Animations
Most scroll-based animations are powered by `framer-motion`'s `useInView` or `whileInView` APIs. Global custom keyframes (like the SVG stroke effect in the hero heading and the shining button sweep) are defined at the bottom of `src/index.css`.
