"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import useSWR from "swr";
import type { Post } from "@/lib/get-posts";
import { H1 } from "@/app/components/elements/h1";
import { P } from "@/app/components/elements/p";
import { Section } from "@/app/components/elements/section";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function BlogHeader({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments();
  // segments can be:
  // date/post
  // lang/date/post
  const initialPost = posts.find(
    post => post.id === segments[segments.length - 1]
  );
  const { data: post } = useSWR(
    `/api/view?id=${initialPost?.id ?? ""}`,
    fetcher,
    {
      fallbackData: initialPost,
      refreshInterval: 5000,
    }
  );

  if (initialPost == null) return <></>;

  return (
    <Section className="text-center !mb-0 p-12">
      <H1 id="name" className="!mb-0 !text-[2.3rem] uppercase leading-[1.2]">{post.title}</H1>
      <P className="y-[-4em]">{post.date}</P>
    </Section>
  );
}