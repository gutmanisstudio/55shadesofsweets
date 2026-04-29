"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Sticky Order CTA — mobile only. Desktop already has an Order Cake
 * button in the fixed header on every page, so a sticky duplicate is
 * unnecessary there. Per-route visibility (mobile):
 *   - /             : shown, hides while Hero CTA is on screen
 *   - /about        : shown
 *   - /cakes        : hidden (every flavour card has its own Order CTA
 *                     and the header still has Order Cake)
 *   - /how-it-works : hidden (page itself is the order funnel)
 *   - /contact      : hidden (page already presents every CTA)
 */
const MOBILE_ROUTES = new Set(["/", "/about"]);
const DESKTOP_ROUTES = new Set<string>();

export default function MobileOrderFab() {
  const pathname = usePathname();
  const [heroVisible, setHeroVisible] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector("[data-hero-cta]");
    if (!heroCta) {
      setHeroVisible(false);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    io.observe(heroCta);
    return () => io.disconnect();
  }, [pathname]);

  // Mobile menu (Header) and OrderFlow modal both lock scroll by adding
  // `overflow-hidden` to <html>. Hide the FAB whenever that's present —
  // it would otherwise float above the menu / modal scrim.
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setScrollLocked(root.classList.contains("overflow-hidden"));
    update();
    const mo = new MutationObserver(update);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const showMobile = MOBILE_ROUTES.has(pathname);
  const showDesktop = DESKTOP_ROUTES.has(pathname);

  // If the route doesn't show it at all, render nothing.
  if (!showMobile && !showDesktop) return null;

  // Hide while the Hero's own Order CTA is in view (no duplicate CTAs)
  // OR while the body is scroll-locked (mobile menu / order modal open).
  const hidden = heroVisible || scrollLocked;

  // Build visibility classes:
  //  - hidden by default at the breakpoint when not allowed
  //  - flex when allowed
  const mobileClass = showMobile ? "flex" : "hidden";
  const desktopClass = showDesktop ? "md:flex" : "md:hidden";

  const open = () => window.dispatchEvent(new CustomEvent("open-order"));

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 ${mobileClass} ${desktopClass} justify-center px-5 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 transition-opacity duration-300 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(to top, rgba(74,12,9,0.92) 35%, rgba(74,12,9,0) 100%)",
      }}
    >
      <button
        type="button"
        onClick={open}
        tabIndex={hidden ? -1 : 0}
        className="w-full max-w-sm rounded-full bg-bone px-6 py-4 text-center text-[12px] font-medium uppercase tracking-[0.28em] text-burgundy shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] transition-transform active:scale-[0.98] md:max-w-xs md:py-3 md:text-[11px] md:tracking-[0.32em]"
      >
        Order your cake
      </button>
    </div>
  );
}
