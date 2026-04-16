import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/**
 * A reusable link component that styles its children with a text color, a border bottom, and a transition effect.
 * The component can be made full-width by setting the `wide` prop to `true`.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable link component that styles its children with a text color, a border bottom, and a transition effect.
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
