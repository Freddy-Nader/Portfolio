import { readFile } from "fs/promises";
import sizeOf from "image-size";
import NextImage from "next/image";
import Link from "next/link";
import { join } from "path";
import type { ReactNode } from "react";
import { Caption, withHeadingId } from "./utils";

export function A({ children, className = "", href, ...props }: { children: React.ReactNode; className?: string; href: string;[key: string]: any }) {
  if (href[0] === "#" || href.substring(0, 7) === "mailto:" || href.substring(0, 4) === "tel:") {
    return (
      <a
        href={href}
        className={`border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-stone-600 dark:hover:border-white ${className}`}
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
        className={`border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-stone-600 dark:hover:border-white ${className}`}
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
        className={`border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 dark:text-white dark:border-stone-600 dark:hover:border-white ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
}

export function Blockquote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <blockquote className={`my-5 text-gray-500 pl-3 border-l-4 dark:border-gray-600 dark:text-gray-400 ${className}`}>
      {children}
    </blockquote>
  );
}

export function Callout({ emoji = "", text = "", children, className = "" }: { emoji?: string; text?: string; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gray-200 dark:bg-[#333] dark:text-gray-300 flex items-start p-3 my-6 text-base ${className}`}>
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
        [p_&]:bg-neutral-200  
        dark:[p_&]:bg-[#333]
        ${className}
      `}
    >
      {children}
    </code>
  );
};

export function Emphasis({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <em className={className}>
      {children}
    </em>
  );
}

export function Figure({ wide = false, children, className = "" }: { children: React.ReactNode; wide?: boolean; className?: string }) {
  return (
    <div
      className={`text-center ${className} ${wide ? `
      bg-gray-100
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
    <h1 id={id} className={`text-2xl font-bold mb-1 dark:text-gray-100 ${className}`}>
      {withHeadingId(children)}
    </h1>
  );
}

export function H2({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h2 id={id} className={`group font-bold text-xl my-8 relative ${className}`}>
      {withHeadingId(children)}
    </h2>
  );
}

export function H3({ children, id = undefined, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <h3 id={id} className={`group font-bold text-lg my-8 relative ${className}`}>
      {withHeadingId(children)}
    </h3>
  );
}

export function Header({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <header className={className}>
      {children}
    </header>
  );
}

export function HR({ className = "" }: { className?: string }) {
  return (
    <div className={`my-8 text-center after:content-['﹡﹡﹡'] after:text-sm after:text-center after:inline ${className}`} />
  );
}

export async function Image({
  src,
  alt: originalAlt,
  width = null,
  height = null,
  className = ""
}: {
  src: string;
  alt?: string;
  width: number | null;
  height: number | null;
  className?: string;
}) {
  const isDataImage = src.startsWith("data:");
  if (isDataImage) {
    /* eslint-disable @next/next/no-img-element */
    return (
      <img src={src} alt={originalAlt ?? ""} className={className} />
    );
  } else {
    if (width === null || height === null) {
      let imageBuffer: Buffer | null = null;

      if (src.startsWith("http")) {
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        imageBuffer = Buffer.from(arrayBuffer);
      } else {
        if (
          !process.env.CI &&
          process.env.VERCEL_URL &&
          process.env.NODE_ENV === "production"
        ) {
          const url =
            "https://" +
            process.env.VERCEL_URL +
            src +
            `?image_bot_bypass=${encodeURIComponent(process.env.IMAGE_BOT_BYPASS_SECRET!)}&x-vercel-protection-bypass=${encodeURIComponent(process.env.VERCEL_AUTOMATION_BYPASS_SECRET!)}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status}`);
          }
          const arrayBuffer = await response.arrayBuffer();
          imageBuffer = Buffer.from(arrayBuffer);
        } else {
          imageBuffer = await readFile(
            new URL(
              join(import.meta.url, "..", "..", "..", "..", "public", src)
            ).pathname
          );
        }
      }
      const computedSize = sizeOf(imageBuffer);
      if (
        computedSize.width === undefined ||
        computedSize.height === undefined
      ) {
        throw new Error("Could not compute image size");
      }
      width = computedSize.width;
      height = computedSize.height;
    }

    let alt: string | null = null;
    let dividedBy = 100;

    if ("string" === typeof originalAlt) {
      const match = originalAlt.match(/(.*) (\[(\d+)%\])?$/);
      if (match != null) {
        alt = match[1];
        dividedBy = match[3] ? parseInt(match[3]) : 100;
      }
    } else {
      alt = originalAlt ?? null;
    }

    const factor = dividedBy / 100;

    return (
      <span className={`my-5 flex flex-col items-center ${className}`}>
        <NextImage
          width={width * factor}
          height={height * factor}
          alt={alt ?? ""}
          src={src}
          unoptimized={src.endsWith(".gif")}
        />

        {alt && <Caption>{alt}</Caption>}
      </span>
    );
  }
}

// we use `[ul_&]` prefix for the <UL> variety
export function LI({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <li
      className={`${className}
    my-2
    [ul_&]:relative
    [ul_&]:pl-4
    [ul_&]:before:text-gray-400
    [ul_&]:before:content-['–']
    [ul_&]:before:mr-2
    [ul_&]:before:absolute
    [ul_&]:before:-ml-4
  `}
    >
      {children}
    </li>
  );
}

export function OL({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <ol className={`my-5 list-decimal list-inside ${className}`}>{children}</ol>;
}

export function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`my-5 [blockquote_&]:my-2 ${className}`}>{children}</p>;
}

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={className}>
    {children}
  </section>;
}

export const Snippet = ({ children, className = "", scroll = true, caption = null }: { children: React.ReactNode; className?: string; scroll?: boolean; caption?: React.ReactNode }) => (
  <div className="my-6">
    <pre
      className={`${className}
      p-4
      text-sm
      bg-neutral-200 text-neutral-700
      dark:bg-[#222] dark:text-gray-300

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
  return <ul className={`my-5 list-none list-inside ${className}`}>{children}</ul>;
}
