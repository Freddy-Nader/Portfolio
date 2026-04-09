"use client"

import {
  A,
  Em,
  H1,
  H3,
  Header,
  LI,
  P,
  Section,
  Strong,
  UL,
  Icon,
} from "@/app/components/elements";
import { Contact } from "@/app/cv/elements";

// FontAwesome Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmericas, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faGithub, faLinkedin, faEarthAmericas, faEnvelope, faPhone);

/**
 * The main page component of the website.
 * @returns A JSX element representing the main page of the website.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section className="mt-12">
          <A href="/">
            <H1 id="me">Hi, I'm Freddy</H1>
          </A>
          <P>I am a Mexican Computer Science student.</P>
          <P>I <Em>love</Em> pure math, programming, and learning new things.</P>
          <P><Em>Curiosity</Em> and <Em>passion</Em> are my driving factors in everything I do.</P>
          <P>As Steve Jobs <A href="https://putsomethingback.stevejobsarchive.com/">
            put it
          </A>, I also want to <Em>put something back</Em>.</P>
          <P>You can <A href="/cv">
            see
          </A> or <A href="/f/cv.pdf" target="_blank">
              download
            </A> my CV. You can also <A href="/#contact">
              contact me
            </A>.</P>
        </Section>

        <Section>
          <H1 id="experiments">Experiments</H1>

          <div className="block">
            <H3 className="external-link">
              <A href="https://estudioso.anader.xyz">
                estudio.so
              </A>
            </H3>
            <P>Teachers often have many administrative responsibilities. Sometimes, these responsibilities can lead to
              a decline in the quality of their teaching. Using <A href="https://estudioso.anader.xyz">
                estudio.so
              </A>, teachers can focus their time and energy on what matters: providing a quality education to all their
              students. The product ensures teachers teach better and students learn better.
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

          <div className="block">
            <H3 className="external-link">
              <A href="/f/2401.04026v1.pdf" target="_blank">
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

        <Section>
          <H1 id="contact">Contact</H1>
          <div className="flex flex-col">
            <Contact
              href="mailto:alfredonaderz@gmail.com"
              text="alfredonaderz@gmail.com"
              icon={faEnvelope}
            />
            <Contact
              href="tel:+525525307307"
              text="+52 55 2530 7307"
              icon={faPhone}
            />
            <Contact
              href="https://github.com/Freddy-Nader"
              text="Freddy-Nader"
              icon={faGithub}
            />
            <Contact
              href="https://www.linkedin.com/in/alfredo-nader/"
              text="Alfredo-Nader"
              icon={faLinkedin}
            />
          </div>
        </Section>
      </main>
    </>
  );
}
