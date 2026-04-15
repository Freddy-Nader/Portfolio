"use client"

import Link from "next/link";
import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { Caption, withHeadingId } from "./utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/**
 * A reusable anchor tag component that handles internal and external links.
 * Automatically adds target="_blank" and rel="noopener noreferrer" to external links.
 * Adds a dashed bottom border to all links.
 * Adds a transition effect to all links.
 * Adds a hover effect to all links.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @param {string} href - The href of the link.
 * @param {ComponentPropsWithoutRef<"a">} props - Additional props to be passed to the component.
 * @returns {React.ReactElement} A reusable anchor tag component that handles internal and external links.
 */
export function A({
  children,
  className = "",
  href,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
} & ComponentPropsWithoutRef<"a">): React.ReactElement {
  const classes = `
    text-[var(--link-color)]
    border-b border-dashed border-[var(--link-border)]
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
export function Blockquote({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"blockquote">): React.ReactElement {
  return (
    <blockquote
      className={`my-5 text-[#555555] dark:text-[#a1a1a1] pl-3 border-l-4 border-[#e0e0e0] dark:border-[#262626] ${className}`}
      {...props}
    >
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
export function Callout({
  emoji = "",
  text = "",
  children,
  className = "",
  ...props
}: {
  emoji?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">): React.ReactElement {
  return (
    <div
      className={`bg-[#f7f7f7] dark:bg-[#1a1a1a] text-[#555555] dark:text-[#a1a1a1] flex items-start p-3 my-6 text-base border border-[#e0e0e0] dark:border-[#262626] rounded-md ${className}`}
      {...props}
    >
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
export function Code({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"code">): React.ReactElement {
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
      {...props}
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
export function Em({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"em">): React.ReactElement {
  return (
    <em
      className={`italic text-[#555555] dark:text-[#a1a1a1] ${className}`}
      {...props}
    >
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
export function Figure({
  wide = false,
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"div">): React.ReactElement {
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
      {...props}
    >
      <div className={wide ? "max-w-2xl mx-auto px-6" : ""}>
        {children}
      </div>
    </div>
  );
}

/**
 * A reusable footer component that styles its children with a max-width container, a margin bottom, and a centered text alignment.
 * The component renders a horizontal line with a gray color and a navigation bar with links to the home page, experiments page, words page, contact page, and CV page.
 * @returns {React.ReactElement} A reusable footer component that styles its children with a max-width container, a margin bottom, and a centered text alignment.
 */
export function Footer({ ...props }: ComponentPropsWithoutRef<"footer">): React.ReactElement {
  return (
    <>
      <footer
        className="max-w-[680px] mx-auto mb-[64px] max-sm:mb-[56px] text-center place-content-around"
        {...props}
      >
        <div className="overflow-hidden mb-4">
          <svg
            className="w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: '60px' }}
          >
            <path
              d="M0,60 Q100,30 200,60 T400,60 T600,60 T800,60 T1000,60 T1200,60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-0">
            <ul className="flex justify-center sm:gap-4 gap-2">
              <li><A href="/" className="btn">Home</A></li>
              <li><A href="/#experiments" className="btn">Experiments</A></li>
              <li><A href="/words" className="btn">Words</A></li>
            </ul>
            <ul className="flex justify-center sm:gap-4 gap-2">
              <li><A href="/#contact" className="btn">Contact</A></li>
              <li><A href="/cv" className="btn">CV</A></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
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
export function H1({
  children,
  id = undefined,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
} & ComponentPropsWithoutRef<"h1">): React.ReactElement {
  return (
    <h1
      id={id}
      className={`text-[2rem] font-bold tracking-[-0.02em] mb-4 text-[var(--heading-color)] ${className}`}
      {...props}
    >
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
export function H2({
  children,
  id = undefined,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
} & ComponentPropsWithoutRef<"h2">): React.ReactElement {
  return (
    <h2
      id={id}
      className={`group font-bold text-[1.5rem] mt-6 mb-3 text-[var(--heading-color)] relative ${className}`}
      {...props}
    >
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
export function H3({
  children,
  id = undefined,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
} & ComponentPropsWithoutRef<"h3">): React.ReactElement {
  return (
    <h3
      id={id}
      className={`group font-semibold text-[1.2rem] mt-4 mb-2 text-[var(--heading-color)] relative ${className}`}
      {...props}
    >
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
export function Header({
  className = "",
  left = undefined,
  right = undefined,
  ...props
}: {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
} & ComponentPropsWithoutRef<"header">): React.ReactElement {
  const ulClassName = "bread mb-4 pl-8 list-none list-outside text-[#555555] dark:text-[#a1a1a1] space-y-[0px] !gap-0 sm:!gap-1";
  return (
    <header>
      <nav
        aria-label="Primary"
        className={`max-w-[680px] py-8 mx-auto flex flex-row justify-between items-start gap-4 ${className}`}
        {...props}
      >
        <nav className="bread">
          <ul className={ulClassName}>
            <li className="mb-2"><A className="btn" href="/"><Strong>Alredo Nader</Strong></A></li>
            {left}
          </ul>
        </nav>
        <div>
          <ul className={ulClassName}>
            {right && <LI>{right}</LI>}
            <LI><Icon icon={faLinkedin} href="https://www.linkedin.com/in/alfredo-nader/" /></LI>
            <LI><Icon icon={faGithub} href="https://github.com/Freddy-Nader" /></LI>
          </ul>
        </div>
      </nav>
    </header>
  );
}

/**
 * A horizontal rule component that adds a horizontal rule with a centered text and a dark text color.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 */
export function HR({
  className = "",
  ...props
}: {
  className?: string;
} & ComponentPropsWithoutRef<"div">): React.ReactElement {
  return (
    <div
      className={`my-8 text-center after:content-['﹡﹡﹡'] after:text-sm after:text-center after:inline text-[#555555] dark:text-[#a1a1a1] ${className}`}
      {...props}
    />
  );
}

/**
 * A reusable Icon component that displays a Font Awesome icon with a link.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 * The component also accepts an `href` prop to set the link of the icon, and a `size` prop to set the size of the icon.
 * The `size` prop can be set to "sm", "lg", "xl", or "2xl".
 * @param {IconProp} icon - The Font Awesome icon to be displayed.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @param {string} [href] - The link of the icon.
 * @param {"sm" | "lg" | "xl" | "2xl"} [size] - The size of the icon.
 * @returns {React.ReactElement} A reusable Icon component that displays a Font Awesome icon with a link.
 */
export function Icon({
  icon,
  className = "",
  href,
  size = "lg",
  ...props
}: {
  icon: IconProp;
  className?: string;
  href?: string;
  size?: "sm" | "lg" | "xl" | "2xl";
} & ComponentPropsWithoutRef<"a">): React.ReactElement {
  return (
    <a
      className="bg-transparent border-none text-[var(--text-primary)] cursor-pointer no-underline rounded-full ring-offset-[var(--bg-primary)] transition-colors flex items-center justify-center w-fit h-fit p-[4px] hover:bg-black/10 dark:hover:bg-white/10"
      href={href || ""}
      target={href ? "_blank" : "_self"}
      rel={href ? "noopener noreferrer" : undefined}
      {...props}
    >
      <FontAwesomeIcon
        icon={icon}
        className={className}
        size={size}
      />
    </a>
  );
}

// we use `[ul_&]` prefix for the <UL> variety
/**
 * A reusable LI component that styles its children with a margin bottom of 2px and a width of fit-content.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 */
export function LI({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"li">): React.ReactElement {
  return (
    <li
      className={`${className}
    mb-2
    w-fit
  `}
      {...props}
    >
      {children}
    </li>
  );
}

/**
 * A reusable ordered list component that styles its children with a margin bottom of 4px, a left padding of 8px, a decimal list style, and a dark text color.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 */
export function OL({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"ol">): React.ReactElement {
  return (
    <ol
      className={`mb-4 pl-8 list-decimal list-outside text-[#555555] dark:text-[#a1a1a1] ${className}`}
      {...props}
    >
      {children}
    </ol>
  );
}

/**
 * A reusable P component that styles its children with a margin bottom of 2px, a light gray text color, and a line height of 1.6.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable P component with its children styled with a margin bottom, a light gray text color, and a line height.
 */
export function P({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"p">): React.ReactElement {
  return (
    <p
      className={`mb-2 text-[#555555] dark:text-[#a1a1a1] leading-[1.6] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * A section component that wraps its children in a max-width container with a margin bottom of 12px.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 * On smaller screens, the margin bottom is reduced to 8px.
 * @param {React.ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @param {string} [id] - The id of the section.
 * @returns {React.ReactElement} A section component with its children wrapped in a max-width container.
 */
export function Section({
  children,
  className = "",
  id = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
} & ComponentPropsWithoutRef<"section">): React.ReactElement {
  return (
    <section
      id={id}
      className={`max-w-[680px] mx-auto mb-12 max-sm:mb-8 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
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
export const Snippet = ({
  children,
  className = "",
  scroll = true,
  caption = null
}: {
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
  caption?: React.ReactNode
}) => (
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

export function Strong({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"strong">): React.ReactElement {
  return (
    <strong {...props}>
      {children}
    </strong>
  );
}

/**
 * A reusable unordered list component that styles its children with a margin bottom of 4px, a left padding of 8px, a disc list style, and a dark text color.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 *
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable unordered list component that styles its children with a margin bottom of 4px, a left padding of 8px, a disc list style, and a dark text color.
 */
export function UL({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"ul">): React.ReactElement {
  return <ul
    className={`mb-4 pl-8 list-disc list-outside text-[#555555] dark:text-[#a1a1a1] space-y-2 ${className}`}
    {...props}
  >
    {children}
  </ul>;
}
