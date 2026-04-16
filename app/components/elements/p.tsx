import { ComponentPropsWithoutRef } from "react";

/**
 * A reusable P component that styles its children with a margin bottom of 2px, a light gray text color, and a line height of 1.6.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 * @param {ReactNode} children - The children of component.
 * @param {string} [className] - Additional CSS classes to be applied to component.
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
