import { ButtonLink } from "@/components/shared/ButtonLink";

export default function DestinationNotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-32">
      <p className="text-tide">Destination not found</p>
      <h1 className="mt-4 max-w-3xl text-headline">That place isn&apos;t in the guide yet.</h1>
      <p className="mt-6 max-w-lg text-lg text-muted">
        The link may be out of date, or the destination may not have been added. Browse the full list instead.
      </p>
      <div className="mt-8">
        <ButtonLink href="/destinations">Browse destinations</ButtonLink>
      </div>
    </section>
  );
}
