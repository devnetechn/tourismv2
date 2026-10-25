"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type CSSProperties, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { mainNav, siteConfig } from "@/data/site";
import { SearchDialog, type SearchDialogHandle } from "./SearchDialog";
import { Wordmark } from "./Wordmark";

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function useScrolledPast(offset: number) {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > offset,
    () => false,
  );
}

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(48);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef<SearchDialogHandle>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const overHero = pathname === "/" && !scrolled && !menuOpen;

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 bg-ocean px-4 py-3 text-shell focus:translate-y-0"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-300 ${
          overHero
            ? "on-dark border-b border-transparent text-shell"
            : menuOpen
              ? "on-dark border-b border-shell/15 bg-ocean text-shell"
              : "border-b border-line/80 bg-shell/95 text-ocean backdrop-blur-sm"
        }`}
      >
        <div className="shell flex h-18 items-center justify-between gap-6">
          <Wordmark onClick={closeMenu} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[0.9375rem]">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                        active ? "after:scale-x-100" : "after:scale-x-0"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                searchRef.current?.open();
              }}
              className="inline-flex size-11 items-center justify-center gap-2 lg:w-auto lg:px-3"
            >
              <Search aria-hidden="true" className="size-5" />
              <span className="sr-only lg:not-sr-only lg:text-[0.9375rem]">Search</span>
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center lg:hidden"
            >
              {menuOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="on-dark fixed inset-0 z-40 overflow-y-auto bg-ocean pt-18 text-shell lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex min-h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {mainNav.map((item, index) => (
              <li key={item.href} className="rise" style={{ "--delay": `${index * 50}ms` } as CSSProperties}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="block border-b border-shell/10 py-4 font-display text-4xl aria-[current=page]:text-tide-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/stories" onClick={closeMenu} className="block py-4 font-display text-4xl">
                Stories
              </Link>
            </li>
          </ul>
          <p className="mt-10 max-w-xs text-sm text-shell/70">
            {siteConfig.tagline} An independent travel guide to Maasim, Sarangani.
          </p>
        </nav>
      </div>

      <SearchDialog ref={searchRef} />
    </>
  );
}
