import { ComponentPropsWithoutRef } from "react";

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
