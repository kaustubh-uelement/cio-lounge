import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Linkedin,
  Mail,
  Mic,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  UserRoundCheck,
  XCircle,
} from "lucide-react";
import { events, sortEvents } from "@/data/events";
import { marketProblem, principles, site } from "@/data/site";
import { advisors } from "@/data/members";
import { sportsProperties } from "@/data/sports";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { EventCard } from "@/components/EventCard";
import { SportVisual } from "@/components/SportVisual";
import { CtaBand } from "@/components/CtaBand";
import { initials } from "@/lib/format";

const atAGlance = [
  { term: "Who it's for", detail: "CIOs, CTOs, CISOs and CDOs of enterprises: the top layer only." },
  { term: "What we do", detail: "Curated roundtables, learning with top institutions, veteran advisory, sport and lifestyle." },
  { term: "Where", detail: "Mumbai first, then Delhi NCR, Bengaluru, Hyderabad, Chennai, Ahmedabad and Pune." },
  { term: "How we work", detail: "Members join by application & invitation. Partners join by programme. Nobody pays a commission." },
];

const pillars = [
  { title: "Innovate", body: "Members shape products and practices with peers before they reach the market." },
  { title: "Influence", body: "A stronger collective voice for technology leaders with vendors, boards and institutions." },
  { title: "Impact", body: "Conversations that turn into proofs of concept, careers and support for families." },
];

const audiences = [
  {
    icon: UserRoundCheck,
    title: "Technology leaders",
    who: "CIOs, CTOs, CISOs, CDOs",
    points: ["A peer network in your city", "Roundtables where you shape products", "Learning, advisory and sport through the year"],
    href: "/membership",
    cta: "Membership",
  },
  {
    icon: Building2,
    title: "Partner companies",
    who: "OEMs, system integrators, ISVs",
    points: ["Curated rooms of the leaders you want to meet", "Advisory boards and market insight", "Brand presence at every sports property"],
    href: "/partners",
    cta: "Partner programmes",
  },
  {
    icon: Landmark,
    title: "Institutions and veterans",
    who: "Universities, retired CIOs",
    points: ["Programmes designed for senior leaders", "Advisory roles for retired CIOs", "A platform to teach and mentor"],
    href: "/advisory",
    cta: "Advisory and learning",
  },
];

const memberSteps = [
  { title: "Apply", body: "A short application, reviewed personally by the CIO Lounge team." },
  { title: "Join your chapter", body: "Meet the members in your city and tell us your priorities for the year." },
  { title: "Engage", body: "Roundtables, masterclasses, member evenings and the sports calendar." },
  { title: "Shape the agenda", body: "Moderate sessions, write for CIO Studio, advise peers and partners." },
];

const partnerSteps = [
  { title: "Brief us", body: "Your goals, target industries and cities for the year." },
  { title: "We curate the room", body: "About fifteen targeted leaders, briefed in advance with your material." },
  { title: "CIOs lead the conversation", body: "A short product capsule, then an open discussion chaired by a member CIO." },
  { title: "Measure outcomes", body: "Opt-in follow-ups, proofs of concept and a review every quarter." },
];

const programmes = [
  { icon: Users, title: "Professional engagements", body: "Curated roundtables and CXO breakfasts, chaired by members.", href: "/partners" },
  { icon: GraduationCap, title: "Learning", body: "Residential programmes designed with top institutions.", href: "/learning" },
  { icon: ShieldCheck, title: "Veteran CIO Advisory", body: "Independent counsel from retired CIOs, never vendor-paid.", href: "/advisory" },
  { icon: Trophy, title: "Sports and lifestyle", body: "Pickleball, golf and cricket, with families welcome.", href: "/sports" },
  { icon: Mic, title: "CIO Studio", body: "Perspectives and conversations from the community.", href: "/studio" },
  { icon: HeartHandshake, title: "CIO Foundation", body: "2% of CIO-vertical revenue supports leaders' families.", href: "/foundation" },
];

