import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Code2, Sparkles, GraduationCap, Compass } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "CS Undergraduate",
      text: "Solid theoretical grounding in algorithms, data structures, and software engineering principles.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      text: "Hands-on experience developing end-to-end web applications with modern TypeScript, React, and Node.js ecosystems.",
    },
    {
      icon: Sparkles,
      title: "AI / ML Exploration",
      text: "Actively studying modern AI paradigms, LLM architectures, and practical API integration.",
    },
    {
      icon: Compass,
      title: "Practical Problem Solving",
      text: "Focused on clean code, thoughtful architecture, and building tools that deliver measurable utility.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 01. About Me"
          title="Building Practical Web Solutions That Work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Bio Text with ScrollReveal */}
          <ScrollReveal
            delay={100}
            className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            {profileData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ScrollReveal>

          {/* Quick Pillars Grid with Staggered ScrollReveal and subtle hover */}
          {/*<div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={150 + idx * 80}>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>*/}
        </div>
      </div>
    </section>
  );
}
