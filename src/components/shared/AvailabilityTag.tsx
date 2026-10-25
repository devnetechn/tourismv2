import { availabilityLabels } from "@/data/experiences";
import type { ExperienceAvailability } from "@/types/content";

export function AvailabilityTag({ availability }: { availability: ExperienceAvailability }) {
  const reported = availability === "reported";
  return (
    <span className="inline-flex items-center gap-2 text-[0.8125rem] leading-none text-muted" title={availabilityLabels[availability].detail}>
      <span
        aria-hidden="true"
        className={`size-2 rotate-45 ${reported ? "bg-tide" : "border border-muted"}`}
      />
      {availabilityLabels[availability].label}
    </span>
  );
}
