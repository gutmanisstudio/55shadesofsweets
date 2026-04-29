import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact — 55 Shades of Sweets",
  description:
    "Send a message via WhatsApp or DM Elena on Instagram. Riga · Dubai (soon).",
};

export default function Page() {
  return <ContactPage />;
}
