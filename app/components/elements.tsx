"use client"

import Link from "next/link";
import type { ReactNode } from "react";
import { Caption, withHeadingId } from "./utils";

/**
 * A reusable anchor tag component that handles internal and external links.
 * Automatically adds target="_blank" and rel="noopener noreferrer" to external links.
 * Adds a dashed bottom border to all links.
 * Adds a transition effect to all links.
 * Adds a hover effect to all links.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @param {string} href - The href of the link.
 * @param {{[key: string]: any}} props - Additional props to be passed to the component.
 * @returns {React.ReactElement} A reusable anchor tag component that handles internal and external links.
 */
export function A({ children, className = "", href, ...props }: { children: React.ReactNode; className?: string; href: string;[key: string]: any }) {
  const classes = `
    text-[#111111] dark:text-[#ededed]
    border-b border-dashed border-[#111111] dark:border-[#ededed]
    transition-all duration-200 ease-in-out
    hover:bg-black/10 dark:hover:bg-white/10
    hover:rounded-[4px]
    ${className}
  `;

  if (href[0] === "#" || href.substring(0, 7) === "mailto:" || href.substring(0, 4) === "tel:") {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  } else if (href[0] === "/") {
    // Internal link
    return (
      <Link
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    // External link
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
}

/**
 * A reusable blockquote component that styles its children with a left border and a dark text color.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable blockquote component that styles its children with a left border and a dark text color.
 */
export function Blockquote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <blockquote className={`my-5 text-[#555555] dark:text-[#a1a1a1] pl-3 border-l-4 border-[#e0e0e0] dark:border-[#262626] ${className}`}>
      {children}
    </blockquote>
  );
}

/**
 * A reusable Callout component that displays a callout box with an emoji and text.
 * @param {string} [emoji] - The emoji to be displayed in the callout box.
 * @param {string} [text] - The text to be displayed in the callout box.
 * @param {ReactNode} [children] - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable Callout component that displays a callout box with an emoji and text.
 */
export function Callout({ emoji = "", text = "", children, className = "" }: { emoji?: string; text?: string; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#f7f7f7] dark:bg-[#1a1a1a] text-[#555555] dark:text-[#a1a1a1] flex items-start p-3 my-6 text-base border border-[#e0e0e0] dark:border-[#262626] rounded-md ${className}`}>
      <span className="block w-6 text-center mr-2 scale-[1.2]">{emoji}</span>
      <span className="block grow">{text ?? children}</span>
    </div>
  );
}

/**
 * A reusable Code component that styles its children with a small text size, a padding of 1px, a rounded border, and a dark text color.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable Code component that styles its children with a small text size, a padding of 1px, a rounded border, and a dark text color.
 */
export function Code({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <code
      className={`
        [p_&]:text-sm
        [p_&]:px-1
        [p_&]:py-0.5
        [p_&]:rounded-sm
        [p_&]:bg-[#f7f7f7]
        dark:[p_&]:bg-[#1a1a1a]
        text-[#111111] dark:text-[#ededed]
        border border-[#e0e0e0] dark:border-[#262626]
        ${className}
      `}
    >
      {children}
    </code>
  );
};

/**
 * A reusable emphasis tag component that styles its children with an italic font style, a dark text color, and a CSS class to be applied to the component.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable emphasis tag component that styles its children with an italic font style, a dark text color, and a CSS class to be applied to the component.
 */
export function Em({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <em className={`italic text-[#555555] dark:text-[#a1a1a1] ${className}`}>
      {children}
    </em>
  );
}

/**
 * A reusable figure component that styles its children with a centered text alignment, a background color, and a relative position.
 * The component can be made full-width by setting the `wide` prop to `true`.
 * @param {boolean} [wide] - Whether the component should be full-width.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable figure component that styles its children with a centered text alignment, a background color, and a relative position.
 */
