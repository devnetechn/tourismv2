import { destinationCategoryLabel, storyCategoryLabel } from "@/data/categories";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { stories } from "@/data/stories";

export type SearchResult = {
  kind: "Destination" | "Story" | "Experience";
  title: string;
  description: string;
  meta: string;
  href: string;
  haystack: string;
};

export function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "")
    .trim();
}

export function matchesQuery(haystack: string, query: string) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return terms.every((term) => haystack.includes(term));
}

export const searchIndex: SearchResult[] = [
  ...destinations.map((destination) => ({
    kind: "Destination" as const,
    title: destination.name,
    description: destination.summary,
    meta: destinationCategoryLabel(destination.category),
    href: `/destinations/${destination.slug}`,
    haystack: normalize(
      [
        destination.name,
        destination.summary,
        destination.location.label,
        destinationCategoryLabel(destination.category),
        ...destination.overview,
      ].join(" "),
    ),
  })),
  ...stories.map((story) => ({
    kind: "Story" as const,
    title: story.title,
    description: story.dek,
    meta: storyCategoryLabel(story.category),
    href: `/stories/${story.slug}`,
    haystack: normalize([story.title, story.dek, storyCategoryLabel(story.category)].join(" ")),
  })),
  ...experiences.map((experience) => ({
    kind: "Experience" as const,
    title: experience.title,
    description: experience.summary,
    meta: "Experience",
    href: `/experiences#${experience.slug}`,
    haystack: normalize([experience.title, experience.summary, experience.detail].join(" ")),
  })),
];
