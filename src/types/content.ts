export type VerificationStatus = "verified" | "partial" | "placeholder";

export type Source = {
  label: string;
  url: string;
};

export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  location: string;
  takenInMaasim: boolean;
  credit: {
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  };
};

export type DestinationCategory =
  | "beaches-coastlines"
  | "nature-landscapes"
  | "outdoor-adventures"
  | "community-culture"
  | "local-food";

export type CategoryInfo<T extends string> = {
  id: T;
  label: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  category: DestinationCategory;
  summary: string;
  overview: string[];
  status: VerificationStatus;
  location: {
    label: string;
    verified: boolean;
    note?: string;
  };
  heroPhoto?: string;
  gallery: string[];
  thingsToKnow: string[];
  responsibleTips: string[];
  toVerify: string[];
  sources: Source[];
  relatedStories: string[];
  featured?: boolean;
};

export type StoryCategory = "coast" | "culture" | "planning" | "landscape";

export type StoryBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "photo"; photo: string };

export type Story = {
  slug: string;
  title: string;
  dek: string;
  category: StoryCategory;
  heroPhoto: string;
  body: StoryBlock[];
  relatedDestinations: string[];
  sources: Source[];
  featured?: boolean;
};

export type ExperienceAvailability = "reported" | "inspiration";

export type Experience = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  availability: ExperienceAvailability;
  photo?: string;
  relatedDestinations: string[];
};

export type ItineraryStop = {
  timeOfDay: string;
  title: string;
  description: string;
  destination?: string;
};

export type Itinerary = {
  slug: string;
  title: string;
  length: string;
  summary: string;
  photo: string;
  stops: ItineraryStop[];
  beforeYouGo: string[];
};

export type CommunityEvent = {
  id: string;
  title: string;
  kind: "festival" | "community" | "announcement";
  when: string;
  description: string;
  demo: true;
};

export type GuideSection = {
  id: string;
  title: string;
  intro: string;
  points: { text: string; status: "verified" | "confirm" }[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};
