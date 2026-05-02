"use client";

import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  className?: string;
  aspectRatio?: string;
  tint?: "green" | "warm" | "cream" | "dark";
};

const tints = {
  green: "from-[#d4c06d]/20 to-[#f4e19f]/30",
  warm:  "from-[#c8b89a]/30 to-[#a89070]/40",
  cream: "from-[#e8e0d0]/50 to-[#d4cfc6]/60",
  dark:  "from-[#2a2a2a]/40 to-[#1C1C1C]/50",
};

export function ImagePlaceholder({ label, className, tint = "cream" }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        tints[tint],
        "flex items-center justify-center",
        className
      )}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f4e19f 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #f4e19f 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {label && (
        <span className="relative z-10 text-xs font-medium text-[#5A5A5A] bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40">
          {/* [REPLACE] {label} */}
          📷 {label}
        </span>
      )}
    </div>
  );
}
