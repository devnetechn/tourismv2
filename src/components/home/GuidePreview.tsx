import Link from "next/link";
import { FaqList } from "@/components/shared/FaqList";
import { faqs, guideSections } from "@/data/guide";

export function GuidePreview() {
  return (
    <section aria-labelledby="guide-title" className="bg-tide-mist/60 py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 id="guide-title" className="text-headline">
            Know before you go
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Getting here, getting around, and travelling responsibly. Anything still waiting on the tourism office is
            marked as such.
          </p>
          <ul className="mt-10 grid grid-cols-1 border-t border-ocean/15 sm:grid-cols-2 lg:grid-cols-1">
            {guideSections.map((section) => (
              <li key={section.id} className="border-b border-ocean/15">
                <Link
                  href={`/travel-guide#${section.id}`}
                  className="flex items-center justify-between gap-4 py-4 font-display text-xl hover:text-tide sm:pr-6 lg:pr-0"
                >
                  {section.title}
                  <span aria-hidden="true" className="font-sans text-base text-tide">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h3 className="text-title">Frequently asked</h3>
          <div className="mt-6">
            <FaqList items={faqs.slice(0, 4)} />
          </div>
          <Link href="/travel-guide#faq" className="link-underline mt-6 inline-block font-medium text-ocean">
            All questions and answers
          </Link>
        </div>
      </div>
    </section>
  );
}
