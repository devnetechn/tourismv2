import { MapPin } from "lucide-react";
import Link from "next/link";
import { Photo } from "@/components/shared/Photo";
import { StatusTag } from "@/components/shared/StatusTag";
import { destinationCategoryLabel } from "@/data/categories";
import type { Destination } from "@/types/content";

type Variant = "feature" | "row" | "grid";

export function DestinationCard({
  destination,
  variant = "grid",
  headingLevel = "h3",
}: {
  destination: Destination;
  variant?: Variant;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const href = `/destinations/${destination.slug}`;

  const meta = (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem] text-muted">
      <span className="text-tide">{destinationCategoryLabel(destination.category)}</span>
      <StatusTag status={destination.status} />
    </p>
  );

  const location = (
    <p className="mt-3 flex items-start gap-1.5 text-sm text-muted">
      <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
      <span>
        {destination.location.label}
        {destination.location.verified ? "" : " (to be confirmed)"}
      </span>
    </p>
  );

  if (variant === "row") {
    return (
      <article className="group relative grid grid-cols-[7.5rem_1fr] gap-5 sm:grid-cols-[11rem_1fr]">
        <Photo
          id={destination.heroPhoto}
          sizes="176px"
          className="aspect-square"
          imageClassName="transition-transform duration-700 ease-[var(--ease-tide)] group-hover:scale-[1.04]"
          placeholderLabel="Photo needed"
        />
        <div className="py-1">
          {meta}
          <Heading className="mt-2 text-xl leading-tight sm:text-2xl">
            <Link href={href} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
              {destination.name}
            </Link>
          </Heading>
          {location}
        </div>
      </article>
    );
  }

  const feature = variant === "feature";

  return (
    <article className="group relative flex flex-col">
      <Photo
        id={destination.heroPhoto}
        sizes={feature ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        className={feature ? "aspect-[4/5] sm:aspect-[4/3]" : "aspect-[4/3]"}
        imageClassName="transition-transform duration-700 ease-[var(--ease-tide)] group-hover:scale-[1.03]"
      />
      <div className="mt-5 flex flex-1 flex-col">
        {meta}
        <Heading className={`mt-3 leading-tight ${feature ? "text-title" : "text-2xl"}`}>
          <Link href={href} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
            {destination.name}
          </Link>
        </Heading>
        <p className="mt-3 max-w-prose text-muted">{destination.summary}</p>
        {location}
        <span aria-hidden="true" className="mt-5 text-[0.9375rem] font-medium text-ocean">
          View destination
        </span>
      </div>
    </article>
  );
}
