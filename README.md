# Personal Portfolio — Muammar Bintang Abdillah

Personal portfolio website for **Muammar Bintang Abdillah**, a Senior Front End Developer with 5+ years of experience building scalable, responsive web applications for logistics, IoT, and enterprise management platforms.

The site showcases my profile, skills, professional experience, featured projects (with interactive detail modals), education, and contact information — with light/dark theme support and scroll-reveal animations.

🔗 **Live site:** [portofolio-muammar.vercel.app](https://portofolio-muammar.vercel.app)

## ✨ Features

- **Single-page layout** with smooth-scroll navigation: About, Skills, Highlights, Experience, Projects, Education, Contact
- **Project detail modals** — deep-dive into modules and technical features of each project
- **Dark / light theme toggle**
- **Responsive design** — mobile-first, works on all screen sizes
- **Scroll-reveal animations** via a reusable `Reveal` component (IntersectionObserver)
- **Downloadable CV** (PDF) served from `public/`
- All content is data-driven from a single file: [`src/data/profile.ts`](src/data/profile.ts)

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — dev server & build tool
- **Tailwind CSS 3** — styling
- No backend required — fully static, deployable anywhere

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
├── public/               # Static assets (CV PDF, favicon)
├── src/
│   ├── components/       # Navbar, Hero, About, Skills, Projects, ...
│   ├── data/
│   │   └── profile.ts    # ⭐ All portfolio content — edit here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
└── tailwind.config.js
```

## ✏️ Updating Content

All text — profile info, experiences, projects, education, skills — lives in
[`src/data/profile.ts`](src/data/profile.ts). Edit that file and the whole site updates. No need to touch the components.

## 📬 Contact

- **Email:** [bintangmuammar@gmail.com](mailto:bintangmuammar@gmail.com)
- **LinkedIn:** [muammar-bintang-abdillah](https://www.linkedin.com/in/muammar-bintang-abdillah-6490431aa)
- **GitHub:** [@muammar17](https://github.com/muammar17)
- **WhatsApp:** [+62 895-3393-98112](https://wa.me/62895339398112)
