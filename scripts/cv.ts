import fs from "fs";
import path from "path";
import { execSync, spawn } from "child_process";

const ROOT_DIR = process.cwd();
const CV_JSON = path.join(ROOT_DIR, "cv/cv.json");
const CV_TSX = path.join(ROOT_DIR, "app/cv/page.tsx");
const CV_TEX = path.join(ROOT_DIR, "cv/cv.tex");
const PDF_OUT = path.join(ROOT_DIR, "cv/cv.pdf");
const PUBLIC_PDF = path.join(ROOT_DIR, "public/f/cv.pdf");

interface CVData {
  name: string;
  location: string;
  contact: {
    email: string;
    phone: { value: string; print: string }[];
    website: string;
    github: string;
    linkedin: { name: string; username: string; };
  };
  education: {
    title: string;
    titleMobile?: string;
    date: string;
    institution: string;
    institutionMobile?: string;
  }[];
  skillsInterests: {
    skills: string[];
    interests: string[];
    programmingLanguages: string[];
  };
  languages: { name: string; level: string }[];
  experience: {
    title: string;
    url?: string;
    date: string;
    points: string[];
  }[];
  research: {
    author: string;
    year: string;
    month: string;
    day: string;
    title: string;
    arxiv: string;
    doi: string;
  }[];
  honors: { title: string; date: string; issuer: string }[];
  projects: {
    title: string;
    date: string;
    description: string;
    url: string;
  }[];
  certifications: {
    title: string;
    date: string;
    issuer: string;
    url: string;
  }[];
}

function generateTSX(data: CVData): string {
  return `"use client"

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
          <H1 id="name" className="!mb-0 !text-[2.3rem] uppercase leading-[1.2]">${data.name}</H1>
          <P className="y-[-4em]">${data.location}</P>
        </Section>

        <CVSection title="Education">
${data.education
      .map(
        (edu) => `          <CVEntry
            title="${edu.title}" ${edu.titleMobile ? `titleMobile="${edu.titleMobile}"` : ""}
            date="${edu.date}"
            subtitle="${edu.institution}" ${edu.institutionMobile ? `subtitleMobile="${edu.institutionMobile}"` : ""}
          />`
      )
      .join("\n")}
        </CVSection>

        <CVSection title="Skills and Interests">
          <CVEntry title="Skills">
            ${data.skillsInterests.skills.join(", ")}
          </CVEntry>
          <CVEntry title="Interests">
            ${data.skillsInterests.interests.join(", ")}
          </CVEntry>
          <CVEntry title="Programming Languages">
            ${data.skillsInterests.programmingLanguages.join(", ")}
          </CVEntry>
        </CVSection>

        <CVSection title="Languages">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
${data.languages
      .map(
        (lang) => `            <Language lang="${lang.name}" level="${lang.level}" />`
      )
      .join("\n")}
          </div>
        </CVSection>

        <CVSection title="Experience">
${data.experience
      .map(
        (exp) => `          <CVEntry
            title={<span>${exp.title.replace(
          /at (.*)/,
          `at <A href="${exp.url}">$1</A>`
        )}</span>}
            date="${exp.date}"
          >
            <UL>
${exp.points.map((p) => `              <LI>${p}</LI>`).join("\n")}
            </UL>
          </CVEntry>`
      )
      .join("\n")}
        </CVSection>

        <CVSection title="Research Publication">
${data.research
      .map(
        (res) => `          <div className="text-[#555555] dark:text-[#a1a1a1]">
            ${res.author} (${res.year}, ${res.month} ${res.day}). <em className="italic">${res.title}</em> (arXiv:${res.arxiv}). arXiv. <A href="${res.doi}">${res.doi}</A>
          </div>`
      )
      .join("\n")}
        </CVSection>

        <CVSection title="Honors and Awards">
${data.honors
      .map(
        (hon) => `          <CVEntry
            title="${hon.title}"
            date="${hon.date}"
            subtitle="${hon.issuer}"
          />`
      )
      .join("\n")}
        </CVSection>

        <CVSection title="Projects">
${data.projects
      .map(
        (proj) => `          <CVEntry
            title="${proj.title}"
            date="${proj.date}"
          >
            ${proj.description.replace(
          /anader\.xyz/,
          `<A href="https://www.anader.xyz">anader.xyz</A>`
        )}
          </CVEntry>`
      )
      .join("\n")}
        </CVSection>

        <CVSection title="Certifications">
${data.certifications
      .map(
        (cert) => `          <CVEntry
            className="external-link"
            title={<A href="${cert.url}">
              ${cert.title}
            </A>}
            date="${cert.date}"
            subtitle="${cert.issuer}"
          />`
      )
      .join("\n")}
        </CVSection>

        <CVSection title="Contact" id="contact">
          <div className="flex flex-col">
            <Contact
              href="mailto:${data.contact.email}"
              text="${data.contact.email}"
              icon={faEnvelope}
            />
${data.contact.phone
      .map(
        (phone) => `            <Contact
              href="tel:${phone.value}"
              text="${phone.print}"
              icon={faPhone}
            />`
      )
      .join("\n")}
            <Contact
              href="https://www.${data.contact.website}"
              text="${data.contact.website}"
              icon={faEarthAmericas}
            />
            <Contact
              href="https://github.com/${data.contact.github}"
              text="${data.contact.github}"
              icon={faGithub}
            />
            <Contact
              href="https://www.linkedin.com/in/${data.contact.linkedin.username}/"
              text="${data.contact.linkedin.name}"
              icon={faLinkedin}
            />
          </div>
        </CVSection>
      </main >
    </>
  );
}
`;
}

