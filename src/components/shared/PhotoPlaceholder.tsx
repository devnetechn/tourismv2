import { Camera } from "lucide-react";

export function PhotoPlaceholder({ label = "Photograph to be supplied" }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex items-end bg-tide-mist text-ocean">
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none">
        <defs>
          <pattern id="contour" width="120" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 20 C 20 8, 40 8, 60 20 S 100 32, 120 20"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contour)" />
      </svg>
      <p className="relative m-4 flex items-center gap-2 text-sm">
        <Camera aria-hidden="true" className="size-4" />
        {label}
      </p>
    </div>
  );
}
