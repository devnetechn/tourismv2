import Link from "next/link";
import { AvailabilityTag } from "@/components/shared/AvailabilityTag";
import { Photo } from "@/components/shared/Photo";
import { availabilityLabels, experiences } from "@/data/experiences";

export function ExperiencesSection() {
  return (
    <section aria-labelledby="experiences-title" className="bg-sand py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 id="experiences-title" className="text-headline">
              Ways to spend your days
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Some of these are documented in Maasim. Others are ideas to shape your trip. Every one is labelled.
            </p>
            <dl className="mt-8 space-y-4 border-t border-sand-deep pt-6 text-sm">
              {(Object.keys(availabilityLabels) as (keyof typeof availabilityLabels)[]).map((key) => (
                <div key={key}>
                  <dt>
                    <AvailabilityTag availability={key} />
                  </dt>
                  <dd className="mt-1.5 pl-4 text-muted">{availabilityLabels[key].detail}</dd>
                </div>
              ))}
            </dl>
            <Link href="/experiences" className="link-underline mt-8 inline-block font-medium text-ocean">
              All experiences
            </Link>
          </div>
        </div>

        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:col-span-8">
          {experiences.slice(0, 4).map((experience, index) => (
            <li key={experience.slug} className={index % 2 === 1 ? "sm:mt-20" : ""}>
              <article className="group relative">
                <Photo
                  id={experience.photo}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className={index % 2 === 0 ? "aspect-[4/5]" : "aspect-[1/1]"}
                />
                <div className="mt-5">
                  <AvailabilityTag availability={experience.availability} />
                  <h3 className="mt-3 text-2xl leading-tight">
                    <Link
                      href={`/experiences#${experience.slug}`}
                      className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4"
                    >
                      {experience.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-muted">{experience.summary}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
