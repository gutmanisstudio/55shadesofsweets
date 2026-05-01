import Image from "next/image";
import { images } from "@/lib/images";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-cocoa">
              Gallery
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-burgundy md:text-5xl lg:text-6xl">
              A small slice of the <em className="text-rose">collection</em>.
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-cocoa md:hidden">
            Swipe →
          </p>
        </div>
      </div>

      {/* Mobile: horizontal snap carousel. Desktop: editorial 5-col grid. */}
      <div
        data-lenis-prevent
        className="no-scrollbar mt-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth md:mt-14 md:overflow-visible"
      >
        <ul className="flex w-max gap-4 px-5 md:mx-auto md:grid md:w-auto md:max-w-7xl md:grid-cols-5 md:gap-5 md:px-8 lg:gap-6">
          {images.gallery.map((src, idx) => (
            <li
              key={idx}
              className="snap-center shrink-0 w-[78vw] sm:w-[50vw] md:w-auto md:shrink"
            >
              <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-deep">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 768px) 19vw, 78vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
