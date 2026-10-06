import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Mic,
  ShieldCheck,
  Trophy,
  Users,
  UserRoundCheck,
} from "lucide-react";
import { events, sortEvents } from "@/data/events";
import { marketProblem, principles, site } from "@/data/site";
import { sportsProperties } from "@/data/sports";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { EventCard } from "@/components/EventCard";
import { SportVisual } from "@/components/SportVisual";
import { CtaBand } from "@/components/CtaBand";
import { initials } from "@/lib/format";

const atAGlance = [
  { term: "Who it's for", detail: "CIOs, CTOs, CISOs and CDOs of enterprises — the top layer only." },
  { term: "What we do", detail: "Curated roundtables, learning with top institutions, veteran advisory, sport and lifestyle." },
  { term: "Where", detail: "Mumbai first, then Delhi NCR, Bengaluru, Hyderabad, Chennai, Ahmedabad and Pune." },
  { term: "How we work", detail: "Members join by application. Partners join by programme. Nobody pays a commission." },
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
  { icon: Trophy, title: "Sports and lifestyle", body: "Pickleball, golf and cricket — with families welcome.", href: "/sports" },
  { icon: Mic, title: "CIO Studio", body: "Perspectives and conversations from the community.", href: "/studio" },
  { icon: HeartHandshake, title: "CIO Foundation", body: "2% of CIO-vertical revenue supports leaders' families.", href: "/foundation" },
];

export default function HomePage() {
  const upcoming = sortEvents(events.filter((e) => !e.sample)).slice(0, 6);

  return (
    <>
      {/* 1. Corporate introduction */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="grid-pattern absolute inset-0" aria-hidden />
        <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
        <div className="container relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow-light">{site.company} · CIO Lounge</p>
            <h1 className="display mt-5 !text-white">
              The private platform for India&apos;s <span className="text-brand-300">technology leaders</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              CIO Lounge brings CIOs, CTOs and CISOs together — with each other, and with the partners who serve them — through curated
              roundtables, learning with top institutions, veteran advisory, and sport.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#how-it-works" variant="light" arrow>How it works</ButtonLink>
              <ButtonLink href="/membership" variant="outline-light">Become a member</ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">At a glance</p>
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

      {/* 2. Who we are */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="h2 mt-3">A multi-platform ecosystem built for CIOs and technology leaders</h2>
          </div>
          <div className="space-y-4 text-[17px] leading-relaxed">
            <p>
              CXO Lounge brings together technology, people, ideas, enterprises and opportunities. Its first community, CIO Lounge, exists to
              create meaningful connections among CIOs — and between CIOs and the partners who serve them.
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

      {/* 3. Why it exists */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="eyebrow">Why CIO Lounge</p>
            <h2 className="h2 mt-3">CIO engagement has become a commodity.</h2>
            <p className="lead mt-4">
              Cocktails, dinner — and the engagement ends. Partners see little lasting impact, and CIOs&apos; time is spent on events that
              don&apos;t move their agenda. CIO Lounge was built to change that.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {marketProblem.map((m) => (
              <div key={m.value} className="rounded-2xl border-t-4 border-brand-600 bg-white p-6 shadow-card">
                <p className="text-3xl font-semibold tracking-tight text-brand-600 sm:text-4xl">{m.value}</p>
                <p className="mt-3 text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Who it's for */}
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

      {/* 5. How it works */}
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

      {/* 6. What we do */}
      <Section>
        <SectionHeading eyebrow="What we do" title="Programmes across the year" lead="Professional, personal and family — delivered city by city." />
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

      {/* 7. Sports properties */}
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

      {/* 8. Principles and leadership */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Our principles</p>
            <h2 className="h2 mt-3">How CXO Lounge is different</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="rounded-2xl border-l-4 border-brand-600 bg-white p-5 shadow-card">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="self-start rounded-3xl bg-navy-900 p-8 text-brand-100">
            <p className="eyebrow-light">Leadership</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xl font-semibold text-white" aria-hidden>
                {initials(site.founder.name)}
              </div>
              <div>
                <p className="text-xl font-semibold text-white">{site.founder.name}</p>
                <p className="text-sm text-brand-300">{site.founder.title}</p>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed">
              A CIO who has led technology and worked closely with vendors and partners — so he knows what CIOs value, and what partners need
              from an audience.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {site.founder.experience.map((x) => <span key={x} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">{x}</span>)}
            </div>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-200">
              About CXO Lounge <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      {/* 9. Upcoming events — at the bottom, by request */}
      <Section tone="white" id="upcoming">
        <SectionHeading
          eyebrow="Upcoming events"
          title="What's next on the calendar"
          lead="Pickleball, golf, cricket and the rooms in between."
          action={<ButtonLink href="/events" variant="secondary" arrow>All events</ButtonLink>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
      </Section>

      <CtaBand
        eyebrow="Join the community"
        title="Built by a CIO, for CIOs."
        body="Membership is by application and reserved for enterprise technology leaders. Partners join through annual programmes."
        primary={{ href: "/membership/apply", label: "Apply to join" }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  );
}
