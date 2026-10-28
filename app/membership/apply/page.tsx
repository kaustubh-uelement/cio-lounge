import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckCircle2, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/ui";
import { MembershipForm } from "@/components/forms/MembershipForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Request an Invitation",
  description: "Request an executive invitation to join CIO Lounge — for enterprise CIOs, CTOs, CISOs, CDOs and veteran technology leaders.",
};

export default function ApplyPage() {
  return (
    <Section className="!pt-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:pt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
            <Sparkles className="h-3.5 w-3.5" />
            Invitation-Only Executive Admissions
          </div>

          <h1 className="display mt-4">Request an Invitation to CIO Lounge</h1>

          <p className="lead mt-5">
            Every invitation request is reviewed personally by Founder Kamal Goel and the Advisory Admissions Committee to preserve peer stature and zero-vendor integrity.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3 rounded-2xl border border-line bg-white p-5 text-sm shadow-card">
              <ShieldCheck className="h-5 w-5 shrink-0 text-brand-600 mt-0.5" aria-hidden />
              <div>
                <p className="font-semibold text-navy-900">Direct Route to Founder Kamal Goel</p>
                <p className="mt-1 text-ink-muted">
                  Your details are transmitted directly to <strong>{site.email}</strong> and are held in strict executive confidence. We never share your data with sponsors.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-line bg-paper p-5 text-sm">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600 mt-0.5" aria-hidden />
              <div>
                <p className="font-semibold text-navy-900">What Happens Next?</p>
                <p className="mt-1 text-ink-muted">
                  Following your submission, Kamal Goel will connect directly to confirm your city chapter, profile alignment, and upcoming roundtable priorities.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-6 text-xs text-ink-muted">
            <p>
              Prefer direct executive correspondence? You can also email Kamal Goel directly at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:underline">
                {site.email}
              </a>.
            </p>
          </div>
        </div>

        <div>
          <Suspense fallback={<div className="card h-[520px] animate-pulse" />}>
            <MembershipForm />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}
