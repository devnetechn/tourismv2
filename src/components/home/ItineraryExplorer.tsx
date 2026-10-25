"use client";

import Link from "next/link";
import { type KeyboardEvent, useId, useRef, useState } from "react";
import { Photo } from "@/components/shared/Photo";
import { getDestination } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";

export function ItineraryExplorer() {
  const [activeIndex, setActiveIndex] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const active = itineraries[activeIndex];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = itineraries.length - 1;
    const moves: Record<string, number> = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Suggested itineraries" onKeyDown={onKeyDown} className="flex gap-1 overflow-x-auto border-b border-line">
        {itineraries.map((itinerary, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={itinerary.slug}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${baseId}-tab-${itinerary.slug}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={`-mb-px shrink-0 border-b-2 px-1 pb-4 pr-6 text-left transition-colors sm:pr-10 ${
                selected ? "border-ocean text-ocean" : "border-transparent text-muted hover:text-ocean"
              }`}
            >
              <span className="block text-[0.8125rem]">{itinerary.length}</span>
              <span className="mt-1 block font-display text-xl sm:text-2xl">{itinerary.title}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.slug}`}
        className="mt-10 grid gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-5">
          <Photo key={active.photo} id={active.photo} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] md:sticky md:top-28" />
        </div>
        <div className="md:col-span-7 lg:pl-8">
          <p className="text-lg">{active.summary}</p>
          <ol className="mt-8 border-l border-line">
            {active.stops.map((stop, index) => {
              const destination = stop.destination ? getDestination(stop.destination) : undefined;
              return (
                <li key={stop.title} className="relative pb-8 pl-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-3 top-0 flex size-6 items-center justify-center bg-shell font-display text-sm text-tide ring-1 ring-line"
                  >
                    {index + 1}
                  </span>
                  <p className="text-[0.8125rem] text-tide">{stop.timeOfDay}</p>
                  <h3 className="mt-1 text-2xl">{stop.title}</h3>
                  <p className="mt-2 max-w-lg text-muted">{stop.description}</p>
                  {destination ? (
                    <Link href={`/destinations/${destination.slug}`} className="link-underline mt-2 inline-block text-[0.9375rem] text-ocean">
                      About {destination.name}
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ol>
          <div className="mt-10 border border-dashed border-line p-5">
            <h3 className="font-sans text-[0.9375rem] font-semibold">Before you go</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.9375rem] text-muted">
              {active.beforeYouGo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
