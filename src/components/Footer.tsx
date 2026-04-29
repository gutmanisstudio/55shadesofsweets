import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { ORDER_CONTACT } from "@/lib/menu";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-burgundy-deep text-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <Image
            src={images.logo}
            alt="55 Shades of Sweets"
            width={788}
            height={398}
            unoptimized
            className="h-32 w-auto md:h-40"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
            Luxury pastries &amp; cakes &mdash; every shade tells a story.
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-bone/55">
            Riga · Dubai (soon)
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/55">
            Browse
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/cakes" className="hover:text-rose">Cakes</Link></li>
            <li><Link href="/how-it-works" className="hover:text-rose">How it works</Link></li>
            <li><Link href="/about" className="hover:text-rose">About</Link></li>
            <li><Link href="/contact" className="hover:text-rose">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/55">
            Follow
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://instagram.com/55shadesofsweets" className="hover:text-rose">Instagram</a></li>
            <li>
              <a
                href={`https://wa.me/${ORDER_CONTACT.whatsappNumber}`}
                className="hover:text-rose"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-[11px] uppercase tracking-[0.28em] text-bone/55 md:flex-row md:items-center md:px-8">
          <p>© {year} · 55 Shades of Sweets · Riga · Dubai (soon)</p>
          <p>Baked with love</p>
        </div>
      </div>
    </footer>
  );
}
