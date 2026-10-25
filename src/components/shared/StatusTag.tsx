import type { VerificationStatus } from "@/types/content";

const statusCopy: Record<VerificationStatus, { label: string; title: string }> = {
  verified: { label: "Verified listing", title: "Location and key facts checked against public sources." },
  partial: {
    label: "Partly verified",
    title: "The place is documented; visitor details still need confirmation.",
  },
  placeholder: {
    label: "Needs confirmation",
    title: "Shown for planning purposes; details must be confirmed by the tourism office.",
  },
};

function Marker({ status }: { status: VerificationStatus }) {
  if (status === "verified") return <span className="size-2 rounded-full bg-tide" />;
  if (status === "partial")
    return <span className="size-2 rounded-full border border-tide bg-[linear-gradient(90deg,var(--color-tide)_50%,transparent_50%)]" />;
  return <span className="size-2 rounded-full border border-coral-ink" />;
}

export function StatusTag({ status, tone = "light" }: { status: VerificationStatus; tone?: "light" | "dark" }) {
  const copy = statusCopy[status];
  return (
    <span
      title={copy.title}
      className={`inline-flex items-center gap-2 text-[0.8125rem] leading-none ${
        tone === "dark" ? "text-shell/85" : "text-muted"
      }`}
    >
      <Marker status={status} />
      {copy.label}
    </span>
  );
}

export function DemoTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-dashed border-coral-ink/60 px-2 py-1 text-[0.8125rem] leading-none text-coral-ink ${className}`}
    >
      Demonstration content
    </span>
  );
}
