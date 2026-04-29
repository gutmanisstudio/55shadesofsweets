"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";

const NAV = [
  { label: "Cakes", href: "/cakes" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const openOrder = () =>
  window.dispatchEvent(new CustomEvent("open-order"));

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu open (prevents Lenis from scrolling underneath)
  useEffect(() => {
    if (open) document.documentElement.classList.add("overflow-hidden");
    else document.documentElement.classList.remove("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-burgundy text-bone">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
        <Link
          href="/"
          aria-label="55 Shades of Sweets — home"
          className="block shrink-0"
        >
          <Image
            src={images.logo}
            alt="55 Shades of Sweets"
            width={788}
            height={398}
            priority
            unoptimized
            className="h-14 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-9 text-[11px] uppercase tracking-[0.28em] text-bone/85">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-rose">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openOrder}
            className="hidden rounded-full border border-bone/40 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-bone hover:text-burgundy md:inline-block"
          >
            Order Cake
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-bone/30 text-bone md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-bone/15 bg-burgundy md:hidden ${
          open ? "max-h-[80vh] border-t" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <nav className="px-5 py-8">
          <ul className="flex flex-col gap-6 font-display text-3xl text-bone">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openOrder();
                }}
                className="inline-block rounded-full border border-bone/40 px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] text-bone"
              >
                Order Cake
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
