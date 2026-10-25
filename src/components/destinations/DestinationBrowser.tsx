"use client";

import { useMemo, useState } from "react";
import { EmptyResults, FilterControls } from "@/components/shared/FilterControls";
import { destinationCategories } from "@/data/categories";
import { destinations } from "@/data/destinations";
import { matchesQuery, normalize } from "@/lib/search";
import type { DestinationCategory } from "@/types/content";
import { DestinationCard } from "./DestinationCard";

const indexed = destinations.map((destination) => ({
  destination,
  haystack: normalize(
    [destination.name, destination.summary, destination.location.label, ...destination.overview].join(" "),
  ),
}));

export function DestinationBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DestinationCategory | null>(null);

  const results = useMemo(
    () =>
      indexed
        .filter((item) => (category ? item.destination.category === category : true))
        .filter((item) => (query.trim() ? matchesQuery(item.haystack, query) : true))
        .map((item) => item.destination),
    [query, category],
  );

  const options = destinationCategories.map((item) => ({
    id: item.id,
    label: item.label,
    count: destinations.filter((destination) => destination.category === item.id).length,
  }));

  const clear = () => {
    setQuery("");
    setCategory(null);
  };

  return (
    <div>
      <FilterControls
        query={query}
        onQueryChange={setQuery}
        searchLabel="Search destinations"
        options={options}
        selected={category}
        onSelect={(id) => setCategory(id as DestinationCategory | null)}
        resultCount={results.length}
        noun={["destination", "destinations"]}
        onClear={clear}
      />
      <div className="mt-12">
        {results.length === 0 ? (
          <EmptyResults query={query} onClear={clear} what="destinations" />
        ) : (
          <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((destination) => (
              <li key={destination.slug}>
                <DestinationCard destination={destination} headingLevel="h2" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
