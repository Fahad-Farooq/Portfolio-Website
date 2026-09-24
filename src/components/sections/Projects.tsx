import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExternalLink, Star, FolderGit2 } from "lucide-react";

export function Projects() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 03. Selected Work"
          title="Featured Projects"
          subtitle="A selection of full-stack web applications and AI-integrated prototypes I have developed."
        />

        {/* Featured Projects Grid with ScrollReveal & subtle card hover */}
        <div className="space-y-8 sm:space-y-10">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100}>
              <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    {/* Category and Featured Pill */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40">
                        <Star className="w-3 h-3 fill-current" />
                        Featured Project
                      </span>
                      {project.category && (
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          &bull; {project.category}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Highlights list if provided */}
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="space-y-1.5 pt-1">
                        {project.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2"
                          >
                            <span className="text-blue-500 mt-1">&rsaquo;</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons with smooth hover micro-interactions */}
                  <div className="flex lg:flex-col items-center sm:items-start gap-3 pt-2 lg:pt-0 shrink-0">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-sm w-full sm:w-auto"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-sm w-full sm:w-auto"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                        Private Repository
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Projects Sub-section */}
        {otherProjects.length > 0 && (
          <div className="mt-14">
            <ScrollReveal>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Other Projects & Experiments</span>
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx * 80}>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 h-full group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                          {project.category || "Project"}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-150 hover:scale-110"
                              aria-label={`${project.title} source code`}
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-150 hover:scale-110"
                              aria-label={`${project.title} live demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60">
                      {project.technologies.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="subtle">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
