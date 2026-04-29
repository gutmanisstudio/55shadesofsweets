import Image from "next/image";
import { images } from "@/lib/images";

export default function Team() {
  return (
    <section className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-cream">
          <div className="relative aspect-[4/5] md:aspect-[16/9]">
            <Image
              src={images.team}
              alt="Behind the kitchen"
              fill
              sizes="(min-width: 768px) 90vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/70 via-burgundy/20 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 lg:p-20">
            <p className="text-xs uppercase tracking-[0.32em] text-bone/80">
              The kitchen
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl leading-[1.05] tracking-tight text-bone md:text-5xl lg:text-6xl">
              We bake only for <em className="text-rose">you</em>,
              <br />
              with love.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-bone/80 md:text-base">
              Every order is treated like a one-off — small batch, slow craft,
              shaped by hand the morning of pickup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
