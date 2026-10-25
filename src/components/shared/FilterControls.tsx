"use client";

import { Search, X } from "lucide-react";
import { useId } from "react";

type Option = { id: string; label: string; count: number };

type FilterControlsProps = {
  query: string;
  onQueryChange: (value: string) => void;
  searchLabel: string;
  options: Option[];
  selected: string | null;
  onSelect: (id: string | null) => void;
  resultCount: number;
  noun: [singular: string, plural: string];
  onClear: () => void;
};

export function FilterControls({
  query,
  onQueryChange,
  searchLabel,
  options,
  selected,
  onSelect,
  resultCount,
  noun,
  onClear,
}: FilterControlsProps) {
  const inputId = useId();
  const filtered = query.trim() !== "" || selected !== null;

  return (
    <div className="space-y-6">
      <div className="relative max-w-xl">
        <label htmlFor={inputId} className="sr-only">
          {searchLabel}
        </label>
        <Search aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 size-5 -translate-y-1/2 text-muted" />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={searchLabel}
          autoComplete="off"
          className="h-14 w-full border-b border-ocean/40 bg-transparent pl-8 pr-10 text-lg outline-none transition-colors placeholder:text-muted/80 focus:border-ocean [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            className="absolute right-0 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center text-muted hover:text-ocean"
          >
            <X aria-hidden="true" className="size-4" />
            <span className="sr-only">Clear search text</span>
          </button>
        ) : null}
      </div>

      <fieldset>
        <legend className="sr-only">Filter by category</legend>
        <div className="flex flex-wrap gap-2">
          <FilterChip label="All" pressed={selected === null} onClick={() => onSelect(null)} />
          {options.map((option) => (
            <FilterChip
              key={option.id}
              label={option.label}
              count={option.count}
              pressed={selected === option.id}
              onClick={() => onSelect(selected === option.id ? null : option.id)}
            />
          ))}
        </div>
      </fieldset>

      <div className="flex min-h-10 flex-wrap items-center gap-x-6 gap-y-2 text-[0.9375rem]">
        <p aria-live="polite" className="text-muted">
          Showing {resultCount} {resultCount === 1 ? noun[0] : noun[1]}
        </p>
        {filtered ? (
          <button type="button" onClick={onClear} className="link-underline text-ocean">
            Clear filters
          </button>
        ) : null}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  count,
  pressed,
  onClick,
}: {
  label: string;
  count?: number;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex min-h-10 items-center gap-2 border px-4 text-[0.9375rem] transition-colors ${
        pressed ? "border-ocean bg-ocean text-shell" : "border-line text-ink hover:border-ocean"
      }`}
    >
      {label}
      {count !== undefined ? <span className={pressed ? "text-shell/70" : "text-muted"}>{count}</span> : null}
    </button>
  );
}

export function EmptyResults({ query, onClear, what }: { query: string; onClear: () => void; what: string }) {
  return (
    <div className="border border-dashed border-line px-6 py-14 text-center">
      <p className="font-display text-3xl">No {what} match {query.trim() ? `“${query.trim()}”` : "this filter"}.</p>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Try a different word or another category. You can also clear everything and start again.
      </p>
      <button type="button" onClick={onClear} className="mt-6 inline-flex min-h-12 items-center bg-ocean px-6 text-shell hover:bg-tide">
        Clear filters
      </button>
    </div>
  );
}
