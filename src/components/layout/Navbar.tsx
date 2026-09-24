"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 animate-fade-in ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Personal Name */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-hidden"
            aria-label={`${profileData.name} - Home`}
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center font-mono font-bold text-sm tracking-tighter shadow-xs group-hover:scale-105 transition-transform duration-200">
              {profileData.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </span>
            <span className="font-semibold text-slate-900 dark:text-slate-100 tracking-tight text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {profileData.name}
            </span>
          </Link>

          {/* Desktop Navigation Links with subtle animated underline / highlight */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-md transition-colors duration-200 group"
              >
                <span>{item.label}</span>
                {/* Subtle animated indicator bar */}
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-left" />
              </a>
            ))}
          </nav>

          {/* Action Buttons (Resume + Theme Toggle) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-sm"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Resume</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col justify-between overflow-y-auto z-40 animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
