import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { team, teamExpertise } from "@/lib/site-data";

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
      <section className="bg-brand-green py-16 sm:py-20">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Meet The Org Doctor
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium italic text-brand-orange">
            Your Prescription for Organizational Success
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-brand-gray">
            <p>
              At The Org Doctor, we specialize in diagnosing organizational
              challenges and prescribing strategic, people-centered solutions.
              As a full-service consulting firm, we partner with organizations
              of all sizes — public and private — across diverse industries to
              optimize human resources, leadership development, business
              processes, and overall organizational effectiveness.
            </p>
            <p>
              Our award-winning team combines decades of experience in human
              resources, business strategy, leadership development, and risk
              management. We are passionate about helping clients build
              resilient, high-performing workplaces through innovative
              strategies and actionable solutions. From HR audits and
              leadership coaching to change management and operational
              improvements, we deliver measurable results that align your
              people, processes, and goals.
            </p>
            <p>
              Our consultants are not just advisors; they are educators and
              industry thought leaders who regularly present at national
              conferences and bring real-world expertise to every engagement.
              At The Org Doctor, we believe that every organization — whether
              navigating growth, transformation, or daily operations —
              deserves a clear, strategic path forward.
            </p>
          </div>

          {/* Credential badges */}
          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-8">
            {badges.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                alt={badge.alt}
                width={96}
                height={96}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Team bios */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-brand-green sm:text-4xl">
            Our Team
          </h2>
          <div className="mt-12 space-y-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-black/10 p-6 sm:p-8"
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Broader team expertise */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Backed by a Team of Experts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Patrick draws on a diverse team of HR and organizational
              development consultants across public and private sector
              backgrounds, bringing additional depth to every engagement.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {teamExpertise.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <h3 className="font-display text-base font-bold text-brand-green">
                  {item.area}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
