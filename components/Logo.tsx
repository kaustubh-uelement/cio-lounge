import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

export function LogoMark({ className, tone = "brand" }: { className?: string; tone?: "brand" | "light" }) {
  return (
    <span className={clsx("relative inline-flex shrink-0 items-center justify-center", className)}>
      <Image
        src="/images/logo/cio-lounge-mark.png"
        alt="CIO Lounge Mark"
        width={48}
        height={48}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}

export function Logo({ tone = "brand", className }: { tone?: "brand" | "light"; className?: string }) {
  const src = tone === "light" ? "/images/logo/cio-lounge-logo-white.png" : "/images/logo/cio-lounge-logo.png";

  return (
    <Link
      href="/"
      className={clsx("group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90", className)}
      aria-label="CIO Lounge - Innovate | Influence | Impact"
    >
      <Image
        src={src}
        alt="CIO Lounge - Innovate | Influence | Impact"
        width={210}
        height={48}
        className="h-9 sm:h-10 w-auto object-contain"
        priority
      />
    </Link>
  );
}
