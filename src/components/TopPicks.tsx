import Image from "next/image";
import { images } from "@/lib/images";

export default function TopPicks() {
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
            href="#contact"
            className="hidden text-xs uppercase tracking-[0.22em] text-burgundy underline-offset-4 hover:underline md:inline-block"
          >
            See all →
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {images.topPicks.map((item) => (
            <li key={item.name} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream-deep">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 30vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
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
