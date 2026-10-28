"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { KeyRound, Lock, Mail, MapPin, Search, ShieldCheck, Trophy, Unlock } from "lucide-react";
import { clsx } from "clsx";
import type { Member, Role } from "@/data/members";
import { initials } from "@/lib/format";
import { site } from "@/data/site";

const avatarTones = ["bg-brand-600", "bg-navy-800", "bg-brand-700", "bg-navy-700", "bg-brand-500"];

export function MemberCard({ m, index = 0, blurred = false }: { m: Member; index?: number; blurred?: boolean }) {
  return (
    <article className={clsx("card flex h-full flex-col p-5 transition", blurred && "select-none blur-[6px] opacity-40 pointer-events-none")}>
      <div className="flex items-start gap-4">
        <div
          className={clsx(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white ring-4 ring-brand-50",
            avatarTones[index % avatarTones.length],
          )}
          aria-hidden
        >
          {initials(m.name)}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-ink-strong">{m.name}</h3>
          <p className="text-sm text-ink">{m.title}</p>
          <p className="text-sm font-medium text-brand-700">{m.company}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {m.interests.map((i) => (
          <span key={i} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700">{i}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" aria-hidden />{m.city} · {m.industry.split(" ")[0]}</span>
        <span className="flex items-center gap-2">
          {m.league && (
            <span title="League player" className="flex items-center gap-1 rounded-full bg-lime-100 px-2 py-0.5 text-lime-900">
              <Trophy className="h-3 w-3" aria-hidden />League
            </span>
          )}
          {m.tier === "Founding Circle" && <span className="rounded-full bg-navy-900 px-2 py-0.5 text-white">Founding</span>}
        </span>
      </div>
    </article>
  );
}

export function MembersDirectory({
  members,
  industries,
  cities,
  roles,
}: {
  members: Member[];
  industries: string[];
  cities: string[];
  roles: Role[];
}) {
  const [isLocked, setIsLocked] = useState(true);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState("");
  const [q, setQ] = useState("");
  const [role, setRole] = useState<Role | "all">("all");
  const [industry, setIndustry] = useState("all");
  const [city, setCity] = useState("all");
  const [league, setLeague] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = passcode.trim().toUpperCase();
    if (normalized === "CIOLOUNGE" || normalized === "CIO2026" || normalized === "KAMAL" || normalized === "MEMBER") {
      setIsLocked(false);
      setPasscodeError("");
    } else {
      setPasscodeError("Invalid access key. Please check with Kamal Goel or request an invitation.");
    }
  };

  const filtered = useMemo(
    () =>
      members.filter((m) => {
        const text = `${m.name} ${m.company} ${m.title} ${m.interests.join(" ")}`.toLowerCase();
        return (
          (role === "all" || m.role === role) &&
          (industry === "all" || m.industry === industry) &&
          (city === "all" || m.city === city) &&
          (!league || m.league) &&
          (!q || text.includes(q.toLowerCase()))
        );
      }),
    [members, q, role, industry, city, league],
  );

  return (
    <div>
      {/* Restricted Access Gate */}
      {isLocked ? (
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-navy-900/10 bg-gradient-to-b from-navy-950 to-navy-900 p-8 text-white shadow-2xl sm:p-12">
          <div className="grid-pattern absolute inset-0 opacity-20" aria-hidden />
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-300 ring-4 ring-white/10">
              <Lock className="h-8 w-8" />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Restricted Directory · Active Members Only
            </div>

            <h2 className="display mt-4 !text-white text-2xl sm:text-3xl font-bold">
              Member Directory Access Is Locked
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-brand-100 sm:text-base">
              To protect member confidentiality and ensure an exclusive C-Suite environment, the full CIO Lounge directory and member contact privileges are reserved strictly for active, verified members and inducted advisory leaders.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/membership/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-600"
              >
                Request an Invitation to Join
              </Link>
              <a
                href={`mailto:${site.email}?subject=Request%20for%20Member%20Directory%20Access`}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Kamal Goel
              </a>
            </div>

            {/* Member Passcode Access Form */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                Already an Inducted Member or Advisory Leader?
              </p>
              <form onSubmit={handleUnlock} className="mt-4 mx-auto flex max-w-md flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-300" />
                  <input
                    type="password"
                    placeholder="Enter member access key"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setPasscodeError("");
                    }}
                    className="w-full rounded-full border border-white/20 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder-brand-200/60 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-brand-50 shrink-0"
                >
                  <Unlock className="mr-1.5 h-4 w-4" /> Unlock
                </button>
              </form>
              {passcodeError ? (
                <p className="mt-2 text-xs text-red-300">{passcodeError}</p>
              ) : (
                <p className="mt-2 text-xs text-brand-200/70">
                  Access key provided upon executive onboarding. For credential assistance, contact <a href={`mailto:${site.email}`} className="underline text-brand-200">{site.email}</a>.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8 flex items-center justify-between rounded-2xl border border-green-300 bg-green-50 p-4 text-green-950">
          <div className="flex items-center gap-3">
            <Unlock className="h-5 w-5 text-green-700" />
            <div>
              <p className="text-sm font-semibold">Authorized Member Session Active</p>
              <p className="text-xs text-green-800">You have verified access to the CIO Lounge registry.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsLocked(true)}
            className="rounded-full border border-green-600 bg-white px-3 py-1 text-xs font-medium text-green-800 hover:bg-green-100"
          >
            Lock Directory
          </button>
        </div>
      )}

      {/* Directory content (blurred if locked) */}
      <div className={clsx("relative", isLocked && "pointer-events-none select-none")}>
        <div className="card mb-8 p-4 sm:p-5">
          <div className="grid gap-3 md:grid-cols-[1fr_240px_180px]">
            <label className="relative">
              <span className="sr-only">Search members</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
              <input
                disabled={isLocked}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, company or interest"
                className="field pl-11"
              />
            </label>
            <label>
              <span className="sr-only">Industry</span>
              <select disabled={isLocked} value={industry} onChange={(e) => setIndustry(e.target.value)} className="field">
                <option value="all">All industries</option>
                {industries.map((i) => <option key={i}>{i}</option>)}
              </select>
            </label>
            <label>
              <span className="sr-only">City</span>
              <select disabled={isLocked} value={city} onChange={(e) => setCity(e.target.value)} className="field">
                <option value="all">All cities</option>
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {(["all", ...roles] as const).map((r) => (
              <button
                key={r}
                type="button"
                disabled={isLocked}
                aria-pressed={role === r}
                onClick={() => setRole(r)}
                className={clsx(
                  "rounded-full border px-3.5 py-1.5 text-sm transition",
                  role === r ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white hover:border-brand-300",
                )}
              >
                {r === "all" ? "All roles" : r}
              </button>
            ))}
            <label className="ml-auto flex cursor-pointer items-center gap-2 text-sm text-ink-strong">
              <input
                type="checkbox"
                disabled={isLocked}
                checked={league}
                onChange={(e) => setLeague(e.target.checked)}
                className="h-4 w-4 accent-brand-600"
              />
              League players only
            </label>
          </div>
        </div>

        <p className="mb-5 text-sm text-ink-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "member" : "members"}
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <MemberCard key={m.id} m={m} index={members.indexOf(m)} blurred={isLocked} />
          ))}
        </div>
      </div>
    </div>
  );
}
