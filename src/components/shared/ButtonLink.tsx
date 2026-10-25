import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "light" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-ocean text-shell hover:bg-tide",
  light: "bg-shell text-ocean hover:bg-sand",
  outline: "border border-ocean/30 text-ocean hover:border-ocean hover:bg-ocean hover:text-shell",
  "outline-light": "on-dark border border-shell/50 text-shell hover:border-shell hover:bg-shell hover:text-ocean",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[0.9375rem] font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
