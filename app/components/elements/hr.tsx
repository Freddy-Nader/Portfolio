import { ComponentPropsWithoutRef } from "react";

/**
 * A horizontal rule component that adds a horizontal rule with a centered text and a dark text color.
 * The component can be customized with additional CSS classes by setting `className` prop.
 */
export function HR({
  className = "",
  ...props
}: {
  className?: string;
} & ComponentPropsWithoutRef<"div">): React.ReactElement {
  return (
    <div
      className={`my-8 text-center after:content-['﹡﹡﹡'] after:text-sm after:text-center after:inline text-[#555555] dark:text-[#a1a1a1] ${className}`}
      {...props}
    />
  );
}
