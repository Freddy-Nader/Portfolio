"use client";

import Link from "next/link";
import { Suspense } from "react";
import useSWR from "swr";
import type { Post } from "@/lib/get-posts";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Posts({ posts: initialPosts }: { posts: Post[] }) {
  const { data: posts } = useSWR("/api/posts", fetcher, {
    fallbackData: initialPosts,
    refreshInterval: 5000,
  });

  return (
    <Suspense fallback={null}>
      <main className="flex-grow text-sm">
        <List posts={posts} />
      </main>
    </Suspense>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}

function List({ posts }: { posts: Post[] }) {
  return (
    <ul className="flex-grow">
      {posts.map((post, i: number) => {
        const year = getYear(post.date);
        const firstOfYear =
          !posts[i - 1] || getYear(posts[i - 1].date) !== year;
        const lastOfYear = !posts[i + 1] || getYear(posts[i + 1].date) !== year;

        return (
          <li key={post.id} className="group">
            <Link href={`/${new Date(post.date).getFullYear()}/${post.id}`}>
              <span
                className={`flex
                ${!firstOfYear ? "border-t-0" : ""}
                ${lastOfYear ? "border-b-0" : ""}
              `}
              >
                <span
                  className={`py-1 flex grow items-center ${!firstOfYear ? "ml-10 md:ml-14" : ""
                    }`}
                >
                  {firstOfYear && (
                    <span className="w-10 md:w-14 inline-block self-start shrink-0 text-neutral-500 text-xs dark:text-neutral-500 mt-0.5">
                      {year}
                    </span>
                  )}

                  <span className="grow dark:text-gray-100">
                    <span className="transition-colors duration-200 ease-in-out group-hover:bg-[var(--btn-hover)] rounded-[8px] py-[4px] px-[8px] translate-x-[-4px]">
                      {post.title}
                    </span>
                  </span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}