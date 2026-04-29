import Image from "next/image";
import { images } from "@/lib/images";

export default function TopPicks() {
  // Duplicate the list so the marquee loops seamlessly when the track
  // translates by -50%.
  const loop = [...images.topPicks, ...images.topPicks];

  return (
    <section id="top-picks" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cocoa">
              Top picks
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-burgundy md:text-5xl lg:text-6xl">
              Loved <em className="text-rose">most</em> by our guests
            </h2>
          </div>
          <a
            href="/cakes"
            className="hidden text-xs uppercase tracking-[0.22em] text-burgundy underline-offset-4 hover:underline md:inline-block"
          >
            See all →
          </a>
        </div>
      </div>

      {/* Full-bleed marquee — bleeds beyond max-w container for editorial feel */}
      <div className="mt-10 overflow-hidden md:mt-14">
        <ul
          className="marquee-track flex w-max gap-4 md:gap-6 lg:gap-8"
          style={{ ["--marquee-duration" as string]: "55s" }}
        >
          {loop.map((item, idx) => (
            <li
              key={`${item.name}-${idx}`}
              className="group w-[68vw] shrink-0 sm:w-[40vw] md:w-[26vw] lg:w-[18rem]"
              aria-hidden={idx >= images.topPicks.length || undefined}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-deep">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 768px) 26vw, 68vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-1">
                <h3 className="font-display text-lg text-burgundy md:text-xl">
                  {item.name}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.22em] text-cocoa">
                  Custom
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
