import type { Faq, GuideSection } from "@/types/content";

export const guideSections: GuideSection[] = [
  {
    id: "getting-here",
    title: "How to reach Maasim",
    intro: "Most visitors arrive through General Santos City, Maasim's neighbour on Sarangani Bay.",
    points: [
      {
        text: "General Santos International Airport is the closest commercial airport, with domestic flights from Manila and other Philippine cities.",
        status: "verified",
      },
      {
        text: "Maasim shares a border with General Santos City and is reached by road along the coast.",
        status: "verified",
      },
      {
        text: "Road travel times from the airport and city centre depend on route and traffic.",
        status: "confirm",
      },
    ],
  },
  {
    id: "getting-around",
    title: "Getting around",
    intro: "Plan local transport before you arrive, especially for trips to the coast or the hills.",
    points: [
      {
        text: "Hiring a vehicle with a driver from General Santos is a flexible option for day trips.",
        status: "confirm",
      },
      {
        text: "Public transport routes, terminals, and fares to Maasim.",
        status: "confirm",
      },
      {
        text: "Boat trips should be arranged through accredited operators.",
        status: "confirm",
      },
    ],
  },
  {
    id: "where-to-stay",
    title: "Where to stay",
    intro: "Beach resorts operate along the Maasim coast, and General Santos City offers a wider range of hotels.",
    points: [
      {
        text: "General Santos City has many hotels and is a practical base for day trips.",
        status: "verified",
      },
      {
        text: "Accredited resorts and homestays in Maasim will be listed once confirmed by the tourism office.",
        status: "confirm",
      },
    ],
  },
  {
    id: "food",
    title: "Food and dining",
    intro: "Coconut, corn, fruit, beef, and fish are all produced locally.",
    points: [
      {
        text: "Maasim's farms and waters supply coconuts, corn, bananas, mangoes, beef, and fish.",
        status: "verified",
      },
      {
        text: "Recommended eateries, markets, and market days.",
        status: "confirm",
      },
    ],
  },
  {
    id: "responsible-travel",
    title: "Responsible travel",
    intro: "Sarangani Bay is a Protected Seascape, and Maasim's uplands are home to Indigenous communities.",
    points: [
      { text: "Leave coral, shells, and marine life where you find them.", status: "verified" },
      {
        text: "Arrange visits to Indigenous communities through the proper local channels.",
        status: "verified",
      },
      { text: "Hire local guides and buy from local businesses.", status: "verified" },
      { text: "Take your rubbish with you.", status: "verified" },
    ],
  },
  {
    id: "reminders",
    title: "Visitor reminders",
    intro: "A few things to pack and check before you go.",
    points: [
      { text: "Bring cash in small bills; card payment is not available everywhere.", status: "verified" },
      { text: "Carry water, sun protection, and a light rain jacket.", status: "verified" },
      { text: "Check weather and sea advisories before boat trips.", status: "verified" },
      { text: "Mobile signal coverage across the municipality.", status: "confirm" },
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: "Where is Maasim?",
    answer:
      "Maasim is a coastal municipality in Sarangani Province, in the Soccsksargen region of southern Mindanao. It sits on Sarangani Bay, west of General Santos City, with Kiamba to the west and the Celebes Sea to the south-west.",
  },
  {
    question: "Is this the official tourism website of Maasim?",
    answer:
      "No. This is an independent website concept for Maasim. It is not affiliated with or endorsed by the Municipal Government of Maasim. For official information, contact the municipal tourism office directly.",
  },
  {
    question: "Can I visit as a day trip from General Santos?",
    answer:
      "Yes, Maasim borders General Santos City, so a half-day or full-day visit is practical. Allow extra time for traffic and arrange boat trips in advance.",
  },
  {
    question: "Do I need to book dives in advance?",
    answer:
      "It is strongly recommended. Diving should be done with a local operator who knows the sites and sanctuary rules. A confirmed list of operators is still being prepared.",
  },
  {
    question: "Are there entrance fees to marine sanctuaries?",
    answer:
      "Fees and access rules are set locally and have not yet been confirmed for this site. Ask the municipal tourism office before visiting.",
  },
  {
    question: "What is the best time of year to visit?",
    answer:
      "Weather patterns and sea conditions for planning trips are still to be confirmed with local sources. Check forecasts and advisories before travelling.",
  },
];
