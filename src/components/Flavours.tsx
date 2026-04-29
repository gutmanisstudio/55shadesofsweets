"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";

export default function Flavours() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % images.flavours.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="flavours" className="bg-burgundy text-bone py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-8">
        <div className="md:col-span-5 md:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-burgundy-deep ring-1 ring-bone/10">
            {images.flavours.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className={`object-cover transition-opacity duration-700 ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-7 md:order-1">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/65">
            Our flavours
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-bone md:text-5xl lg:text-6xl">
            Stunning to look at,
            <br />
            <em className="text-rose">unforgettable</em> to taste.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/80 md:text-lg">
            Every filling is thoughtfully crafted &mdash; from black-forest
            cherry and Madagascan vanilla to white chocolate raspberry and
            salted caramel pecan. Pick your shade.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full border border-bone/40 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:bg-bone hover:text-burgundy"
          >
            Choose yours →
          </a>
        </div>
      </div>
    </section>
  );
}
