import { useState } from "react";

export default function PlaneIllustration({ plane, size = "md", className = "" }) {
  const [errored, setErrored] = useState(false);

  const dims = {
    sm: { h: "h-28", emoji: "text-4xl" },
    md: { h: "h-44", emoji: "text-6xl" },
    lg: { h: "h-56", emoji: "text-7xl" },
  }[size];

  return (
    <div className={`plane-hero ${dims.h} w-full flex items-center justify-center rounded-2xl ${className}`}>
      {!errored ? (
        <img
          src={`/planes/${plane.id}.svg`}
          alt={plane.name}
          className="max-h-full max-w-[88%] object-contain select-none pointer-events-none"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className={`${dims.emoji} select-none`}>{plane.emoji}</span>
      )}
    </div>
  );
}
