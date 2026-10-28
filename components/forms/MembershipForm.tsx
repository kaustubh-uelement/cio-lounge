"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { membershipSchema, fieldErrors } from "@/lib/validation";
import { plans } from "@/data/membership";
import { Button } from "../ui";
import { Field, ToggleChips, submitJson } from "./shared";
import { site } from "@/data/site";

const roles = ["CIO", "CTO", "CISO", "CDO", "Head of IT", "Former CIO / retired"] as const;
const industries = [
  "Banking & Financial Services",
  "Insurance",
  "Capital Markets",
  "Manufacturing",
  "Healthcare & Pharma",
  "Retail & Consumer",
  "Telecom & Media",
  "Logistics",
  "Government & PSU",
  "Other Enterprise",
];

const turnoverRanges = [
  "Annual Turnover: 500 Cr – 2,000 Cr",
  "Annual Turnover: 2,000 Cr – 10,000 Cr",
  "Enterprise Conglomerate (> 10,000 Cr)",
  "High-Growth Unicorn / Mid-Market Enterprise",
];

const interestOptions = [
  "Curated Roundtables",
  "CIO Pickleball League",
  "CIO Golf Tour",
  "CIO Premier League",
  "Institutional Learning",
  "Veteran CIO Advisory",
  "Peer Forum (Chatham House)",
  "CIO Studio Perspectives",
  "Family & Wellness Events",
];

const steps = ["Cohort", "Executive Profile", "Priorities & Review"] as const;
const stepFields: string[][] = [
  ["plan"],
  ["fullName", "email", "phone", "role", "company", "industry", "city", "linkedin"],
  ["consent"],
];

type FormState = {
  plan: "member" | "founding" | "veteran";
  fullName: string;
  email: string;
  phone: string;
  role: "CIO" | "CTO" | "CISO" | "CDO" | "Head of IT" | "Former CIO / retired";
  company: string;
  industry: string;
  city: string;
  turnover: string;
  linkedin: string;
  interests: string[];
  referredBy: string;
  executiveNotes: string;
  consent: boolean;
};

