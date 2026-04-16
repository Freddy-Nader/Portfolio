import { ComponentPropsWithoutRef } from "react";

/**
 * A simple wrapper component for the HTML <strong> element.
 * Renders its children with bold styling for emphasis.
 * @param children - The content to be displayed with strong emphasis.
 * @returns {React.ReactElement} A strong element containing the children.
 */
export function Strong({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"strong">): React.ReactElement {
  return (
    <strong {...props}>
      {children}
    </strong>
  );
}
