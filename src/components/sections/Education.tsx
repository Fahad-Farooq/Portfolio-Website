import { educationData } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 05. Education"
          title="Academic Background"
          subtitle="Foundations in Computer Science, software design, and engineering methodologies."
        />

        <div className="space-y-6">
          {educationData.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 100}>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mt-1 group-hover:scale-105 transition-transform duration-200">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {item.degree} in {item.field}
                      </h3>
                      <p className="text-base font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                        {item.institution}
                      </p>
                      {item.location && (
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1 rounded-md w-fit self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {item.details && item.details.length > 0 && (
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">&rsaquo;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
