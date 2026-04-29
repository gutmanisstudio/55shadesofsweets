"use client";

import { useMemo, useState } from "react";
import { ORDER_CONTACT } from "@/lib/menu";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const composed = useMemo(() => {
    const lines: string[] = [];
    lines.push("Sveiki, 55 Shades!");
    if (name) lines.push(`Mans vārds: ${name}.`);
    if (message) lines.push("", message);
    return lines.join("\n");
  }, [name, message]);

  const waHref = `https://wa.me/${ORDER_CONTACT.whatsappNumber}?text=${encodeURIComponent(composed)}`;
  const igHref = `https://ig.me/m/${ORDER_CONTACT.instagramHandle}`;

  return (
    <main className="bg-cream pb-24 pt-32 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-tight text-burgundy md:text-6xl lg:text-7xl">
            Let&rsquo;s plan your <em className="text-rose">cake</em>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cocoa md:text-lg">
            Send a quick message via WhatsApp, or just DM Elena on Instagram.
            Either way, we reply same day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-8">
          {/* WhatsApp form */}
          <section className="rounded-3xl bg-cream-deep p-6 md:col-span-7 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
              Option 1
            </p>
            <h2 className="mt-2 font-display text-3xl leading-[1.05] tracking-tight text-burgundy md:text-4xl">
              Message us on <em className="text-rose">WhatsApp</em>.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cocoa">
              Type below — we&rsquo;ll open WhatsApp with the message ready.
              Just hit send.
            </p>

            <div className="mt-8 grid gap-5">
              <Field label="Your name">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena"
                  className="w-full rounded-xl border border-burgundy/15 bg-cream px-4 py-3 text-sm text-burgundy placeholder:text-cocoa/40 focus:border-burgundy focus:outline-none"
                />
              </Field>
              <Field label="Message">
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like? Date, theme, flavours, allergies…"
                  className="w-full resize-none rounded-xl border border-burgundy/15 bg-cream px-4 py-3 text-sm text-burgundy placeholder:text-cocoa/40 focus:border-burgundy focus:outline-none"
                />
              </Field>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-burgundy px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-burgundy-deep sm:w-auto"
              >
                <span aria-hidden className="text-rose">✺</span>
                Send on WhatsApp
              </a>
            </div>
          </section>

          {/* Instagram CTA */}
          <aside className="flex flex-col gap-5 md:col-span-5">
            <div className="rounded-3xl border border-burgundy/15 bg-cream p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
                Option 2
              </p>
              <h2 className="mt-2 font-display text-3xl leading-[1.05] tracking-tight text-burgundy md:text-4xl">
                Or just <em className="text-rose">DM</em> Elena.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cocoa">
                Open Instagram and start a conversation directly with the
                founder.
              </p>
              <a
                href={igHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full border border-burgundy px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-burgundy transition-colors hover:bg-burgundy hover:text-bone"
              >
                <span aria-hidden className="text-rose">✦</span>
                @{ORDER_CONTACT.instagramHandle}
              </a>
              <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-cocoa">
                Brand ·{" "}
                <a
                  href="https://instagram.com/55shadesofsweets"
                  className="hover:text-rose"
                >
                  @55shadesofsweets
                </a>
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-4 rounded-3xl border border-burgundy/15 bg-cream p-6 md:p-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-cocoa">
                  Pickup
                </dt>
                <dd className="mt-2 font-display text-lg text-burgundy md:text-xl">
                  Riga, Latvia
                  <br />
                  <span className="text-burgundy/60">Dubai (soon)</span>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-cocoa">
                  Hours
                </dt>
                <dd className="mt-2 font-display text-lg text-burgundy md:text-xl">
                  Mon&ndash;Sun
                  <br />
                  09:00&ndash;19:00
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.28em] text-cocoa">
        {label}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
