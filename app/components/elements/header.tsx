import { ComponentPropsWithoutRef } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { A } from "./a";
import { Icon } from "./icons";
import { LI } from "./li";
import { Strong } from "./strong";

/**
 * A header component that wraps its children in a max-width container.
 *
 * @param {React.ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A header component with its children wrapped in a max-width container.
 */
export function Header({
  className = "",
  left = undefined,
  right = undefined,
  ...props
}: {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
} & ComponentPropsWithoutRef<"header">): React.ReactElement {
  const ulClassName = "bread mb-4 pl-8 list-none list-outside text-[#555555] dark:text-[#a1a1a1] space-y-[0px] !gap-0 sm:!gap-1";
  return (
    <header>
      <nav
        aria-label="Primary"
        className={`py-8 flex flex-row justify-between items-start gap-4 ${className}`}
        {...props}
      >
        <nav className="bread">
          <ul className={ulClassName}>
            <li><A className="btn" href="/"><Strong>Alredo Nader</Strong></A></li>
            {left}
          </ul>
        </nav>
        <div>
          <ul className={ulClassName}>
            {right && <LI>{right}</LI>}
            <LI><Icon icon={faLinkedin} href="https://www.linkedin.com/in/alfredo-nader/" /></LI>
            <LI><Icon icon={faGithub} href="https://github.com/Freddy-Nader" /></LI>
          </ul>
        </div>
      </nav>
    </header>
  );
}
