import { CultureSection } from "@/components/home/CultureSection";
import { DiscoverIntro } from "@/components/home/DiscoverIntro";
import { EventsSection } from "@/components/home/EventsSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { FinalCta } from "@/components/home/FinalCta";
import { GuidePreview } from "@/components/home/GuidePreview";
import { Hero } from "@/components/home/Hero";
import { ItinerariesSection } from "@/components/home/ItinerariesSection";
import { StoriesSection } from "@/components/home/StoriesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DiscoverIntro />
      <FeaturedDestinations />
      <ExperiencesSection />
      <StoriesSection />
      <CultureSection />
      <ItinerariesSection />
      <GuidePreview />
      <EventsSection />
      <FinalCta />
    </>
  );
}
