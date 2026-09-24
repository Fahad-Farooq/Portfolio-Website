import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Briefcase, ExternalLink, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 04. Experience"
          title="Development & Work Experience"
          subtitle="A timeline of my hands-on software development roles, internships, and collaborative contributions."
        />

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 120}>
              <div className="relative group">
                {/* Timeline marker with subtle hover pulse */}
                <div className="absolute-left-[31px] sm:absolute-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-slate-950 ring-4 ring-white dark:ring-slate-950 group-hover:scale-125 transition-transform duration-200" />

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                        <Briefcase className="w-4 h-4" />
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline inline-flex items-center gap-1"
                          >
                            <span>{item.organization}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span>{item.organization}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {item.location && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                      {item.location}
                    </p>
                  )}

                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">&rsaquo;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                      {item.technologies.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="subtle">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
