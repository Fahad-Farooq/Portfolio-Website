import { learningData } from "@/data/learning";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Compass, BookOpen } from "lucide-react";

export function Learning() {
  return (
    <section
      id="learning"
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 06. Technical Trajectory"
          title={learningData.heading}
          subtitle={learningData.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningData.topics.map((topic, idx) => (
            <ScrollReveal key={idx} delay={idx * 70}>
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-300 dark:hover:border-blue-900/60 hover:-translate-y-1 hover:shadow-2xs transition-all duration-200 h-full group">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/40">
                    {topic.category}
                  </span>
                  <Compass className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:rotate-45 transition-transform duration-300" />
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {topic.title}
                </h3>

                {topic.notes && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {topic.notes}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-8 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700/80 bg-white/40 dark:bg-slate-900/30 flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <strong>Active Learning Philosophy:</strong> I pair theory with
              practical implementation by building prototypes and integrating
              intelligent endpoints into full-stack architectures.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
