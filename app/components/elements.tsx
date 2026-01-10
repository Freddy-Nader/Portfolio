import Link from "next/link";
import type { ReactNode } from "react";
import { Caption, withHeadingId } from "./utils";

export function A({ children, className = "", href, ...props }: { children: React.ReactNode; className?: string; href: string;[key: string]: any }) {
  const classes = `
    text-[#111111] dark:text-[#ededed]
    border-b border-dashed border-[#111111] dark:border-[#ededed]
    transition-all duration-200 ease-in-out
    hover:bg-black/10 dark:hover:bg-white/10
    hover:rounded-[4px]
    ${className}
  `;

  if (href[0] === "#" || href.substring(0, 7) === "mailto:" || href.substring(0, 4) === "tel:") {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  } else if (href[0] === "/") {
    // Internal link
    return (
      <Link
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    // External link
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
}

export function Blockquote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <blockquote className={`my-5 text-[#555555] dark:text-[#a1a1a1] pl-3 border-l-4 border-[#e0e0e0] dark:border-[#262626] ${className}`}>
      {children}
    </blockquote>
  );
}

export function Callout({ emoji = "", text = "", children, className = "" }: { emoji?: string; text?: string; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#f7f7f7] dark:bg-[#1a1a1a] text-[#555555] dark:text-[#a1a1a1] flex items-start p-3 my-6 text-base border border-[#e0e0e0] dark:border-[#262626] rounded-md ${className}`}>
      <span className="block w-6 text-center mr-2 scale-[1.2]">{emoji}</span>
      <span className="block grow">{text ?? children}</span>
    </div>
  );
}

export function Code({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
    >
      {children}
    </code>
  );
};

export function Em({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <em className={`italic text-[#555555] dark:text-[#a1a1a1] ${className}`}>
      {children}
    </em>
  );
}

export function Figure({ wide = false, children, className = "" }: { children: React.ReactNode; wide?: boolean; className?: string }) {
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
    >
      <div className={wide ? "max-w-2xl mx-auto px-6" : ""}>
        {children}
      </div>
    </div>
  );
}

export function H1({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h1 id={id} className={`text-[2rem] font-bold tracking-[-0.02em] mb-4 text-[#111111] dark:text-[#ededed] max-sm:text-[2rem] ${className}`}>
      {withHeadingId(children)}
    </h1>
  );
}

export function H2({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h2 id={id} className={`group font-bold text-[1.5rem] mt-6 mb-3 text-[#111111] dark:text-[#ededed] relative ${className}`}>
      {withHeadingId(children)}
    </h2>
  );
}

export function H3({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h3 id={id} className={`group font-semibold text-[1.2rem] mt-4 mb-2 text-[#111111] dark:text-[#ededed] relative ${className}`}>
      {withHeadingId(children)}
    </h3>
  );
}

export function Header({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <header className={`max-w-[680px] mx-auto mb-8 flex flex-col items-start gap-4 max-sm:hidden ${className}`}>
      {children}
    </header>
  );
}

export function HR({ className = "" }: { className?: string }) {
  return (
    <div className={`my-8 text-center after:content-['﹡﹡﹡'] after:text-sm after:text-center after:inline text-[#555555] dark:text-[#a1a1a1] ${className}`} />
  );
}

// we use `[ul_&]` prefix for the <UL> variety
export function LI({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <li
      className={`${className}
    mb-2
    w-fit
  `}
    >
      {children}
    </li>
  );
}

export function OL({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <ol className={`mb-4 pl-8 list-decimal list-outside text-[#555555] dark:text-[#a1a1a1] ${className}`}>{children}</ol>;
}

export function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mb-2 text-[#555555] dark:text-[#a1a1a1] leading-[1.6] ${className}`}>{children}</p>;
}

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`max-w-[680px] mx-auto mb-12 max-sm:mb-8 ${className}`}>
    {children}
  </section>;
}

export const Snippet = ({ children, className = "", scroll = true, caption = null }: { children: React.ReactNode; className?: string; scroll?: boolean; caption?: React.ReactNode }) => (
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

export function UL({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <ul className={`mb-4 pl-8 list-disc list-outside text-[#555555] dark:text-[#a1a1a1] space-y-2 ${className}`}>
    {children}
  </ul>;
}
