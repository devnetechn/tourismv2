import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/data/site";
import { stories } from "@/data/stories";

const staticRoutes = [
  "",
  "/destinations",
  "/experiences",
  "/culture",
  "/stories",
  "/travel-guide",
  "/about",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...destinations.map((destination) => ({
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...stories.map((story) => ({
      url: `${siteConfig.url}/stories/${story.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
