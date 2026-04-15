"use client";

import { Analytics as AnalyticsComponent } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

/**
 * This component includes the analytics scripts for Google Analytics, Google Tag Manager, and Vercel Insights.
 * It also includes a JSON-LD script for search engine optimization.
 */
export function Analytics() {
  /**
   * Returns true if the app is running on Vercel, false otherwise.
   * Uses the environment variable VERCEL.
   * @type {boolean}
   */
  const isVercel = process.env.VERCEL === "1";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alfredo Nader",
    "url": "https://anader.xyz",
    "sameAs": [
      "https://www.instagram.com/alfredo_nader/",
      "https://www.linkedin.com/in/alfredo-nader/",
      "https://github.com/Freddy-Nader/"
    ],
    "jobTitle": "Computer Science Student",
    "worksFor": {
      "@type": "Organization",
      "name": "Anáhuac University"
    },
    "description": "I am a Mexican Computer Science student. I love pure math, programming, and beautiful things."
  };

  return (
    <>
      <AnalyticsComponent />
      <SpeedInsights />
      <Script
        id="google-tag-manager-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-0HPC1ETJ35"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-0HPC1ETJ35");`}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-WS2F5Q3W",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");`}
      </Script>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script id="vercel-analytics" strategy="afterInteractive">
        {`window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};`}
      </Script>
      <Script src={(isVercel) ? "/_vercel/insights/script.js" : ""} strategy="lazyOnload" />
    </>
  );
}