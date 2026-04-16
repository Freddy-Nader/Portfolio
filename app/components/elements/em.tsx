import { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * A simple wrapper for the <em> element with support for additional classes.
 * This component is used to emphasize text within a block of text.
 *
 * @param children - The content to be emphasized.
 * @param className - Additional CSS classes.
 * @param props - Additional props to be passed to the <em> element.
 * @returns {React.ReactElement} A React element representing the emphasized text.
 */
export function Em({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
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
