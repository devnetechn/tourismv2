"use client";

import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "@/types/content";
import { PhotoCredit } from "./Photo";

export function Gallery({ photos, title }: { photos: Photo[]; title: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  if (photos.length === 0) return null;

  const current = photos[index];
  const many = photos.length > 1;

  const openAt = (next: number) => {
    setIndex(next);
    dialogRef.current?.showModal();
  };
  const step = (delta: number) => setIndex((value) => (value + delta + photos.length) % photos.length);

  return (
    <>
      <ul className={`grid gap-3 ${photos.length === 1 ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"}`}>
        {photos.map((photo, photoIndex) => (
          <li key={photo.id} className={photoIndex === 0 && photos.length > 2 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => openAt(photoIndex)}
              className="group relative block aspect-[4/3] h-full w-full overflow-hidden bg-sand"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photoIndex === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 right-3 inline-flex size-9 items-center justify-center bg-shell/90 text-ocean opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand aria-hidden="true" className="size-4" />
              </span>
              <span className="sr-only">Open larger view</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${title} photo gallery`}
        onKeyDown={(event) => {
          if (!many) return;
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="on-dark m-0 h-dvh max-h-none w-full max-w-none bg-ocean-deep/97 p-0 text-shell backdrop:bg-ocean-deep/80"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <p className="text-sm text-shell/70" aria-live="polite">
              {index + 1} of {photos.length}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              className="inline-flex size-11 items-center justify-center"
            >
              <X aria-hidden="true" className="size-6" />
              <span className="sr-only">Close gallery</span>
            </button>
          </div>
          <div className="relative flex-1">
            <Image key={current.id} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            {many ? (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute left-2 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center bg-ocean-deep/60 hover:bg-ocean md:left-6"
                >
                  <ChevronLeft aria-hidden="true" className="size-6" />
                  <span className="sr-only">Previous photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute right-2 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center bg-ocean-deep/60 hover:bg-ocean md:right-6"
                >
                  <ChevronRight aria-hidden="true" className="size-6" />
                  <span className="sr-only">Next photo</span>
                </button>
              </>
            ) : null}
          </div>
          <p className="mx-auto max-w-3xl px-4 py-5 text-center text-sm text-shell/75">
            <PhotoCredit photo={current} />
          </p>
        </div>
      </dialog>
    </>
  );
}
