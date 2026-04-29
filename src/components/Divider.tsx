import Image from "next/image";
import { images } from "@/lib/images";

/**
 * Editorial full-bleed band that separates two cream sections with a
 * burgundy stripe. The image sits on the left and fades into burgundy on
 * the right via `mask-image` — opposite of the Hero (which fades on the
 * left). No copy — Pauline-style: image does the talking.
 */
export default function Divider() {
  // Black-shell macarons cutout — same shot used as "Rose Lambeth" top-pick.
  const src = images.topPicks[1].src;

  return (
    <section
      aria-hidden
      className="relative isolate overflow-hidden bg-burgundy"
    >
      {/* Image pinned to the left ~60% of the band, fading into burgundy */}
      <div
        className="relative h-[28vh] min-h-[220px] md:h-[42vh] md:min-h-[320px] lg:h-[48vh]"
      >
        <div className="absolute inset-y-0 left-0 right-0 md:right-auto md:w-[60%] [mask-image:linear-gradient(to_left,transparent_0%,black_28%)] md:[mask-image:linear-gradient(to_right,black_55%,transparent_100%)]">
          <Image
            src={src}
            alt=""
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Soft directional scrim — keeps the burgundy side feeling intentional */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-burgundy/30 via-transparent to-burgundy/40 md:bg-gradient-to-l md:from-burgundy md:via-burgundy/40 md:to-transparent" />
      </div>
    </section>
  );
}
