import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Development",
    description: "Architecting reliable server-side services and APIs.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "FastAPI"],
  },
  {
    category: "Databases",
    description: "Data modeling, querying, and persistent storage.",
    skills: ["MongoDB", "SQL Server"],
  },
  {
    category: "Tools & DevOps",
    description:
      "Version control, media delivery, authentication, and hosting.",
    skills: [
      "Git",
      "GitHub",
      "Cloudinary",
      "Authentication",
      "Deployment & Hosting",
    ],
  },
  {
    category: "AI & Machine Learning (Current Direction)",
    description: "Applied AI concepts and intelligent application patterns.",
    skills: [
      "Python",
      "FastAPI",
      "LLM Integration",
      "RAG Concepts",
      "AI-Powered Applications",
    ],
  },
];
