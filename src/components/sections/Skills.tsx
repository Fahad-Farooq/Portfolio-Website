import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 02. Technical Skills"
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build full-stack web applications and explore modern AI workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const isAI = cat.category.toLowerCase().includes("ai");
            return (
              <ScrollReveal key={idx} delay={idx * 70}>
                <div
                  className={`p-6 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xs ${
                    isAI
                      ? "border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/10 hover:border-blue-300 dark:hover:border-blue-800"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100">
                      {cat.category}
                    </h3>
                    {isAI && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold">
                        Focus
                      </span>
                    )}
                  </div>

                  {cat.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                      {cat.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    {cat.skills.map((skill, sIdx) => (
                      <Badge key={sIdx} variant={isAI ? "accent" : "default"}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
