import { ComponentPropsWithoutRef } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A reusable Icon component that displays a Font Awesome icon with a link.
 * The component can be customized with additional CSS classes by setting the `className` prop.
 * The component also accepts an `href` prop to set the link of the icon, and a `size` prop to set the size of the icon.
 * The `size` prop can be set to "sm", "lg", "xl", or "2xl".
 * @param {IconProp} icon - The Font Awesome icon to be displayed.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @param {string} [href] - The link of the icon.
 * @param {"sm" | "lg" | "xl" | "2xl"} [size] - The size of the icon.
 * @returns {React.ReactElement} A reusable Icon component that displays a Font Awesome icon with a link.
 */
export function Icon({
  icon,
  className = "",
  href,
  size = "lg",
  ...props
}: {
  icon: IconProp;
  className?: string;
  href?: string;
  size?: "sm" | "lg" | "xl" | "2xl";
} & ComponentPropsWithoutRef<"a">): React.ReactElement {
  return (
    <a
      className="bg-transparent border-none text-[var(--text-primary)] cursor-pointer no-underline rounded-full ring-offset-[var(--bg-primary)] transition-colors flex items-center justify-center w-fit h-fit p-[4px] hover:bg-black/10 dark:hover:bg-white/10"
      href={href || ""}
      target={href ? "_blank" : "_self"}
      rel={href ? "noopener noreferrer" : undefined}
      {...props}
    >
      <FontAwesomeIcon
        icon={icon}
        className={className}
        size={size}
      />
    </a>
  );
}