export default function HomePage() {
  const upcoming = sortEvents(events.filter((e) => !e.sample)).slice(0, 6);

  return (
    <>
      {/* 1. Hero Section - Clear, Strong Representation of CIO Lounge */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid-pattern absolute inset-0 opacity-25" aria-hidden />
        <div className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-brand-400/15 blur-3xl" aria-hidden />

        <div className="container relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                Invitation-Only · Innovate | Influence | Impact
              </span>
            </div>

            <h1 className="display mt-6 !text-white leading-[1.1]">
              The Private Guild for India&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 via-brand-300 to-white">
                Technology Leaders
              </span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              CIO Lounge is India&apos;s premier executive ecosystem built exclusively for CIOs, CTOs, CISOs, and CDOs. We unite enterprise
              decision-makers through curated closed-door roundtables, executive masterclasses with top institutions, veteran advisory, and
              signature sports properties, creating authentic, peer-driven collaboration without vendor noise or sales pitches.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/membership/apply" variant="light" arrow>
                Request an Invitation
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="outline-light">
                How It Works
              </ButtonLink>
              <ButtonLink href="/partners" variant="ghost" className="!text-brand-200 hover:!text-white">
                Partner With Us
              </ButtonLink>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-brand-200">CXO & C-Suite Exclusivity</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">0%</p>
                <p className="text-xs text-brand-200">Vendor Commissions Ever</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">7+</p>
                <p className="text-xs text-brand-200">National Enterprise Chapters</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Platform Blueprint</p>
              <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-[11px] font-medium text-brand-200">
                CXO Lounge Ecosystem
              </span>
            </div>
            <dl className="mt-5 divide-y divide-white/10">
              {atAGlance.map((a) => (
                <div key={a.term} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-white">{a.term}</dt>
                  <dd className="text-sm leading-relaxed text-brand-100">{a.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 2. Who we are - Untouched as requested */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="h2 mt-3">A multi-platform ecosystem built for CIOs and technology leaders</h2>
          </div>
          <div className="space-y-4 text-[17px] leading-relaxed">
            <p>
              CXO Lounge brings together technology, people, ideas, enterprises and opportunities. Its first community, CIO Lounge, exists to
              create meaningful connections among CIOs, and between CIOs and the partners who serve them.
            </p>
            <p>
              It was founded by a CIO who has sat on both sides of the table. Partners are our customers; CIOs are our peers. The two roles
              never blur, which is why members show up and why partners get rooms that matter.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="bg-paper p-7">
              <p className="text-2xl font-semibold tracking-tight text-brand-600">{p.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Why it exists - Restructured for Better Representation and Clarity */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Industry Challenge & Our Purpose</p>
          <h2 className="h2 mt-3">Why Enterprise Technology Engagement Needed a Reset</h2>
          <p className="lead mt-4">
            Traditional tech events have become a commoditized routine: rushed cocktail pitches, overcrowded exhibition halls, and passive
            audiences. CIO Lounge was engineered by an enterprise CIO to replace transactional noise with real peer dialogue and lasting value.
          </p>
        </div>

        {/* Comparison: The Problem vs The Solution */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-red-200/70 bg-gradient-to-b from-red-50/40 to-white p-7 shadow-card">
            <div className="flex items-center gap-2.5 text-red-700">
              <XCircle className="h-6 w-6" />
              <h3 className="text-lg font-bold">The Commoditized Event Dilemma</h3>
            </div>
            <p className="mt-3 text-sm text-ink-muted">What enterprise leaders and serious partners have grown tired of:</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span><strong>Exhausted Executives:</strong> CIOs attend multiple events a month, sitting through canned sponsor pitches with zero ongoing relevance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span><strong>Diluted Audiences:</strong> 80+ sponsors chasing barely 35 genuine buyers in a crowded hall, with no structured context or follow-through.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span><strong>No Proof-of-Concept:</strong> Fleeting evening drinks that never translate into architectural roadmaps, trials, or business value.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-brand-200 bg-gradient-to-b from-brand-50/50 to-white p-7 shadow-card">
            <div className="flex items-center gap-2.5 text-brand-700">
              <CheckCircle2 className="h-6 w-6 text-brand-600" />
              <h3 className="text-lg font-bold">The CIO Lounge Standard</h3>
            </div>
            <p className="mt-3 text-sm text-ink-muted">The curated, high-integrity framework we operate by:</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                <span><strong>Chaired by Members:</strong> Closed-door roundtables of 15 targeted leaders, moderated by member CIOs addressing live pain points.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                <span><strong>0% Commission Neutrality:</strong> We never take cuts from member deals. Partners sit on an equal footing with technology peers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                <span><strong>Structured POC Conversions:</strong> Sessions conclude with opt-in briefs, trials, and measurable quarterly business outcomes.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Market Reality Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {marketProblem.map((m) => (
            <div key={m.value} className="rounded-2xl border-t-4 border-brand-600 bg-white p-6 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{m.subtext}</span>
              <p className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{m.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Who it's for - Untouched as requested */}
      <Section tone="white">
        <SectionHeading eyebrow="Who it's for" title="One platform, three kinds of members" />
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="card flex flex-col p-7">
              <a.icon className="h-8 w-8 text-brand-600" aria-hidden />
              <h3 className="mt-5 text-xl font-semibold">{a.title}</h3>
              <p className="text-sm text-ink-muted">{a.who}</p>
              <ul className="mt-5 space-y-2.5 text-[15px]">
                {a.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden />{pt}
                  </li>
                ))}
              </ul>
              <ButtonLink href={a.href} variant="ghost" arrow className="mt-auto self-start pt-6">{a.cta}</ButtonLink>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. How it works - Untouched as requested */}
      <Section tone="navy" id="how-it-works">
        <SectionHeading
          tone="light"
          eyebrow="How it works"
          title="Two sides of the table, one set of rules"
          lead="Members join by application and shape the agenda. Partners join by programme and meet leaders in rooms the members chair."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { label: "For technology leaders", steps: memberSteps, href: "/membership", cta: "Explore membership" },
            { label: "For partner companies", steps: partnerSteps, href: "/partners", cta: "Explore partner programmes" },
          ].map((track) => (
            <div key={track.label} className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <p className="eyebrow-light">{track.label}</p>
              <ol className="mt-6 space-y-5">
                {track.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold !text-white">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-100">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href={track.href} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-200">
                {track.cta} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. What we do - Untouched as requested */}
      <Section>
        <SectionHeading eyebrow="What we do" title="Programmes across the year" lead="Professional, personal and family, delivered city by city." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link key={p.title} href={p.href} className="card group flex gap-4 p-6 transition hover:border-brand-300 hover:shadow-lift">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <p.icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="flex items-center gap-1.5 font-semibold text-ink-strong group-hover:text-brand-700">
                  {p.title} <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" aria-hidden />
                </span>
                <span className="mt-1 block text-sm leading-relaxed">{p.body}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. Sports properties - Untouched as requested */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Sports properties"
          title="Leaders come to play"
          lead="Relationships built on a court, a course or a pitch last longer than any keynote."
          action={<ButtonLink href="/sports" variant="secondary" arrow>All sports</ButtonLink>}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {sportsProperties.map((s, i) => (
            <Link key={s.key} href={s.href} className="card group flex flex-col overflow-hidden transition hover:shadow-lift">
              <div className={i === 1 ? "flex justify-center bg-brand-600 py-6" : "flex justify-center bg-navy-900 py-6"}>
                <SportVisual sport={s.key} className="h-40 w-40 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{s.tagline}</p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-brand-700">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed">{s.summary}</p>
                <p className="mt-auto pt-5 text-xs font-medium text-ink-strong">{s.status}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 8. Principles & Leadership (Elaborated Kamal Goel + Shikha CXO) */}
      <Section id="principles">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.3fr]">
          <div>
            <p className="eyebrow">Our Principles</p>
            <h2 className="h2 mt-3">How CXO Lounge Is Different</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Founded on the belief that technology leadership requires a trusted sanctuary of peers: free of commissions, sales pressures, and fleeting gimmicks.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="rounded-2xl border-l-4 border-brand-600 bg-white p-5 shadow-card">
                  <h3 className="font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Duo: Kamal Goel & Shikha */}
          <div className="space-y-6">
            {/* Kamal Goel */}
            <div className="rounded-3xl bg-navy-950 p-7 text-brand-100 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="eyebrow-light !text-brand-300">Founder & Managing Director</p>
                <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs text-brand-200">Leadership</span>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold text-white shadow-lg" aria-hidden>
                  {initials(site.founder.name)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{site.founder.name}</h3>
                  <p className="text-sm font-medium text-brand-300">{site.founder.title}</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-brand-100">
                {site.founder.bio}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {site.founder.experience.map((x) => (
                  <span key={x} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white">
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* Shikha - CXO */}
            <div className="rounded-3xl bg-gradient-to-br from-brand-900 to-navy-900 p-7 text-brand-100 shadow-xl border border-brand-400/20">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="eyebrow-light !text-brand-300">Executive Leadership</p>
                <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs text-gold">CXO</span>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-xl font-bold text-white shadow-lg" aria-hidden>
                  {initials(site.cxo.name)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{site.cxo.name}</h3>
                  <p className="text-sm font-medium text-brand-300">{site.cxo.title}</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-brand-100">
                {site.cxo.bio}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {site.cxo.experience.map((x) => (
                  <span key={x} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Advisory Board Section - Immediately Following Our Principles & Leadership */}
      <Section tone="white" id="advisory-board">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow">Advisory Board & Council</p>
            <h2 className="h2 mt-3">Guided by Enterprise Technology Veterans</h2>
            <p className="lead mt-3 max-w-2xl">
              Distinguished former Group CIOs, CISOs, and enterprise digital leaders providing independent governance, mentorship, and strategic insight to sitting members.
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
            <div key={a.id} className="card flex flex-col p-6 transition duration-300 hover:shadow-lift">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-lg font-bold text-white shadow-md">
                  {initials(a.name)}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg leading-snug">{a.name}</h3>
                  <p className="text-xs font-medium text-brand-600">{a.title}</p>
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold text-ink-muted uppercase tracking-wider">{a.formerly}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink flex-1">{a.bio}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.focus.map((f) => (
                  <span key={f} className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-5 border-t border-line pt-3 flex items-center justify-between text-xs text-ink-muted">
                <span className="italic">{a.linkedinStatus}</span>
                <a
                  href={`mailto:kamal@ciolounge.in?subject=Inquiry%20regarding%20Advisor%20${encodeURIComponent(a.name)}`}
                  className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-800"
                >
                  <Mail className="h-3 w-3" /> Connect
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Advisory Profiles & LinkedIn Coordination via Kamal Goel Sir */}
        <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/70 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-brand-900">
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 shrink-0 text-brand-700 mt-0.5" />
            <div>
              <p className="font-semibold text-navy-900">Looking for detailed dossiers or LinkedIn verifications for Advisory Council members?</p>
              <p className="mt-0.5 text-xs text-brand-700">Detailed bios, career achievements, and direct executive connectivity are coordinated via Kamal Goel Sir.</p>
            </div>
          </div>
          <a
            href="mailto:kamal@ciolounge.in?subject=Request%20for%20Advisory%20Council%20Dossiers%20and%20LinkedIn%20Details"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-800"
          >
            <Mail className="h-3.5 w-3.5" /> Contact Kamal Goel
          </a>
        </div>
      </Section>

      {/* 9. Upcoming events */}
      <Section tone="paper" id="upcoming">
        <SectionHeading
          eyebrow="Upcoming events"
          title="What's next on the calendar"
          lead="Pickleball, golf, cricket and the executive roundtables in between."
          action={<ButtonLink href="/events" variant="secondary" arrow>All events</ButtonLink>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
      </Section>

      <CtaBand
        eyebrow="Join the community"
        title="Built by a CIO, for CIOs."
        body="Membership is by curated invitation and peer review. Partners join through structured annual programmes."
        primary={{ href: "/membership/apply", label: "Request an Invitation" }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  );
}
