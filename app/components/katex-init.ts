"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Declares the global window object with the renderMathInElement method.
 * This method is used by the KaTeX library to render math equations in the browser.
 */
declare global {
  interface Window {
    renderMathInElement: (element: HTMLElement, options: unknown) => void;
  }
}

/**
 * Initializes the KaTeX library on the client side.
 */
export function KatexInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "\u0024\u0024", right: "\u0024\u0024", display: true },
          { left: "\u0024", right: "\u0024", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
      });
    }
  }, [pathname]);

  return null;
}
