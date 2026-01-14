"use client"

import { readFile } from "fs/promises";
import sizeOf from "image-size";
import NextImage from "next/image";
import { join } from "path";
import { Caption } from "./utils";

/**
 * A wrapper around the NextImage component that handles data URLs and resizes images.
 * If the width or height of the image is not provided, it will attempt to fetch the image and compute its size.
 * @param {string} src - The URL of the image to be rendered.
 * @param {string | null} [alt] - The alt text of the image. If a string, it may contain a percentage sign (e.g. "Image (50%)"), which will be parsed and used to divide the width and height of the image.
 * @param {number | null} [width] - The width of the image to be rendered.
 * @param {number | null} [height] - The height of the image to be rendered.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A NextImage component with the specified width, height, and alt text.
 */
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
