import { Posts } from "@/app/words/posts";
import { getPosts } from "@/lib/get-posts";
import { A } from "@/app/components/elements/a";
import { Header } from "@/app/components/elements/header";
import { LI } from "@/app/components/elements/li";
import { P } from "@/app/components/elements/p";
import { Section } from "@/app/components/elements/section";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();
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
      <Section className="mt-12">
        <Posts posts={posts} />
      </Section>
    </>
  )
}