import Image from "next/image";
import { getPhoto } from "@/data/photos";
import type { Photo as PhotoType } from "@/types/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type PhotoProps = {
  id?: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  placeholderLabel?: string;
};

export function Photo({ id, sizes, className = "", imageClassName = "", priority, placeholderLabel }: PhotoProps) {
  const photo = getPhoto(id);

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <PhotoPlaceholder label={placeholderLabel} />
      )}
    </div>
  );
}

export function PhotoCredit({ photo, className = "" }: { photo: PhotoType; className?: string }) {
  return (
    <span className={className}>
      {photo.caption}. {photo.takenInMaasim ? "" : `Location: ${photo.location}. `}
      Photo by{" "}
      <a href={photo.credit.sourceUrl} className="link-underline" rel="noopener noreferrer" target="_blank">
        {photo.credit.author}
      </a>
      ,{" "}
      <a href={photo.credit.licenseUrl} className="link-underline" rel="noopener noreferrer license" target="_blank">
        {photo.credit.license}
      </a>
    </span>
  );
}

export function FigureCaption({ id, className = "" }: { id?: string; className?: string }) {
  const photo = getPhoto(id);
  if (!photo) return null;
  return (
    <figcaption className={`mt-3 text-sm leading-snug text-muted ${className}`}>
      <PhotoCredit photo={photo} />
    </figcaption>
  );
}
