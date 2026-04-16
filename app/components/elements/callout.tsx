import type { ComponentPropsWithoutRef } from "react";

/**
 * A callout component for highlighting specific information with an emoji and text.
 *
 * @param {string} [emoji] - The emoji to display in the callout.
 * @param {string} [text] - The text content to display.
 * @param {React.ReactNode} [children] - The children of the callout component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A callout component.
 */
export function Callout({
  emoji = "",
  text = "",
  children,
  className = "",
  ...props
}: {
  emoji?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">): React.ReactElement {
  return (
    <div
      className={`bg-[#f7f7f7] dark:bg-[#1a1a1a] text-[#555555] dark:text-[#a1a1a1] flex items-start p-3 my-6 text-base border border-[#e0e0e0] dark:border-[#262626] rounded-md ${className}`}
      {...props}
    >
      <span className="block w-6 text-center mr-2 scale-[1.2]">{emoji}</span>
      <span className="block grow">{text ?? children}</span>
    </div>
  );
}
