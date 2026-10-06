import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { CxoEvent, Sport } from "@/data/events";
import { Badge, ButtonLink, Section, SectionHeading } from "./ui";
import { SportVisual } from "./SportVisual";
import { CtaBand } from "./CtaBand";

export interface PropertyPageProps {
  sport: Sport;
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  about: { heading: string; points: string[] };
  why: { heading: string; body: string; points: string[] };
  format: { heading: string; lead: string; steps: { title: string; body: string }[] };
  experience: { heading: string; items: string[] };
  partnerships: { title: string; body: string }[];
  events: CxoEvent[];
  registerHref: string;
  cta: { eyebrow: string; title: string; body: string };
}

export function PropertyPage(p: PropertyPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div className="grid-pattern absolute inset-0" aria-hidden />
        <div className="container relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow-light">{p.eyebrow}</p>
            <h1 className="display mt-4 !text-white">
              {p.title} <span className="block text-brand-300">{p.accent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">{p.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={p.registerHref} variant="light" arrow>Register interest</ButtonLink>
              <ButtonLink href="#partner" variant="outline-light">Partner with the {p.title.replace("CIO ", "")}</ButtonLink>
            </div>
          </div>
          <SportVisual sport={p.sport} className="mx-auto w-full max-w-sm" />
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="h2 mt-3">{p.about.heading}</h2>
            <ul className="mt-6 space-y-4 text-[17px] leading-relaxed">
              {p.about.points.map((pt) => (
                <li key={pt} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />{pt}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-paper p-8">
            <p className="eyebrow">Why this sport</p>
            <h3 className="mt-3 text-2xl font-semibold">{p.why.heading}</h3>
            <p className="mt-3 leading-relaxed">{p.why.body}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.why.points.map((w) => (
                <li key={w} className="flex items-center gap-2.5 text-sm font-medium text-ink-strong">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-600" aria-hidden />{w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading tone="light" eyebrow="Format" title={p.format.heading} lead={p.format.lead} />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {p.format.steps.map((s, i) => (
            <li key={s.title} className={i === p.format.steps.length - 1 ? "rounded-2xl bg-brand-600 p-6" : "rounded-2xl border border-white/10 bg-white/5 p-6"}>
              <span className="text-sm font-semibold text-brand-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold !text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Calendar" title="Season schedule" lead="Dates are announced to members first." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {p.events.map((e) => (
            <Link key={e.slug} href={`/events/${e.slug}`} className="card group flex flex-col p-5 transition hover:border-brand-300">
              <span className="text-xs font-semibold tracking-widest text-brand-600">{e.city.toUpperCase()}</span>
              <span className="mt-2 text-lg font-semibold text-ink-strong">{e.title}</span>
              <span className="mt-1 text-sm text-ink-muted">{e.dateLabel}</span>
              {e.status === "announced" && <Badge tone="brand" className="mt-3 self-start">Announced</Badge>}
              <ArrowRight className="mt-4 h-4 w-4 text-brand-600 opacity-70 transition group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="max-w-3xl">
          <p className="eyebrow">The experience</p>
          <h2 className="h2 mt-3">{p.experience.heading}</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.experience.items.map((g) => <span key={g} className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-strong">{g}</span>)}
          </div>
        </div>
      </Section>

      <Section id="partner" tone="tint">
        <SectionHeading
          eyebrow="Partnership opportunities"
          title={`Partner with the ${p.title}`}
          lead="Every partnership includes branding, hospitality and time with the leaders who play. Annual partners receive rights as part of their programme."
          action={<ButtonLink href="/partners#enquire" arrow>Enquire</ButtonLink>}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {p.partnerships.map((t, i) => (
            <div key={t.title} className={i === 0 ? "rounded-2xl bg-brand-600 p-6 text-white shadow-lift" : "card p-6"}>
              <h3 className={i === 0 ? "text-lg font-semibold !text-white" : "text-lg font-semibold"}>{t.title}</h3>
              <p className={i === 0 ? "mt-2 text-sm leading-relaxed text-brand-50" : "mt-2 text-sm leading-relaxed"}>{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow={p.cta.eyebrow}
        title={p.cta.title}
        body={p.cta.body}
        primary={{ href: p.registerHref, label: "Register interest" }}
        secondary={{ href: "/sports", label: "All sports properties" }}
      />
    </>
  );
}
