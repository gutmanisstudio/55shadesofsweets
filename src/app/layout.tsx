import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderFlow from "@/components/OrderFlow";
import MobileOrderFab from "@/components/MobileOrderFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Display face — Jost is the closest free Google Fonts equivalent to
// Century Gothic (the geometric sans used on paulinecake.ae).
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "55 Shades of Sweets — Custom Cakes",
  description:
    "Made-to-order cakes, in every shade you can dream of. Hand-crafted cakes, macarons and madeleines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-berry font-sans">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        <OrderFlow />
        <MobileOrderFab />
      </body>
    </html>
  );
}
