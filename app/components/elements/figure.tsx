import { ComponentPropsWithoutRef } from "react";

/**
 * A figure component that can display content in either normal or wide layout.
 * When wide is true, the figure spans the full viewport width with a background color.
 * @param {Object} props - The props for the figure component.
 * @param {React.ReactNode} props.children - The content to display inside the figure.
 * @param {boolean} [props.wide=false] - Whether to use wide layout that spans full viewport width.
 * @param {string} [props.className=""] - Additional CSS classes to apply.
 * @returns {React.ReactElement} A figure component with optional wide layout.
 */
export function Figure({
  wide = false,
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"div">): React.ReactElement {
  return (
    <div
      className={`text-center ${className} ${wide ? `
      bg-[#f7f7f7]
      dark:bg-[#111]
      relative
      left-[50%]
      right-[50%]
      ml-[-50vw]
      mr-[-50vw]
      w-[100vw]
    `
        : ""
        }
  `}
      {...props}
    >
      <div className={wide ? "max-w-2xl mx-auto px-6" : ""}>
        {children}
      </div>
    </div>
  );
}
