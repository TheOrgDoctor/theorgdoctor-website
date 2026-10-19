import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import {
  team,
  teamExpertise,
  positioning,
  independenceStatement,
  awards,
} from "@/lib/site-data";

const credibilityPoints = [
  "Named 2026 HR Executive of the Year (Small and Mid-Sized Organization) at the SHRM-Atlanta HR Excellence Awards, presented with Kaiser Permanente.",
  "Featured nationally by SHRM on the Build, Buy, Borrow talent strategy framework, following a session presented at SHRM25, SHRM's Annual Conference & Expo.",
  "Public-sector and utility CHRO-level experience — operational credibility built from having run HR inside an organization like the ones we advise, not just around them.",
  "Doctoral research in organizational and talent strategy, with a dissertation focused on critical infrastructure and utility organizations.",
  "Hands-on experience leading organizational assessments, business process improvement, and structure redesign — plus RFP development and proposal evaluation, so we know what a strong engagement looks like from both sides of the table.",
  "A standing platform at AWWA and SHRM national conferences, keeping our thinking current with what utility and public-sector leaders are actually facing.",
  "Developer and instructor for PSHRA's Ethics and Policy in Public Sector HR course, and a PSHRA instructor for Conflict Resolution — in addition to a background teaching HR, employment law, and management at the college level.",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team at The Org Doctor — award-winning HR and organizational consultants serving public and private sector clients.",
};

const badges = [
  { src: "/images/badge-shrm-scp.png", alt: "SHRM Senior Certified Professional (SHRM-SCP)" },
  { src: "/images/badge-sphr.png", alt: "Senior Professional in Human Resources (SPHR)" },
  { src: "/images/badge-shrm-wi.png", alt: "SHRM Workplace Investigations Specialty" },
  { src: "/images/badge-prsa.png", alt: "PRSA Certificate Program" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-green py-16 sm:py-20">
        <GradientField variant="green" />
        <Container className="relative text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Meet The Org Doctor
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium italic text-brand-orange">
              Your Prescription for Organizational Success
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-brand-gray">
            <p className="font-display text-xl font-semibold text-brand-green">
              {positioning.statement}
            </p>
            <p>
              We work with organizations that are too complex for a
              fractional HR consultant and underserved by national
              transformation firms sized for global enterprises. Our method —
              assess, diagnose, prescribe, treat, and build self-sufficiency —
              is built to leave your team more capable, not more dependent.
            </p>
            <p>
              Our consultants are not just advisors; they are educators and
              industry thought leaders who regularly present at national
              conferences and bring real-world expertise to every engagement.
              At The Org Doctor, we believe that every organization —
              whether navigating growth, transformation, or daily operations
              — deserves a clear, strategic path forward.
            </p>
          </Reveal>

          {/* Awards */}
          <RevealGroup className="mx-auto mt-10 max-w-3xl space-y-3" stagger={0.1}>
            {awards.map((award) => (
              <RevealItem
                key={award.title}
                className="flex flex-col items-center gap-1 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 px-8 py-6 text-center sm:flex-row sm:justify-between sm:text-left"
              >
                <div>
                  <p className="font-display text-base font-bold text-brand-green">
                    {award.title}
                    <span className="font-sans text-sm font-medium text-brand-gray">
                      {" "}
                      · {award.category}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-brand-gray">{award.issuer}</p>
                </div>
                <span className="mt-2 shrink-0 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white sm:mt-0">
                  {award.year}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Why we're credible here */}
          <div className="mx-auto mt-14 max-w-3xl">
            <Reveal>
              <h2 className="text-center font-display text-2xl font-bold text-brand-green">
                Why We&apos;re Credible Here
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 space-y-4" stagger={0.1}>
              {credibilityPoints.map((point) => (
                <RevealItem
                  key={point}
                  className="card-lift flex gap-3 rounded-xl border border-black/10 bg-white p-5"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span className="text-sm leading-relaxed text-brand-gray">
                    {point}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Independence statement */}
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-2xl bg-brand-green px-8 py-8 text-center">
            <p className="font-display text-base font-semibold text-white">
              We work for you — no one else.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {independenceStatement}
            </p>
          </Reveal>

          {/* Credential badges */}
          <RevealGroup
            className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-8"
            stagger={0.08}
          >
            {badges.map((badge) => (
              <RevealItem key={badge.src}>
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={96}
                  height={96}
                  className="h-20 w-20 object-contain transition-transform duration-300 hover:scale-110 sm:h-24 sm:w-24"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Team bios */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Our Team
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 space-y-10" stagger={0.1}>
            {team.map((member) => (
              <RevealItem
                key={member.name}
                className="card-lift rounded-2xl border border-black/10 p-6 sm:p-8"
              >
                <h3 className="font-display text-xl font-bold text-brand-green">
                  {member.name}
                  {member.credentials && (
                    <span className="font-sans text-sm font-medium text-brand-orange">
                      {" "}
                      · {member.credentials}
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-gray/70">
                  {member.title}
                </p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-brand-gray whitespace-pre-line">
                  {member.bio}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Broader team expertise */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <GradientField variant="light" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Backed by a Team of Experts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Patrick draws on a diverse team of HR and organizational
              development consultants across public and private sector
              backgrounds, bringing additional depth to every engagement.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
            {teamExpertise.map((item, i) => (
              <RevealItem
                key={item.area}
                className={`card-lift rounded-2xl border border-black/10 bg-white p-6 ${
                  i === 0 ? "sm:col-span-2 sm:bg-brand-green/[0.03]" : ""
                }`}
              >
                <h3 className="font-display text-base font-bold text-brand-green">
                  {item.area}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {item.detail}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
