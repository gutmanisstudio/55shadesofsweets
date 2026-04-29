import Image from "next/image";
import { images } from "@/lib/images";
import OrderButton from "@/components/OrderButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-burgundy text-bone"
    >
      {/*
       * Mobile: video full-bleed behind everything (one composition).
       * Desktop: video pinned to right ~60% of the hero so its native portrait
       * crop reads naturally; left edge fades into burgundy via mask-image so it
       * doesn't feel like a hard "panel cage".
       */}
      <div
        aria-hidden
        className="absolute inset-0 md:left-auto md:right-0 md:w-[60%] md:[mask-image:linear-gradient(to_right,transparent_0%,black_28%)]"
      >
        {images.hero.video ? (
          <video
            src={images.hero.video}
            poster={images.hero.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={images.hero.poster}
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
            aria-hidden
          />
        )}
      </div>

      {/* Scrim — directional so text is always legible. */}
      {/* Mobile: vertical scrim (text on lower half). */}
      {/* Desktop: subtle left wash so the text column reads cleanly over burgundy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/85 to-burgundy/30 md:bg-gradient-to-r md:from-burgundy md:via-burgundy/40 md:to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-44 md:grid-cols-12 md:gap-10 md:px-8 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36">
        <div className="md:col-span-7 lg:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/65">
            <span className="text-rose">✺</span>&nbsp;&nbsp;Luxury cakes · Riga · Dubai (soon)
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-bone sm:text-6xl md:text-[3.75rem] lg:text-[4.5rem]">
            Every shade
            <br />
            tells a <em className="text-rose">story</em>.
          </h1>

          <p className="mt-5 max-w-md font-display text-lg italic leading-snug text-bone/85 md:text-xl">
            Made-to-order cakes &mdash; handcrafted, in every shade you can
            dream of.
          </p>

          <div className="mt-8" data-hero-cta>
            <OrderButton variant="solid-bone">Order your cake</OrderButton>
          </div>

          {/* Editorial meta row — adds density without competing copy */}
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-bone/15 pt-5 text-[11px] uppercase tracking-[0.28em] text-bone/60">
            <div>
              <dt className="text-bone/40">No.</dt>
              <dd className="mt-1 text-bone/85">55</dd>
            </div>
            <div>
              <dt className="text-bone/40">Studio</dt>
              <dd className="mt-1 text-bone/85">Riga</dd>
            </div>
            <div>
              <dt className="text-bone/40">Soon</dt>
              <dd className="mt-1 text-bone/85">Dubai</dd>
            </div>
          </dl>
        </div>
      </div>

    </section>
  );
}
