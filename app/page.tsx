"use client"

import { ThemeToggle } from "@/app/components/theme-toggle";
import {
  A,
  H1,
  H3,
  LI,
  P,
  UL,
  Em,
  Header,
  Section
} from "@/app/components/elements";

export default function Home() {
  return (
    <main className="p-8 mt-12">
      <ThemeToggle />
      
      <Section>
        <A href="/">
          <H1 id="me">Hi, I'm Freddy</H1>
        </A>
        <P>I am a Mexican Computer Science student.</P>
        <P>I <Em>love</Em> pure math, programming, and learning new things.</P>
        <P><Em>Curiosity</Em> and <Em>passion</Em> are my driving factors in everything I do.</P>
        <P>As Steve Jobs <A href="https://putsomethingback.stevejobsarchive.com/">
          put it
        </A>, I also want to <Em>put something back</Em>.</P>
        <P>You can download my CV <A href="/f/cv.pdf" target="_blank">here</A>.</P>
        <P>You can follow me on <A href="https://www.linkedin.com/in/alfredo-nader/">
          LinkedIn
        </A> and <A href="https://github.com/Freddy-Nader/">
            GitHub
          </A>. I read every <A href="mailto:alfredonaderz@gmail.com">
            email
          </A>.
        </P>
      </Section>

      <Section>
        <H1 id="experiments">Experiments</H1>

        <div className="block">
          <H3>QuickGrading</H3>
          <P>Teachers (at all levels) often have many administrative responsibilities. Sometimes, these duties can
            lead to a decline in the quality of their teaching. I am building several software tools so that
            teachers can focus their time and energy on what matters: providing quality education.
            <Em>Teaching should be about teaching, not about managing.</Em>
          </P>
        </div>

        <div className="block">
          <H3>Ampl</H3>
          <P>Generative AI tools such as ChatGPT, Gemini, and Claude are great… but they all have a flaw: you pay for
            something you're not getting the most out of. That's why I am developing <Em>Ampl</Em>. It lets you use
            all AI models with a pay-as-you-go pricing model, so you stop paying for what you're not using!</P>
        </div>
      </Section>

      <Section>
        <H1 id="words">Words</H1>

        <div className="block external-link">
          <H3>
            <A href="/f/2401.04026v1.pdf">
              Closed-Form Formula for the Partition Function and Related Functions
            </A>
          </H3>
        </div>
        <P>Since Euler and his peers started working on <A href="https://en.wikipedia.org/wiki/Integer_partition">
          integer partitions
        </A>, no one had been able to develop a <A href="https://en.wikipedia.org/wiki/Closed-form_expression">
            closed-form formula
          </A> for the <A href="https://en.wikipedia.org/wiki/Partition_function_(number_theory)">
            number of partitions of an integer number
          </A>, $p(n)$. In a paper <A href="https://doi.org/10.48550/arXiv.2401.04026">
            published
          </A> as a preprint on arXiv, such a formula is developed using combinatorial methods. The methods
          used have implications over other similar functions, such as <A href="https://en.wikipedia.org/wiki/Spt_function">
            Andrews' smallest parts (spt) function
          </A>, and new identities for <A href="https://en.wikipedia.org/wiki/Jordan%27s_totient_function">
            Jordan's totient function
          </A> of second order, <A href="https://en.wikipedia.org/wiki/Euler%27s_totient_function">
            Euler's totient function
          </A>, and <A href="https://en.wikipedia.org/wiki/Dedekind_psi_function">
            Dedekind's psi function
          </A>.
        </P>
      </Section>
    </main>
  );
}
