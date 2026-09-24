import { LearningTopic } from "@/types";

export const learningData: {
  heading: string;
  description: string;
  topics: LearningTopic[];
} = {
  heading: "Currently Exploring & Learning",
  description:
    "As I progress in my Computer Science degree, I am actively broadening my engineering horizons beyond traditional web development into modern artificial intelligence and machine learning paradigms.",
  topics: [
    {
      title: "Artificial Intelligence Fundamentals",
      category: "Foundations",
      notes:
        "Understanding search algorithms, heuristics, and agentic workflows.",
    },
    {
      title: "Machine Learning & Deep Learning",
      category: "Modeling",
      notes:
        "Studying core supervised and unsupervised algorithms, neural networks, and model evaluation.",
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      category: "Applied AI",
      notes:
        "Exploring semantic embeddings, vector stores, and contextual grounding for LLMs.",
    },
    {
      title: "LLM-Based Systems & Prompt Engineering",
      category: "Integration",
      notes:
        "Connecting large language models with external APIs and functional tools.",
    },
    {
      title: "FastAPI for AI Services",
      category: "Backend",
      notes:
        "Building fast, asynchronous Python APIs to serve model inferences and AI endpoints.",
    },
    {
      title: "AI-Powered Web Applications",
      category: "Full Stack",
      notes:
        "Synthesizing React/Next.js frontends with intelligent backend services.",
    },
  ],
};
