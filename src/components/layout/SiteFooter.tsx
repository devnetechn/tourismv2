import Link from "next/link";
import { footerNav, legalNav, mainNav, siteConfig } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const { contact, social } = siteConfig;
  const liveSocial = social.filter((item) => item.href);

  return (
    <footer className="on-dark bg-ocean-deep text-shell">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Wordmark />
          <p className="mt-5 max-w-xs text-shell/70">{siteConfig.tagline}</p>
          <p className="mt-6 max-w-xs text-sm text-shell/55">
            An independent destination website concept. Not an official publication of the Municipal Government of
            Maasim.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 md:col-span-4">
          <div>
            <h2 className="font-sans text-sm text-shell/55">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-sm text-shell/55">More</h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-sans text-sm text-shell/55">Tourism contact</h2>
          <address className="mt-4 not-italic leading-relaxed">
            {contact.office}
            <br />
            {contact.address}
          </address>
          <p className="mt-3 text-sm text-shell/60">
            {contact.email || contact.phone
              ? [contact.email, contact.phone].filter(Boolean).join(", ")
              : "Phone and email to be confirmed by the tourism office."}
          </p>
          <h2 className="mt-8 font-sans text-sm text-shell/55">Follow</h2>
          {liveSocial.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {liveSocial.map((item) => (
                <li key={item.label}>
                  <a href={item.href ?? undefined} className="link-underline" rel="noopener noreferrer" target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-shell/60">Social media accounts will be linked once confirmed.</p>
          )}
        </div>
      </div>

      <div className="border-t border-shell/10">
        <div className="shell flex flex-col gap-3 py-6 text-sm text-shell/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {siteConfig.copyrightYear} Maasim travel guide concept. Photographs are credited on the{" "}
            <Link href="/about#photo-credits" className="link-underline">
              about page
            </Link>
            .
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
