import { ComponentPropsWithoutRef } from "react";
import { withHeadingId } from "../utils";

/**
 * A reusable H2 component with consistent styling and automatic ID generation for headings.
 * @param {ReactNode} children - The heading content.
 * @param {string} [id] - Optional explicit ID for the heading.
 * @param {string} [className] - Additional CSS classes.
 * @returns {React.ReactElement} A reusable H2 component.
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
