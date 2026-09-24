import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "[Project 1: Full-Stack Web Application]",
    description:
      "A complete full-stack web application built with modern architecture. [Replace this with a concise summary of what your project does, the core problem it solves, and the primary functionality].",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    featured: true,
    category: "Full Stack",
    image: "/images/projects/placeholder-1.svg",
    githubUrl: "https://github.com/your-username/project-one",
    liveUrl: "https://project-one-demo.vercel.app",
    highlights: [
      "[Key Feature 1: User authentication and role-based access]",
      "[Key Feature 2: RESTful API integration for data management]",
      "[Key Feature 3: Responsive design optimized across mobile and desktop]",
    ],
  },
  {
    id: "project-2",
    title: "[Project 2: AI-Powered Application / RAG Prototype]",
    description:
      "An intelligent application exploring LLM integration and semantic retrieval. [Replace with your AI/ML project description, detailing how you combined backend APIs with language models].",
    technologies: ["Python", "FastAPI", "React", "REST APIs", "Tailwind CSS"],
    featured: true,
    category: "AI & Backend",
    image: "/images/projects/placeholder-2.svg",
    githubUrl: "https://github.com/your-username/project-two",
    liveUrl: "",
    highlights: [
      "[Key Feature 1: FastAPI asynchronous endpoint processing]",
      "[Key Feature 2: Retrieval-Augmented Generation workflow]",
      "[Key Feature 3: Clean, modular architecture for AI services]",
    ],
  },
  {
    id: "project-3",
    title: "[Project 3: Interactive Web Dashboard / Tool]",
    description:
      "A responsive client-side web application designed for data visualization and workflow organization. [Replace with your project details and what you learned building it].",
    technologies: [
      "React",
      "JavaScript",
      "Express.js",
      "SQL Server",
      "Tailwind CSS",
    ],
    featured: false,
    category: "Frontend / Full Stack",
    image: "/images/projects/placeholder-3.svg",
    githubUrl: "https://github.com/your-username/project-three",
    liveUrl: "https://project-three-demo.vercel.app",
    highlights: [
      "[Key Feature 1: Clean state management and reusable components]",
      "[Key Feature 2: Structured database schema in SQL Server]",
    ],
  },
  {
    id: "project-4",
    title: "[Project 4: Media Upload & Management Service]",
    description:
      "A backend service and user interface integrating Cloudinary for asset storage and automated media transformations. [Replace with your project details].",
    technologies: ["Node.js", "Express.js", "Cloudinary", "MongoDB"],
    featured: false,
    category: "Backend & Cloud",
    image: "/images/projects/placeholder-4.svg",
    githubUrl: "https://github.com/your-username/project-four",
    liveUrl: "",
    highlights: [
      "[Key Feature 1: Secure Cloudinary API signature generation]",
      "[Key Feature 2: File validation and media optimization pipelines]",
    ],
  },
];
