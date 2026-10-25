import Link from "next/link";
import { FigureCaption, Photo } from "@/components/shared/Photo";
import { cultureThemes } from "@/data/culture";

export function CultureSection() {
  return (
    <section aria-labelledby="culture-title" className="on-dark overflow-hidden bg-ocean py-24 text-shell md:py-32">
      <div className="shell grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <figure>
            <Photo id="blaan-mat-weaving" sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[3/4] bg-ocean-deep" />
            <FigureCaption id="blaan-mat-weaving" className="text-shell/65" />
          </figure>
        </div>

        <div className="md:col-span-7 md:pl-6 lg:pl-12">
          <h2 id="culture-title" className="text-headline">
            Culture and the local table
          </h2>
          <p className="mt-6 max-w-xl text-lg text-shell/80">
            Maasim is home to Moro and Lumad communities, including B&apos;laan families in the uplands, alongside
            families who settled here from across the Philippines. Their stories belong to them, so this section grows
            only with their participation.
          </p>

          <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {cultureThemes.map((theme) => (
              <li key={theme.title} className="border-t border-shell/15 pt-5">
                <h3 className="text-2xl">{theme.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-shell/70">{theme.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/culture" className="link-underline font-medium">
              Explore culture and food
            </Link>
            <Link href="/stories/visiting-with-care" className="link-underline text-shell/80">
              How to visit communities with care
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
