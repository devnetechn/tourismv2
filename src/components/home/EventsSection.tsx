import { CalendarDays } from "lucide-react";
import { DemoTag } from "@/components/shared/StatusTag";
import { eventKindLabels, events } from "@/data/events";

export function EventsSection() {
  return (
    <section id="events" aria-labelledby="events-title" className="py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="events-title" className="text-headline md:col-span-7">
            Events and community
          </h2>
          <div className="md:col-span-5 md:pb-2">
            <DemoTag />
            <p className="mt-4 max-w-md text-muted">
              No confirmed events are listed yet. The entries below are samples showing how festivals, community
              activities, and tourism announcements will appear once the tourism office provides them.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-px border border-dashed border-line bg-line md:grid-cols-3">
          {events.map((event) => (
            <li key={event.id} className="flex flex-col bg-shell p-6 md:p-8">
              <p className="text-[0.8125rem] text-tide">{eventKindLabels[event.kind]}</p>
              <h3 className="mt-3 text-2xl leading-tight">{event.title}</h3>
              <p className="mt-3 flex-1 text-[0.9375rem] text-muted">{event.description}</p>
              <p className="mt-6 flex items-center gap-2 text-sm">
                <CalendarDays aria-hidden="true" className="size-4 text-muted" />
                {event.when}
              </p>
              <p className="mt-2 text-xs text-coral-ink">Sample entry, not a real event</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
