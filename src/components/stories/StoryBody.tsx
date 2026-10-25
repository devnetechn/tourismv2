import { Info } from "lucide-react";
import { FigureCaption, Photo } from "@/components/shared/Photo";
import type { StoryBlock } from "@/types/content";

export function StoryBody({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <div className="prose-story space-y-6 text-lg leading-[1.75]">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "paragraph":
            return <p key={key}>{block.text}</p>;
          case "heading":
            return (
              <h2 key={key} className="pt-6 text-title">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={key} className="list-disc space-y-2 pl-6 marker:text-tide">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "note":
            return (
              <aside key={key} className="flex max-w-[38rem] gap-3 border border-dashed border-coral-ink/50 p-5 text-[0.9375rem] leading-relaxed">
                <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-coral-ink" />
                <p>{block.text}</p>
              </aside>
            );
          case "photo":
            return (
              <figure key={key} className="py-6 md:-mr-24 lg:-mr-48">
                <Photo id={block.photo} sizes="(min-width: 1024px) 60vw, 100vw" className="aspect-[3/2]" />
                <FigureCaption id={block.photo} />
              </figure>
            );
        }
      })}
    </div>
  );
}
