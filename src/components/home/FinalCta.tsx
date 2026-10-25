import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { getPhoto } from "@/data/photos";

export function FinalCta() {
  const photo = getPhoto("sarangani-sunset-glan")!;

  return (
    <section aria-labelledby="cta-title" className="on-dark relative isolate overflow-hidden bg-ocean-deep text-shell">
      <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="-z-10 object-cover object-[40%_50%]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,31,42,0.85)_0%,rgba(7,31,42,0.45)_55%,rgba(7,31,42,0.1)_100%)]" />
      <div className="shell py-28 md:py-44">
        <h2 id="cta-title" className="max-w-3xl text-headline md:text-[clamp(3rem,6.5vw,6rem)]">
          Your next story starts in Maasim.
        </h2>
        <p className="mt-6 max-w-md text-lg text-shell/85">
          Choose a place to start, then check the practical details before you set out.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/destinations" variant="light">
            Explore destinations
          </ButtonLink>
          <ButtonLink href="/travel-guide" variant="outline-light">
            Plan your visit
          </ButtonLink>
        </div>
        <p className="mt-16 text-xs text-shell/60">
          {photo.caption}. Photo: {photo.credit.author}, {photo.credit.license}
        </p>
      </div>
    </section>
  );
}
