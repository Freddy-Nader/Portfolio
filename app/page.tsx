import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WS2F5Q3W"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden"
          }}
        >
        </iframe>
      </noscript>
      {/* End Google Tag Manager(noscript) */}

      <header>
        <button id="theme-toggle" aria-label="Toggle dark mode" aria-keyshortcuts="l">
          {/* Sun Icon */}
          <svg className="icon sun-icon">
            <use href="img/icons.svg#sun"></use>
          </svg>
          {/* Moon Icon */}
          <svg className="icon moon-icon">
            <use href="img/icons.svg#moon"></use>
          </svg>
        </button>
        <ul className="toc">
          <li><a className="btn" href="#me">Me</a></li>
          <li><p>/</p></li>
          <li><a className="btn" href="#experiments">Experiments</a></li>
          <li><p>/</p></li>
          <li><a className="btn" href="#words">Words</a></li>
          <li><p>/</p></li>
          <li><a className="btn" href="#websites">Websites</a></li>
          <li><p>/</p></li>
          <li><a className="btn" href="#resume">Résumé</a></li>
        </ul>
      </header>

      <section>
        <h1 id="me"><Link href="https://www.anader.xyz">Hi, I'm Freddy</Link></h1>
        <p>I am a Mexican Computer Science student.</p>
        <p>I <em>love</em> pure math, programming, and beautiful things.</p>
        <p><em>Curiosity</em> and <em>passion</em> are my driving factors in everything I do.</p>
        <p>I like to learn new things, such as <Link href="#languages">languages</Link>.</p>
        <p>As Steve Jobs <a target="_blank"
          href="https://putsomethingback.stevejobsarchive.com/"
        >put it</a>, I also want to <em>put something back</em>.</p>
        <p>You can follow me on <a target="_blank"
          href="https://www.instagram.com/alfredo_nader/"
        >Instagram</a>, <a target="_blank"
          href="https://www.linkedin.com/in/alfredo-nader/"
        >LinkedIn</a>, and <a target="_blank"
          href="https://github.com/Freddy-Nader/"
        >GitHub</a>. I read every <a
          href="mailto:alfredonaderz@gmail.com"
        >email</a>.
        </p>
      </section>

      <section>
        <h1 id="experiments">Experiments</h1>

        <div className="block">
          <h3>QuickGrading</h3>
          <p>Teachers (at all levels) often have many administrative responsibilities. Sometimes, these duties can
            lead to a decline in the quality of their teaching. I am building several software tools so that
            teachers can focus their time and energy on what matters: providing quality education.
            <em>Teaching should be about teaching, not about managing.</em>
          </p>
        </div>

        <div className="block">
          <h3>Ampl</h3>
          <p>Generative AI tools such as ChatGPT, Gemini, and Claude are great… but they all have a flaw: you pay for
            something you're not getting the most out of. That's why I am developing <em>Ampl</em>. It lets you use
            all AI models with a pay-as-you-go pricing model, so you stop paying for what you're not using!</p>
        </div>
      </section>

      <section>
        <h1 id="words">Words</h1>

        <div className="block external-link">
          <h3>
            <a target="_blank"
              href="/public/words/2401.04026v1.pdf"
            >Closed-Form Formula for the Partition Function and Related Functions
            </a>
          </h3>
        </div>
        <p>Since Euler and his peers started working on <a target="_blank"
          href="https://en.wikipedia.org/wiki/Integer_partition"
        >integer partitions</a>, no one had been able to develop a <a target="_blank"
          href="https://en.wikipedia.org/wiki/Closed-form_expression"
        >closed-form formula</a> for the <a target="_blank"
          href="https://en.wikipedia.org/wiki/Partition_function_(number_theory)"
        >number of partitions of an integer number</a>, $p(n)$. In a paper <a target="_blank"
          href="https://arxiv.org/abs/2401.04026"
        >published</a> as a preprint on arXiv, such a formula is developed using combinatorial methods. The methods
          used have implications over other similar functions, such as <a target="_blank"
            href="https://en.wikipedia.org/wiki/Spt_function"
          >Andrews' smallest parts (spt) function</a>, and new identities for <a target="_blank"
            href="https://en.wikipedia.org/wiki/Jordan%27s_totient_function"
          >Jordan's totient function</a> of second order, <a target="_blank"
            href="https://en.wikipedia.org/wiki/Euler%27s_totient_function"
          >Euler's totient function</a>, and <a target="_blank"
            href="https://en.wikipedia.org/wiki/Dedekind_psi_function"
          >Dedekind's psi function</a>.
        </p>
      </section>

      <section>
        <h1 id="resume">Résumé</h1>

        <div className="block external-link">
          <Link href="/public/resume.pdf" target="_blank" className="btn">
            <strong>Download résumé</strong>
          </Link>
        </div>

        <div className="block">
          <h2 id="languages">Languages</h2>
          <ul>
            <li>Spanish (C2)</li>
            <li>English (C1)</li>
            <li>Italian (B2)</li>
          </ul>
        </div>

        <div className="block">
          <h2>Awards</h2>
          <ul>
            <li>First place at
              <a target="_blank"
                href="https://www.anahuac.mx/"
              >Anáhuac University</a>'s Alan Turing National Programming Contest
            </li>
          </ul>
        </div>

        <div className="block external-link">
          <h2>Publications</h2>
          <ul>
            <li>
              <a target="_blank"
                href="words/2401.04026v1.pdf"
              >Closed-Form Formula for the Partition Function and Related Functions</a>
            </li>
          </ul>
        </div>

        <div className="block external-link">
          <h2>Education</h2>
          <table className="block">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a target="_blank"
                    href="https://www.ibo.org/"
                  >International Baccalaureate</a>
                </td>
                <td>aug 2021 - may 2023</td>
              </tr>
              <tr>
                <td>
                  <a target="_blank"
                    href="https://www.nordangliaeducation.com/eton-school-mexico"
                  >ETON School</a>
                </td>
                <td>aug 2011 - jun 2023</td>
              </tr>
              <tr>
                <td>
                  <a target="_blank"
                    href="https://www.anahuac.mx/"
                  >Anáhuac University</a>
                </td>
                <td>aug 2023 - dec 2028</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="block">
          <h2>Experience</h2>
          <table className="block">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Participation on <a target="_blank"
                    href="https://educa.banxico.org.mx/contactobanxico/"
                  >Premio Contacto Banxico</a>
                </td>
                <td>dec 2021</td>
              </tr>
              <tr>
                <td>
                  Internship at <a target="_blank"
                    href="https://www.ericsson.com/"
                  >Ericsson</a>
                </td>
                <td>nov 2022</td>
              </tr>
              <tr>
                <td>
                  Data Analyst at Mindnic—a social listening company based in Mexico City.
                </td>
                <td>nov 2024</td>
              </tr>
              <tr>
                <td>
                  Founder and CEO of QuickGrading
                </td>
                <td>dec 2024</td>
              </tr>
              <tr>
                <td>
                  Founder and CEO of Ampl
                </td>
                <td>aug 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

