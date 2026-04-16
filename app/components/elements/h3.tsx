import { ComponentPropsWithoutRef } from "react";
import { withHeadingId } from "../utils";

/**
 * A reusable H3 component with consistent styling and automatic ID generation for headings.
 * @param {ReactNode} children - The heading content.
 * @param {string} [id] - Optional explicit ID for the heading.
 * @param {string} [className] - Additional CSS classes.
 * @returns {React.ReactElement} A reusable H3 component.
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
