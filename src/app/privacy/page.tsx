import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How this Maasim travel guide handles visitor information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "What we collect",
    text: "This website does not ask for personal information, does not have user accounts, and does not set advertising or analytics cookies. Searches and filters run entirely in your browser and are not sent anywhere.",
  },
  {
    title: "Hosting",
    text: "Whoever hosts this site may keep standard server logs, such as IP addresses and the pages requested, for security and reliability. The hosting provider and its retention period will be stated here before launch.",
  },
  {
    title: "External links",
    text: "Some pages link to other websites, such as news articles, Wikimedia Commons, and OpenStreetMap. Those sites have their own privacy policies.",
  },
  {
    title: "Changes",
    text: "If features such as contact forms or analytics are added, this policy will be updated to explain what is collected and why, in line with the Philippine Data Privacy Act of 2012.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]} title="Privacy policy" />
      <div className="shell max-w-3xl space-y-10 py-16 md:py-20">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-title">{section.title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{section.text}</p>
          </section>
        ))}
      </div>
    </>
  );
}
