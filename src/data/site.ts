import type { NavItem, Source } from "@/types/content";

export const siteConfig = {
  name: "Maasim",
  wordmark: "MAASIM",
  tagline: "Discover the Coast. Experience the Culture.",
  description:
    "A travel guide to Maasim, Sarangani: a coastal town on Sarangani Bay in southern Mindanao, with hillside views, marine sanctuaries, and practical visitor information.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_PH",
  copyrightYear: 2026,
  coordinates: { label: "5°56′ N, 124°58′ E", lat: 5.933, lng: 124.967 },
  contact: {
    office: "Municipal Tourism Office of Maasim",
    email: null as string | null,
    phone: null as string | null,
    address: "Poblacion, Maasim, Sarangani Province, Philippines",
  },
  social: [
    { label: "Facebook", href: null },
    { label: "Instagram", href: null },
    { label: "YouTube", href: null },
  ] satisfies { label: string; href: string | null }[],
} as const;

export const mainNav: NavItem[] = [
  { label: "Discover", href: "/#discover" },
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "Culture & Food", href: "/culture" },
  { label: "Travel Guide", href: "/travel-guide" },
];

export const footerNav: NavItem[] = [
  { label: "Stories", href: "/stories" },
  { label: "Itineraries", href: "/#itineraries" },
  { label: "Events", href: "/#events" },
  { label: "About this site", href: "/about" },
  { label: "Photo credits", href: "/about#photo-credits" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];

export const townFacts: { label: string; value: string }[] = [
  { label: "Province", value: "Sarangani, Region XII (Soccsksargen)" },
  { label: "Barangays", value: "16, from Amsipit to Tinoto" },
  { label: "Land area", value: "About 500 km²" },
  { label: "Neighbours", value: "General Santos City, Kiamba, and T'boli" },
  { label: "Waters", value: "Sarangani Bay and the Celebes Sea" },
];

export const barangays = [
  "Amsipit",
  "Bales",
  "Colon",
  "Daliao",
  "Kabatiol",
  "Kablacan",
  "Kamanga",
  "Kanalo",
  "Lumasal",
  "Lumatil",
  "Malbang",
  "Nomoh",
  "Pananag",
  "Poblacion",
  "Seven Hills",
  "Tinoto",
];

export const generalSources: Source[] = [
  { label: "Maasim, Wikipedia", url: "https://en.wikipedia.org/wiki/Maasim" },
  {
    label: "Sarangani Bay Protected Seascape, Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sarangani_Bay",
  },
];