export function MembershipForm() {
  const params = useSearchParams();
  const rawPlan = params.get("plan");
  const initialPlan = (rawPlan === "founding" || rawPlan === "veteran") ? rawPlan : "member";

  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({
    plan: initialPlan,
    fullName: "",
    email: "",
    phone: "",
    role: "CIO",
    company: "",
    industry: "Banking & Financial Services",
    city: "Mumbai",
    turnover: turnoverRanges[0],
    linkedin: "",
    interests: ["Curated Roundtables", "CIO Pickleball League"],
    referredBy: "",
    executiveNotes: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setData((d) => ({ ...d, [k]: v }));

  const validate = (upTo: number) => {
    const r = membershipSchema.safeParse(data);
    if (r.success) return {};
    const all = fieldErrors(r.error);
    const relevant = stepFields.slice(0, upTo + 1).flat();
    return Object.fromEntries(Object.entries(all).filter(([k]) => relevant.includes(k)));
  };

  const next = () => {
    const e = validate(step);
    setErrors(e);
    if (!Object.keys(e).length) setStep((s) => s + 1);
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (step < steps.length - 1) return next();
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("sending");
    const res = await submitJson("/api/membership", data);
    if (res.ok) {
      setStatus("done");
    } else {
      setStatus("error");
      setErrors(res.errors ?? {});
      setMessage(res.message ?? "Please check the highlighted fields.");
    }
  };

  if (status === "done") {
    return (
      <div className="card flex flex-col items-center p-8 sm:p-12 text-center bg-gradient-to-b from-white to-brand-50/30">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h2 className="display mt-6 text-2xl sm:text-3xl font-bold text-navy-950">
          Invitation Request Received
        </h2>

        <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
          Transmitted Directly to Founder Kamal Goel
        </p>

        <div className="mt-6 max-w-lg rounded-2xl border border-brand-200 bg-white p-5 text-left text-sm text-ink shadow-sm space-y-3">
          <p>
            Thank you, <strong>{data.fullName}</strong>. Your invitation request for the{" "}
            <strong>{plans.find((p) => p.id === data.plan)?.name ?? "Executive"}</strong> cohort has been safely submitted.
          </p>
          <div className="border-t border-line pt-3 text-xs text-ink-muted">
            <p className="font-semibold text-navy-900">Review & Admissions Process:</p>
            <p className="mt-1">
              Founder Kamal Goel ({site.email}) personally reviews each candidate profile to ensure chapter fit and peer symmetry. You will receive an executive response within 2–3 working days.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${site.email}?subject=Follow-up%20on%20Invitation%20Request%20-%20${encodeURIComponent(data.fullName)}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-navy-800"
          >
            <Mail className="h-4 w-4" /> Message Kamal Goel Directly
          </a>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-paper"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="card p-6 sm:p-9 shadow-lift">
      {/* Step Tracker */}
      <div className="mb-8 border-b border-line pb-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
          <span>Request an Invitation</span>
          <span className="text-brand-600">Step {step + 1} of {steps.length}</span>
        </div>
        <ol className="grid grid-cols-3 gap-2" aria-label="Progress">
          {steps.map((s, i) => (
            <li key={s} className="flex flex-col gap-1.5" aria-current={i === step ? "step" : undefined}>
              <div
                className={clsx(
                  "h-1.5 rounded-full transition-all duration-300",
                  i <= step ? "bg-brand-600" : "bg-line",
                )}
              />
              <span className={clsx("text-xs font-medium", i === step ? "text-navy-950 font-semibold" : "text-ink-muted")}>
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Step 1: Cohort Selection & Areas of Interest */}
      {step === 0 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Select Your Membership Cohort</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Choose the level of engagement that aligns with your leadership focus for 2026–27.
            </p>
          </div>

          <div className="grid gap-3">
            {plans.map((p) => (
              <label
                key={p.id}
                className={clsx(
                  "flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition",
                  data.plan === p.id
                    ? "border-brand-600 bg-brand-50/60 shadow-sm"
                    : "border-line bg-white hover:border-brand-300",
                )}
              >
                <input
                  type="radio"
                  name="plan"
                  value={p.id}
                  checked={data.plan === p.id}
                  onChange={() => set("plan", p.id as FormState["plan"])}
                  className="mt-1 h-4 w-4 accent-brand-600 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-navy-900 text-base">{p.name}</span>
                    <span className="text-xs font-semibold text-brand-700 bg-brand-100/60 rounded-full px-2.5 py-0.5">
                      {p.access}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">{p.audience}</p>
                </div>
              </label>
            ))}
          </div>

          <div className="border-t border-line pt-6">
            <label className="block text-sm font-semibold text-navy-900 mb-2">
              Primary Engagement Interests
            </label>
            <p className="text-xs text-ink-muted mb-3">Select the initiatives you are interested in exploring:</p>
            <ToggleChips
              name="interests"
              options={interestOptions}
              value={data.interests}
              onChange={(v) => set("interests", v)}
            />
          </div>
        </div>
      )}

      {/* Step 2: Executive Credentials */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Executive Credentials</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Please provide your professional enterprise contact details for verification.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="fullName" error={errors.fullName}>
              <input
                id="fullName"
                name="fullName"
                value={data.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                placeholder="e.g. Vikram Malhotra"
                className={clsx("field", errors.fullName && "border-red-400")}
              />
            </Field>

            <Field label="Official Work Email" name="email" error={errors.email} hint="Used for enterprise verification">
              <input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="vikram@enterprise.com"
                className={clsx("field", errors.email && "border-red-400")}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Mobile / WhatsApp Number" name="phone" error={errors.phone}>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={data.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="+91 98200 XXXXX"
                className={clsx("field", errors.phone && "border-red-400")}
              />
            </Field>

            <Field label="Executive Role" name="role" error={errors.role}>
              <select
                id="role"
                name="role"
                value={data.role}
                onChange={(e) => set("role", e.target.value as FormState["role"])}
                className="field"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Enterprise / Organisation" name="company" error={errors.company}>
              <input
                id="company"
                name="company"
                value={data.company}
                onChange={(e) => set("company", e.target.value)}
                placeholder="e.g. HDFC Bank, Tata Motors"
                className={clsx("field", errors.company && "border-red-400")}
              />
            </Field>

            <Field label="Industry Sector" name="industry" error={errors.industry}>
              <select
                id="industry"
                name="industry"
                value={data.industry}
                onChange={(e) => set("industry", e.target.value)}
                className="field"
              >
                {industries.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Primary City / Chapter" name="city" error={errors.city}>
              <input
                id="city"
                name="city"
                value={data.city}
                onChange={(e) => set("city", e.target.value)}
                placeholder="Mumbai, Delhi NCR, Bengaluru..."
                className={clsx("field", errors.city && "border-red-400")}
              />
            </Field>

            <Field label="Enterprise Scale / Turnover" name="turnover">
              <select
                id="turnover"
                name="turnover"
                value={data.turnover}
                onChange={(e) => set("turnover", e.target.value)}
                className="field"
              >
                {turnoverRanges.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            label="LinkedIn Profile URL"
            name="linkedin"
            hint="Assists Kamal Goel and admissions in fast-tracking verification"
            error={errors.linkedin}
          >
            <input
              id="linkedin"
              name="linkedin"
              value={data.linkedin}
              onChange={(e) => set("linkedin", e.target.value)}
              placeholder="https://www.linkedin.com/in/username"
              className={clsx("field", errors.linkedin && "border-red-400")}
            />
          </Field>
        </div>
      )}

      {/* Step 3: Priorities & Review */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Context & Priorities</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Help us understand your key technology roadmaps and priorities for the upcoming year.
            </p>
          </div>

          <Field label="Referred or Nominated By (Optional)" name="referredBy" hint="Name of an existing member, board advisor, or Kamal Goel">
            <input
              id="referredBy"
              name="referredBy"
              value={data.referredBy}
              onChange={(e) => set("referredBy", e.target.value)}
              placeholder="e.g. Kamal Goel / Member Name"
              className="field"
            />
          </Field>

          <Field label="Key Strategic Priorities / Notes (Optional)" name="executiveNotes" hint="Key initiatives, e.g. GenAI governance, cloud migration, zero-trust...">
            <textarea
              id="executiveNotes"
              name="executiveNotes"
              rows={3}
              value={data.executiveNotes}
              onChange={(e) => set("executiveNotes", e.target.value)}
              placeholder="What are the biggest challenges or topics you would like to discuss with peers?"
              className="field"
            />
          </Field>

          <div className="rounded-2xl border border-brand-200 bg-brand-50/70 p-4 text-xs text-brand-950 space-y-1">
            <div className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="h-4 w-4 text-brand-700" />
              <span>Direct Routing to Kamal Goel</span>
            </div>
            <p className="text-brand-800 leading-relaxed">
              This submission will be forwarded directly to Kamal Goel at <strong>{site.email}</strong>. Data is kept in executive confidence and never shared with vendors or third parties.
            </p>
          </div>

          <Field label="" name="consent" error={errors.consent}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-1 h-4 w-4 rounded accent-brand-600"
              />
              <span className="text-xs text-ink leading-relaxed">
                I confirm that I lead technology or information security for an enterprise organisation and wish to request an executive invitation to CIO Lounge.
              </span>
            </label>
          </Field>
        </div>
      )}

      {/* Global Error Banner */}
      {status === "error" && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {message}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-navy-950"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
        ) : (
          <div />
        )}

        {step < steps.length - 1 ? (
          <Button type="button" onClick={next} variant="primary">
            Continue <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" variant="primary" disabled={status === "sending"}>
            {status === "sending" ? "Transmitting..." : "Submit Invitation Request"}
          </Button>
        )}
      </div>
    </form>
  );
}