function generateTEX(data: CVData): string {
  const phone = data.contact.phone[0];
  const escapeLatex = (str: string) => str.replace(/&/g, "\\&").replace(/_/g, "\\_");

  return `%-------------------------------------------------
%	PACKAGES AND OTHER DOCUMENT CONFIGURATIONS
%-------------------------------------------------
 
\\documentclass{resume} % Use the custom resume.cls style 

\\newcommand{\\email}{${data.contact.email}}
\\newcommand{\\emailLink}{\\href{mailto:\\email}{\\email}}
\\newcommand{\\tel}{${phone.value}}
\\newcommand{\\telPrint}{${phone.print.replace(/ /g, "~")}}
\\newcommand{\\telLink}{\\href{tel:\\tel}{\\telPrint}}

\\name{${data.name}} % Your name 
\\address{%
    ${data.location}\\qquad%
    {\\telLink}\\qquad%
    {\\emailLink}%
}

\\begin{document}

%-----------------------------------
%   EDUCATION SECTION
%-----------------------------------

\\begin{rSection}{ Education }

${data.education
      .map(
        (edu) => `{\\bf{${edu.title}}} \\hfill{${edu.date.replace(/ — /g, " -- ")}}
\\\\
${escapeLatex(edu.institution)}`
      )
      .join("\n\n")}

\\end{rSection}

%-----------------------------------
%	TECHNICAL STRENGTHS
%-----------------------------------

\\begin{rSection}{ Skills and Interests }

\\begin{tabular}{ @{} >{\\bfseries}l @{\\hspace{4ex}} l }  
    Skills & ${data.skillsInterests.skills.join(", ")} \\\\
    Interests & ${data.skillsInterests.interests.join(", ")} \\\\
    Programming & ${data.skillsInterests.programmingLanguages
      .join(", ")
      .replace(/LaTeX/g, "\\LaTeX")} \\\\
    Languages &
\\end{tabular}   

\\end{rSection}

%-----------------------------------
%	LANGUAGES
%-----------------------------------

\\begin{rSection}{ Languages }

${data.languages
      .map(
        (lang) => `{\\bf{${lang.name}}} \\\\ ${lang.level}`
      )
      .join("\n\n")}

\\end{rSection}  

%-----------------------------------
%	EXPERIENCE
%-----------------------------------

\\begin{rSection}{ Experience }

${data.experience
      .map(
        (exp) => `{\\bf ${exp.title.replace(
          /at (.*)/,
          (m, p1) => `at \\href{${exp.url}}{${p1}}`
        )}} \\hfill {${exp.date.replace(/ — /g, " -- ")}}
\\begin{itemize}
${exp.points.map((p) => `    \\item ${escapeLatex(p)}`).join("\n")}
\\end{itemize}`
      )
      .join("\n\n")}

\\end{rSection}  

%-----------------------------------
%   RESEARCH PUBLICATIONS 
%-----------------------------------

\\begin{rSection}{ Research Publication } \\itemsep -3pt

${data.research
      .map(
        (res) => `{${res.author} (${res.year}, ${res.month} ${res.day}). \\textit{${res.title}}\\\\
(\\href{${res.doi}}{arXiv:${res.arxiv}}). arXiv. \\href{${res.doi}}{${res.doi}}}`
      )
      .join("\n\n")}
 
\\end{rSection}

%-----------------------------------
%	HONORS & AWARDS
%-----------------------------------

\\pagebreak
\\begin{rSection}{ Honors and Awards }

${data.honors
      .map(
        (hon) => `{\\bf ${hon.title} } \\hfill {${hon.date.replace(/ — /g, " -- ")}}
\\\\ 
${escapeLatex(hon.issuer)}`
      )
      .join("\n\n")}

\\end{rSection}  

%-----------------------------------
%	PROJECTS
%-----------------------------------

\\begin{rSection}{ Projects }

${data.projects
      .map(
        (proj) => `\\href{${proj.url}}{{\\bf ${proj.title}} \\hfill {${proj.date.replace(
          / — /g,
          " -- "
        )}}}
\\\\ 
${escapeLatex(proj.description)}`
      )
      .join("\n\n")}

\\end{rSection} 

%-----------------------------------
%	LICENCES & CERTIFICATIONS
%-----------------------------------

\\begin{rSection}{ Certifications }

${data.certifications
      .map(
        (cert) => `\\href{${cert.url}}{%
    {\\bf{${cert.title}}} \\hfill{${cert.date.replace(/ — /g, " -- ")}}
    \\\\
    ${escapeLatex(cert.issuer)}
}`
      )
      .join("\n\n")}

\\end{rSection}

%-----------------------------------
%   CONTACT
%-----------------------------------

\\begin{rSection}{ Contact }

\\href{mailto:\\email}{\\faEnvelope\\quad\\email}

${data.contact.phone
      .map(
        (p) => `\\href{tel:${p.value}}{\\faPhone\\quad{${p.print.replace(/ /g, "~")}}}`
      )
      .join("\n\n")}

\\href{https://www.${data.contact.website}}{\\faEarthAmericas\\quad\\0${data.contact.website}}

\\href{https://github.com/${data.contact.github}}{\\faGithub\\quad\\0${data.contact.github}}

\\href{https://www.linkedin.com/in/${data.contact.linkedin.username}/}{\\faLinkedin\\quad\\0${data.contact.linkedin.name}}

\\end{rSection}

\\end{document}
`;
}

