"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${encodeURIComponent(profileData.email)}?subject=${encodeURIComponent(
      formSubject || "Project Inquiry / Opportunity",
    )}&body=${encodeURIComponent(formMessage)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 05. Get In Touch"
          title="Let's Connect"
          subtitle="Whether you have an internship opportunity, a project to collaborate on, or just want to discuss software and AI, I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards with ScrollReveal */}
          <ScrollReveal delay={100} className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-click copy */}
            <div className="p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                  Direct Email
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Send an email directly or copy the address to your clipboard.
              </p>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate">
                  {profileData.email}
                </span>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-1.5 rounded-md hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-150 active:scale-95 cursor-pointer shrink-0"
                  aria-label="Copy email address to clipboard"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs space-y-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200">
              <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                Professional Networks
              </h3>

              <div className="flex flex-col gap-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-900 dark:text-slate-100 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Message Composer (Direct Mailto Form) with ScrollReveal */}
          <ScrollReveal
            delay={200}
            className="lg:col-span-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200"
          >
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-1">
              Send a Quick Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              This triggers your email client directly with your message
              pre-formatted. No third-party mail tracking.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5 uppercase"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="e.g. Software Engineering Opportunity / Project Discussion"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Hi Fahad, I'd like to discuss..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-colors duration-200 resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-xs hover:shadow-sm w-full sm:w-auto"
              >
                <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                <span>Open in Email Client</span>
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
