import type { CommunityEvent } from "@/types/content";

export const events: CommunityEvent[] = [
  {
    id: "demo-town-fiesta",
    title: "Town fiesta and founding celebrations",
    kind: "festival",
    when: "Date to be announced",
    description:
      "Sample listing showing how a municipal celebration would appear, with schedules, venues, and visitor notes.",
    demo: true,
  },
  {
    id: "demo-coastal-cleanup",
    title: "Coastal clean-up day",
    kind: "community",
    when: "Date to be announced",
    description:
      "Sample listing for a volunteer activity where visitors can help care for the shoreline alongside residents.",
    demo: true,
  },
  {
    id: "demo-sanctuary-advisory",
    title: "Sanctuary visitor advisory",
    kind: "announcement",
    when: "Posted when issued",
    description:
      "Sample notice showing how closures, new visitor rules, or weather advisories from the tourism office would be shared.",
    demo: true,
  },
];

export const eventKindLabels: Record<CommunityEvent["kind"], string> = {
  festival: "Festival",
  community: "Community activity",
  announcement: "Tourism announcement",
};
