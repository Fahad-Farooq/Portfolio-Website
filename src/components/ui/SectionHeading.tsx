import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`mb-10 sm:mb-14 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <span className="font-mono text-xs sm:text-sm font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
