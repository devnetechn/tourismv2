import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { destinations } from "@/data/destinations";
import { guideSections } from "@/data/guide";
import { photos } from "@/data/photos";
import { generalSources, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About this website",
  description:
    "An independent tourism website concept for Maasim, Sarangani: how the content was checked, what still needs confirmation, and photo credits.",
  alternates: { canonical: "/about" },
};

const siteWideChecks = [
  "Official tourism office phone number, email address, and office hours",
  "Official social media accounts",
  "Confirmed festivals and their dates, to replace the sample events",
  "Accredited accommodation, dive operators, and tour providers",
  "Official photographs of Maasim's destinations, to replace or add to the current images",
  "Cultural content prepared with Maasim's Moro, Lumad, and B'laan communities",
];

export default function AboutPage() {
  const guideChecks = guideSections.flatMap((section) =>
    section.points.filter((point) => point.status === "confirm").map((point) => ({ section: section.title, text: point.text })),
  );

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About this website"
        lede="An independent destination website concept for Maasim, Sarangani. It is not an official publication of the Municipal Government of Maasim and does not claim its endorsement."
      />

      <div className="shell grid gap-16 py-16 md:py-24 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-16 lg:col-span-8">
          <section aria-labelledby="approach">
            <h2 id="approach" className="text-title md:text-[2.5rem]">
              How the content was prepared
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                Facts about the town, such as its barangays, land area, neighbours, and economy, come from public reference
                sources. Destinations are included only where public reporting shows they exist, and each listing carries a
                status so readers can see what still needs checking.
              </p>
              <p>
                There are no invented attractions, prices, opening hours, travel times, reviews, or quotes. Where
                information is missing, the site says so. The brand line “{siteConfig.tagline}” is a proposed creative
                direction, not an adopted municipal slogan.
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {generalSources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ocean">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="verify">
            <h2 id="verify" className="text-title md:text-[2.5rem]">
              Waiting on confirmation
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              A working list for the Maasim Municipal Tourism Office. Each item should be confirmed or corrected before
              this site is published.
            </p>

            <h3 className="mt-10 font-sans text-lg font-semibold">Across the site</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              {siteWideChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-10 font-sans text-lg font-semibold">Destinations</h3>
            <div className="mt-3 divide-y divide-line border-y border-line">
              {destinations.map((destination) => (
                <div key={destination.slug} className="grid gap-3 py-5 md:grid-cols-[14rem_1fr] md:gap-8">
                  <Link href={`/destinations/${destination.slug}`} className="link-underline font-medium text-ocean">
                    {destination.name}
                  </Link>
                  <ul className="list-disc space-y-1 pl-5 text-[0.9375rem] text-muted">
                    {destination.toVerify.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-sans text-lg font-semibold">Travel guide</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              {guideChecks.map((item) => (
                <li key={item.text}>
                  <span className="text-muted">{item.section}:</span> {item.text}
                </li>
              ))}
            </ul>
          </section>

          <section id="photo-credits" aria-labelledby="credits" className="scroll-mt-24">
            <h2 id="credits" className="text-title md:text-[2.5rem]">
              Photo credits
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              All photographs are from Wikimedia Commons under the licences shown. Only those marked “Maasim” were taken
              within the municipality; the rest show the wider Sarangani Bay area and are labelled with their location.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-[0.9375rem]">
                <thead>
                  <tr className="border-b border-ocean/30 text-sm text-muted">
                    <th scope="col" className="py-3 pr-4 font-normal">Photograph</th>
                    <th scope="col" className="py-3 pr-4 font-normal">Location</th>
                    <th scope="col" className="py-3 pr-4 font-normal">Author</th>
                    <th scope="col" className="py-3 font-normal">Licence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {photos.map((photo) => (
                    <tr key={photo.id}>
                      <td className="py-3 pr-4">
                        <a href={photo.credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                          {photo.caption}
                        </a>
                      </td>
                      <td className="py-3 pr-4">{photo.takenInMaasim ? <strong className="font-semibold">Maasim</strong> : photo.location}</td>
                      <td className="py-3 pr-4">{photo.credit.author}</td>
                      <td className="py-3">
                        <a href={photo.credit.licenseUrl} target="_blank" rel="noopener noreferrer license" className="link-underline">
                          {photo.credit.license}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-3 lg:col-start-10">
          <div className="border border-line p-6 lg:sticky lg:top-28">
            <h2 className="font-sans text-[0.9375rem] font-semibold">For the tourism office</h2>
            <p className="mt-3 text-[0.9375rem] text-muted">
              Content lives in plain TypeScript files in <code className="text-ink">src/data</code>, separate from the
              design. Facts, photos, and listings can be updated without touching any page layouts.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
