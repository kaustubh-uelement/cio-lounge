"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Lock, Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "./Logo";
import { nav } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-line bg-white/95 backdrop-blur-md" : "border-transparent bg-paper/80 backdrop-blur-sm",
      )}
    >
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition",
                isActive(item.href) ? "bg-brand-50 font-medium text-brand-700" : "text-ink hover:text-navy-900",
              )}
            >
              <span>{item.label}</span>
              {"locked" in item && item.locked && (
                <span className="inline-flex items-center gap-1 rounded bg-navy-100 px-1.5 py-0.5 text-[10px] font-semibold text-navy-800">
                  <Lock className="h-2.5 w-2.5" />
                  Locked
                </span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/membership/apply"
            className="hidden rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-800 sm:inline-flex"
          >
            Request an Invitation
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-6">
            {[...nav, { href: "/studio", label: "CIO Studio" }, { href: "/foundation", label: "CIO Foundation" }, { href: "/contact", label: "Contact" }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-lg",
                    isActive(item.href) ? "bg-brand-50 font-medium text-brand-700" : "text-navy-900",
                  )}
                >
                  <span>{item.label}</span>
                  {"locked" in item && item.locked && (
                    <span className="inline-flex items-center gap-1 rounded bg-navy-100 px-2 py-0.5 text-xs font-semibold text-navy-800">
                      <Lock className="h-3 w-3" />
                      Locked
                    </span>
                  )}
                </Link>
              ),
            )}
            <Link href="/membership/apply" className="mt-4 rounded-full bg-navy-900 px-5 py-3.5 text-center font-medium text-white">
              Request an Invitation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
