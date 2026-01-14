"use client";

/**
 * Returns a set of script tags that load the KaTeX library.
 * The KaTeX library is a popular JavaScript library for rendering mathematical expressions.
 * The library is loaded from a CDN, and the integrity of the scripts is checked using the "integrity" attribute.
 * The first script tag loads the KaTeX CSS file, the second script tag loads the KaTeX JavaScript file, and the third script tag loads the auto-render extension of KaTeX.
 */
export function HeadKatex() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossOrigin="anonymous" />
    </>
  )
}
