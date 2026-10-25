import { FigureCaption, Photo } from "@/components/shared/Photo";
import { townFacts } from "@/data/site";

export function DiscoverIntro() {
  return (
    <section id="discover" aria-labelledby="discover-title" className="py-24 md:py-36">
      <div className="shell">
        <h2 id="discover-title" className="max-w-4xl text-headline md:text-[clamp(3rem,6vw,5.5rem)]">
          Where the hills come down to meet the bay.
        </h2>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="relative md:col-span-8">
            <figure>
              <Photo id="maasim-bay-4ml-strand" sizes="(min-width: 768px) 66vw, 100vw" className="aspect-[4/3]" />
              <FigureCaption id="maasim-bay-4ml-strand" className="max-w-md" />
            </figure>
            <figure className="relative -mt-16 ml-auto w-3/5 border-8 border-shell md:absolute md:-bottom-24 md:-right-16 md:mt-0 md:w-1/2 lg:-right-24">
              <Photo id="maasim-iml-ecopark-hills" sizes="(min-width: 768px) 33vw, 60vw" className="aspect-[16/9]" />
              <figcaption className="sr-only">The hills behind IML Ecopark, Maasim</figcaption>
            </figure>
          </div>

          <div className="md:col-span-4 md:pt-4 lg:pl-10">
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Maasim sits on the western shore of Sarangani Bay, a short drive from General Santos City. The coast is
                lined with coconut palms, mangroves, and fishing villages, and the water is part of a national Protected
                Seascape.
              </p>
              <p className="text-muted">
                Behind the shore the land rises quickly, through farms and pasture toward ridges of more than 700 metres.
                It is a place for slow days by the water, and for travellers who like to ask locals where to go next.
              </p>
            </div>

            <dl className="mt-10 divide-y divide-line border-y border-line text-[0.9375rem]">
              {townFacts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
                  <dt className="text-muted">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
