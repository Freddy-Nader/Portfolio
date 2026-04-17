import { ComponentPropsWithoutRef } from "react";
import { A } from "./a";

/**
 * A footer component that displays navigation links and social media icons.
 * Features a decorative SVG wave separator and responsive layout.
 * @param {Object} props - The props for the footer component.
 * @param {React.ReactNode} props.children - The content to display inside the footer.
 * @param {string} [props.className=""] - Additional CSS classes to apply.
 * @returns {React.ReactElement} A footer component with navigation and social links.
 */
export function Footer({ ...props }: ComponentPropsWithoutRef<"footer">): React.ReactElement {
  return (
    <>
      <footer
        className="mb-[64px] max-sm:mb-[56px] text-center place-content-around"
        {...props}
      >
        <div className="overflow-hidden mb-4">
          <svg
            className="w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: '60px' }}
          >
            <path
              d="M0,60 Q100,30 200,60 T400,60 T600,60 T800,60 T1000,60 T1200,60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-0">
            <ul className="flex justify-center sm:gap-4 gap-2">
              <li><A href="/" className="btn">Home</A></li>
              <li><A href="/#contact" className="btn">Contact</A></li>
              <li><A href="/words" className="btn">Words</A></li>
              <li><A href="/cv" className="btn">CV</A></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
