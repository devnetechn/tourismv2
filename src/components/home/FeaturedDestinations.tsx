import { DestinationCard } from "@/components/destinations/DestinationCard";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { featuredDestinations } from "@/data/destinations";

export function FeaturedDestinations() {
  const [lead, ...rest] = featuredDestinations;

  return (
    <section aria-labelledby="destinations-title" className="border-t border-line py-24 md:py-32">
      <div className="shell">
        <SectionIntro
          id="destinations-title"
          title="Places to begin"
          lede="From a nationally recognised marine sanctuary to the hills above the coast. Each listing shows how much of it has been verified."
          link={{ href: "/destinations", label: "See all destinations" }}
        />

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <DestinationCard destination={lead} variant="feature" />
          </div>
          <ul className="flex flex-col gap-8 md:col-span-5 md:justify-between md:border-l md:border-line md:pl-10">
            {rest.map((destination) => (
              <li key={destination.slug} className="border-t border-line pt-8 first:border-t-0 first:pt-0">
                <DestinationCard destination={destination} variant="row" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
