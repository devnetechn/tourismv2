import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Wordmark({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name}, home`}
      className={`group inline-flex items-baseline gap-2 ${className}`}
    >
      <span className="font-display text-[1.65rem] leading-none tracking-[0.18em]">{siteConfig.wordmark}</span>
      <svg aria-hidden="true" viewBox="0 0 28 10" className="h-2.5 w-7 translate-y-[-0.15rem] text-tide-bright">
        <path d="M1 6 C 5 1, 9 1, 14 5 S 23 9, 27 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </Link>
  );
}
