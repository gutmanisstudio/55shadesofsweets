import type { Metadata } from "next";
import Flavours from "@/components/Flavours";

export const metadata: Metadata = {
  title: "How it works — 55 Shades of Sweets",
  description:
    "Three steps from craving to cake: pick a flavour, message us, pick up fresh in Riga.",
};

export default function Page() {
  // Extra top padding so the section clears the fixed header.
  return (
    <main className="pt-20 md:pt-24">
      <Flavours />
    </main>
  );
}
