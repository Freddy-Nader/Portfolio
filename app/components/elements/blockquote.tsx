import type { ReactNode, ComponentPropsWithoutRef } from "react";

/**
 * A reusable blockquote component that displays a block of text with a border.
 * @param {ReactNode} children - The blockquote content.
 * @param {string} [className] - Additional CSS classes.
 * @returns {React.ReactElement} A reusable blockquote component.
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
