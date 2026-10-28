import Link from "next/link";
import type { Metadata } from "next";
import { Check, Mail, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { eligibility, memberMatrix, memberMatrixColumns, memberYear, membershipFaq, peerForum, plans } from "@/data/membership";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { BenefitsGrid, PlanCard } from "@/components/Offerings";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Membership",
  description: "CIO Lounge membership for CIOs, CTOs, CISOs and CDOs — curated plans, executive privileges, eligibility, and how to request an invitation.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive Membership"
        title="Excellence by Invitation. Governed by Peers."
        lead="CIO Lounge is curated strictly for enterprise technology leaders. Every member is vetted through peer admissions — ensuring senior rooms, authentic discussions, and zero vendor solicitation."
      >
        <ButtonLink href="/membership/apply" variant="light" arrow>
          Request an Invitation
        </ButtonLink>
        <ButtonLink href="#plans" variant="outline-light">
          Compare Privileges
        </ButtonLink>
      </PageHero>

      <Section id="plans">
        <SectionHeading align="center" eyebrow="Curated Cohorts" title="Choose How You Take Part" />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/60 p-4 text-center text-sm text-brand-900">
          <p>
            All membership requests are routed directly to <strong>Founder Kamal Goel ({site.email})</strong> and reviewed by the Advisory Admissions Council.
          </p>
        </div>
        <p className="mt-4 text-center text-sm text-ink-muted">
          OEMs, system integrators and institutions join as{" "}
          <Link href="/partners" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
            Partners
          </Link>.
        </p>
      </Section>

      <Section tone="navy" className="!py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="eyebrow-light">Your Year as a Member</p>
            <h2 className="h2 mt-3 !text-white">What a Year of Membership Delivers</h2>
            <p className="mt-3 text-sm text-brand-200">
              Curated engagements, masterclasses, and executive sports across the 2026–27 calendar year.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {memberYear.map((y) => (
              <div key={y.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt className="sr-only">{y.label}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{y.value}</dd>
                <dd className="mt-1 text-sm text-brand-200">{y.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="white" id="compare">
        <SectionHeading
          eyebrow="Compare Privileges"
          title="Everything a CXO Receives, Cohort by Cohort"
          lead="Every membership runs for twelve months from your formal induction date."
        />
        <ComparisonTable caption="Membership plans compared" columns={memberMatrixColumns} groups={memberMatrix} />
        <p className="mt-4 text-xs text-ink-muted">Curated privileges for the 2026–27 membership calendar.</p>
      </Section>

      <Section>
        <div className="grid gap-10 rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <UsersRound className="h-6 w-6" aria-hidden />
            </div>
            <p className="eyebrow mt-5">Core Executive Program · Included in Founding Circle</p>
            <h2 className="h2 mt-2">{peerForum.title}</h2>
            <p className="lead mt-4">{peerForum.body}</p>
          </div>
          <ul className="space-y-3">
            {peerForum.points.map((pt) => (
              <li key={pt} className="flex gap-3 rounded-xl bg-paper p-4 text-[15px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Member Privileges"
          title="Professional, Personal and Family"
          lead="Comprehensive privileges roll out across the year — professional roundtables, executive education and sports properties take priority."
        />
        <BenefitsGrid />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Eligibility & Criteria</p>
            <h2 className="h2 mt-3">Who Can Join</h2>
            <ul className="mt-6 space-y-4">
              {eligibility.map((e) => (
                <li key={e} className="flex gap-3 text-[15px] leading-relaxed">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
                <h3 className="font-semibold text-navy-900">Direct Founder Review</h3>
              </div>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                All invitations are personally reviewed by Founder Kamal Goel to ensure every table maintains peer symmetry and uncompromised leadership stature.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="h2 mt-3">Everything You Need to Know</h2>
            <dl className="mt-6 divide-y divide-line">
              {membershipFaq.map((faq) => (
                <div key={faq.q} className="py-5 first:pt-0 last:pb-0">
                  <dt className="text-base font-semibold text-navy-900">{faq.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Exclusive by Design"
        title="Request Your Invitation Today."
        body="Join the private fraternity of India's technology decision-makers. Submissions are routed directly to Founder Kamal Goel."
        primary={{ href: "/membership/apply", label: "Request an Invitation" }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  );
}
