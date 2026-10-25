import type { Itinerary } from "@/types/content";

export const itineraries: Itinerary[] = [
  {
    slug: "half-day",
    title: "Half-day discovery",
    length: "Half day",
    summary: "A short loop for travellers based in General Santos: the town centre, then the shore.",
    photo: "maasim-municipal-hall",
    stops: [
      {
        timeOfDay: "Morning",
        title: "Start in the Poblacion",
        description:
          "Stop at the town centre for current advice on beach access and conditions on the bay.",
        destination: "poblacion-maasim",
      },
      {
        timeOfDay: "Late morning",
        title: "Down to the shoreline",
        description: "Spend unhurried time by the water, timing your walk with low tide if you can.",
        destination: "maasim-shoreline",
      },
      {
        timeOfDay: "Midday",
        title: "Lunch from the coast",
        description: "Look for a local eatery serving fish and coconut dishes before heading back.",
        destination: "local-catch-and-copra",
      },
    ],
    beforeYouGo: [
      "Confirm opening times with the tourism office.",
      "Bring cash, water, and sun protection.",
    ],
  },
  {
    slug: "one-day",
    title: "One-day coastal escape",
    length: "One day",
    summary: "A full day built around the water, with a view from the hills to finish.",
    photo: "maasim-bay-4ml-strand",
    stops: [
      {
        timeOfDay: "Early morning",
        title: "On the water",
        description:
          "Morning is often the calmest time on the bay. Join a pre-arranged snorkel or dive trip with a local operator.",
        destination: "kamanga-marine-sanctuary",
      },
      {
        timeOfDay: "Midday",
        title: "Rest by the shore",
        description: "Lunch and shade near the beach, out of the strongest sun.",
        destination: "maasim-shoreline",
      },
      {
        timeOfDay: "Afternoon",
        title: "Into the hills",
        description: "Head inland for a look back at the coast across coconut country.",
        destination: "maasim-hill-country",
      },
    ],
    beforeYouGo: [
      "Book diving or snorkelling in advance.",
      "Check the weather and sea forecast the day before.",
    ],
  },
  {
    slug: "weekend",
    title: "A weekend in Maasim",
    length: "Two days",
    summary: "Time for a proper dive, a slower look at the coast, and a visit inland.",
    photo: "maasim-iml-ecopark-hills",
    stops: [
      {
        timeOfDay: "Day one, morning",
        title: "Dive Tinoto Wall",
        description: "Certified divers can plan a guided dive on Sarangani's best-known wall.",
        destination: "tinoto-wall",
      },
      {
        timeOfDay: "Day one, afternoon",
        title: "Shoreline and sunset",
        description: "Settle in on the coast and watch the light change over the bay.",
        destination: "maasim-shoreline",
      },
      {
        timeOfDay: "Day two, morning",
        title: "Sanctuary visit",
        description: "Snorkel or learn about the Kamanga sanctuary with a local guide.",
        destination: "kamanga-marine-sanctuary",
      },
      {
        timeOfDay: "Day two, afternoon",
        title: "Hill country",
        description: "Spend the afternoon inland among the farms and viewpoints.",
        destination: "maasim-hill-country",
      },
    ],
    beforeYouGo: [
      "Reserve accommodation ahead; listings are still being confirmed.",
      "Leave a day's slack in case the weather keeps boats in.",
    ],
  },
];
