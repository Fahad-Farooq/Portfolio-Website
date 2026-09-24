# Personal Developer Portfolio

A clean, modern, and understated personal developer portfolio built for a **Computer Science undergraduate and Full Stack Web Developer moving toward AI Engineering**.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **next-themes**.

---

## Quick Start (How to Run Locally)

### 1. Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed on your machine.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🗂️ Project & Content Architecture

All website content is **strictly separated from presentation code**. You will never need to search through JSX files to update your personal details, projects, or links.

```text
src/
├── data/
│   ├── profile.ts      <-- Name, title, bio, email, socials, resume path
│   ├── projects.ts     <-- All projects, tags, links, and featured status
│   ├── skills.ts       <-- Skills categorized into frontend, backend, databases, AI
│   ├── experience.ts   <-- Internships, roles, and work experience timeline
│   └── navigation.ts   <-- Top navigation links
├── components/
│   ├── layout/         <-- Navbar, Footer, ThemeToggle
│   ├── sections/       <-- Hero, About, Skills, Projects, Experience, Contact
│   └── ui/             <-- SectionHeading, Badge, Icons
└── types/
    └── index.ts        <-- Clean TypeScript interfaces
public/
├── images/
│   └── projects/       <-- Put project screenshots here
└── resume.pdf          <-- Put your actual resume PDF here
```

---

## ✏️ How to Customize Your Portfolio

### 1. Updating Your Profile & Socials (`src/data/profile.ts`)

Open `src/data/profile.ts` to change:

- Your name
- Professional title / headline
- Introduction tagline & About bio paragraphs
- Contact email
- GitHub and LinkedIn URLs

```typescript
export const profileData: Profile = {
  name: "Fahad Farooq",
  title:
    "Computer Science Undergraduate | Full Stack Web Developer | Aspiring AI Engineer",
  tagline:
    "Building robust, full-stack web applications and exploring the intersection of software engineering and AI.",
  email: "your.email@example.com",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    email: "mailto:your.email@example.com",
  },
  // ...
};
```

---

### 2. Adding a New Project (`src/data/projects.ts`)

To add a new project, simply append an object to the `projectsData` array in `src/data/projects.ts`:

```typescript
{
  id: "my-new-project",
  title: "AI Document Analyzer",
  description: "A full-stack application that indexes technical PDFs and provides semantic Q&A using RAG.",
  technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "Tailwind CSS"],
  featured: true, // Set to true to highlight in top section, or false for standard grid
  category: "AI & Full Stack",
  image: "/images/projects/ai-analyzer.png", // Placed in public/images/projects/
  githubUrl: "https://github.com/your-username/ai-analyzer", // Optional: leave "" if private
  liveUrl: "https://ai-analyzer-demo.vercel.app",             // Optional: leave "" if not deployed
  highlights: [
    "Vector embedding search with sub-500ms latency",
    "Responsive dark/light UI built with Tailwind CSS",
  ],
}
```

> **Note on Links:** If a project does not have a live URL or is a private repository, leave `liveUrl: ""` or `githubUrl: ""`. The project card handles missing links gracefully without broken buttons or dead links.

---

### 3. Removing a Project

Open `src/data/projects.ts` and delete the corresponding object from the `projectsData` array.

---

### 4. Updating Skills (`src/data/skills.ts`)

Open `src/data/skills.ts`. Each category contains a `skills` array. Just add or remove strings:

```typescript
{
  category: "Frontend Development",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
}
```

---

### 5. Updating Experience

Open `src/data/experience.ts`. Replace placeholder values (`organization`, `role`, `duration`, `description`) with your actual internships or roles.

---

### 6. Adding Your Resume & Images

- **Resume**: Save your resume as `resume.pdf` in the `public/` directory (replacing the placeholder). The Navbar and Hero buttons will immediately open it.
- **Project Images**: Save screenshots in `public/images/projects/` and reference them as `/images/projects/your-image.png`.

---

### 7. Customizing Colors & Theme

Theme variables are cleanly organized in `src/app/globals.css`:

- **Dark Mode**: Colors under `.dark` selector (default: deep slate `#090d16`).
- **Light Mode**: Colors under `:root` selector.
- **Accent Color**: Uses standard Tailwind blue (`blue-600` / `blue-400`). To change accents across the site, simply search & replace `blue-` with another Tailwind color like `emerald-`, `indigo-`, or `violet-`.

---

## 🚀 Deployment to Vercel / Netlify

### Deploy on Vercel (Recommended)

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Next.js is automatically detected. Click **"Deploy"**.

No environment variables are required for initial deployment.
