import type { Metadata } from "next";
import Link from "next/link";
import { AvailabilityTag } from "@/components/shared/AvailabilityTag";
import { PageHeader } from "@/components/shared/PageHeader";
import { FigureCaption, Photo } from "@/components/shared/Photo";
import { getDestinations } from "@/data/destinations";
import { availabilityLabels, experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Diving, shoreline walks, hillside views, food, and community visits in Maasim, Sarangani, labelled by how well each is documented.",
  alternates: { canonical: "/experiences" },
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Experiences" }]}
        title="Experiences"
        lede="Ideas for how to spend your time in Maasim. We separate what has been documented here from general travel inspiration."
      >
        <dl className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {(Object.keys(availabilityLabels) as (keyof typeof availabilityLabels)[]).map((key) => (
            <div key={key}>
              <dt>
                <AvailabilityTag availability={key} />
              </dt>
              <dd className="mt-2 pl-4 text-[0.9375rem] text-muted">{availabilityLabels[key].detail}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <div className="shell divide-y divide-line">
        {experiences.map((experience, index) => {
          const places = getDestinations(experience.relatedDestinations);
          const flip = index % 2 === 1;
          return (
            <section
              key={experience.slug}
              id={experience.slug}
              aria-labelledby={`${experience.slug}-title`}
              className="grid scroll-mt-24 gap-10 py-16 md:grid-cols-12 md:gap-10 md:py-24"
            >
              <figure className={`md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
                <Photo
                  id={experience.photo}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3]"
                  placeholderLabel="Photograph to be supplied by the tourism office"
                />
                <FigureCaption id={experience.photo} />
              </figure>
              <div className={`md:col-span-5 md:self-center ${flip ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
                <AvailabilityTag availability={experience.availability} />
                <h2 id={`${experience.slug}-title`} className="mt-4 text-title md:text-[2.75rem]">
                  {experience.title}
                </h2>
                <p className="mt-4 text-lg">{experience.summary}</p>
                <p className="mt-4 text-muted">{experience.detail}</p>
                {places.length > 0 ? (
                  <div className="mt-8">
                    <h3 className="font-sans text-sm text-muted">Related places</h3>
                    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                      {places.map((place) => (
                        <li key={place.slug}>
                          <Link href={`/destinations/${place.slug}`} className="link-underline text-ocean">
                            {place.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
