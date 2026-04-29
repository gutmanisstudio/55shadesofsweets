export default function Pickup() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.32em] text-cocoa">
            Pickup &amp; orders
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-berry md:text-5xl lg:text-6xl">
            Come <em className="text-rose">say&nbsp;hi</em>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cocoa md:text-lg">
            Orders are placed in advance and prepared fresh for pickup. Reach
            out on WhatsApp or Instagram and we&rsquo;ll plan your cake
            together.
          </p>
        </div>

        <div className="md:col-span-7">
          <dl className="grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
                Pickup
              </dt>
              <dd className="mt-3 font-display text-xl text-berry md:text-2xl">
                Address line one
                <br />
                City, country
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
                Hours
              </dt>
              <dd className="mt-3 font-display text-xl text-berry md:text-2xl">
                Mon&ndash;Sun
                <br />
                09:00&ndash;19:00
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
                WhatsApp
              </dt>
              <dd className="mt-3 font-display text-xl text-berry md:text-2xl">
                <a
                  href="https://wa.me/00000000000"
                  className="hover:text-rose"
                >
                  +000 00 000 0000
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
                Instagram
              </dt>
              <dd className="mt-3 font-display text-xl text-berry md:text-2xl">
                <a
                  href="https://instagram.com/"
                  className="hover:text-rose"
                >
                  @55shadesofsweets
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/00000000000"
              className="rounded-full bg-berry px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-cocoa"
            >
              Message on WhatsApp
            </a>
            <a
              href="#"
              className="rounded-full border border-berry/30 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-berry transition-colors hover:bg-berry hover:text-bone"
            >
              Open in maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
