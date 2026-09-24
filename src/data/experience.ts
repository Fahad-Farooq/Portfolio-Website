import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    organization: "[Your Organization / Company / University Lab]",
    role: "[Software Developer Intern / Role Title]",
    duration: "[Start Date] — [Present / End Date]",
    location: "[Location / Remote]",
    description: [
      "[Describe your core responsibility or project scope in 1-2 concise sentences]",
      "[Describe a specific technology or workflow you implemented, e.g., developed RESTful endpoints or built UI components]",
      "[Mention any collaborative practices, e.g., code reviews, git workflows, or team sprint planning]",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Git"],
    link: "https://example.com",
  },
  {
    id: "exp-2",
    organization: "[Your Previous Role / Project / Freelance Client]",
    role: "[Junior Developer / Student Contributor]",
    duration: "[Start Date] — [End Date]",
    location: "[Location / Remote]",
    description: [
      "[Key responsibility or milestone achieved during this tenure]",
      "[Specific engineering challenge addressed or full-stack solution delivered]",
    ],
    technologies: ["JavaScript", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];
