import { MapPin } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { getPhoto } from "@/data/photos";
import { siteConfig } from "@/data/site";
import type { CSSProperties } from "react";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const photo = getPhoto("maasim-iml-ecopark-panorama")!;

  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate flex min-h-[100svh] flex-col bg-ocean text-shell">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[58%_50%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,31,42,0.55)_0%,rgba(7,31,42,0.2)_45%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,31,42,0.55)_0%,rgba(7,31,42,0.05)_28%,rgba(7,31,42,0.15)_50%,rgba(7,31,42,0.88)_100%)]"
      />

      <div className="shell flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14">
        <p className="rise flex items-center gap-2 text-[0.9375rem] text-shell/90" style={delay(100)}>
          <span className="inline-block h-px w-8 bg-sun" aria-hidden="true" />
          Maasim, Sarangani Province
        </p>
        <h1 id="hero-title" className="mt-5 max-w-[11ch] text-display">
          <span className="rise block" style={delay(200)}>
            Find your kind
          </span>
          <span className="rise block" style={delay(340)}>
            of paradise.
          </span>
        </h1>

        <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="rise md:col-span-6 lg:col-span-5" style={delay(520)}>
            <p className="max-w-md text-lg text-shell/90">
              Coconut hills that run straight down to Sarangani Bay, reefs looked after by the people who fish them, and a
              coastal town in southern Mindanao that moves at its own pace.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/destinations" variant="light">
                Explore Maasim
              </ButtonLink>
              <ButtonLink href="/travel-guide" variant="outline-light">
                Plan your visit
              </ButtonLink>
            </div>
          </div>

          <div className="rise flex flex-col gap-1 text-sm text-shell/80 md:col-span-6 md:items-end md:text-right lg:col-span-7" style={delay(700)}>
            <p className="flex items-center gap-2 text-shell">
              <MapPin aria-hidden="true" className="size-4 text-sun" />
              {siteConfig.coordinates.label}
            </p>
            <p>On Sarangani Bay, west of General Santos City</p>
            <p className="mt-2 text-xs text-shell/60">
              {photo.caption}. Photo: {photo.credit.author}, {photo.credit.license}
            </p>
          </div>
        </div>
      </div>

      <a
        href="#discover"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-shell/75 md:flex"
      >
        <span>Scroll</span>
        <span className="drift block h-8 w-px bg-shell/60" aria-hidden="true" />
        <span className="sr-only">to the introduction</span>
      </a>
    </section>
  );
}
