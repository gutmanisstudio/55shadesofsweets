"use client";

import Image from "next/image";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { menu, type MenuCategory, type MenuItem } from "@/lib/menu";

export default function CakesPage() {
  // "all" shows every category; a category id filters to just that one.
  const [active, setActive] = useState<string>("all");
  const lenis = useLenis();

  const order = (categoryId: string, itemName: string) =>
    window.dispatchEvent(
      new CustomEvent("open-order", {
        detail: { categoryId, itemName },
      }),
    );

  // Filtering shrinks the document. If the user is scrolled deep into the
  // full menu when they pick a category, the new (shorter) page leaves them
  // at its bottom. Reset to the top of the menu list whenever the filter
  // changes so the chosen category is always visible.
  const choose = (id: string) => {
    setActive(id);
    // Scroll to a stable anchor — the filter chip bar — after layout updates.
    requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(
        'nav[aria-label="Categories"]',
      );
      if (!target) return;
      // Account for the fixed header so the chips don't sit underneath it.
      const headerOffset = window.innerWidth >= 768 ? 112 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16;
      if (lenis) lenis.scrollTo(top, { duration: 0.6 });
      else window.scrollTo({ top, behavior: "smooth" });
    });
  };

  const visible = active === "all" ? menu : menu.filter((c) => c.id === active);

  return (
    <main className="bg-cream pb-24 pt-32 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
            The full menu
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-tight text-burgundy md:text-6xl lg:text-7xl">
            Every <em className="text-rose">cake</em> we make.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cocoa md:text-lg">
            Made-to-order, hand-finished in our Riga studio. Tap a flavour to
            send the order &mdash; we&rsquo;ll confirm price, size and pickup.
          </p>
        </div>

        {/* Sticky category nav */}
        <nav
          aria-label="Categories"
          className="no-scrollbar sticky top-20 z-30 -mx-5 mt-10 overflow-x-auto border-b border-burgundy/10 bg-cream/95 px-5 py-3 backdrop-blur md:top-28 md:mx-0 md:overflow-x-visible md:px-0"
        >
          <ul className="flex gap-2">
            <li>
              <button
                type="button"
                onClick={() => choose("all")}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  active === "all"
                    ? "border-burgundy bg-burgundy text-bone"
                    : "border-burgundy/20 text-burgundy hover:border-burgundy/60"
                }`}
              >
                All
              </button>
            </li>
            {menu.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => choose(c.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                    active === c.id
                      ? "border-burgundy bg-burgundy text-bone"
                      : "border-burgundy/20 text-burgundy hover:border-burgundy/60"
                  }`}
                >
                  {c.lv}
                  <span
                    className={`ml-2 ${
                      active === c.id ? "text-bone/70" : "text-cocoa/60"
                    }`}
                  >
                    {c.items.length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Category sections — only the visible (filtered) ones render */}
        <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          {visible.map((c) => (
            <CategorySection key={c.id} category={c} onOrder={order} />
          ))}
        </div>
      </div>
    </main>
  );
}

function CategorySection({
  category,
  onOrder,
}: {
  category: MenuCategory;
  onOrder: (categoryId: string, itemName: string) => void;
}) {
  return (
    <section
      id={`cat-${category.id}`}
      className="grid scroll-mt-32 gap-6 md:grid-cols-12 md:gap-10 md:scroll-mt-40"
    >
      {/* Photo column — square so the cake reads clearly. Sticky on desktop. */}
      <div className="md:col-span-5">
        <div className="md:sticky md:top-44">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream-deep">
            <Image
              src={category.cover}
              alt={category.lv}
              fill
              sizes="(min-width: 768px) 38vw, 92vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
              {category.en} · {category.priceNote}
            </p>
            <h2 className="mt-2 font-display text-3xl leading-[1.05] tracking-tight text-burgundy md:text-4xl">
              {category.lv}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cocoa">
              {category.blurb}
            </p>
          </div>
        </div>
      </div>

      {/* Flavour list — text-only, no repeated photos */}
      <ul className="grid grid-cols-1 gap-3 md:col-span-7 md:gap-4">
        {category.items.map((it, i) => (
          <FlavourCard
            key={it.name}
            index={i}
            item={it}
            priceFallback={category.priceNote}
            onOrder={() => onOrder(category.id, it.name)}
          />
        ))}
      </ul>
    </section>
  );
}

function FlavourCard({
  index,
  item,
  priceFallback,
  onOrder,
}: {
  index: number;
  item: MenuItem;
  priceFallback: string;
  onOrder: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");
  const priceLabel = item.sizes
    ? item.sizes.map((s) => `${s.label} ${s.price}`).join(" · ")
    : priceFallback;

  return (
    <li className="flex flex-col gap-4 rounded-2xl bg-cream-deep p-5 md:p-6">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.32em] text-cocoa/70">
          {num}
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-burgundy/70">
          {priceLabel}
        </span>
      </div>
      <h3 className="font-display text-2xl leading-tight text-burgundy md:text-3xl">
        {item.name}
      </h3>
      {item.description && (
        <p
          lang="lv"
          className="text-sm leading-relaxed text-cocoa"
        >
          {item.description}
        </p>
      )}
      <button
        type="button"
        onClick={onOrder}
        className="mt-auto self-start rounded-full bg-burgundy px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-burgundy-deep"
      >
        Order this
      </button>
    </li>
  );
}
