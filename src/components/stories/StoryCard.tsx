import Link from "next/link";
import { Photo } from "@/components/shared/Photo";
import { storyCategoryLabel } from "@/data/categories";
import { readingMinutes } from "@/data/stories";
import type { Story } from "@/types/content";

export function StoryMeta({ story, tone = "light" }: { story: Story; tone?: "light" | "dark" }) {
  return (
    <p className={`flex flex-wrap gap-x-4 gap-y-1 text-[0.8125rem] ${tone === "dark" ? "text-shell/75" : "text-muted"}`}>
      <span className={tone === "dark" ? "text-tide-bright" : "text-tide"}>{storyCategoryLabel(story.category)}</span>
      <span>{readingMinutes(story)} min read</span>
    </p>
  );
}

export function StoryCard({
  story,
  variant = "default",
  headingLevel = "h3",
}: {
  story: Story;
  variant?: "default" | "feature" | "compact";
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const feature = variant === "feature";
  const href = `/stories/${story.slug}`;

  if (variant === "compact") {
    return (
      <article className="group relative grid grid-cols-[1fr_6.5rem] gap-5 sm:grid-cols-[1fr_9rem]">
        <div>
          <StoryMeta story={story} />
          <Heading className="mt-2 text-xl leading-tight">
            <Link href={href} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
              {story.title}
            </Link>
          </Heading>
        </div>
        <Photo id={story.heroPhoto} sizes="144px" className="aspect-square" />
      </article>
    );
  }

  return (
    <article className="group relative">
      <Photo
        id={story.heroPhoto}
        sizes={feature ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 30vw, 100vw"}
        className="aspect-[3/2]"
        imageClassName="transition-transform duration-700 ease-[var(--ease-tide)] group-hover:scale-[1.03]"
      />
      <div className={feature ? "mt-6 max-w-2xl" : "mt-4"}>
        <StoryMeta story={story} />
        <Heading className={`mt-2 leading-tight ${feature ? "text-title md:text-[2.5rem]" : "text-xl md:text-2xl"}`}>
          <Link href={href} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
            {story.title}
          </Link>
        </Heading>
        <p className={`mt-3 text-muted ${feature ? "text-lg" : "line-clamp-3 text-[0.9375rem]"}`}>{story.dek}</p>
      </div>
    </article>
  );
}
