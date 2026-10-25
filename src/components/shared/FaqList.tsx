import { Plus } from "lucide-react";
import type { Faq } from "@/types/content";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {faq.question}
            <Plus aria-hidden="true" className="mt-1 size-5 shrink-0 text-tide transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="max-w-2xl pb-6 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
