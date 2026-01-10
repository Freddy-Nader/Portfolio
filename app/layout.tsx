import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider"
import { Analytics } from "@/app/components/analytics";
import { KatexInit } from "@/app/components/katex-init";
import { HeadKatex } from "@/app/components/head-katex"
import "@/app/globals.css";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}