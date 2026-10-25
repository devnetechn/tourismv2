import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { Breadcrumbs } from "@/components/shared/PageHeader";
import { FigureCaption, Photo } from "@/components/shared/Photo";
import { StoryBody } from "@/components/stories/StoryBody";
import { StoryMeta } from "@/components/stories/StoryCard";
import { getDestinations } from "@/data/destinations";
import { getPhoto } from "@/data/photos";
import { getStory, stories } from "@/data/stories";

export const instant = false;

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story not found" };
  const photo = getPhoto(story.heroPhoto);
  return {
    title: story.title,
    description: story.dek,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.dek,
      images: photo ? [{ url: photo.src, width: photo.width, height: photo.height, alt: photo.alt }] : undefined,
    },
  };
}

export default async function StoryPage({ params }: PageProps<"/stories/[slug]">) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const index = stories.indexOf(story);
  const previous = index > 0 ? stories[index - 1] : undefined;
  const next = index < stories.length - 1 ? stories[index + 1] : undefined;
  const related = getDestinations(story.relatedDestinations);

  return (
    <article>
      <header className="pt-32 md:pt-40">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Stories", href: "/stories" }, { label: story.title }]} />
          <div className="mt-10 max-w-4xl">
            <StoryMeta story={story} />
            <h1 className="mt-4 text-headline md:text-[clamp(2.75rem,5.5vw,4.75rem)]">{story.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{story.dek}</p>
          </div>
        </div>
        <figure className="shell mt-12">
          <Photo id={story.heroPhoto} sizes="(min-width: 1312px) 1232px, 100vw" priority className="aspect-[16/9] lg:aspect-[2/1]" />
          <FigureCaption id={story.heroPhoto} className="max-w-2xl" />
        </figure>
      </header>

      <div className="shell grid gap-14 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-8 lg:col-start-3">
          <StoryBody blocks={story.body} />

          {story.sources.length > 0 ? (
            <div className="mt-14 border-t border-line pt-6">
              <h2 className="font-sans text-[0.9375rem] font-semibold">Sources</h2>
              <ul className="mt-3 space-y-2 text-[0.9375rem]">
                {story.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ocean">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      {related.length > 0 ? (
        <section aria-labelledby="story-places" className="bg-sand py-16 md:py-24">
          <div className="shell">
            <h2 id="story-places" className="text-title">
              Places in this story
            </h2>
            <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((destination) => (
                <li key={destination.slug}>
                  <DestinationCard destination={destination} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <nav aria-label="More stories" className="border-t border-line">
        <div className="shell grid gap-px py-4 sm:grid-cols-2">
          {previous ? (
            <Link href={`/stories/${previous.slug}`} className="group flex flex-col gap-2 py-8 sm:pr-8">
              <span className="flex items-center gap-2 text-sm text-muted">
                <ArrowLeft aria-hidden="true" className="size-4" /> Previous story
              </span>
              <span className="font-display text-2xl group-hover:underline group-hover:underline-offset-4">{previous.title}</span>
            </Link>
          ) : (
            <Link href="/stories" className="group flex flex-col gap-2 py-8 sm:pr-8">
              <span className="flex items-center gap-2 text-sm text-muted">
                <ArrowLeft aria-hidden="true" className="size-4" /> Journal
              </span>
              <span className="font-display text-2xl group-hover:underline group-hover:underline-offset-4">All stories</span>
            </Link>
          )}
          {next ? (
            <Link href={`/stories/${next.slug}`} className="group flex flex-col gap-2 py-8 sm:items-end sm:pl-8 sm:text-right">
              <span className="flex items-center gap-2 text-sm text-muted">
                Next story <ArrowRight aria-hidden="true" className="size-4" />
              </span>
              <span className="font-display text-2xl group-hover:underline group-hover:underline-offset-4">{next.title}</span>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
