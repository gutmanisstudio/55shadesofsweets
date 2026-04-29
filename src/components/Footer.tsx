export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-berry text-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-3xl leading-tight md:text-4xl">
            <span className="italic">55</span>
            <span className="mx-2 text-rose">·</span>Shades of Sweets
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/70">
            Cake atelier &mdash; made-to-order cakes, in every shade you can
            dream of.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/60">
            Browse
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#top-picks" className="hover:text-rose">Cakes</a></li>
            <li><a href="#flavours" className="hover:text-rose">Flavours</a></li>
            <li><a href="#gallery" className="hover:text-rose">Gallery</a></li>
            <li><a href="#contact" className="hover:text-rose">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/60">
            Follow
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://instagram.com/" className="hover:text-rose">Instagram</a></li>
            <li><a href="https://wa.me/00000000000" className="hover:text-rose">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-[11px] uppercase tracking-[0.28em] text-bone/60 md:flex-row md:items-center md:px-8">
          <p>© {year} · 55 Shades of Sweets</p>
          <p>Baked with love</p>
        </div>
      </div>
    </footer>
  );
}
