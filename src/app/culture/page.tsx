import type { Metadata } from "next";
import Link from "next/link";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { FigureCaption, Photo } from "@/components/shared/Photo";
import { cultureThemes } from "@/data/culture";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Culture & food",
  description:
    "The communities, crafts, and local produce of Maasim, Sarangani, and how to experience them respectfully.",
  alternates: { canonical: "/culture" },
};

export default function CulturePage() {
  const places = destinations.filter((item) => item.category === "community-culture" || item.category === "local-food");

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Culture & food" }]}
        title="Culture & food"
        lede="Maasim is a meeting point of Moro, Lumad, and settler communities, with farms and fishing grounds that feed the town. This section is being built with local participation."
      />

      <section aria-labelledby="people-title" className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        <div className="md:col-span-6">
          <h2 id="people-title" className="text-title md:text-[2.75rem]">
            The people of Maasim
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            <p>
              Most residents are of Moro and Lumad origin. The B&apos;laan, an Indigenous people of southern Mindanao,
              live in Maasim&apos;s mountainous areas. Cebuano is widely spoken, along with Maguindanao, Blaan, T&apos;boli,
              and Tagalog.
            </p>
            <p className="text-muted">
              We have deliberately not described specific customs, rituals, or beliefs. Those accounts should come from
              the communities themselves, shared on their terms, and will be added only with their involvement.
            </p>
          </div>
          <Link href="/stories/visiting-with-care" className="link-underline mt-8 inline-block font-medium text-ocean">
            Read: visiting Indigenous communities with care
          </Link>
        </div>
        <figure className="md:col-span-5 md:col-start-8">
          <Photo id="blaan-mouth-harp" sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[2/3] max-h-[34rem]" />
          <FigureCaption id="blaan-mouth-harp" />
        </figure>
      </section>

      <section aria-labelledby="themes-title" className="on-dark bg-ocean py-16 text-shell md:py-24">
        <div className="shell">
          <h2 id="themes-title" className="text-title md:text-[2.75rem]">
            What this section will hold
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {cultureThemes.map((theme) => (
              <li key={theme.title} className="border-t border-shell/15 pt-5">
                <h3 className="text-2xl">{theme.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-shell/70">{theme.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="table-title" className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        <figure className="md:col-span-6">
          <Photo id="sarangani-bay-fishing-boat" sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3]" />
          <FigureCaption id="sarangani-bay-fishing-boat" />
        </figure>
        <div className="md:col-span-5 md:col-start-8 md:self-center">
          <h2 id="table-title" className="text-title md:text-[2.75rem]">
            From the farm and the bay
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Agriculture is Maasim&apos;s economic base. Copra is a major product, cattle raising comes second, and the town
            also grows corn, sugarcane, bananas, pineapples, and mangoes. Fish come from the bay.
          </p>
          <p className="mt-4 text-muted">
            Markets, eateries, and signature dishes will be listed once local food businesses and the tourism office have
            confirmed them.
          </p>
        </div>
      </section>

      <section aria-labelledby="culture-places" className="border-t border-line bg-sand py-16 md:py-24">
        <div className="shell">
          <h2 id="culture-places" className="text-title">
            Places to start
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => (
              <li key={place.slug}>
                <DestinationCard destination={place} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
