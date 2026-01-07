import { Children, ReactNode } from "react";
import Balancer from "react-wrap-balancer";

export function withHeadingId(children: ReactNode) {
  return Children.map(children, el => {
    if ("string" === typeof el) {
      const re = /\[#([^\]]+)\]\s*$/m;
      const match = el.match(re);

      if (match && match[1]?.length) {
        return (
          <span className="relative">
            <a
              className={`
                absolute
                px-3
                -left-[2rem]
                invisible
                [span:hover_&]:visible
                font-mono
                font-normal
                text-gray-400
                hover:text-gray-600
                dark:text-gray-500
                dark:hover:text-gray-400
              `}
              href={`#${match[1]}`}
            >
              #
            </a>

            <a
              id={match[1]}
              className={`
              absolute
              -top-[20px]
            `}
            />
            {el.substring(0, match.index)}
          </span>
        );
      }
    }

    return el;
  });
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <span className="block w-full text-xs my-3 font-mono text-gray-500 text-center leading-normal">
      <Balancer>
        <span className="[&>a]:post-link">{children}</span>
      </Balancer>
    </span>
  );
}
