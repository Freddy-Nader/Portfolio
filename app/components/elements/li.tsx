import { ComponentPropsWithoutRef } from "react";

// we use `[ul_&]` prefix for the <UL> variety
/**
 * A reusable LI component that styles its children with a margin bottom of 2px and a width of fit-content.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 */
export function LI({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"li">): React.ReactElement {
  return (
    <li
      className={`${className}
    mb-2
    w-fit
  `}
      {...props}
    >
      {children}
    </li>
  );
}
