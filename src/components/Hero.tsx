import Image from "next/image";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-burgundy text-bone"
    >
      {/* Pad-top accounts for fixed header */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-24 md:grid-cols-12 md:gap-12 md:px-8 md:pb-20 md:pt-32 lg:gap-16 lg:pt-36">
        <div className="md:col-span-6 md:pt-10 lg:col-span-5 lg:pt-16">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/65">
            <span className="text-rose">✺</span>&nbsp;&nbsp;cake atelier · Riga
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Made-to-order
            <br />
            cakes in <em className="text-rose">every</em>
            <br />
            shade you can dream of.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-bone/80 md:text-lg">
            Hand-crafted cakes, macarons and madeleines for weddings,
            birthdays, and quiet Sunday afternoons. No two are the same.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-bone px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-burgundy transition-colors hover:bg-cream"
            >
              Order your cake
            </a>
            <a
              href="#top-picks"
              className="rounded-full border border-bone/40 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-bone/10"
            >
              See top picks →
            </a>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-burgundy-deep ring-1 ring-bone/10 md:aspect-[5/6] lg:aspect-[6/7]">
            <Image
              src={images.hero.mobile}
              alt="Custom hand-crafted cake"
              fill
              priority
              sizes="(min-width: 768px) 0px, 100vw"
              className="object-cover md:hidden"
            />
            <Image
              src={images.hero.desktop}
              alt="Custom hand-crafted cake"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 0px"
              className="hidden object-cover md:block"
            />
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-bone/15 bg-burgundy-deep py-4 md:py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-[11px] uppercase tracking-[0.32em] text-bone/70 md:px-8">
          <span>Custom designs</span>
          <span className="text-rose">✦</span>
          <span>Natural ingredients</span>
          <span className="text-rose">✦</span>
          <span>Order ahead</span>
          <span className="text-rose">✦</span>
          <span>Made with love</span>
        </div>
      </div>
    </section>
  );
}
