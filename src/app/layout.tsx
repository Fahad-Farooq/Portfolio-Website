import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profileData.name} — Full Stack Web Developer & CS Undergraduate`,
  description: `${profileData.name} - ${profileData.title}. ${profileData.tagline}`,
  keywords: [
    profileData.name,
    "Full Stack Developer",
    "Computer Science",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "AI Engineering",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: profileData.name }],
  openGraph: {
    title: `${profileData.name} | Developer Portfolio`,
    description: profileData.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | Developer Portfolio`,
    description: profileData.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-500/20 selection:text-blue-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
