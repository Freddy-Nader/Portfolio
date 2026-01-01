"use client"

import { ThemeToggle } from "@/app/components/theme-toggle";
import {
  A,
  Emphasis,
  H1,
  H2,
  H3,
  Header,
  LI,
  P,
  Section,
  UL
} from "@/app/components/elements";
import {
  Table,
  THead,
  TBody,
  TR,
  TH,
  TD
} from "@/app/components/table";

export default function Home() {
  return (
    <>
      <Header>
        <ThemeToggle />
        <UL className="toc">
          <LI><A className="btn" href="#me">Me</A></LI>
          <LI><P>/</P></LI>
          <LI><A className="btn" href="#experiments">Experiments</A></LI>
          <LI><P>/</P></LI>
          <LI><A className="btn" href="#words">Words</A></LI>
          <LI><P>/</P></LI>
          <LI><A className="btn" href="#resume">Résumé</A></LI>
        </UL>
      </Header>

      <Section>
        <H1 id="me"><A href="/">Hi, I'm Freddy</A></H1>
        <P>I am a Mexican Computer Science student.</P>
        <P>I <Emphasis>love</Emphasis> pure math, programming, and beautiful things.</P>
        <P><Emphasis>Curiosity</Emphasis> and <Emphasis>passion</Emphasis> are my driving factors in everything I do.</P>
        <P>I like to learn new things, such as <A href="#languages">languages</A>.</P>
        <P>As Steve Jobs <A href="https://putsomethingback.stevejobsarchive.com/">
          put it
        </A>, I also want to <Emphasis>put something back</Emphasis>.</P>
        <P>You can follow me on <A href="https://www.linkedin.com/in/alfredo-nader/">
          AedIn
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
            <em>Teaching should be about teaching, not about managing.</em>
          </P>
        </div>

        <div className="block">
          <H3>Ampl</H3>
          <P>Generative AI tools such as ChatGPT, Gemini, and Claude are great… but they all have a flaw: you pay for
            something you're not getting the most out of. That's why I am developing <em>Ampl</em>. It lets you use
            all AI models with a pay-as-you-go pricing model, so you stop paying for what you're not using!</P>
        </div>
      </Section>

      <Section>
        <H1 id="words">Words</H1>

        <div className="block external-link">
          <H3>
            <A href="/words/2401.04026v1.pdf">
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
          </A>, $p(n)$. In a paper <A href="https://arxiv.org/abs/2401.04026">
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

      <Section>
        <H1 id="resume">Résumé</H1>

        <div className="block external-link">
          <A href="/resume.pdf" target="_blank" className="btn">
            <strong>Download résumé</strong>
          </A>
        </div>

        <div className="block">
          <H2 id="languages">Languages</H2>
          <UL>
            <LI>Spanish (C2)</LI>
            <LI>English (C1)</LI>
            <LI>Italian (B2)</LI>
          </UL>
        </div>

        <div className="block">
          <H2 id="awards">Awards</H2>
          <UL>
            <LI>First place at
              <A href="https://www.anahuac.mx/">
                Anáhuac University
              </A>'s Alan Turing National Programming Contest
            </LI>
          </UL>
        </div>

        <div className="block external-link">
          <H2 id="publications">Publications</H2>
          <UL>
            <LI>
              <A href="/words/2401.04026v1.pdf">
                Closed-Form Formula for the Partition Function and Related Functions
              </A>
            </LI>
          </UL>
        </div>

        <div className="block external-link">
          <H2 id="education">Education</H2>
          <Table className="block">
            <THead>
              <TR>
                <TH>Institution</TH>
                <TH>Period</TH>
              </TR>
            </THead>
            <TBody>
              <TR>
                <TD>
                  <A href="https://www.ibo.org/">
                    International Baccalaureate
                  </A>
                </TD>
                <TD>aug 2021 - may 2023</TD>
              </TR>
              <TR>
                <TD>
                  <A href="https://www.nordangliaeducation.com/eton-school-mexico">
                    ETON School
                  </A>
                </TD>
                <TD>aug 2011 - jun 2023</TD>
              </TR>
              <TR>
                <TD>
                  <A href="https://www.anahuac.mx/">
                    Anáhuac University
                  </A>
                </TD>
                <TD>aug 2023 - dec 2028</TD>
              </TR>
            </TBody>
          </Table>
        </div>

        <div className="block">
          <H2>Experience</H2>
          <Table className="block">
            <THead>
              <TR>
                <TH>Activity</TH>
                <TH>Year</TH>
              </TR>
            </THead>
            <TBody>
              <TR>
                <TD>
                  Participation on <A href="https://educa.banxico.org.mx/contactobanxico/">
                    Premio Contacto Banxico
                  </A>
                </TD>
                <TD>dec 2021</TD>
              </TR>
              <TR>
                <TD>
                  Internship at <A href="https://www.ericsson.com/">
                    Ericsson
                  </A>
                </TD>
                <TD>nov 2022</TD>
              </TR>
              <TR>
                <TD>
                  Data Analyst at Mindnic—a social listening company based in Mexico City.
                </TD>
                <TD>nov 2024</TD>
              </TR>
              <TR>
                <TD>
                  Founder and CEO of QuickGrading
                </TD>
                <TD>dec 2024</TD>
              </TR>
              <TR>
                <TD>
                  Founder and CEO of Ampl
                </TD>
                <TD>aug 2025</TD>
              </TR>
            </TBody>
          </Table>
        </div>
      </Section>
    </>
  );
}
