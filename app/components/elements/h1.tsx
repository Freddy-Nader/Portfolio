import { ComponentPropsWithoutRef } from "react";
import { withHeadingId } from "../utils";

/**
 * A reusable H1 component with consistent styling and automatic ID generation for headings.
 * @param {ReactNode} children - The heading content.
 * @param {string} [id] - Optional explicit ID for the heading.
 * @param {string} [className] - Additional CSS classes.
 * @returns {React.ReactElement} A reusable H1 component.
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
