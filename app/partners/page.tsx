import type { Metadata } from "next";
import { Ban, Building2, Check, Cpu, Landmark, Mail, Plus, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { clsx } from "clsx";
import { partnerFaq, partnerJourney, partnerMatrix, partnerMatrixColumns, partnerNever, partnerProgrammes } from "@/data/partnership";
import { ComparisonTable } from "@/components/ComparisonTable";
import { beyondTheCourt, roundtableSteps } from "@/data/sponsorship";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { SponsorTierGrid } from "@/components/Offerings";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner with us",
  description: "Enterprise sponsorship, curated roundtables and bespoke events for OEMs, system integrators and institutions who want to reach CIOs the right way.",
};

const audiences = [
  { icon: Cpu, title: "OEMs", body: "Go beyond one-off signature events. Build long-term value with an enterprise community that meets all year." },
  { icon: Building2, title: "System integrators", body: "Swap ad-hoc cocktail sponsorships for curated rooms of the enterprise decision-makers you actually want to meet." },
  { icon: Landmark, title: "Institutions", body: "Design programmes for senior technology leaders, supported by industry partners and filled by verified members." },
];

export default function PartnersPage() {
  return (
    <>
      {/* Glorified and Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid-pattern absolute inset-0 opacity-20" aria-hidden />
        <div className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-brand-400/15 blur-3xl" aria-hidden />

        <div className="container relative py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-brand-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                  Enterprise Partnership Ecosystem · 2026–27
                </span>
              </div>

              <h1 className="display mt-6 !text-white leading-[1.1]">
                Where Decision-Makers Convene.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 via-brand-300 to-white">
                  Where Lasting Enterprise Alliances Begin.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
                Break through the fatigue of commoditized trade conferences. CIO Lounge connects OEMs, System Integrators, and ISVs directly
                to verified enterprise CIOs, CTOs, and CISOs through closed-door, 15-leader roundtables chaired by the members themselves — 100%
                commission-free, outcome-measured, and structured for genuine proof-of-concept conversion.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="#enquire" variant="light" arrow>
                  Request Partnership Proposal
                </ButtonLink>
                <ButtonLink href="#annual" variant="outline-light">
                  Annual Programmes
                </ButtonLink>
                <a
                  href={`mailto:${site.email}?subject=Partner%20Briefing%20Inquiry`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" /> Connect with Kamal Goel
                </a>
              </div>

              {/* High-Impact Proof Metrics */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-bold text-white">15:1</p>
                  <p className="text-xs text-brand-200">Curated Leader Ratio</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">0%</p>
                  <p className="text-xs text-brand-200">Commission on Deals</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-xs text-brand-200">C-Suite Presence</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">7+ Hubs</p>
                  <p className="text-xs text-brand-200">Tier-1 Indian Cities</p>
                </div>
              </div>
            </div>

            {/* Partner Architecture Showcase Card */}
            <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-7 shadow-2xl backdrop-blur-md sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">The Partner Standard</p>
                <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs text-brand-200">Guaranteed Framework</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">No Crowded Exhibition Halls</h2>
                    <p className="mt-0.5 text-xs leading-relaxed text-brand-100">
                      Sit across the table from leaders who came specifically for your topic, with pre-read materials reviewed in advance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">Chaired by Member CIOs</h2>
                    <p className="mt-0.5 text-xs leading-relaxed text-brand-100">
                      Your session is moderated by a respected peer CIO, transforming a vendor presentation into a collaborative enterprise discussion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">Customer Advisory Boards</h2>
                    <p className="mt-0.5 text-xs leading-relaxed text-brand-100">
                      Run dedicated quarterly advisory sessions with 8–10 key enterprise leaders to road-test products and gain market validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">Sports & Lifestyle Integration</h2>
                    <p className="mt-0.5 text-xs leading-relaxed text-brand-100">
                      Engage with decision-makers on the pickleball court, golf greens, and premier hospitality dinners at Taj and ITC Hotels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5 text-center">
                <p className="text-xs text-brand-200">
                  Managed directly by Founder Kamal Goel & the CXO Lounge Advisory Council.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-2xl border border-line bg-paper p-6">
              <a.icon className="h-7 w-7 text-brand-600" aria-hidden />
              <h2 className="mt-4 text-lg font-semibold">{a.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="annual">
        <SectionHeading
          eyebrow="Annual partnership programmes"
          title="What a partner company gets for the year"
          lead="A year-round programme of curated access, advisory boards and insight — with league rights included, so you don't pay twice."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {partnerProgrammes.map((p) => (
            <div
              key={p.id}
              className={clsx(
                "relative flex h-full flex-col rounded-2xl p-7",
                p.highlight ? "bg-navy-900 text-brand-100 shadow-lift" : "border border-line bg-white shadow-card",
              )}
            >
              {p.highlight && <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy-950">Recommended for OEMs and SIs</span>}
              <h3 className={clsx("text-xl font-semibold", p.highlight && "!text-white")}>{p.name}</h3>
              <p className={clsx("mt-1 text-sm", p.highlight ? "text-brand-200" : "text-ink-muted")}>{p.forWhom}</p>
              <dl className="mt-6 grid grid-cols-3 gap-2">
                {p.headline.map((h) => (
                  <div key={h.label} className={clsx("rounded-xl p-3", p.highlight ? "bg-white/10" : "bg-paper")}>
                    <dt className="sr-only">{h.label}</dt>
                    <dd className={clsx("text-2xl font-semibold", p.highlight ? "text-white" : "text-navy-900")}>{h.value}</dd>
                    <dd className={clsx("mt-0.5 text-xs leading-snug", p.highlight ? "text-brand-200" : "text-ink-muted")}>{h.label}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 space-y-3 text-sm">
                {p.includes.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check className={clsx("mt-0.5 h-4 w-4 shrink-0", p.highlight ? "text-brand-300" : "text-brand-600")} aria-hidden />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href="#enquire" variant={p.highlight ? "light" : "primary"} className="w-full">Request a proposal</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Compare programmes" title="Every entitlement, side by side" />
        <ComparisonTable caption="Annual partnership programmes compared" columns={partnerMatrixColumns} groups={partnerMatrix} />
        <p className="mt-4 text-xs text-ink-muted">Proposed entitlements for the 2026–27 programme year. The Title sponsorship of the India Tour can be added to any programme.</p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How the year runs</p>
            <h2 className="h2 mt-3">From brief to renewal</h2>
            <ol className="mt-8 space-y-4">
              {partnerJourney.map((j, i) => (
                <li key={j.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold">{j.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed">{j.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-navy-900 p-8 text-brand-100">
            <p className="eyebrow-light">How we protect members</p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">What no partner gets, at any level</h2>
            <ul className="mt-6 space-y-4">
              {partnerNever.map((n) => (
                <li key={n} className="flex gap-3 text-[15px]">
                  <Ban className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" aria-hidden />{n}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-6 text-sm text-brand-200">
              That&apos;s why members show up — and why a room of fifteen CIO Lounge members is worth more than a hall of two hundred.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Professional engagements"
          title="Curated roundtables that turn into proofs of concept"
          lead="It stops being your product and becomes the CIOs' product. That sense of belonging is what converts — and one successful POC builds credibility across the whole community."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {roundtableSteps.map((s, i) => (
            <li key={s.n} className={i === 4 ? "rounded-2xl bg-brand-600 p-6 text-white" : "card p-6"}>
              <span className={i === 4 ? "text-3xl font-semibold text-brand-100" : "text-3xl font-semibold text-brand-600"}>{s.n}</span>
              <h3 className={i === 4 ? "mt-3 text-lg font-semibold !text-white" : "mt-3 text-lg font-semibold"}>{s.title}</h3>
              <p className={i === 4 ? "mt-1.5 text-sm leading-relaxed text-brand-50" : "mt-1.5 text-sm leading-relaxed"}>{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="tiers" tone="tint">
        <SectionHeading
          eyebrow="Event sponsorship · per city"
          title="CIO Pickleball League sponsorship"
          lead="Every category includes branding, networking and engagement. Sponsors play alongside CIOs."
        />
        <SponsorTierGrid />
        <p className="mt-5 text-sm text-ink-muted">Grand Finale sponsorship is offered separately.</p>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow-light">Beyond the court</p>
            <h2 className="h2 mt-3 !text-white">Bespoke partner events</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Extend your roundtable into a breakfast, luncheon or cocktail dinner at ITC and Taj properties, with the
              audience curated by CIO Lounge.
            </p>
          </div>
          <div className="grid gap-4">
            {beyondTheCourt.map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold !text-white">{b.title}</h3>
                <p className="mt-1 text-sm text-brand-200">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2 mt-3">Questions partners ask</h2>
          <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
            {partnerFaq.map((f) => (
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
      </Section>

      <Section id="enquire">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">Enquire</p>
            <h2 className="h2 mt-3">Tell us what you want to achieve</h2>
            <p className="lead mt-4">We&apos;ll come back with availability for your tiers and cities, and the audience profile you can expect.</p>
          </div>
          <PartnerForm />
        </div>
      </Section>
    </>
  );
}
