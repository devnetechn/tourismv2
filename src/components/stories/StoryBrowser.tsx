"use client";

import { useMemo, useState } from "react";
import { EmptyResults, FilterControls } from "@/components/shared/FilterControls";
import { storyCategories } from "@/data/categories";
import { stories } from "@/data/stories";
import { matchesQuery, normalize } from "@/lib/search";
import type { StoryCategory } from "@/types/content";
import { StoryCard } from "./StoryCard";

const indexed = stories.map((story) => ({
  story,
  haystack: normalize(
    [
      story.title,
      story.dek,
      ...story.body.map((block) =>
        block.type === "list" ? block.items.join(" ") : block.type === "photo" ? "" : block.text,
      ),
    ].join(" "),
  ),
}));

export function StoryBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<StoryCategory | null>(null);

  const results = useMemo(
    () =>
      indexed
        .filter((item) => (category ? item.story.category === category : true))
        .filter((item) => (query.trim() ? matchesQuery(item.haystack, query) : true))
        .map((item) => item.story),
    [query, category],
  );

  const options = storyCategories
    .map((item) => ({
      id: item.id,
      label: item.label,
      count: stories.filter((story) => story.category === item.id).length,
    }))
    .filter((option) => option.count > 0);

  const clear = () => {
    setQuery("");
    setCategory(null);
  };

  const showFeature = !query.trim() && category === null;
  const [feature, ...rest] = results;

  return (
    <div>
      <FilterControls
        query={query}
        onQueryChange={setQuery}
        searchLabel="Search stories"
        options={options}
        selected={category}
        onSelect={(id) => setCategory(id as StoryCategory | null)}
        resultCount={results.length}
        noun={["story", "stories"]}
        onClear={clear}
      />
      <div className="mt-12">
        {results.length === 0 ? (
          <EmptyResults query={query} onClear={clear} what="stories" />
        ) : (
          <>
            {showFeature ? (
              <div className="mb-16 border-b border-line pb-16">
                <StoryCard story={feature} variant="feature" headingLevel="h2" />
              </div>
            ) : null}
            <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {(showFeature ? rest : results).map((story) => (
                <li key={story.slug}>
                  <StoryCard story={story} headingLevel="h2" />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
