import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-x-2 text-sm ${tone === "dark" ? "on-dark text-shell/80" : "text-muted"}`}>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="link-underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  title,
  lede,
  crumbs,
  children,
}: {
  title: ReactNode;
  lede?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="shell">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 max-w-4xl text-headline md:text-[clamp(3rem,6.5vw,5.75rem)]">{title}</h1>
        {lede ? <p className="mt-6 max-w-2xl text-lg text-muted">{lede}</p> : null}
        {children}
      </div>
    </header>
  );
}
