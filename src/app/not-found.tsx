import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { mainNav } from "@/data/site";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80vh] flex-col justify-center py-32">
      <p className="text-tide">Page not found</p>
      <h1 className="mt-4 max-w-3xl text-headline md:text-[clamp(3rem,6vw,5.5rem)]">The tide took this page out.</h1>
      <p className="mt-6 max-w-lg text-lg text-muted">
        The address may be mistyped, or the page may have moved. Start again from the home page or jump to a section
        below.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Go to the home page</ButtonLink>
      </div>
      <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
        {mainNav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="link-underline text-ocean">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
