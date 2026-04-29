import type { Metadata } from "next";
import CakesPage from "./CakesPage";

export const metadata: Metadata = {
  title: "Cakes — 55 Shades of Sweets",
  description:
    "Every flavour we make — sponge cakes, premium cakes, bento, macarons, cheesecakes, tartlets and Dubai chocolate. Order yours.",
};

export default function Page() {
  return <CakesPage />;
}
