"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

/**
 * Lenis preserves scroll between client-side route transitions which
 * makes new pages open mid-way down. This hook resets scroll to top
 * (immediately, no animation) whenever the path changes.
 *
 * We also disable native scroll restoration so the browser doesn't
 * rehydrate a previous offset after Lenis has reset it to 0.
 */
function ScrollResetOnRoute() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    // Run on next frame so the new route has mounted; otherwise Lenis
    // may compute the wrong limit and snap mid-page.
    const raf = requestAnimationFrame(() => {
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollResetOnRoute />
      {children}
    </ReactLenis>
  );
}