function isDevRunning(): boolean {
  try {
    // Check for a 'next' process that contains the root directory in its command line
    const output = execSync(`ps -ax -o pid,args | grep "next dev" | grep "${ROOT_DIR}" | grep -v grep`).toString();
    return output.trim().length > 0;
  } catch (e) {
    return false;
  }
}

function getRunningPort(): number | null {
  try {
    // Look for node or next processes listening on TCP ports
    const lsofListen = execSync("lsof -nP -iTCP -sTCP:LISTEN -P | grep -E 'node|next'").toString().trim();
    if (!lsofListen) return null;

    const lines = lsofListen.split("\n");
    for (const line of lines) {
      const parts = line.split(/\s+/);
      const pid = parts[1];
      const portPart = parts[8]; // e.g., *:3000 or 127.0.0.1:3000
      const portMatch = portPart.match(/:(\d+)$/);
      if (!portMatch) continue;
      const port = parseInt(portMatch[1]);

      try {
        // Get the exact working directory of the process
        const pidCwdOutput = execSync(`lsof -a -d cwd -p ${pid} -Fn`).toString();
        const cwdLine = pidCwdOutput.split("\n").find(l => l.startsWith("n"));
        if (cwdLine) {
          const pidCwd = cwdLine.slice(1).trim();
          // Use path.normalize to ensure consistent path comparison
          if (path.normalize(pidCwd) === path.normalize(ROOT_DIR)) {
            // Further verify this is a next/npm related process to avoid matching other node tools
            const cmd = execSync(`ps -p ${pid} -o command=`).toString().toLowerCase();
            if (cmd.includes("next") || cmd.includes("npm")) {
              return port;
            }
          }
        }
      } catch (e) {
        // ignore errors for individual processes (e.g., permission denied)
      }
    }
  } catch (e) {
    // ignore
  }
  return null;
}

async function main() {
  const data: CVData = JSON.parse(fs.readFileSync(CV_JSON, "utf8"));

  console.log("Syncing app/cv/page.tsx...");
  fs.writeFileSync(CV_TSX, generateTSX(data));

  console.log("Syncing cv/cv.tex...");
  fs.writeFileSync(CV_TEX, generateTEX(data));

  console.log("Compiling LaTeX...");
  try {
    if (fs.existsSync(path.join(ROOT_DIR, "scripts/tex"))) {
      execSync("./scripts/tex --once cv/cv.tex", {
        cwd: ROOT_DIR,
        stdio: "inherit",
      });
    } else {
      const env = { ...process.env };
      if (process.platform === "darwin") {
        env.PATH = `/Library/TeX/texbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${env.PATH}`;
      }
      execSync("latexmk -pdf -interaction=nonstopmode cv.tex", {
        cwd: path.join(ROOT_DIR, "cv"),
        env,
      });
    }
    console.log("PDF compiled successfully.");

    if (fs.existsSync(PDF_OUT)) {
      fs.copyFileSync(PDF_OUT, PUBLIC_PDF);
      console.log(`Moved PDF to ${PUBLIC_PDF}`);
    }
  } catch (e) {
    console.error("Error compiling LaTeX. Make sure you have latexmk installed.");
  }

  const isRunning = isDevRunning();
  const runningPort = getRunningPort();
  const port = runningPort || parseInt(process.env.PORT || "3000");

  if (isRunning || runningPort) {
    console.log("\n\x1b[33m%s\x1b[0m", "npm run dev is already running.");
  } else {
    console.log("\nStarting npm run dev...");
    const dev = spawn("npm", ["run", "dev"], {
      stdio: "inherit",
      detached: true,
    });
    dev.unref();
  }

  console.log(`Link:   \x1b[36mhttp://localhost:${port}/cv\x1b[0m`);
  console.log(`Kill:   \x1b[31mkill $(lsof -t -i:${port})\x1b[0m\n`);
}

main().catch(console.error);
