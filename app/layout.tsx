import type { Metadata } from "next";
import { Analytics } from "@/app/components/analytics";
import { KatexInit } from "@/app/components/katex-init";
import { HeadKatex } from "@/app/components/head-katex"
import { Footer } from "@/app/components/elements/footer";
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
 * The body tag contains the noscript tag for Google Analytics, Katex initialization, and the children of the component.
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
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Analytics />
        <HeadKatex />
      </head>
      <body
        className="bg-[var(--bg-color)] text-[color:var(--text-primary)] font-[var(--font-stack)] leading-relaxed text-base text-foreground transition-colors duration-300 ease-in-out antialiased min-h-screen flex flex-col"
      >
        <KatexInit />
        <div className="max-w-[720px] mx-auto px-8 my-4 w-full flex flex-col flex-1">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
