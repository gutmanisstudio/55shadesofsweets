"use client";

import Link from "next/link";
import OrderButton from "./OrderButton";

/**
 * Conversion-focused "How to order" block. Replaces the editorial flavour
 * carousel — gives the buyer a clear 3-step path from cake → message → pickup.
 */
export default function Flavours() {
  const steps = [
    {
      n: "01",
      title: "Pick your cake",
      body: "Browse the menu and tap a flavour. Sponge, premium, bento, macarons, cheesecake, tartlets or Dubai chocolate.",
      cta: (
        <Link
          href="/cakes"
          className="inline-block text-[11px] uppercase tracking-[0.22em] text-bone underline-offset-4 hover:underline"
        >
          See full menu →
        </Link>
      ),
    },
    {
      n: "02",
      title: "Message us",
      body: "Send size, date and any extras on WhatsApp or Instagram. We confirm price and pickup the same day.",
      cta: <OrderButton variant="solid-bone">Start order</OrderButton>,
    },
    {
      n: "03",
      title: "Pickup fresh",
      body: "Made-to-order in our Riga studio. Pick up the day of your event — the cake travels in its prime.",
      cta: (
        <Link
          href="/contact"
          className="inline-block text-[11px] uppercase tracking-[0.22em] text-bone underline-offset-4 hover:underline"
        >
          Contact &amp; hours →
        </Link>
      ),
    },
  ];

  return (
    <section
      id="how-to-order"
      className="bg-burgundy text-bone py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/65">
            How to order
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-bone md:text-5xl lg:text-6xl">
            Three steps from <em className="text-rose">craving</em> to cake.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-bone/75 md:text-base">
            No checkout, no waiting list. Just a quick message and we&rsquo;ll
            plan your cake together.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-bone/10 md:mt-16 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col gap-6 bg-burgundy p-6 md:p-10"
            >
              <span className="font-display text-5xl text-rose md:text-6xl">
                {s.n}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-2xl text-bone md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/75 md:text-base">
                  {s.body}
                </p>
              </div>
              <div className="mt-auto">{s.cta}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
