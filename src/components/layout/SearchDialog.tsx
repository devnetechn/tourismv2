"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { type Ref, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from "react";
import { matchesQuery, searchIndex } from "@/lib/search";

export type SearchDialogHandle = { open: () => void };

const suggestions = ["Tinoto", "sanctuary", "diving", "hills", "General Santos"];

export function SearchDialog({ ref }: { ref: Ref<SearchDialogHandle> }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const inputId = useId();
  const resultsId = useId();

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({ open }));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target?.closest("input, textarea, select, [contenteditable='true']");
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || (event.key === "/" && !typing)) {
        event.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(
    () => (query.trim() ? searchIndex.filter((item) => matchesQuery(item.haystack, query)) : []),
    [query],
  );

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={inputId}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          close();
        }
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ocean-deep/70 backdrop:backdrop-blur-[2px] md:mx-auto md:mt-[12vh] md:h-auto md:max-w-2xl"
    >
      <div className="flex h-full flex-col bg-shell text-ink md:h-auto md:max-h-[70vh]">
        <form role="search" onSubmit={(event) => event.preventDefault()} className="flex items-center gap-3 border-b border-line px-4 md:px-6">
          <Search aria-hidden="true" className="size-5 shrink-0 text-muted" />
          <label htmlFor={inputId} className="sr-only">
            Search destinations, stories, and experiences
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Maasim"
            autoComplete="off"
            aria-controls={resultsId}
            className="h-16 min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-muted/80 [&::-webkit-search-cancel-button]:hidden"
          />
          <button type="button" onClick={close} className="inline-flex size-11 items-center justify-center">
            <X aria-hidden="true" className="size-5" />
            <span className="sr-only">Close search</span>
          </button>
        </form>

        <div id={resultsId} className="flex-1 overflow-y-auto px-4 py-5 md:px-6" aria-live="polite">
          {!query.trim() ? (
            <div>
              <p className="text-sm text-muted">Try searching for</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <li key={suggestion}>
                    <button
                      type="button"
                      onClick={() => {
                        setQuery(suggestion);
                        inputRef.current?.focus();
                      }}
                      className="border border-line px-3 py-1.5 text-sm hover:border-ocean"
                    >
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : results.length === 0 ? (
            <div className="py-6">
              <p className="font-display text-2xl">Nothing matches “{query.trim()}”.</p>
              <p className="mt-2 text-muted">
                Check the spelling, try a broader word like “beach” or “culture”, or{" "}
                <Link href="/destinations" onClick={close} className="link-underline text-ocean">
                  browse all destinations
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted">
                {results.length} {results.length === 1 ? "result" : "results"}
              </p>
              <ul className="mt-2 divide-y divide-line">
                {results.map((result) => (
                  <li key={result.href}>
                    <Link href={result.href} onClick={close} className="group block py-4">
                      <span className="text-[0.8125rem] text-tide">
                        {result.kind}
                        {result.kind !== "Experience" ? `, ${result.meta}` : ""}
                      </span>
                      <span className="mt-1 block font-display text-xl group-hover:underline group-hover:underline-offset-4">
                        {result.title}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-[0.9375rem] text-muted">{result.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
