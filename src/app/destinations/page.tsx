import type { Metadata } from "next";
import { DestinationBrowser } from "@/components/destinations/DestinationBrowser";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Beaches, marine sanctuaries, dive sites, and hill country in Maasim, Sarangani, with clear notes on what has been verified.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
        title="Destinations in and around Maasim"
        lede="Search or filter by category. Each place is marked as verified, partly verified, or needing confirmation, so you know what to check before you go."
      />
      <section aria-label="Destination list" className="shell py-14 md:py-20">
        <DestinationBrowser />
      </section>
    </>
  );
}
