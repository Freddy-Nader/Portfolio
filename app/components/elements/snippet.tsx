import React from "react";
import { Caption } from "../utils";

/**
 * A reusable snippet component that styles its children with a padding of 4px, a small text size, a light gray background color, a dark gray text color, and a dashed border.
 * The component can be made scrollable by setting the `scroll` prop to `true`.
 * Additionally, a caption can be added to the component by setting the `caption` prop.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @param {boolean} [scroll] - Whether the component should be made scrollable.
 * @param {ReactNode} [caption] - The caption of the component.
 * @returns {React.ReactElement} A reusable snippet component that styles its children with a padding of 4px, a small text size, a light gray background color, a dark gray text color, and a dashed border.
 */
export const Snippet = ({
  children,
  className = "",
  scroll = true,
  caption = null
}: {
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
  caption?: React.ReactNode
}) => (
  <div className="my-6">
    <pre
      className={`${className}
      p-4
      text-sm
      bg-[#f7f7f7] text-[#111111]
      dark:bg-[#1a1a1a] dark:text-[#ededed]
      border border-[#e0e0e0] dark:border-[#262626]
      rounded-md

      ${scroll
          ? "overflow-scroll"
          : "whitespace-pre-wrap break-all overflow-hidden"
        }
    `}
    >
      <code>{children}</code>
    </pre>
    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
);
