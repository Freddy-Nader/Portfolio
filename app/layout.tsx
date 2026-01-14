import type { Metadata } from "next";
import { ThemeProvider, ThemeToggle } from "@/app/components/theme"
import { Analytics } from "@/app/components/analytics";
import { KatexInit } from "@/app/components/katex-init";
import { HeadKatex } from "@/app/components/head-katex"
import "@/app/globals.css";

/**
 * The metadata object contains the title, description, keywords, authors, openGraph, Twitter metadata, and canonical URL of the website.
 * @typedef {Object} Metadata
 * @property {string} title - The title of the website.
 * @property {string} description - A short description of the website.
 * @property {string[]} keywords - An array of keywords related to the website.
 * @property {{name: string}} authors - An array of objects containing the name of the author(s).
 * @property {{type: string, url: string, title: string, description: string, images: string[]}} openGraph - The openGraph metadata of the website.
 * @property {{card: string, title: string, description: string, images: string[]}} twitter - The Twitter metadata of the website.
 * @property {{canonical: string}} alternates - An object containing the canonical URL of the website.
 * @property {URL} metadataBase - The base URL of the website.
 */
export const metadata: Metadata = {
  title: "Alfredo Nader - Portfolio",
  description:
    "Alfredo Nader is a Computer Science student passionate about pure math, programming, and beautiful things. Explore his portfolio, experiments, and writings.",
  keywords: [
    "Alfredo Nader",
    "Freddy Nader",
    "Computer Science",
    "Mathematics",
    "Programming",
    "Portfolio",
    "Anáhuac University",
    "Software Engineer"
  ],
  authors: [{
    name: "Alfredo Nader"
  }],
  openGraph: {
    type: "website",
    url: "https://anader.xyz/",
    title: "Alfredo Nader - Portfolio",
    description: "Alfredo Nader is passionate about pure math, programming, and beautiful things.",
    images: ["https://anader.xyz/img/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfredo Nader - Portfolio",
    description: "Alfredo Nader is passionate about pure math, programming, and beautiful things.",
    images: ["https://anader.xyz/img/og-image.png"],
  },
  alternates: {
    canonical: "https://anader.xyz/",
  },
  metadataBase: new URL("https://anader.xyz/"),
};

/**
 * The root layout component of the website.
 *
 * It renders the HTML structure of the website, including the head and body tags.
 * The head tag contains the favicon, Google Analytics script, and the Katex script.
 * The body tag contains the noscript tag for Google Analytics, the theme provider, Katex initialization, the theme toggle, and the children of the component.
 *
 * The component also sets the default CSS variables for the website, such as the background color, text color, font stack, leading, text size, text foreground, and transition effects.
 *
 * @param {ReactNode} children - The children of the component.
 * @returns {ReactReactElement} The root layout component of the website.
 */
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Analytics />
        <HeadKatex />
      </head>
      <body className="bg-[var(--bg-color)] text-[color:var(--text-primary)] font-[var(--font-stack)] leading-relaxed text-base text-foreground transition-colors duration-300 ease-in-out antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WS2F5Q3W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <KatexInit />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}