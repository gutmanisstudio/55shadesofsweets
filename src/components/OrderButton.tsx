"use client";

import type { ReactNode } from "react";

type Variant = "solid-bone" | "solid-burgundy" | "outline-burgundy";

const STYLES: Record<Variant, string> = {
  "solid-bone":
    "bg-bone text-burgundy hover:bg-cream",
  "solid-burgundy":
    "bg-burgundy text-bone hover:bg-burgundy-deep",
  "outline-burgundy":
    "border border-burgundy/30 text-burgundy hover:bg-burgundy hover:text-bone",
};

export default function OrderButton({
  children,
  variant = "solid-bone",
  categoryId,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  categoryId?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("open-order", {
            detail: categoryId ? { categoryId } : undefined,
          }),
        )
      }
      className={`rounded-full px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${STYLES[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
