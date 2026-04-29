"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "Cakes", href: "#top-picks" },
  { label: "Flavours", href: "#flavours" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-cream/85 backdrop-blur-md border-b border-berry/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-berry md:text-2xl"
        >
          <span className="italic">55</span>
          <span className="mx-1.5 text-rose">·</span>
          <span className="text-[0.95em]">Shades of Sweets</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm uppercase tracking-[0.18em] text-cocoa">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-berry"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-berry px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-bone transition-colors hover:bg-cocoa md:inline-block"
          >
            Order Cake
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-berry/20 text-berry md:hidden"
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
        className={`overflow-hidden border-berry/10 bg-cream/95 backdrop-blur md:hidden ${
          open ? "max-h-[60vh] border-t" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <nav className="px-5 py-6">
          <ul className="flex flex-col gap-5 font-display text-2xl text-berry">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-berry px-6 py-3 text-sm font-sans uppercase tracking-[0.18em] text-bone"
              >
                Order Cake
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
