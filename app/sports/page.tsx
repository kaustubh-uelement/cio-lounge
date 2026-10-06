import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sportsProperties } from "@/data/sports";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { SportVisual } from "@/components/SportVisual";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sports",
  description: "CIO Lounge sports properties: the CIO Pickleball League India Tour, the CIO Golf Tour and the CIO Premier League.",
};

export default function SportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports and lifestyle"
        title="Leaders come to play, not for the cocktail dinner"
        lead="Three sports properties, one idea: relationships built on a court, a course or a pitch last longer than any keynote."
      />
      <Section>
        <div className="grid gap-8">
          {sportsProperties.map((s, i) => (
            <Link
              key={s.key}
              href={s.href}
              className="card group grid overflow-hidden transition hover:shadow-lift md:grid-cols-[1fr_1.5fr]"
            >
              <div className={i % 2 ? "flex items-center justify-center bg-brand-600 p-8 md:order-2" : "flex items-center justify-center bg-navy-900 p-8"}>
                <SportVisual sport={s.key} className="h-56 w-56" />
              </div>
              <div className="flex flex-col p-7 sm:p-10">
                <p className="eyebrow">{s.tagline}</p>
                <h2 className="h2 mt-2 group-hover:text-brand-700">{s.name}</h2>
                <p className="lead mt-3">{s.summary}</p>
                <dl className="mt-6 grid max-w-md grid-cols-3 gap-4">
                  {s.facts.map((f) => (
                    <div key={f.label}>
                      <dt className="sr-only">{f.label}</dt>
                      <dd className="text-2xl font-semibold text-navy-900">{f.value}</dd>
                      <dd className="text-sm text-ink-muted">{f.label}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-sm font-medium text-ink-strong">{s.status}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand
        eyebrow="For partners"
        title="Put your brand where leaders play."
        body="Title, team and hospitality partnerships are available across all three properties."
        primary={{ href: "/partners#enquire", label: "Enquire" }}
        secondary={{ href: "/events", label: "See all events" }}
      />
    </>
  );
}
