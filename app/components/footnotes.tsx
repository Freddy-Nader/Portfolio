"use client"

import { A, P } from "./elements";

/**
 * A footnote component that displays the given id and children.
 * The id is displayed as a superscript and is linked to the corresponding section id.
 * The children are displayed as a normal paragraph.
 * @param {ReactNode} id - The id of the footnote.
 * @param {ReactNode} children - The content of the footnote.
 * @returns {React.ReactElement} A footnote component with the given id and children.
 */
export const FootNote = ({ id, children }: { id: React.ReactNode; children: React.ReactNode }) => (
  <P>
    {id}.{" "}
    <A href={`#s${id}`} id={`f${id}`} className="no-underline">
      ^
    </A>{" "}
    {children}
  </P>
);

/**
 * A component that wraps its children in a container with a horizontal rule
 * and a width of 200px.
 * The component is meant to be used as a wrapper for FootNote components.
 * @param {ReactNode} children - The children of the component.
 * @returns {React.ReactElement} A component with a horizontal rule and a width of 200px.
 */
export const FootNotes = ({ children }: { children: React.ReactNode }) => (
  <div className="text-base before:w-[200px] before:m-auto before:content[''] before:border-t before:border-gray-300 dark:before:border-[#444] before:block before:my-10">
    {children}
  </div>
);

/**
 * A reference component that displays the given id as a superscript
 * and links to the corresponding footnote id.
 * @param {ReactNode} id - The id of the reference.
 * @returns {React.ReactElement} A reference component with the given id.
 */
export const Ref = ({ id }: { id: React.ReactNode }) => (
  <a
    href={`#f${id}`}
    id={`s${id}`}
    className="relative text-xs top-[-5px] no-underline"
  >
    [{id}]
  </a>
);
