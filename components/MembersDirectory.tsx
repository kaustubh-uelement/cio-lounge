"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, KeyRound, Lock, Mail, MapPin, Search, ShieldCheck, Trophy, Unlock } from "lucide-react";
import { clsx } from "clsx";
import type { Member, Role } from "@/data/members";
import { initials } from "@/lib/format";
import { site } from "@/data/site";

// SHA-256 cryptographic hash of the exclusive executive access key.
// The plain-text key is never stored or exposed anywhere in the client bundle.
const VAULT_KEY_HASH = "53a60b192a83ba35ac2a2d9af4820048c262888610260a8a47cd29ee55f99437";

async function hashKey(text: string): Promise<string> {
  const data = new TextEncoder().encode(text.trim());
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

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

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setPasscodeError("Please enter your member access key.");
      return;
    }
    try {
      const hashed = await hashKey(passcode);
      if (hashed === VAULT_KEY_HASH) {
        setIsLocked(false);
        setPasscodeError("");
      } else {
        setPasscodeError("Invalid access key. Please verify credentials with Kamal Goel.");
      }
    } catch {
      setPasscodeError("Verification error. Please try again.");
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
      {/* Redesigned Premium Executive Lock Module */}
      {isLocked ? (
        <div className="relative mb-14 mx-auto max-w-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-brand-600/30 via-brand-400/20 to-navy-700/30 opacity-70 blur-xl" aria-hidden />

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 p-7 sm:p-9 text-white shadow-2xl backdrop-blur-xl">
            <div className="grid-pattern absolute inset-0 opacity-15" aria-hidden />

            <div className="relative flex flex-col items-center text-center">
              {/* Glowing Icon Insignia */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-400/30 bg-gradient-to-b from-brand-500/25 to-brand-600/10 text-brand-300 shadow-[0_0_25px_rgba(30,107,176,0.4)]">
                <Lock className="h-6 w-6" />
              </div>

              {/* Security Pill Badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-200">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-300" />
                <span>Confidential Executive Registry</span>
              </div>

              {/* Title & Copy */}
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-2xl">
                Member Directory Access Is Restricted
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/90 max-w-md">
                To preserve member confidentiality, access to verified CXO profiles and contact channels is reserved strictly for active members and advisory leaders.
              </p>

              {/* Sleek Integrated Unlock Form */}
              <form onSubmit={handleUnlock} className="mt-6 w-full">
                <div className="relative flex items-center rounded-2xl border border-white/20 bg-white/[0.07] p-1.5 transition-all duration-200 focus-within:border-brand-400 focus-within:bg-white/[0.1] focus-within:ring-2 focus-within:ring-brand-400/25">
                  <KeyRound className="ml-3 h-4 w-4 shrink-0 text-brand-300" />
                  <input
                    type="password"
                    placeholder="Enter member access key..."
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setPasscodeError("");
                    }}
                    className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-brand-200/50 outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:from-brand-500 hover:to-brand-400"
                  >
                    <span>Unlock</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {passcodeError ? (
                  <p className="mt-2.5 text-left text-xs font-medium text-red-300">{passcodeError}</p>
                ) : (
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-brand-200/60 px-1">
                    <span>Authorized credential verification</span>
                    <a href={`mailto:${site.email}?subject=Member%20Directory%20Access%20Key%20Inquiry`} className="hover:text-white transition underline underline-offset-2">
                      Request access credentials
                    </a>
                  </div>
                )}
              </form>

              {/* Divider */}
              <div className="relative my-7 w-full">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-[11px] font-semibold uppercase tracking-wider">
                  <span className="bg-navy-950 px-3 text-brand-200/50">Not an active member yet?</span>
                </div>
              </div>

              {/* Alternative Actions */}
              <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-2.5">
                <Link
                  href="/membership/apply"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-navy-950 transition hover:bg-brand-50 shadow-sm"
                >
                  Request an Invitation
                </Link>
                <a
                  href={`mailto:${site.email}?subject=Inquiry%20regarding%20Member%20Access`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  <Mail className="h-3.5 w-3.5 text-brand-300" />
                  <span>Contact Kamal Goel</span>
                </a>
              </div>
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
