import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { StoryBrowser } from "@/components/stories/StoryBrowser";

export const metadata: Metadata = {
  title: "Travel stories",
  description: "Short reads about Sarangani Bay, the Maasim hills, local culture, and planning a trip.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Stories" }]}
        title="Travel stories"
        lede="A growing journal about the coast, the hills, and travelling in Maasim with care."
      />
      <section aria-label="Story list" className="shell py-14 md:py-20">
        <StoryBrowser />
      </section>
    </>
  );
}
