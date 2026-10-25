import { ItineraryExplorer } from "./ItineraryExplorer";

export function ItinerariesSection() {
  return (
    <section id="itineraries" aria-labelledby="itineraries-title" className="border-t border-line py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="itineraries-title" className="text-headline md:col-span-7">
            Half a day, a full day, or a weekend
          </h2>
          <p className="max-w-md text-muted md:col-span-5 md:pb-2">
            Suggested itineraries only. Timings, transport, and access have not been officially verified, so confirm the
            details with the tourism office before you travel.
          </p>
        </div>
        <div className="mt-14">
          <ItineraryExplorer />
        </div>
      </div>
    </section>
  );
}
