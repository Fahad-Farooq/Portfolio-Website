# Personal Developer Portfolio

A clean, modern, and understated personal developer portfolio.

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
