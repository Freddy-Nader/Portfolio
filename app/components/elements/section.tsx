import { ComponentPropsWithoutRef } from "react";

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
