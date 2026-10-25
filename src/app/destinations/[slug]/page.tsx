import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { Gallery } from "@/components/shared/Gallery";
import { Breadcrumbs } from "@/components/shared/PageHeader";
import { FigureCaption, Photo } from "@/components/shared/Photo";
import { StatusTag } from "@/components/shared/StatusTag";
import { StoryCard } from "@/components/stories/StoryCard";
import { destinationCategoryLabel } from "@/data/categories";
import { destinations, getDestination } from "@/data/destinations";
import { getPhoto } from "@/data/photos";
import { getStories } from "@/data/stories";
import type { Photo as PhotoType } from "@/types/content";

export const instant = false;

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: PageProps<"/destinations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return { title: "Destination not found" };
  const photo = getPhoto(destination.heroPhoto);
  return {
    title: destination.name,
    description: destination.summary,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: destination.name,
      description: destination.summary,
      images: photo ? [{ url: photo.src, width: photo.width, height: photo.height, alt: photo.alt }] : undefined,
    },
  };
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const gallery = destination.gallery.map((id) => getPhoto(id)).filter((photo): photo is PhotoType => Boolean(photo));
  const sameCategory = destinations.filter((item) => item.slug !== destination.slug && item.category === destination.category);
  const related = [...sameCategory, ...destinations.filter((item) => item.slug !== destination.slug && !sameCategory.includes(item))].slice(0, 3);
  const relatedStories = getStories(destination.relatedStories);
  const mapQuery = encodeURIComponent(`${destination.location.verified ? destination.location.label : "Maasim"}, Sarangani, Philippines`);

  return (
    <article>
      <header className="pt-32 md:pt-40">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: destination.name }]}
          />
          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9375rem]">
            <span className="text-tide">{destinationCategoryLabel(destination.category)}</span>
            <StatusTag status={destination.status} />
          </p>
          <h1 className="mt-4 max-w-5xl text-headline md:text-[clamp(3rem,6.5vw,5.75rem)]">{destination.name}</h1>
          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <p className="text-lg text-muted md:col-span-7">{destination.summary}</p>
            <p className="flex items-start gap-2 md:col-span-4 md:col-start-9 md:justify-end md:text-right">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-tide" />
              <span>
                {destination.location.label}
                {destination.location.verified ? null : <span className="block text-sm text-coral-ink">Location to be confirmed</span>}
              </span>
            </p>
          </div>
        </div>
        <figure className="mt-12 md:mt-16">
          <Photo
            id={destination.heroPhoto}
            sizes="100vw"
            priority
            className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
            placeholderLabel="An official photograph of this place is still needed"
          />
          <div className="shell">
            <FigureCaption id={destination.heroPhoto} className="max-w-2xl" />
          </div>
        </figure>
      </header>

      <div className="shell grid gap-16 py-16 md:py-24 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-16 lg:col-span-7">
          <section aria-labelledby="overview">
            <h2 id="overview" className="text-title">
              Overview
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              {destination.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </section>

          {gallery.length > 0 ? (
            <section aria-labelledby="gallery">
              <h2 id="gallery" className="text-title">
                Photographs
              </h2>
              <p className="mt-3 text-[0.9375rem] text-muted">
                {gallery.every((photo) => photo.takenInMaasim)
                  ? "All photographs were taken in Maasim."
                  : "Some photographs show the wider Sarangani Bay area and are labelled with where they were taken."}
              </p>
              <div className="mt-6">
                <Gallery photos={gallery} title={destination.name} />
              </div>
            </section>
          ) : null}

          <section aria-labelledby="know">
            <h2 id="know" className="text-title">
              Things to know before visiting
            </h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {destination.thingsToKnow.map((item) => (
                <li key={item} className="py-4">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="responsible">
            <h2 id="responsible" className="text-title">
              Travelling responsibly
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {destination.responsibleTips.map((item) => (
                <li key={item} className="border-l-2 border-tide-bright bg-tide-mist/50 px-5 py-4 text-[0.9375rem]">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
          <div className="border border-line p-6">
            <h2 className="font-sans text-[0.9375rem] font-semibold">Location</h2>
            <p className="mt-3">{destination.location.label}</p>
            {destination.location.note ? <p className="mt-2 text-sm text-muted">{destination.location.note}</p> : null}
            <a
              href={`https://www.openstreetmap.org/search?query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] text-ocean"
            >
              Search on OpenStreetMap
              <ExternalLink aria-hidden="true" className="size-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <div className="border border-dashed border-coral-ink/50 p-6">
            <h2 className="font-sans text-[0.9375rem] font-semibold">Waiting on the tourism office</h2>
            <p className="mt-2 text-sm text-muted">These details have not been confirmed yet:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.9375rem]">
              {destination.toVerify.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {destination.sources.length > 0 ? (
            <div>
              <h2 className="font-sans text-[0.9375rem] font-semibold">Sources</h2>
              <ul className="mt-3 space-y-2 text-[0.9375rem]">
                {destination.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ocean">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>

      {relatedStories.length > 0 ? (
        <section aria-labelledby="related-stories" className="border-t border-line py-16 md:py-24">
          <div className="shell">
            <h2 id="related-stories" className="text-title">
              Read more
            </h2>
            <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {relatedStories.map((story) => (
                <li key={story.slug}>
                  <StoryCard story={story} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="related-destinations" className="bg-sand py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="related-destinations" className="text-title">
              Nearby and related
            </h2>
            <Link href="/destinations" className="link-underline inline-flex items-center gap-2 font-medium text-ocean">
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back to all destinations
            </Link>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <DestinationCard destination={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
