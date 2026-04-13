"use client"

import {
  A,
  H1,
  Header,
  LI,
  P,
  Section,
  UL,
} from "@/app/components/elements";
import {
  CVSection,
  CVEntry,
  Language,
  Contact,
} from "@/app/cv/elements";

// FontAwesome Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmericas, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faGithub, faLinkedin, faEarthAmericas, faEnvelope, faPhone);

/**
 * A curriculum vitae (CV) component, which displays personal information, education, skills,
 * experience, research publications, honors and awards, projects, certifications, and contact
 * information.
 */
export default function CV() {
  return (
    <>
      <Header
        left={
          <>
            <LI className="hidden sm:block"><P>/</P></LI>
            <LI className="hidden sm:block"><A className="btn" href="/cv">CV</A></LI>
          </>
        }
        right={
          <A href="/f/cv.pdf" target="_blank" className="btn">PDF</A>
        }
      />
      <main>
        <Section className="text-center !mb-0 p-12">
          <H1 id="name" className="!mb-0 !text-[2.3rem] uppercase leading-[1.2]">Alfredo Nader Zavala</H1>
          <P className="y-[-4em]">Mexico City, Mexico</P>
        </Section>

        <CVSection title="Education">
          <CVEntry
            title="Exchange Studies in Applied Computer Science"
            titleMobile="Exchange Studies in Applied Computer Science"
            date="Mar 2026 — Aug 2026"
            subtitle="Faculty of Business Informatics & Applied Computer Science, Otto-Friedrich-Universität Bamberg, Germany"
            subtitleMobile="Otto-Friedrich-Universität Bamberg, Germany"
          />
          <CVEntry
            title="Minor in User Interfaces (UI) and Experience Design (XD)"
            titleMobile="Minor in UI and XD"
            date="Jan 2025 — Dec 2028"
            subtitle="Faculty of Design, Anáhuac University, Mexico City, Mexico"
            subtitleMobile="Anáhuac University, Mexico City, Mexico"
          />
          <CVEntry
            title="Bachelor of Engineering in Systems and Information Technology"
            titleMobile="B.E. in Systems and Information Technology"
            date="Aug 2023 — Dec 2028"
            subtitle="Faculty of Engineering, Anáhuac University, Mexico City, Mexico"
            subtitleMobile="Anáhuac University, Mexico City, Mexico"
          />
          <CVEntry
            title="International Baccalaureate (IB) Certificate"
            titleMobile="International Baccalaureate Certificate"
            date="Aug 2021 — Jul 2023"
            subtitle="Eton School Mexico, Mexico City, Mexico"
          />
          <CVEntry
            title="Higher Secondary Certificate (HSC), Class 2023"
            titleMobile="Higher Secondary Certificate"
            date="Aug 2020 — Jul 2023"
            subtitle="Eton School Mexico, Mexico City, Mexico"
          />
        </CVSection>

        <CVSection title="Skills and Interests">
          <CVEntry title="Skills">
            Analytical Skills, Business Strategy, Data Analysis, Project Management, Social Media Communications, Software Architecture, Software Design, Software Infrastructure, Web Design, Web Engineering
          </CVEntry>
          <CVEntry title="Interests">
            Business Engineering, Combinatorics, Experience Design, Full-Stack Development, Human Behavior, Language Learning (currently studying German, French, and Portuguese), Number Theory, Programming, Software Engineering, Sports, UI, UX
          </CVEntry>
          <CVEntry title="Programming Languages">
            Arduino, BASIC, C, C++, CSS, GAMBAS, HTML, Java, JavaScript, LaTeX, Mathematica, MongoDB, NextJS, PHP, Python, Shell, SQL, TypeScript
          </CVEntry>
        </CVSection>

        <CVSection title="Languages">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Language lang="Spanish" level="Native Language" />
            <Language lang="English" level="Second Language" />
            <Language lang="Italian" level="Professional Working Proficiency" />
          </div>
        </CVSection>

        <CVSection title="Experience">
          <CVEntry
            title={<span>Data Analyst at <A href="https://mindnic.net/">Mindnic</A></span>}
            date="Nov 2024 — Feb 2025"
          >
            <UL>
              <LI>Executed social listening strategies to monitor public sentiment and track trends across diverse social media platforms, news outlets, and mass media.</LI>
              <LI>Translated large volumes of unstructured data into comprehensive executive presentations, delivering actionable insights to guide client decision-making.</LI>
              <LI>Uncovered communication opportunities and PR risks that would otherwise go unnoticed through manual analysis, enabling clients to optimize their strategic responses.</LI>
            </UL>
          </CVEntry>
        </CVSection>

        <CVSection title="Research Publication">
          <div className="text-[#555555] dark:text-[#a1a1a1]">
            Nader, A. (2024, January 8). <em className="italic">Closed-Form Formula for the Partition
              Function and Related Functions</em> (arXiv:2401.04026). arXiv. <A href="https://doi.org/10.48550/arXiv.2401.04026">
              https://doi.org/10.48550/arXiv.2401.04026
            </A>
          </div>
        </CVSection>

        <CVSection title="Honors and Awards">
          <CVEntry
            title="1st Place in the 5th Alan Turing National Programming Contest"
            date="Dec 2022"
            subtitle="Issued by Anáhuac University"
          />
          <CVEntry
            title="Premio Contacto Banxico"
            date="Dec 2021"
            subtitle="Issued by Banco de México"
          />
        </CVSection>

        <CVSection title="Projects">
          <CVEntry
            title="Personal Portfolio Website"
            date="Dec 2025 — Present"
          >
            I needed a place to display all my work, experiences, and blog entries. That&apos;s why I
            created my portfolio website. It has been the perfect place to practice web design and
            development, UX, and copywriting. The website is hosted at <A href="https://www.anader.xyz">
              anader.xyz
            </A>.
          </CVEntry>

          <CVEntry
            title="Ampl"
            date="Aug 2025 — Present"
          >
            Generative AI tools such as ChatGPT, Gemini, and Claude are great… but they all have a flaw:
            you pay for something you&apos;re not getting the most out of. Ampl fixes that: it lets you use
            all AI models with a pay-as-you-go pricing model, so you stop paying for what you&apos;re not
            using!
          </CVEntry>

          <CVEntry
            className="external-link"
            title={<A href="https://estudio.so">
              estudio.so
            </A>}
            date="Dec 2024 — Present"
          >
            Teachers (at all levels) often have many administrative responsibilities. Sometimes, these
            duties can lead to a decline in the quality of their teaching. I am building several software
            tools so that teachers can focus their time and energy on what matters: providing quality
            education. Teaching should be about teaching, not about managing.
          </CVEntry>
        </CVSection>

        <CVSection title="Certifications">
          <CVEntry
            className="external-link"
            title={<A href="https://learn.nvidia.com/certificates?id=20dOe3VLR0eJb3_a2viC2g">
              Adding New Knowledge to LLMs
            </A>}
            date="Mar 2026"
            subtitle="Issued by NVIDIA; Credential ID 20dOe3VLR0eJb3_a2viC2g"
          />
          <CVEntry
            className="external-link"
            title={<A href="https://learn.nvidia.com/certificates?id=ekCku9j-T1yL3tKTtTiwbA">
              Building LLM Applications With Prompt Engineering
            </A>}
            date="Nov 2025"
            subtitle="Issued by NVIDIA; Credential ID ekCku9j-T1yL3tKTtTiwbA"
          />
          <CVEntry
            className="external-link"
            title={<A href="https://learn.nvidia.com/certificates?id=jGHnzwTDRTSHNq5Gg6cX1Q">
              Fundamentals of Accelerated Data Science
            </A>}
            date="Nov 2025"
            subtitle="Issued by NVIDIA; Credential ID jGHnzwTDRTSHNq5Gg6cX1Q"
          />
        </CVSection>

        <CVSection title="Contact" id="contact">
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
              href="tel:+4915567218118"
              text="+49 155 67218118"
              icon={faPhone}
            />
            <Contact
              href="https://www.anader.xyz"
              text="anader.xyz"
              icon={faEarthAmericas}
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
        </CVSection>
      </main >
    </>
  );
}
