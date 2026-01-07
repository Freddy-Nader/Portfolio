import { A, P } from "./elements";

export const FootNote = ({ id, children }: { id: React.ReactNode; children: React.ReactNode }) => (
  <P>
    {id}.{" "}
    <A href={`#s${id}`} id={`f${id}`} className="no-underline">
      ^
    </A>{" "}
    {children}
  </P>
);

export const FootNotes = ({ children }: { children: React.ReactNode }) => (
  <div className="text-base before:w-[200px] before:m-auto before:content[''] before:border-t before:border-gray-300 dark:before:border-[#444] before:block before:my-10">
    {children}
  </div>
);

export const Ref = ({ id }: { id: React.ReactNode }) => (
  <a
    href={`#f${id}`}
    id={`s${id}`}
    className="relative text-xs top-[-5px] no-underline"
  >
    [{id}]
  </a>
);
