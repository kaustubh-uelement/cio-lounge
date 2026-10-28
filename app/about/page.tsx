import type { Metadata } from "next";
import Link from "next/link";
import { Award, CheckCircle2, HeartHandshake, Mail, Mic, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import { platforms, principles, site } from "@/data/site";
import { advisors } from "@/data/members";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { initials } from "@/lib/format";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description: "CXO Lounge & CIO Lounge — an executive ecosystem built by a CIO for technology leaders, governed by peers, and committed to innovate, influence and impact.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CXO Lounge & CIO Lounge"
        title="Built by a CIO. Governed by Peers. Dedicated to Impact."
        lead="CXO Lounge brings together technology, leaders, ideas, enterprises, and opportunities. Our flagship community, CIO Lounge, was built to replace commoditized sales pitches with an authentic, peer-driven sanctuary for India's technology decision-makers."
      >
        <ButtonLink href="/membership/apply" variant="light" arrow>
          Request an Invitation
        </ButtonLink>
        <ButtonLink href="/partners" variant="outline-light">
          Partner With Us
        </ButtonLink>
      </PageHero>

      {/* The Genesis & Our Story */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
              <Sparkles className="h-3.5 w-3.5" />
              The Genesis
            </div>
            <h2 className="h2 mt-4">Why We Built CIO Lounge</h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink">
              <p>
                In the Indian technology market, enterprise engagement had quietly turned into a transactional commodity. CIOs found
                themselves invited to dozens of identical dinners a month, subjected to high-pressure vendor slide decks with little relevance to
                their live transformation dilemmas.
              </p>
              <p>
                At the same time, innovative partners and OEMs spent substantial marketing budgets on signature events, only to find themselves
                in crowded ballrooms chasing an exhausted handful of genuine decision-makers.
              </p>
              <p className="font-medium text-navy-900">
                CIO Lounge was created as the definitive antidote. Founded by a CIO who has led technology at the highest levels and sat on
                both sides of the table, the platform was established on an uncompromising foundation: partners are our customers, CIOs are our
                peers, and the two never blur.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-paper p-8 shadow-card">
            <h3 className="text-xl font-bold text-navy-900">The CIO Lounge Charter</h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600 mt-0.5" />
                <span><strong>Pure C-Suite Exclusivity:</strong> Membership is strictly reserved for enterprise CIOs, CTOs, CISOs, and CDOs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600 mt-0.5" />
                <span><strong>Zero Vendor Commissions:</strong> We earn purely through annual memberships and structured sponsorships — never taking a cut from member deals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600 mt-0.5" />
                <span><strong>Chaired by Peers:</strong> Every roundtable is moderated by a member CIO, focusing on real architectural pain points.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600 mt-0.5" />
                <span><strong>Measurable Outcomes:</strong> Sessions conclude with proof-of-concept commitments and quarterly reviews.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Executive Leadership: Kamal Goel & Shikha Goel */}
      <Section id="leadership">
        <SectionHeading
          eyebrow="Executive Leadership"
          title="The Leadership Behind CXO Lounge"
          lead="Led by seasoned enterprise technology pioneers with decades of industry credibility and deep community relationships."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Kamal Goel Profile */}
          <div className="rounded-3xl border border-navy-900/10 bg-navy-950 p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">Founder & Managing Director</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{site.founder.name}</h3>
                  <p className="text-sm text-brand-200">{site.founder.title}</p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-2xl font-bold text-white shadow-lg" aria-hidden>
                  {initials(site.founder.name)}
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-100">
                <p>
                  Kamal Goel is an accomplished enterprise technology leader with over 28 years of distinguished industry experience as Group CIO
                  and Head of IT across some of India&apos;s most prominent business enterprises.
                </p>
                <p>
                  His leadership pedigree includes heading technology at <strong>Yotta Infrastructure</strong>, <strong>Hitachi Systems India</strong>,{" "}
                  <strong>63 Moons Technologies (formerly Financial Technologies)</strong>, and <strong>Anand Rathi Securities</strong>. He has architected
                  hyperscale cloud infrastructure, high-frequency trading platforms, tier-IV data center systems, and zero-trust cybersecurity frameworks.
                </p>
                <p>
                  Having navigated enterprise IT transformations from both sides of the table, Kamal conceived CIO Lounge to build an authentic,
                  commission-free fraternity that fosters genuine innovation, peer mentorship, and trusted enterprise alliances.
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2">Executive Experience Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {site.founder.experience.map((x) => (
                    <span key={x} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5 flex items-center justify-between">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-300 hover:text-white"
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
              <span className="text-xs text-brand-300/60">Executive Office, Mumbai</span>
            </div>
          </div>

          {/* Shikha Goel - CXO Profile */}
          <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-900 to-navy-900 p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">Executive Leadership</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{site.cxo.name}</h3>
                  <p className="text-sm text-brand-200">{site.cxo.title}</p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-2xl font-bold text-white shadow-lg" aria-hidden>
                  {initials(site.cxo.name)}
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-100">
                <p>
                  Shikha Goel serves as the Chief Experience Officer (CXO) of CXO Lounge, spearheading member relations, strategic hospitality
                  partnerships, executive lifestyle initiatives, and community engagement.
                </p>
                <p>
                  Under her stewardship, CIO Lounge has forged exclusive alliances with world-class hospitality icons including{" "}
                  <strong>Taj Hotels</strong> and <strong>ITC Hotels</strong>, creating distinguished settings for executive retreats, CXO breakfasts,
                  and destination galas.
                </p>
                <p>
                  Shikha directs the platform&apos;s hallmark sporting ecosystems — the <strong>CIO Pickleball League</strong>,{" "}
                  <strong>CIO Golf Tour</strong>, and <strong>CIO Premier League</strong> — ensuring that technology leaders and their families
                  experience exceptional camaraderie, wellness, and lifestyle privileges.
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2">Key Portfolio Mandates</p>
                <div className="flex flex-wrap gap-2">
                  {site.cxo.experience.map((x) => (
                    <span key={x} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5 flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-300">Member Experience & Alliances</span>
              <span className="text-xs text-brand-300/60">National Tour Coordinator</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Advisory Council Showcase */}
      <Section tone="white" id="advisory">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow">Governance & Mentorship</p>
            <h2 className="h2 mt-3">The Advisory Council</h2>
            <p className="lead mt-3 max-w-2xl">
              Distinguished industry veterans providing strategic guidance, governance, and independent counsel to our members and enterprise partners.
            </p>
          </div>
          <div className="shrink-0">
            <ButtonLink href="/advisory" variant="secondary" arrow>
              Advisory Details
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((a) => (
            <div key={a.id} className="card flex flex-col p-6 transition hover:shadow-lift">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-lg font-bold text-white shadow-md">
                  {initials(a.name)}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg">{a.name}</h3>
                  <p className="text-xs font-medium text-brand-600">{a.title}</p>
                </div>
              </div>
              <p className="mt-3 text-xs font-semibold text-ink-muted uppercase">{a.formerly}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink flex-1">{a.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.focus.map((f) => (
                  <span key={f} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700 font-medium">
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-5 border-t border-line pt-3 flex items-center justify-between text-xs text-ink-muted">
                <span>{a.linkedinStatus}</span>
                <a
                  href={`mailto:${site.email}?subject=Advisory%20Inquiry%20-%20${encodeURIComponent(a.name)}`}
                  className="font-semibold text-brand-600 hover:underline"
                >
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/70 p-5 text-sm text-brand-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-brand-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-navy-900">Looking for full dossiers and LinkedIn profiles of our Advisory Board members?</p>
              <p className="text-xs text-brand-700 mt-0.5">Please contact Founder Kamal Goel directly at {site.email} for verified advisory profiles.</p>
            </div>
          </div>
          <a
            href={`mailto:${site.email}?subject=Request%20for%20Advisory%20Council%20Dossiers`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white hover:bg-navy-800"
          >
            <Mail className="h-3.5 w-3.5" /> Contact Kamal Goel
          </a>
        </div>
      </Section>

      {/* The 3 Pillars */}
      <Section>
        <SectionHeading
          eyebrow="Our Mission & DNA"
          title="Innovate · Influence · Impact"
          lead="The three tenets guiding every gathering, roundtable, and partnership across the CXO Lounge ecosystem."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-8 border-t-4 border-t-brand-600">
            <h3 className="text-2xl font-bold text-brand-600">Innovate</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Members preview and shape enterprise products, architectural paradigms, and cyber defenses with industry peers before they reach
              the commercial market. Leaders test ideas in safe confidential roundtables.
            </p>
          </div>
          <div className="card p-8 border-t-4 border-t-brand-700">
            <h3 className="text-2xl font-bold text-brand-700">Influence</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Building a unified, formidable collective voice for technology decision-makers with OEMs, enterprise boards, government regulators,
              and academic institutions across India.
            </p>
          </div>
          <div className="card p-8 border-t-4 border-t-navy-900">
            <h3 className="text-2xl font-bold text-navy-900">Impact</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Translating executive dialogue into tangible proofs of concept, board seats, executive career progression, and 2% revenue support for
              leaders&apos; families through the CIO Foundation.
            </p>
          </div>
        </div>
      </Section>

      {/* One Company, Three Platforms */}
      <Section tone="white">
        <SectionHeading eyebrow="One Company, Three Platforms" title="What We Run" />
        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.key} className="rounded-2xl bg-paper p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy-900">{p.name}</h3>
                <p className="mt-1 text-sm italic text-brand-700">{p.kicker}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">{p.body}</p>
              </div>
              <ButtonLink href={p.href} variant="ghost" arrow className="mt-6 self-start">
                Learn more
              </ButtonLink>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Innovate · Influence · Impact"
        title="Be Part of the Inner Circle."
        body="Experience authentic technology leadership. Membership is curated by invitation and reviewed personally by Founder Kamal Goel."
        primary={{ href: "/membership/apply", label: "Request an Invitation" }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  );
}
