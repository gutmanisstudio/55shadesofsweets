import Image from "next/image";
import { images } from "@/lib/images";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-cocoa">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-berry md:text-5xl lg:text-6xl">
            A small slice of the <em className="text-rose">collection</em>.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:gap-6 lg:gap-8">
          {images.gallery.map((src, idx) => {
            // Alternate aspect ratios for editorial rhythm
            const tall = idx % 3 === 0;
            return (
              <figure
                key={idx}
                className={`relative overflow-hidden rounded-2xl bg-cream-deep ${
                  tall ? "aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
