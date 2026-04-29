import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "About Elena — 55 Shades of Sweets",
  description:
    "Meet Elena, the maker behind 55 Shades of Sweets — handcrafted cakes from a small Riga studio.",
};

export default function Page() {
  // Top padding clears the fixed header.
  return (
    <main className="pt-20 md:pt-24">
      <Team />
    </main>
  );
}
