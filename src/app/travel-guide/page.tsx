import { CircleCheck, CircleDashed } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/shared/FaqList";
import { PageHeader } from "@/components/shared/PageHeader";
import { faqs, guideSections } from "@/data/guide";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Travel guide",
  description:
    "How to reach Maasim, Sarangani, getting around, where to stay, food, responsible travel, and answers to common questions.",
  alternates: { canonical: "/travel-guide" },
};

export default function TravelGuidePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Travel guide" }]}
        title="Travel guide"
        lede="Practical information for planning a trip to Maasim. Each point shows whether it has been checked against public sources or still needs confirmation from the tourism office."
      >
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
          <li className="flex items-center gap-2">
            <CircleCheck aria-hidden="true" className="size-4 text-tide" /> Checked against public sources
          </li>
          <li className="flex items-center gap-2">
            <CircleDashed aria-hidden="true" className="size-4 text-coral-ink" /> To be confirmed by the tourism office
          </li>
        </ul>
      </PageHeader>

      <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-10">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-sans text-sm text-muted">On this page</h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col">
              {guideSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="link-underline">
                    {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="link-underline">
                  Questions and answers
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="space-y-16 lg:col-span-8 lg:col-start-5">
          {guideSections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24">
              <h2 id={`${section.id}-title`} className="text-title md:text-[2.5rem]">
                {section.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted">{section.intro}</p>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {section.points.map((point) => (
                  <li key={point.text} className="flex gap-3 py-4">
                    {point.status === "verified" ? (
                      <CircleCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-tide" />
                    ) : (
                      <CircleDashed aria-hidden="true" className="mt-1 size-4 shrink-0 text-coral-ink" />
                    )}
                    <span>
                      {point.text}
                      {point.status === "confirm" ? (
                        <span className="mt-1 block text-sm text-coral-ink">To be confirmed by the tourism office</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
            <h2 id="faq-title" className="text-title md:text-[2.5rem]">
              Questions and answers
            </h2>
            <div className="mt-6">
              <FaqList items={faqs} />
            </div>
          </section>

          <section aria-labelledby="contact-title" className="bg-ocean p-8 text-shell md:p-10">
            <h2 id="contact-title" className="text-title">
              Need official information?
            </h2>
            <p className="mt-4 max-w-xl text-shell/80">
              Contact the {siteConfig.contact.office} in {siteConfig.contact.address}. Official phone and email details
              will be added here once confirmed. This guide is an independent concept, not an official government
              publication.
            </p>
            <Link href="/about" className="on-dark link-underline mt-6 inline-block font-medium">
              About this website
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
