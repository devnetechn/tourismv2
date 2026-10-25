import Link from "next/link";
import type { ReactNode } from "react";

type SectionIntroProps = {
  id?: string;
  title: ReactNode;
  lede?: ReactNode;
  link?: { href: string; label: string };
  tone?: "light" | "dark";
  className?: string;
};

export function SectionIntro({ id, title, lede, link, tone = "light", className = "" }: SectionIntroProps) {
  const muted = tone === "dark" ? "text-shell/75" : "text-muted";
  return (
    <div className={`grid gap-6 md:grid-cols-12 md:items-end ${className}`}>
      <h2 id={id} className="text-headline md:col-span-7">
        {title}
      </h2>
      <div className="md:col-span-5 md:pb-2">
        {lede ? <p className={`max-w-md ${muted}`}>{lede}</p> : null}
        {link ? (
          <Link
            href={link.href}
            className={`link-underline mt-4 inline-block font-medium ${tone === "dark" ? "on-dark text-shell" : "text-ocean"}`}
          >
            {link.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
