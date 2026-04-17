import { notFound } from "next/navigation";

import { A } from "@/app/components/elements/a";
import { H1 } from "@/app/components/elements/h1";
import { Header } from "@/app/components/elements/header";
import { LI } from "@/app/components/elements/li";
import { P } from "@/app/components/elements/p";
import { Section } from "@/app/components/elements/section";

import { Markdown } from "@/app/components/markdown";
import { getPostContent } from "@/lib/get-post-content";

type PostPageProps = {
  params: Promise<{
    year: string;
    slug: string;
  }>;
};

export const revalidate = 300;

export default async function PostPage({ params }: PostPageProps) {
  const { year, slug } = await params;
  const post = await getPostContent(year, slug);

  if (post == null) {
    notFound();
  }

  return (
    <>
      <Header
        left={
          <>
            <LI className="hidden sm:block"><P>/</P></LI>
            <LI className="hidden sm:block"><A className="btn" href="/words">Words</A></LI>
          </>
        }
        right={
          <A href="/rss.xml" className="btn">RSS</A>
        }
      />
      <Section className="text-center !mb-0 p-12">
        <H1 id="name" className="!mb-0 !text-[2.3rem] leading-[1.2]">{post.title}</H1>
        <P className="y-[-4em]">{post.date}</P>
      </Section>
      <Section>
        <article>
          <Markdown content={post.content} />
        </article>
      </Section>
    </>
  );
}
