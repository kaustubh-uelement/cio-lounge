import Link from "next/link";
import type { Metadata } from "next";
import { Check, Plus, UsersRound } from "lucide-react";
import { eligibility, memberMatrix, memberMatrixColumns, memberYear, membershipFaq, peerForum, plans } from "@/data/membership";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { BenefitsGrid, PlanCard } from "@/components/Offerings";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Membership",
  description: "CIO Lounge membership for CIOs, CTOs, CISOs and CDOs — plans, benefits, eligibility and how to apply.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Nothing is free. Everything is worth it."
        lead="Members invest in the platform — which keeps the room serious, the conversations real, and our members never the product."
      >
        <ButtonLink href="/membership/apply" variant="light" arrow>Apply now</ButtonLink>
        <ButtonLink href="#plans" variant="outline-light">Compare plans</ButtonLink>
      </PageHero>

      <Section id="plans">
        <SectionHeading align="center" eyebrow="Plans" title="Choose how you take part" />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => <PlanCard key={p.id} plan={p} />)}
        </div>
        <p className="mt-6 text-center text-sm text-ink-muted">
          OEMs, system integrators and institutions join as <Link href="/partners" className="font-medium text-brand-600 underline-offset-4 hover:underline">partners</Link>.
        </p>
      </Section>

      <Section tone="navy" className="!py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="eyebrow-light">Your year as a Member</p>
            <h2 className="h2 mt-3 !text-white">What a year of membership includes</h2>
            <p className="mt-3 text-sm text-brand-200">Indicative entitlements for the 2026–27 membership year.</p>
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
          eyebrow="Compare plans"
          title="Everything a CXO gets, plan by plan"
          lead="Every plan runs for twelve months from the day you join."
        />
        <ComparisonTable caption="Membership plans compared" columns={memberMatrixColumns} groups={memberMatrix} />
        <p className="mt-4 text-xs text-ink-muted">Indicative entitlements for the 2026–27 membership year.</p>
      </Section>

      <Section>
        <div className="grid gap-10 rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <UsersRound className="h-6 w-6" aria-hidden />
            </div>
            <p className="eyebrow mt-5">Add-on for Members · included in Founding Circle</p>
            <h2 className="h2 mt-2">{peerForum.title}</h2>
            <p className="lead mt-4">{peerForum.body}</p>
          </div>
          <ul className="space-y-3">
            {peerForum.points.map((pt) => (
              <li key={pt} className="flex gap-3 rounded-xl bg-paper p-4 text-[15px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />{pt}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Member benefits" title="Professional, personal and family" lead="Benefits roll out across the year — professional engagements, learning and sport come first." />
        <BenefitsGrid />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Eligibility</p>
            <h2 className="h2 mt-3">Who can join</h2>
            <ul className="mt-6 space-y-4">
              {eligibility.map((e) => (
                <li key={e} className="flex gap-3 text-[15px] leading-relaxed">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />{e}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-navy-900 p-6 text-brand-100">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">How it works</p>
              <ol className="mt-4 space-y-3 text-sm">
                <li><span className="font-semibold text-white">1. Apply</span> — a short form, five minutes.</li>
                <li><span className="font-semibold text-white">2. Conversation</span> — a call with the CIO Lounge team.</li>
                <li><span className="font-semibold text-white">3. Welcome</span> — your kit, your first invitations, your directory profile.</li>
              </ol>
            </div>
          </div>
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="h2 mt-3">Questions members ask</h2>
            <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
              {membershipFaq.map((f) => (
                <details key={f.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-strong">
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand-600 transition group-open:rotate-45" aria-hidden />
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand eyebrow="Ready?" title="Apply for membership" body="Every application is reviewed personally." primary={{ href: "/membership/apply", label: "Start application" }} />
    </>
  );
}
