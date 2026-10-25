import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    slug: "diving-the-bay",
    title: "Dive the walls and reefs of the bay",
    summary: "Tinoto Wall and the Kamanga sanctuary are the names divers mention most.",
    detail:
      "News reports describe Tinoto Wall as Sarangani's top dive site, and the Kamanga sanctuary has been recognised nationally for its protected reef. Dive with a local operator who knows the currents and the sanctuary rules.",
    availability: "reported",
    photo: "sarangani-bay-boat",
    relatedDestinations: ["tinoto-wall", "kamanga-marine-sanctuary"],
  },
  {
    slug: "coastal-exploration",
    title: "Walk the shoreline at low tide",
    summary: "Mangroves, tide flats, and long views across the water.",
    detail:
      "When the tide is out, the edge of the bay opens up. Walk slowly, keep to firm sand and walkways, and leave the mangroves and the creatures in the tide pools as you found them.",
    availability: "inspiration",
    photo: "sarangani-bay-mangroves",
    relatedDestinations: ["maasim-shoreline"],
  },
  {
    slug: "hillside-views",
    title: "Look back at the coast from the hills",
    summary: "Coconut country rises fast behind the shore.",
    detail:
      "The land climbs quickly from the beach, and a short drive inland brings views over palms and farmland to the bay. Ask locally for viewpoints that welcome visitors.",
    availability: "inspiration",
    photo: "maasim-iml-ecopark-panorama",
    relatedDestinations: ["iml-ecopark", "maasim-hill-country"],
  },
  {
    slug: "paragliding",
    title: "Fly above the bay",
    summary: "A launch site near Maasim hosted a 2015 paragliding world cup leg.",
    detail:
      "Paragliding pilots from many countries competed above Sarangani Bay in 2015. Whether tandem flights are currently available, and from exactly where, still needs confirming.",
    availability: "reported",
    photo: "sarangani-bay-fishing-boat",
    relatedDestinations: ["paragliding-near-maasim"],
  },
  {
    slug: "food-discovery",
    title: "Eat from the coast and the hills",
    summary: "Coconut, fresh fish, and farm produce from the surrounding land.",
    detail:
      "Maasim grows coconuts, corn, bananas, and mangoes, raises cattle, and fishes the bay. Look for family-run eateries and markets, and ask what came in that morning.",
    availability: "inspiration",
    relatedDestinations: ["local-catch-and-copra"],
  },
  {
    slug: "community-tourism",
    title: "Meet the community, on its terms",
    summary: "Visits arranged with the community, with fair pay for guides and makers.",
    detail:
      "Community-based tourism lets residents decide how visitors are welcomed. Arrangements in Maasim have not yet been confirmed; the tourism office is the right first contact.",
    availability: "inspiration",
    photo: "blaan-mat-weaving",
    relatedDestinations: ["poblacion-maasim", "maasim-hill-country"],
  },
];

export const availabilityLabels: Record<Experience["availability"], { label: string; detail: string }> = {
  reported: {
    label: "Reported in Maasim",
    detail: "Documented in news or public sources; current operators still to be confirmed.",
  },
  inspiration: {
    label: "Travel inspiration",
    detail: "A general idea for your trip, not a confirmed tour or service.",
  },
};
