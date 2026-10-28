import type { Metadata } from "next";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import { advisors, industries, memberCities, members, roles } from "@/data/members";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading, ButtonLink } from "@/components/ui";
import { MembersDirectory } from "@/components/MembersDirectory";
import { initials } from "@/lib/format";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Members (Restricted)",
  description: "The CIO Lounge member directory: restricted access for verified enterprise CIOs, CTOs, CISOs and CDOs.",
};

export default function MembersPage() {
  const byRole = roles.map((r) => ({ role: r, n: members.filter((m) => m.role === r).length }));

  return (
    <>
      <PageHero
        eyebrow="Restricted Access · Active Members Only"
        title="The People in the Room"
        lead="CIO Lounge is reserved strictly for the top layer of enterprise technology: CIOs, CTOs, CISOs, and CDOs. To maintain member confidentiality, direct directory access is locked and accessible via invitation or member authentication."
        aside={
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-brand-300 text-xs font-semibold uppercase tracking-wider">
              <Lock className="h-4 w-4" /> Confidential Registry
            </div>
            <p className="mt-2 text-2xl font-bold text-white">400+ Enterprise Leaders</p>
            <p className="mt-1 text-xs text-brand-200">Across 7 Indian metropolitan chapters</p>
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
              {byRole.map((r) => (
                <div key={r.role}>
                  <span className="text-xs text-brand-300">{r.role}s</span>
                  <p className="text-lg font-semibold text-white">{r.n}+ Verified</p>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <ButtonLink href="/membership/apply" variant="light" arrow>
          Request an Invitation
        </ButtonLink>
        <a
          href={`mailto:${site.email}?subject=Member%20Directory%20Access%20Request`}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Mail className="h-4 w-4" /> Email Kamal Goel
        </a>
      </PageHero>

      <Section>
        <MembersDirectory members={members} industries={industries} cities={memberCities} roles={roles} />
      </Section>

      <Section tone="white" id="advisory">
        <SectionHeading
          eyebrow="Veteran CIO Advisory"
          title="Advisory Council"
          lead="Distinguished former Group CIOs and CISOs who advise enterprises and mentor sitting members, never commissioned by vendors."
          action={<ButtonLink href="/advisory" variant="secondary" arrow>About the Advisory</ButtonLink>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {advisors.map((a) => (
            <div key={a.id} className="card flex flex-col p-6 transition hover:shadow-lift">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-lg font-bold text-white shadow-md" aria-hidden>
                  {initials(a.name)}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{a.name}</h3>
                  <p className="text-xs text-brand-600 font-medium">{a.title}</p>
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
              <div className="mt-5 border-t border-line pt-3 text-xs text-ink-muted flex items-center justify-between">
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
        <p className="mt-6 text-xs text-ink-muted text-center">
          Advisory Board credentials and direct LinkedIn connectivity are coordinated through Founder Kamal Goel at {site.email}.
        </p>
      </Section>

      <CtaBand
        eyebrow="Membership is by curated invitation"
        title="Take your seat at the table."
        body="Access is reserved for verified enterprise technology leaders. Every application is reviewed by Founder Kamal Goel and the Advisory Admissions Committee."
        primary={{ href: "/membership/apply", label: "Request an Invitation" }}
        secondary={{ href: "/membership", label: "Explore Membership Privileges" }}
      />
    </>
  );
}
