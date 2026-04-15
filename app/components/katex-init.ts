"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Declares the global window object with the renderMathInElement method.
 * This method is used by the KaTeX library to render math equations in the browser.
 * It is declared globally so that it can be accessed from anywhere in the application.
 */
declare global {
  /**
   * Interface for the global window object.
   *
   * The renderMathInElement method is used by the KaTeX library to render math equations in the browser.
   * It is declared globally so that it can be accessed from anywhere in the application.
   */
  interface Window {
    renderMathInElement: (element: HTMLElement, options: unknown) => void;
  }
}

/**
 * Initializes the KaTeX library on the client side.
 * This component should be placed in the root layout of the application.
 * It will render math equations in the browser using the KaTeX library.
 * @returns {null} A null component that does not render anything.
 */
export function KatexInit() {
  /**
   * The current pathname of the application.
   * This value is updated whenever the user navigates to a new page.
   * @type {string}
   */
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
