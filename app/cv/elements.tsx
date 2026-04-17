import { A } from "@/app/components/elements/a";
import { H2 } from "@/app/components/elements/h2";
import { H3 } from "@/app/components/elements/h3";
import { P } from "@/app/components/elements/p";
import { Section } from "@/app/components/elements/section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ComponentPropsWithoutRef } from "react";

/**
 * A reusable CVSection component that displays a title with uppercase letters and children below it,
 * with a space of 4 units between each child.
 * @param {string} props.title - The title of the section.
 * @param {React.ReactNode} props.children - The children of the section.
 * @returns {React.ReactElement} A reusable CVSection component.
 */
export const CVSection = ({
  title, children, ...props
}: { title: string; children: React.ReactNode; } & ComponentPropsWithoutRef<typeof Section>): React.ReactElement => (
  <Section {...props}>
    <H2 className="uppercase">{title}</H2>
    <div className="space-y-4">
      {children}
    </div>
  </Section>
);

/**
 * A reusable CVEntry component that displays a title with uppercase letters and children below it,
 * with a space of 4 units between each child.
 *
 * @param {Object} props - The props of the component.
 * @prop {string} title - The title of the entry.
 * @prop {string} [titleMobile] - The title of the entry to be displayed on mobile.
 * @prop {string} [date] - The date of the entry.
 * @prop {React.ReactNode} [subtitle] - The subtitle of the entry.
 * @prop {React.ReactNode} [subtitleMobile] - The subtitle of the entry to be displayed on mobile.
 * @prop {React.ReactNode} [children] - The children of the entry.
 * @prop {string} [className] - Additional CSS classes to be applied to the component.
 */
export const CVEntry = ({
  title,
  titleMobile, // Mobile title
  date,
  subtitle,
  subtitleMobile,
  children,
  className = "",
  ...props
}: {
  title: React.ReactNode;
  titleMobile?: React.ReactNode;
  date?: string;
  subtitle?: React.ReactNode;
  subtitleMobile?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "title">) => {
  const titleClass = "!mt-0 !mb-0 !leading-[1.2] md:!mb-[0.3em] sm:!mb-[0.1em]";
  const titleElement = <>
    <H3 className={`
      ${titleClass}
      ${titleMobile ? "hidden sm:block xs:block" : ""}
    `}>{title}</H3>
    {titleMobile && <H3 className={`
        ${titleClass}
        ${titleMobile ? "block sm:hidden xs:hidden" : ""}
      `}>{titleMobile}</H3>}
  </>

  const subtitleClass = "!leading-[1.2]";
  const subtitleElement = <>
    {subtitle && <P className={`
        ${subtitleClass}
        ${subtitleMobile ? "hidden sm:block xs:block" : ""}
      `}>{subtitle}</P>}
    {subtitle && subtitleMobile && <P className={`
        ${subtitleClass}
        ${subtitleMobile ? "block sm:hidden xs:hidden" : ""}
      `}>{subtitleMobile}</P>}
  </>

  return (
    <div
      className={`mb-3 ${className}`}
      {...props}
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-0">
        {titleElement}
        {date && <div className="text-sm text-[var(--text-secondary)] tabular-nums shrink-0 sm:ml-4">{date}</div>}
      </div>
      {subtitleElement}
      {children && <div className="text-[var(--text-secondary)] text-sm leading-relaxed pt-1">{children}</div>}
    </div>
  )
};

/**
 * A reusable language component that displays a language with its proficiency level.
 * @param {{ lang: string, level: string }} props - The props of the component.
 * @prop {string} lang - The language to be displayed.
 * @prop {string} [level] - The proficiency level of the language.
 * @returns {React.ReactElement} A reusable language component.
 */
export const Language = ({
  lang,
  level,
  ...props
}: {
  lang: string;
  level: string;
} & ComponentPropsWithoutRef<"div">): React.ReactElement => (
  <div className="flex flex-col" {...props}>
    <H3 className="!mt-0 !mb-0 !leading-[1.2] !mb-[0.3em]">
      {lang}
    </H3>
    {level && (
      <div className="text-sm text-[var(--text-secondary)] shrink-0">
        {level}
      </div>
    )}
  </div>
)

/**
 * A reusable Contact component that displays an icon and a text in a button.
 * The component takes an href, an optional text, and an optional icon.
 * If no text is provided, the href will be used as the text.
 * The component can be used to display a contact link with an icon.
 * @returns {React.ReactElement} A reusable Contact component.
 */
export const Contact = ({
  href,
  text = "",
  icon,
  ...props
}: {
  href: string;
  text?: string;
  icon?: IconProp;
} & Omit<ComponentPropsWithoutRef<typeof A>, "children">): React.ReactElement => (
  <A
    className="border-none w-fit btn"
    href={href}
    {...props}
  >
    {icon && <FontAwesomeIcon className="mr-2" icon={icon} />}
    {text || href}
  </A>
)
