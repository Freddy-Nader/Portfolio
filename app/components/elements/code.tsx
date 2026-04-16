import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * A styled inline code component.
 * @param children - The code content.
 * @param className - Additional CSS classes.
 * @returns {React.ReactElement} A styled inline code component.
 * @example
 * <Code>const foo = () => &lt;&gt;foo&lt;/&gt;</Code></Code>
 * @example with additional classes
 * <Code className="text-red-500">const foo = () => &lt;&gt;foo&lt;/&gt;</Code></Code>
 */
export function Code({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"code">): React.ReactElement {
  return (
    <code
      className={`
        [p_&]:text-sm
        [p_&]:px-1
        [p_&]:py-0.5
        [p_&]:rounded-sm
        [p_&]:bg-[#f7f7f7]
        dark:[p_&]:bg-[#1a1a1a]
        text-[#111111] dark:text-[#ededed]
        border border-[#e0e0e0] dark:border-[#262626]
        ${className}
      `}
      {...props}
    >
      {children}
    </code>
  );
};