export function Figure({ wide = false, children, className = "" }: { children: React.ReactNode; wide?: boolean; className?: string }) {
  return (
    <div
      className={`text-center ${className} ${wide ? `
      bg-[#f7f7f7]
      dark:bg-[#111]
      relative
      left-[50%]
      right-[50%]
      ml-[-50vw]
      mr-[-50vw]
      w-[100vw]
    `
        : ""
        }
  `}
    >
      <div className={wide ? "max-w-2xl mx-auto px-6" : ""}>
        {children}
      </div>
    </div>
  );
}

/**
 * A reusable heading component that styles its children with a large font size, bold font weight, and a tracking value.
 * The component can be made full-width by setting the `wide` prop to `true`.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [id] - The id of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable heading component that styles its children with a large font size, bold font weight, and a tracking value.
 */
export function H1({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h1 id={id} className={`text-[2rem] font-bold tracking-[-0.02em] mb-4 text-[#111111] dark:text-[#ededed] max-sm:text-[2rem] ${className}`}>
      {withHeadingId(children)}
    </h1>
  );
}

/**
 * A reusable H2 component that styles its children with a bold font weight, a large font size, a top margin, and a bottom margin.
 * The component can be made full-width by setting the `wide` prop to `true`.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [id] - The id of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable H2 component that styles its children with a bold font weight, a large font size, a top margin, and a bottom margin.
 */
export function H2({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h2 id={id} className={`group font-bold text-[1.5rem] mt-6 mb-3 text-[#111111] dark:text-[#ededed] relative ${className}`}>
      {withHeadingId(children)}
    </h2>
  );
}

/**
 * A reusable H3 component that styles its children with a bold font weight, a large font size, a top margin, and a bottom margin.
 * The component can be made full-width by setting the `wide` prop to `true`.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [id] - The id of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable H3 component that styles its children with a bold font weight, a large font size, a top margin, and a bottom margin.
 */
export function H3({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h3 id={id} className={`group font-semibold text-[1.2rem] mt-4 mb-2 text-[#111111] dark:text-[#ededed] relative ${className}`}>
      {withHeadingId(children)}
    </h3>
  );
}

/**
 * A header component that wraps its children in a max-width container.
 *
 * @param {React.ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A header component with its children wrapped in a max-width container.
 */
export function Header({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <header className={`max-w-[680px] mx-auto mb-8 flex flex-col items-start gap-4 max-sm:hidden ${className}`}>
      {children}
    </header>
  );
}

/**
 * A horizontal rule component that adds a horizontal rule with a centered text and a dark text color.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 */
export function HR({ className = "" }: { className?: string }) {
  return (
    <div className={`my-8 text-center after:content-['﹡﹡﹡'] after:text-sm after:text-center after:inline text-[#555555] dark:text-[#a1a1a1] ${className}`} />
  );
}

// we use `[ul_&]` prefix for the <UL> variety
/**
 * A reusable LI component that styles its children with a margin bottom of 2px and a width of fit-content.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 */
export function LI({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <li
      className={`${className}
    mb-2
    w-fit
  `}
    >
      {children}
    </li>
  );
}

/**
 * A reusable ordered list component that styles its children with a margin bottom of 4px, a left padding of 8px, a decimal list style, and a dark text color.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 */
export function OL({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <ol className={`mb-4 pl-8 list-decimal list-outside text-[#555555] dark:text-[#a1a1a1] ${className}`}>{children}</ol>;
}

/**
 * A reusable P component that styles its children with a margin bottom of 2px, a light gray text color, and a line height of 1.6.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable P component with its children styled with a margin bottom, a light gray text color, and a line height.
 */
export function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mb-2 text-[#555555] dark:text-[#a1a1a1] leading-[1.6] ${className}`}>{children}</p>;
}

/**
 * A section component that wraps its children in a max-width container with a margin bottom of 12px.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 * On smaller screens, the margin bottom is reduced to 8px.
 * @returns {React.ReactElement} A section component with its children wrapped in a max-width container.
 */
export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`max-w-[680px] mx-auto mb-12 max-sm:mb-8 ${className}`}>
    {children}
  </section>;
}

/**
 * A reusable snippet component that styles its children with a padding of 4px, a small text size, a light gray background color, a dark gray text color, and a dashed border.
 * The component can be made scrollable by setting the `scroll` prop to `true`.
 * Additionally, a caption can be added to the component by setting the `caption` prop.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @param {boolean} [scroll] - Whether the component should be made scrollable.
 * @param {ReactNode} [caption] - The caption of the component.
 * @returns {React.ReactElement} A reusable snippet component that styles its children with a padding of 4px, a small text size, a light gray background color, a dark gray text color, and a dashed border.
 */
export const Snippet = ({ children, className = "", scroll = true, caption = null }: { children: React.ReactNode; className?: string; scroll?: boolean; caption?: React.ReactNode }) => (
  <div className="my-6">
    <pre
      className={`${className}
      p-4
      text-sm
      bg-[#f7f7f7] text-[#111111]
      dark:bg-[#1a1a1a] dark:text-[#ededed]
      border border-[#e0e0e0] dark:border-[#262626]
      rounded-md

      ${scroll
          ? "overflow-scroll"
          : "whitespace-pre-wrap break-all overflow-hidden"
        }
    `}
    >
      <code>{children}</code>
    </pre>

    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
);

/**
 * A reusable unordered list component that styles its children with a margin bottom of 4px, a left padding of 8px, a disc list style, and a dark text color.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 *
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable unordered list component that styles its children with a margin bottom of 4px, a left padding of 8px, a disc list style, and a dark text color.
 */
export function UL({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <ul className={`mb-4 pl-8 list-disc list-outside text-[#555555] dark:text-[#a1a1a1] space-y-2 ${className}`}>
    {children}
  </ul>;
}
