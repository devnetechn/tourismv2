import { ButtonLink } from "@/components/shared/ButtonLink";

export default function StoryNotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-32">
      <p className="text-tide">Story not found</p>
      <h1 className="mt-4 max-w-3xl text-headline">We couldn&apos;t find that story.</h1>
      <p className="mt-6 max-w-lg text-lg text-muted">It may have been renamed or not published yet.</p>
      <div className="mt-8">
        <ButtonLink href="/stories">Read all stories</ButtonLink>
      </div>
    </section>
  );
}
