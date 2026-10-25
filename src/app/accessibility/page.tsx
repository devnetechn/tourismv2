import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description: "Accessibility commitments and features of this Maasim travel guide.",
  alternates: { canonical: "/accessibility" },
};

const features = [
  "Works with a keyboard alone, with visible focus outlines and a skip link to the main content",
  "Semantic headings, landmarks, and labelled controls for screen readers",
  "Descriptive alternative text for every photograph",
  "Text and background colours chosen for readable contrast",
  "Animations are reduced or removed when your device asks for reduced motion",
  "Layouts adapt from small phones to large desktop screens, and pages stay usable when zoomed to 200%",
  "Search and filters work without loading extra services, which helps on slow connections",
];

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
        title="Accessibility statement"
        lede="This site aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA."
      />
      <div className="shell max-w-3xl space-y-12 py-16 md:py-20">
        <section>
          <h2 className="text-title">What we have done</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-lg leading-relaxed">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-title">Known limitations</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Linked external pages, such as news articles and map services, are outside our control and may not meet the
            same standard. The site has not yet had an independent accessibility audit.
          </p>
        </section>
        <section>
          <h2 className="text-title">Reporting a problem</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            A contact address for accessibility feedback will be published here once the site has an official owner.
          </p>
        </section>
      </div>
    </>
  );
}
