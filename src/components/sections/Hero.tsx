import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ArrowRight, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Indicator: Gentle entrance */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 mb-6 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profileData.status}</span>
            </div>
          </div>

          {/* Name & Title: Subtle fade-up entrance */}
          <div className="animate-fade-up delay-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {profileData.name}
              </span>
            </h1>
          </div>

          {/* Professional Title: Slightly delayed fade-up */}
          <div className="animate-fade-up delay-200">
            <p className="mt-4 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 tracking-tight">
              {profileData.title}
            </p>
          </div>

          {/* Tagline / Introduction: Slightly delayed fade-up */}
          <div className="animate-fade-up delay-300">
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {profileData.tagline}
            </p>
          </div>

          {/* Call to Actions & Links: Slightly delayed entrance */}
          <div className="animate-fade-up delay-400 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-sm"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Resume</span>
            </a>

            <div className="h-6 w-px bg-slate-300 dark:bg-slate-800 mx-1 hidden sm:block" />

            {/* Social Links with subtle hover elevations */}
            <div className="flex items-center gap-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.email}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
