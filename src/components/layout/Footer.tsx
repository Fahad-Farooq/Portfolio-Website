"use client";

import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {profileData.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Built with Next.js, TypeScript & Tailwind CSS &bull; &copy;{" "}
              {currentYear}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.email}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
