import { ComponentPropsWithoutRef } from "react";

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
