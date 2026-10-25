import { SectionIntro } from "@/components/shared/SectionIntro";
import { StoryCard } from "@/components/stories/StoryCard";
import { stories } from "@/data/stories";

export function StoriesSection() {
  const feature = stories.find((story) => story.featured) ?? stories[0];
  const others = stories.filter((story) => story !== feature).slice(0, 3);

  return (
    <section aria-labelledby="stories-title" className="py-24 md:py-32">
      <div className="shell">
        <SectionIntro
          id="stories-title"
          title="Notes from the coast"
          lede="Short reads on the bay, the hills, and how to travel here well."
          link={{ href: "/stories", label: "Read all stories" }}
        />
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <StoryCard story={feature} variant="feature" />
          </div>
          <ul className="divide-y divide-line lg:col-span-5">
            {others.map((story) => (
              <li key={story.slug} className="py-7 first:pt-0">
                <StoryCard story={story} variant="compact" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

