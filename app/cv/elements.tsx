import {
  A,
  H2,
  H3,
  P,
  Section,
} from "@/app/components/elements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const CVSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Section>
    <H2 className="uppercase">{title}</H2>
    <div className="space-y-4">
      {children}
    </div>
  </Section>
);

export const CVEntry = ({
  title,
  titleMobile, // Mobile title
  date,
  subtitle,
  subtitleMobile,
  children,
  className = ""
}: {
  title: React.ReactNode;
  titleMobile?: React.ReactNode;
  date?: string;
  subtitle?: React.ReactNode;
  subtitleMobile?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
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
    <div className={`mb-3 ${className}`}>
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-0">
        {titleElement}
        {date && <div className="text-sm text-[var(--text-secondary)] tabular-nums shrink-0 sm:ml-4">{date}</div>}
      </div>
      {subtitleElement}
      {children && <div className="text-[var(--text-secondary)] text-sm leading-relaxed">{children}</div>}
    </div>
  )
};

export const Language = ({
  lang,
  level
}: {
  lang: string;
  level: string;
}) => (
  <div className="flex flex-col">
    <H3 className="!mt-0 !mb-0 !leading-[1.2] !mb-[0.3em]">{lang}</H3>
    {level && <div className="text-sm text-[var(--text-secondary)] shrink-0">{level}</div>}
  </div>
)

export const Contact = ({
  href,
  text = "",
  icon
}: {
  href: string;
  text?: string;
  icon?: IconProp;
}) => (
  <A
    className="border-none w-fit btn"
    href={href}
  >
    {icon && <FontAwesomeIcon className="mr-2" icon={icon} />}
    {text || href}
  </A>
)
