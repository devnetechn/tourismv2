import type { Story, StoryBlock } from "@/types/content";

export const stories: Story[] = [
  {
    slug: "reading-sarangani-bay",
    title: "Reading the bay: a first look at Sarangani's protected seascape",
    dek: "Maasim's coast faces one of the Philippines' protected seascapes. Here is what that means for the way you swim, dive, and walk the shore.",
    category: "coast",
    heroPhoto: "maasim-bay-4ml-strand",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "From the shore at Maasim, Sarangani Bay looks calm and wide, with the mountains of the far coast fading into haze. What is less visible is the status of the water itself. The bay is a Protected Seascape under Philippine law and is counted among the country's key marine biodiversity areas.",
      },
      {
        type: "paragraph",
        text: "A protected seascape is not a closed area. People still live, fish, and travel on the bay. The designation sets out zones and rules so that fishing communities and marine life can both last. For visitors, it means some places are open for recreation, others are reserved for sanctuaries, and the rules can differ from one stretch of coast to the next.",
      },
      { type: "heading", text: "Sanctuaries along the Maasim coast" },
      {
        type: "paragraph",
        text: "Within the bay, individual towns and barangays manage smaller marine sanctuaries. The best known in Maasim is the Kamanga Marine Eco-Tourism Park and Sanctuary, which has been recognised among the most outstanding marine protected areas in the country. Recognition like this usually reflects years of patrols, community agreements, and restraint by local fishers.",
      },
      { type: "photo", photo: "sarangani-bay-seascape" },
      { type: "heading", text: "How to be a good guest on the water" },
      {
        type: "list",
        items: [
          "Ask the Municipal Tourism Office or your operator which areas are open to swimmers and divers.",
          "Never anchor on coral; use mooring buoys where they exist.",
          "Leave shells, coral, and sea creatures where you find them.",
          "Choose operators who brief you on sanctuary rules before you get in the water.",
        ],
      },
      {
        type: "note",
        text: "Sanctuary rules, fees, and access points for Maasim are being confirmed with the Municipal Tourism Office.",
      },
    ],
    relatedDestinations: ["kamanga-marine-sanctuary", "maasim-shoreline"],
    sources: [
      { label: "Sarangani Bay, Wikipedia", url: "https://en.wikipedia.org/wiki/Sarangani_Bay" },
      {
        label: "Philstar column on the Para El Mar recognition",
        url: "https://www.philstar.com/columnists/1524749/mike-litton",
      },
    ],
  },
  {
    slug: "before-you-dive-tinoto",
    title: "Before you dive Tinoto Wall",
    dek: "Sarangani's most talked-about dive site drops into deep water. A short checklist for divers planning a trip.",
    category: "coast",
    heroPhoto: "sarangani-bay-boat",
    body: [
      {
        type: "paragraph",
        text: "Ask divers in Sarangani where to go and Tinoto Wall comes up quickly. The site sits off Barangay Tinoto in Maasim, where the reef falls steeply into the deep water of the bay. News coverage of the province has repeatedly called it the best dive site in Sarangani.",
      },
      {
        type: "paragraph",
        text: "Walls are rewarding dives and unforgiving ones. There is no bottom close beneath you, and currents can push you along or away from the reef. Good planning matters more than usual.",
      },
      { type: "heading", text: "A checklist for divers" },
      {
        type: "list",
        items: [
          "Dive with a local operator who knows the site's currents and entry points.",
          "Bring your certification card and logbook.",
          "Agree on a maximum depth and turn-around time before you descend.",
          "Carry a surface marker buoy.",
          "Check your travel insurance covers diving.",
        ],
      },
      { type: "heading", text: "Not a diver?" },
      {
        type: "paragraph",
        text: "Ask operators about shallower reefs and snorkelling spots elsewhere along the Maasim coast, and about sanctuaries that welcome snorkellers with a guide.",
      },
      {
        type: "note",
        text: "Operators, recommended certification levels, and the best months to dive are still to be confirmed.",
      },
    ],
    relatedDestinations: ["tinoto-wall", "kamanga-marine-sanctuary"],
    sources: [
      {
        label: "Inquirer: Maasim, southern hub for investment and leisure",
        url: "https://business.inquirer.net/?p=277919",
      },
    ],
  },
  {
    slug: "coconut-country",
    title: "Coconut country: the hills behind the shore",
    dek: "Copra, corn, and cattle shape the land above Maasim's coast. A look at the working landscape most visitors only glimpse from the road.",
    category: "landscape",
    heroPhoto: "maasim-iml-ecopark-hills",
    body: [
      {
        type: "paragraph",
        text: "Drive inland from the Maasim coast and the land rises quickly. Coconut palms give way to banana plantings, cornfields, and pasture, and the ground climbs toward ridges that top out at around 740 metres.",
      },
      {
        type: "paragraph",
        text: "This is the town's economic base. Agriculture leads, with copra, the dried meat of the coconut, a major product. Cattle raising is the second-largest source of income. Maize, sugarcane, bananas, pineapples, and mangoes are grown here too.",
      },
      { type: "photo", photo: "maasim-iml-ecopark-panorama" },
      { type: "heading", text: "Seeing it respectfully" },
      {
        type: "list",
        items: [
          "Most of this land is private and farmed. Stay on public roads unless invited.",
          "Hire a local guide to explain what you are looking at.",
          "Buy local produce when it is offered.",
        ],
      },
    ],
    relatedDestinations: ["maasim-hill-country", "iml-ecopark", "local-catch-and-copra"],
    sources: [{ label: "Maasim, Wikipedia", url: "https://en.wikipedia.org/wiki/Maasim" }],
  },
  {
    slug: "visiting-with-care",
    title: "Visiting Sarangani's Indigenous communities with care",
    dek: "B'laan communities live in Maasim's uplands. A short guide to respectful, consent-based visits.",
    category: "culture",
    heroPhoto: "blaan-mat-weaving",
    body: [
      {
        type: "paragraph",
        text: "Maasim is home to people of many backgrounds, including Moro and Lumad communities and families who settled here from other parts of the Philippines. The B'laan, an Indigenous people of southern Mindanao, live in the town's mountainous areas.",
      },
      {
        type: "paragraph",
        text: "B'laan weaving is one of the best-known crafts of the province. The mat pictured here was made by Estelita Bantilan, a B'laan master weaver from Sarangani who works with palm leaves and natural dyes.",
      },
      { type: "heading", text: "Principles for a respectful visit" },
      {
        type: "list",
        items: [
          "Arrange visits through the community's own leaders or the proper local office, never unannounced.",
          "Ask before taking photographs, and accept a no.",
          "Pay fairly for crafts, performances, and guiding.",
          "Do not share sacred or ceremonial practices online without permission.",
        ],
      },
      {
        type: "note",
        text: "This site does not describe specific B'laan traditions in Maasim. Cultural content will be added only with the involvement of the communities concerned.",
      },
    ],
    relatedDestinations: ["maasim-hill-country", "poblacion-maasim"],
    sources: [
      { label: "Maasim, Wikipedia", url: "https://en.wikipedia.org/wiki/Maasim" },
      { label: "Estelita Bantilan, Wikipedia", url: "https://en.wikipedia.org/wiki/Estelita_Bantilan" },
    ],
  },
  {
    slug: "half-day-from-gensan",
    title: "Planning a short trip from General Santos",
    dek: "Maasim shares a border with General Santos City. How to think about a half day or a full day on this side of the bay.",
    category: "planning",
    heroPhoto: "sarangani-bay-fishing-boat",
    body: [
      {
        type: "paragraph",
        text: "General Santos City is the gateway to Sarangani Province, with the region's main airport and its busiest port. Maasim is its neighbour to the west, which makes the town an easy addition to a General Santos stay.",
      },
      {
        type: "paragraph",
        text: "Travel times depend on where you start, the route, and traffic, so plan with some slack. A half day is enough to see the coast; a full day lets you add time in the water or inland.",
      },
      { type: "heading", text: "Before you set out" },
      {
        type: "list",
        items: [
          "Contact the Municipal Tourism Office for current access to beaches and sanctuaries.",
          "Arrange diving or boat trips in advance.",
          "Carry cash, water, and sun protection.",
          "Check the weather; the bay can turn rough quickly.",
        ],
      },
      {
        type: "note",
        text: "Public transport routes, fares, and travel times between General Santos and Maasim are still being confirmed.",
      },
    ],
    relatedDestinations: ["poblacion-maasim", "maasim-shoreline"],
    sources: [{ label: "Maasim, Wikipedia", url: "https://en.wikipedia.org/wiki/Maasim" }],
  },
];

const WORDS_PER_MINUTE = 220;

function blockWords(block: StoryBlock) {
  if (block.type === "photo") return 0;
  const text = block.type === "list" ? block.items.join(" ") : block.text;
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(story: Story) {
  const words =
    story.dek.split(/\s+/).length + story.body.reduce((total, block) => total + blockWords(block), 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getStories(slugs: string[]) {
  return slugs.map((slug) => getStory(slug)).filter((story): story is Story => Boolean(story));
}
