import type { CategoryInfo, DestinationCategory, StoryCategory } from "@/types/content";

export const destinationCategories: CategoryInfo<DestinationCategory>[] = [
  {
    id: "beaches-coastlines",
    label: "Beaches & coastlines",
    description: "Shoreline, reefs, and the protected waters of Sarangani Bay.",
  },
  {
    id: "nature-landscapes",
    label: "Nature & landscapes",
    description: "Coconut hills, farmland, and views across the bay.",
  },
  {
    id: "outdoor-adventures",
    label: "Outdoor adventures",
    description: "Diving, flying, and time spent on the water.",
  },
  {
    id: "community-culture",
    label: "Community & culture",
    description: "The town centre, its people, and its heritage.",
  },
  {
    id: "local-food",
    label: "Local food",
    description: "What the coast and the hills put on the table.",
  },
];

export const storyCategories: CategoryInfo<StoryCategory>[] = [
  { id: "coast", label: "Coast & sea", description: "Life on and under Sarangani Bay." },
  { id: "landscape", label: "Land & farms", description: "The hills behind the shore." },
  { id: "culture", label: "Culture", description: "Communities and traditions." },
  { id: "planning", label: "Trip planning", description: "Practical guides for visitors." },
];

export function destinationCategoryLabel(id: DestinationCategory) {
  return destinationCategories.find((category) => category.id === id)?.label ?? id;
}

export function storyCategoryLabel(id: StoryCategory) {
  return storyCategories.find((category) => category.id === id)?.label ?? id;
}
