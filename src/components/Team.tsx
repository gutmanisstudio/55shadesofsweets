"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";

const SLIDES = [
  { src: images.team.portrait, alt: "Elena — founder of 55 Shades of Sweets" },
  { src: images.team.work, alt: "Elena at work in the kitchen" },
];

const INTERVAL_MS = 5000;

export default function Team() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:items-center md:gap-12 md:px-8 lg:gap-16">
        {/* Photo carousel — left column on desktop */}
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-cream md:aspect-[5/6]">
            {SLIDES.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 45vw, 100vw"
                className={`object-cover transition-opacity duration-1000 ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Dots */}
          <div
            role="tablist"
            aria-label="Elena photos"
            className="mt-5 flex items-center justify-center gap-3"
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === i
                    ? "w-8 bg-burgundy"
                    : "w-2 bg-burgundy/25 hover:bg-burgundy/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Story — right column on desktop (narrower so photo dominates) */}
        <div className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
            The maker
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-burgundy md:text-5xl lg:text-6xl">
            Meet <em className="text-rose">Elena</em>.
          </h2>

          <div
            className="mt-8 space-y-4 text-[15px] leading-relaxed text-cocoa md:text-base"
            lang="lv"
          >
            <p>
              Ir sajūtas, ko grūti aprakstīt vārdos, bet viegli nodot caur
              garšu. Tā pirms četriem gadiem sākās mans ceļš saldumu pasaulē
              &ndash; Liepājā. Toreiz man nebija plāna. Bija tikai sajūta &ndash;
              ka vēlos dot cilvēkiem prieku. Mazus mirkļus, kas liek pasmaidīt.
              Tagad jau astoņus mēnešus to daru Rīgā, bet sajūta nav mainījusies
              &ndash; tā tikai kļuvusi stiprāka.
            </p>
            <p>
              Es ticu, ka deserts nav tikai ēdiens. Tā ir dāvana, mirklis,
              emocija. Katra detaļa man ir svarīga &ndash; no produktiem līdz
              dizainam. Es mācos nepārtraukti. No franču pavāriem par garšu
              niansēm un no krievu konditoriem iedvesmojos dizaina ziņā.
            </p>
            <p>
              Katrs pasūtījums man ir iespēja radīt ko īpašu un mans veids, kā
              pateikt &ldquo;Paldies, ka esat!&rdquo;
            </p>
          </div>

          <p
            className="mt-8 font-display text-xl italic text-burgundy md:text-2xl"
            lang="lv"
          >
            Paldies, ka uzticaties. <span className="text-rose">✺</span>
          </p>
        </div>
      </div>
    </section>
  );
}
