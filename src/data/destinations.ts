import type { Destination } from "@/types/content";

const commonCoastalTips = [
  "Do not touch, stand on, or collect coral, shells, or marine life.",
  "Use reef-safe sunscreen, or cover up with a rash guard instead.",
  "Carry your rubbish back out with you; bins can be scarce on the shore.",
];

export const destinations: Destination[] = [
  {
    slug: "kamanga-marine-sanctuary",
    name: "Kamanga Marine Eco-Tourism Park and Sanctuary",
    category: "beaches-coastlines",
    summary:
      "A community-protected stretch of Sarangani Bay in Barangay Kamanga, recognised nationally as an outstanding marine protected area.",
    overview: [
      "Kamanga's marine sanctuary protects a section of reef along Maasim's share of Sarangani Bay. It was named among the Most Outstanding Marine Protected Areas in the Philippines in the Para El Mar awards, which recognise sites where local communities and governments keep reefs healthy over the long term.",
      "For visitors, that recognition is a reason to treat the water carefully rather than a promise of a particular sighting. Marine sanctuaries usually limit where you can swim, dive, or anchor, and some areas may be closed entirely to let the reef recover.",
    ],
    status: "partial",
    location: {
      label: "Barangay Kamanga, Maasim",
      verified: true,
    },
    heroPhoto: "sarangani-bay-seascape",
    gallery: ["sarangani-bay-seascape", "sarangani-bay-seascape-rocks", "sarangani-bay-boat"],
    thingsToKnow: [
      "Access rules, visitor fees, and permitted activities are set locally. Ask the Municipal Tourism Office before you go.",
      "Snorkelling and diving should be arranged with an operator familiar with the sanctuary boundaries.",
      "Conditions on the bay change with the season and the weather; plan a backup day.",
    ],
    responsibleTips: [
      ...commonCoastalTips,
      "Follow the instructions of sanctuary wardens and boat operators.",
    ],
    toVerify: [
      "Current opening status and visitor access points",
      "Entrance or environmental fees, if any",
      "Accredited dive and snorkel operators",
      "Official photographs of the sanctuary",
    ],
    sources: [
      {
        label: "Philstar column on the Para El Mar recognition",
        url: "https://www.philstar.com/columnists/1524749/mike-litton",
      },
    ],
    relatedStories: ["reading-sarangani-bay", "before-you-dive-tinoto"],
    featured: true,
  },
  {
    slug: "tinoto-wall",
    name: "Tinoto Wall",
    category: "outdoor-adventures",
    summary:
      "A steep reef wall off Barangay Tinoto that divers in the province often name as Sarangani's best dive site.",
    overview: [
      "Tinoto Wall is a dive site where the reef drops away steeply into the deep water of Sarangani Bay. News coverage of the province regularly calls it the top dive site in Sarangani, and divers have reported large marine life on its slopes.",
      "Because the wall falls into deep water, it is a site for certified divers with a guide who knows the currents. Snorkellers and beginners should ask operators about shallower alternatives.",
    ],
    status: "partial",
    location: {
      label: "Barangay Tinoto, Maasim",
      verified: true,
    },
    heroPhoto: "sarangani-bay-boat",
    gallery: ["sarangani-bay-boat", "sarangani-bay-fishing-boat"],
    thingsToKnow: [
      "This is a deep-water site. Dive only with proper certification and a local guide.",
      "Bring your certification card and logbook; operators may ask for them.",
      "Sightings of large marine animals are never guaranteed.",
    ],
    responsibleTips: [
      ...commonCoastalTips,
      "Keep good buoyancy control near the wall to avoid kicking the reef.",
    ],
    toVerify: [
      "Dive operators currently serving Tinoto",
      "Recommended certification level and depth guidance",
      "Best months to dive",
      "Underwater photographs from Maasim",
    ],
    sources: [
      {
        label: "Inquirer: Maasim, southern hub for investment and leisure",
        url: "https://business.inquirer.net/?p=277919",
      },
    ],
    relatedStories: ["before-you-dive-tinoto"],
    featured: true,
  },
  {
    slug: "maasim-shoreline",
    name: "Maasim shoreline",
    category: "beaches-coastlines",
    summary:
      "Quiet beaches, mangroves, and bamboo walkways along Maasim's edge of Sarangani Bay, with views across to the far shore.",
    overview: [
      "Maasim's coast faces Sarangani Bay, which is a Protected Seascape and one of the country's key marine biodiversity areas. Much of the shoreline is lined with coconut palms and shoreline trees, with fishing communities and small resorts in between.",
      "At low tide the water pulls back over sand and rock, and on clear days the mountains on the far side of the bay are visible from the beach.",
    ],
    status: "partial",
    location: {
      label: "Along the coast of Maasim",
      verified: true,
      note: "The photograph was taken at a beach resort in Maasim in 2009. Individual public beaches still need to be listed.",
    },
    heroPhoto: "maasim-bay-4ml-strand",
    gallery: ["maasim-bay-4ml-strand", "sarangani-bay-mangroves", "sarangani-bay-roots"],
    thingsToKnow: [
      "Many beachfront properties are privately owned. Ask before entering and expect entrance fees at resorts.",
      "Tides change the shoreline a great deal. Check the tide before planning a swim.",
      "Shade is limited at midday; bring water and a hat.",
    ],
    responsibleTips: [
      ...commonCoastalTips,
      "Stay on walkways through mangrove areas; the roots are fragile and protect the coast.",
    ],
    toVerify: [
      "Public beaches open to day visitors",
      "Accredited beach resorts and their current names",
      "Lifeguard or safety arrangements",
    ],
    sources: [
      {
        label: "Photo: View of Sarangani Bay at 4ML Strand beach resort, Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:View_of_Sarangani_Bay_at_4ML_Strand_beach_resort.jpg",
      },
    ],
    relatedStories: ["reading-sarangani-bay"],
    featured: true,
  },
  {
    slug: "iml-ecopark",
    name: "IML Ecopark viewpoint",
    category: "nature-landscapes",
    summary:
      "A hillside park in Maasim with a sweeping view over coconut groves, farmland, and the turquoise edge of the bay.",
    overview: [
      "Photographs taken at IML Ecopark in 2014 show a hillside setting high above the coast: a winding road through cornfields, ponds in the valley, and coconut palms running all the way down to the bay.",
      "It is one of the clearest views of how Maasim's land and sea meet. Whether the park is open to the public today has not yet been confirmed.",
    ],
    status: "placeholder",
    location: {
      label: "Maasim, Sarangani",
      verified: true,
      note: "Barangay location and access road need confirmation.",
    },
    heroPhoto: "maasim-iml-ecopark-panorama",
    gallery: ["maasim-iml-ecopark-panorama", "maasim-iml-ecopark-hills"],
    thingsToKnow: [
      "Confirm with the Municipal Tourism Office that the park is open to visitors before travelling.",
      "Hillside roads can be steep and slippery after rain.",
    ],
    responsibleTips: [
      "Stay on paths and roads; the surrounding land is farmed.",
      "Ask permission before photographing people at work in the fields.",
    ],
    toVerify: [
      "Whether IML Ecopark is currently open to the public",
      "Exact barangay and directions",
      "Opening hours and fees",
    ],
    sources: [
      {
        label: "Photo: IML panorama, Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:IML_panorama_01.jpg",
      },
    ],
    relatedStories: ["coconut-country"],
    featured: true,
  },
  {
    slug: "maasim-hill-country",
    name: "Maasim hill country",
    category: "nature-landscapes",
    summary:
      "Rolling hills of coconut, banana, and grazing land that rise behind the coast toward the mountains.",
    overview: [
      "Maasim reaches from sea level to roughly 740 metres. Away from the shore, the land climbs through coconut and banana plantings, cornfields, and pasture: agriculture, copra, and cattle are the backbone of the local economy.",
      "These are working landscapes rather than formal attractions. The best way to see them is with a local guide who can explain what is grown, who farms it, and where it is respectful to stop.",
    ],
    status: "partial",
    location: {
      label: "Inland Maasim",
      verified: true,
    },
    heroPhoto: "maasim-iml-ecopark-hills",
    gallery: ["maasim-iml-ecopark-hills", "maasim-iml-ecopark-panorama"],
    thingsToKnow: [
      "Most land is private farmland. Do not enter fields without permission.",
      "Upland communities include Indigenous B'laan families. Visits should be arranged through the proper local channels.",
      "Road conditions vary; ask locally before driving inland.",
    ],
    responsibleTips: [
      "Hire local guides and buy from local producers.",
      "Leave gates, fences, and livestock as you found them.",
    ],
    toVerify: [
      "Viewpoints and trails suitable for visitors",
      "Community-based tourism contacts for upland barangays",
    ],
    sources: [{ label: "Maasim, Wikipedia", url: "https://en.wikipedia.org/wiki/Maasim" }],
    relatedStories: ["coconut-country", "visiting-with-care"],
  },
  {
    slug: "paragliding-near-maasim",
    name: "Paragliding near Maasim",
    category: "outdoor-adventures",
    summary:
      "A mountaintop launch site above Sarangani Bay that hosted a leg of the 2015 Paragliding Accuracy World Cup.",
    overview: [
      "In 2015 the Department of Tourism adopted a paragliding competition above Sarangani Bay as Region XII's banner event, and pilots from around the world came to fly. Reports describe the launch site as part of a ranch in Siguel, with pilots landing hundreds of metres below.",
      "Some coverage places the site in Maasim, while Siguel is also the name of a barangay in neighbouring General Santos City. Until the location is confirmed, this listing is shown as nearby rather than within Maasim.",
    ],
    status: "placeholder",
    location: {
      label: "Siguel, near the Maasim–General Santos boundary",
      verified: false,
      note: "Location reported differently by different sources.",
    },
    heroPhoto: "sarangani-bay-fishing-boat",
    gallery: ["sarangani-bay-fishing-boat"],
    thingsToKnow: [
      "Paragliding should only be done with a licensed club or tandem pilot.",
      "Flying depends entirely on wind and weather on the day.",
    ],
    responsibleTips: [
      "Respect the landowner's rules for the launch and landing areas.",
      "Do not fly drones near active paragliding launches.",
    ],
    toVerify: [
      "Exact location of the launch site and which municipality it is in",
      "Whether tandem flights are currently offered, and by whom",
    ],
    sources: [
      {
        label: "MindaNews: World paragliding tilt chosen as Region 12's tourism banner event",
        url: "https://mindanews.com/sports/2015/02/world-paragliding-tilt-chosen-as-region-12s-tourism-banner-event/",
      },
      {
        label: "SunStar: Paragliding, Sarangani's newest attraction",
        url: "https://www.sunstar.com.ph/more-articles/paragliding-saranganis-newest-attraction",
      },
    ],
    relatedStories: [],
  },
  {
    slug: "poblacion-maasim",
    name: "Poblacion, the town centre",
    category: "community-culture",
    summary:
      "Maasim's town centre and seat of local government, where most visits begin and where the tourism office can help.",
    overview: [
      "The Poblacion is the administrative heart of Maasim and home to the municipal hall. It is the natural first stop for visitors who want current advice on access to sanctuaries, beaches, and upland communities.",
      "Maasim has been a municipality since 1969 and joined the new province of Sarangani when it was created in 1992.",
    ],
    status: "verified",
    location: {
      label: "Poblacion, Maasim",
      verified: true,
    },
    heroPhoto: "maasim-municipal-hall",
    gallery: ["maasim-municipal-hall"],
    thingsToKnow: [
      "Government offices keep weekday hours. Call ahead if you need to visit the tourism office.",
      "Bring cash; card payments may not be accepted everywhere.",
    ],
    responsibleTips: [
      "Dress modestly when visiting government offices and places of worship.",
      "Ask before photographing people.",
    ],
    toVerify: ["Tourism office location, hours, and contact details"],
    sources: [{ label: "Maasim, Wikipedia", url: "https://en.wikipedia.org/wiki/Maasim" }],
    relatedStories: ["half-day-from-gensan"],
  },
  {
    slug: "local-catch-and-copra",
    name: "Local catch and coconut kitchens",
    category: "local-food",
    summary:
      "A placeholder for Maasim's food listings: markets, eateries, and the coconut and seafood dishes of the coast.",
    overview: [
      "Maasim produces coconuts, corn, bananas, mangoes, beef, and fish, and it sits next door to General Santos City, one of the country's busiest fishing ports. The ingredients for a good coastal meal are close at hand.",
      "Specific markets, eateries, and dishes have not yet been listed. This page will be completed with information from the Municipal Tourism Office and local food businesses.",
    ],
    status: "placeholder",
    location: {
      label: "To be confirmed",
      verified: false,
    },
    gallery: [],
    thingsToKnow: [
      "Ask locally about market days and the freshest catch.",
      "Carry small bills for markets and roadside stalls.",
    ],
    responsibleTips: [
      "Buy from local vendors and family-run eateries.",
      "Avoid dishes made from protected species, such as sea turtles or giant clams.",
    ],
    toVerify: [
      "Public markets and market days",
      "Eateries and food businesses that want to be listed",
      "Signature local dishes",
    ],
    sources: [{ label: "Maasim, Wikipedia", url: "https://en.wikipedia.org/wiki/Maasim" }],
    relatedStories: ["coconut-country"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getDestinations(slugs: string[]) {
  return slugs
    .map((slug) => getDestination(slug))
    .filter((destination): destination is Destination => Boolean(destination));
}

export const featuredDestinations = destinations.filter((destination) => destination.featured);
