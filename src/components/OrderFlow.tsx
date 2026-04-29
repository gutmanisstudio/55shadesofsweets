"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { menu, ORDER_CONTACT, type MenuCategory, type MenuItem } from "@/lib/menu";

type Step = "category" | "flavour" | "send";

type Selection = {
  categoryId: string | null;
  itemName: string | null;
  size: string | null;
};

const EMPTY: Selection = { categoryId: null, itemName: null, size: null };

// Public API: fire `window.dispatchEvent(new CustomEvent("open-order"))` from anywhere
// to launch the flow. Optionally pass `detail: { categoryId }` to deep-link.
export default function OrderFlow() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("category");
  const [sel, setSel] = useState<Selection>(EMPTY);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  // Listen for global open events.
  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail as
        | { categoryId?: string; itemName?: string; size?: string }
        | undefined;
      if (detail?.categoryId && detail?.itemName) {
        setSel({
          categoryId: detail.categoryId,
          itemName: detail.itemName,
          size: detail.size ?? null,
        });
        setStep("send");
      } else if (detail?.categoryId) {
        setSel({ categoryId: detail.categoryId, itemName: null, size: null });
        setStep("flavour");
      } else {
        setSel(EMPTY);
        setStep("category");
      }
      setOpen(true);
    };
    window.addEventListener("open-order", onOpen);
    return () => window.removeEventListener("open-order", onOpen);
  }, []);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Esc closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const category = useMemo<MenuCategory | null>(
    () => menu.find((c) => c.id === sel.categoryId) ?? null,
    [sel.categoryId],
  );

  const item = useMemo<MenuItem | null>(
    () => category?.items.find((i) => i.name === sel.itemName) ?? null,
    [category, sel.itemName],
  );

  const message = useMemo(() => {
    const lines: string[] = [];
    lines.push("Sveiki, 55 Shades! Vēlos pasūtīt:");
    if (category) lines.push(`• ${category.lv} (${category.en})`);
    if (item) {
      const sizeStr = sel.size ? ` — ${sel.size}` : "";
      lines.push(`• ${item.name}${sizeStr}`);
    }
    if (date) lines.push(`• Datums: ${date}`);
    if (name) lines.push(`• Vārds: ${name}`);
    if (notes) lines.push(`• Piezīmes: ${notes}`);
    return lines.join("\n");
  }, [category, item, sel.size, name, date, notes]);

  const waHref = `https://wa.me/${ORDER_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const igHref = `https://ig.me/m/${ORDER_CONTACT.instagramHandle}?text=${encodeURIComponent(message)}`;

  if (!open) return null;

  const close = () => setOpen(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order your cake"
      className="fixed inset-0 z-[60] flex items-stretch justify-center bg-burgundy-deep/85 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative flex h-full w-full max-w-3xl flex-col bg-cream text-cocoa shadow-2xl md:my-6 md:h-[calc(100dvh-3rem)] md:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-burgundy/10 px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <Stepper step={step} />
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="rounded-full border border-burgundy/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-burgundy hover:bg-burgundy hover:text-bone"
          >
            Close
          </button>
        </div>

        {/* Body */}
        <div
          data-lenis-prevent
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-8 md:px-10 md:py-12"
        >
          {step === "category" && (
            <CategoryStep
              onPick={(c) => {
                setSel({ categoryId: c.id, itemName: null, size: null });
                setStep("flavour");
              }}
            />
          )}
          {step === "flavour" && category && (
            <FlavourStep
              category={category}
              selectedItem={sel.itemName}
              selectedSize={sel.size}
              onPickItem={(n) => setSel((s) => ({ ...s, itemName: n, size: null }))}
              onPickSize={(z) => setSel((s) => ({ ...s, size: z }))}
              onBack={() => setStep("category")}
              onContinue={() => setStep("send")}
            />
          )}
          {step === "send" && category && item && (
            <SendStep
              category={category}
              item={item}
              size={sel.size}
              name={name}
              date={date}
              notes={notes}
              onName={setName}
              onDate={setDate}
              onNotes={setNotes}
              waHref={waHref}
              igHref={igHref}
              onBack={() => setStep("flavour")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* — — — Sub-views — — — */

function Stepper({ step }: { step: Step }) {
  const items: { id: Step; label: string }[] = [
    { id: "category", label: "Cake" },
    { id: "flavour", label: "Flavour" },
    { id: "send", label: "Send" },
  ];
  const idx = items.findIndex((i) => i.id === step);
  return (
    <ol className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-burgundy sm:gap-2">
      {items.map((it, i) => (
        <li key={it.id} className="flex items-center gap-1.5 sm:gap-2">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] ${
              i <= idx
                ? "border-burgundy bg-burgundy text-bone"
                : "border-burgundy/30 text-burgundy/40"
            }`}
          >
            {i + 1}
          </span>
          <span
            className={`${i === idx ? "text-burgundy" : "text-burgundy/50"} ${
              i === idx ? "" : "hidden sm:inline"
            }`}
          >
            {it.label}
          </span>
          {i < items.length - 1 && (
            <span className="h-px w-4 bg-burgundy/20 sm:mx-1 sm:w-6" aria-hidden />
          )}
        </li>
      ))}
    </ol>
  );
}

function CategoryStep({ onPick }: { onPick: (c: MenuCategory) => void }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.32em] text-cocoa">
        Step 1 — Choose
      </p>
      <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-burgundy md:text-4xl">
        What kind of <em className="text-rose">cake</em>?
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-cocoa">
        Each shade tells a story. Pick a category, then choose a flavour.
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {menu.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              onClick={() => onPick(c)}
              className="group block w-full overflow-hidden rounded-2xl bg-cream-deep text-left transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={c.cover}
                  alt={c.lv}
                  fill
                  sizes="(min-width: 768px) 22rem, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy/55 via-burgundy/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-bone/85">
                    {c.en} · {c.priceNote}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-bone md:text-3xl">
                    {c.lv}
                  </h3>
                </div>
              </div>
              <div className="px-4 py-3 text-sm text-cocoa">
                {c.blurb}
                <span className="ml-2 text-burgundy">→</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlavourStep({
  category,
  selectedItem,
  selectedSize,
  onPickItem,
  onPickSize,
  onBack,
  onContinue,
}: {
  category: MenuCategory;
  selectedItem: string | null;
  selectedSize: string | null;
  onPickItem: (n: string) => void;
  onPickSize: (z: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const item = category.items.find((i) => i.name === selectedItem);
  const needsSize = !!item?.sizes?.length;
  const canContinue = !!selectedItem && (!needsSize || !!selectedSize);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="text-[10px] uppercase tracking-[0.28em] text-burgundy hover:text-rose"
      >
        ← Back
      </button>
      <p className="mt-4 text-[11px] uppercase tracking-[0.32em] text-cocoa">
        Step 2 — {category.en} · {category.priceNote}
      </p>
      <h2 className="mt-2 font-display text-3xl leading-[1.05] tracking-tight text-burgundy md:text-4xl">
        Pick a <em className="text-rose">flavour</em>.
      </h2>
      <p className="mt-2 max-w-md text-sm italic text-cocoa">
        {category.lv}
      </p>

      <ul className="mt-8 divide-y divide-burgundy/10 border-y border-burgundy/10">
        {category.items.map((it) => {
          const active = selectedItem === it.name;
          return (
            <li key={it.name}>
              <button
                type="button"
                onClick={() => onPickItem(it.name)}
                className={`flex w-full items-start gap-4 px-1 py-4 text-left transition-colors ${
                  active ? "bg-cream-deep" : "hover:bg-cream-deep/60"
                }`}
              >
                <span
                  aria-hidden
                  className={`mt-1.5 h-3 w-3 shrink-0 rounded-full border ${
                    active
                      ? "border-burgundy bg-burgundy"
                      : "border-burgundy/40 bg-transparent"
                  }`}
                />
                <span className="flex-1">
                  <span className="font-display text-lg text-burgundy md:text-xl">
                    {it.name}
                  </span>
                  {it.description && (
                    <span className="mt-1 block text-sm leading-relaxed text-cocoa">
                      {it.description}
                    </span>
                  )}
                  {it.sizes && active && (
                    <span className="mt-3 flex flex-wrap gap-2">
                      {it.sizes.map((s) => (
                        <span
                          key={s.label}
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            onPickSize(s.label);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              onPickSize(s.label);
                            }
                          }}
                          className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${
                            selectedSize === s.label
                              ? "border-burgundy bg-burgundy text-bone"
                              : "border-burgundy/30 text-burgundy hover:bg-burgundy hover:text-bone"
                          }`}
                        >
                          {s.label} · {s.price}
                        </span>
                      ))}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          disabled={!canContinue}
          onClick={onContinue}
          className="rounded-full bg-burgundy px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-burgundy-deep disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

function SendStep({
  category,
  item,
  size,
  name,
  date,
  notes,
  onName,
  onDate,
  onNotes,
  waHref,
  igHref,
  onBack,
}: {
  category: MenuCategory;
  item: MenuItem;
  size: string | null;
  name: string;
  date: string;
  notes: string;
  onName: (v: string) => void;
  onDate: (v: string) => void;
  onNotes: (v: string) => void;
  waHref: string;
  igHref: string;
  onBack: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="text-[10px] uppercase tracking-[0.28em] text-burgundy hover:text-rose"
      >
        ← Back
      </button>
      <p className="mt-4 text-[11px] uppercase tracking-[0.32em] text-cocoa">
        Step 3 — Send
      </p>
      <h2 className="mt-2 font-display text-3xl leading-[1.05] tracking-tight text-burgundy md:text-4xl">
        Almost <em className="text-rose">there</em>.
      </h2>

      {/* Summary card */}
      <div className="mt-6 rounded-2xl border border-burgundy/10 bg-cream-deep p-5">
        <p className="text-[10px] uppercase tracking-[0.32em] text-cocoa">
          Your selection
        </p>
        <p className="mt-2 font-display text-xl text-burgundy md:text-2xl">
          {category.lv}
        </p>
        <p className="mt-1 text-sm text-cocoa">
          {item.name}
          {size ? ` · ${size}` : ""}
        </p>
      </div>

      {/* Details */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Name">
          <input
            type="text"
            value={name}
            onChange={(e) => onName(e.target.value)}
            placeholder="Elena"
            className="w-full rounded-xl border border-burgundy/15 bg-cream px-4 py-3 text-sm text-burgundy placeholder:text-cocoa/40 focus:border-burgundy focus:outline-none"
          />
        </Field>
        <Field label="Pickup date">
          <input
            type="date"
            value={date}
            onChange={(e) => onDate(e.target.value)}
            className="w-full rounded-xl border border-burgundy/15 bg-cream px-4 py-3 text-sm text-burgundy focus:border-burgundy focus:outline-none"
          />
        </Field>
        <div className="md:col-span-2">
          <Field label="Notes (optional)">
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => onNotes(e.target.value)}
              placeholder="Theme, colours, allergies…"
              className="w-full resize-none rounded-xl border border-burgundy/15 bg-cream px-4 py-3 text-sm text-burgundy placeholder:text-cocoa/40 focus:border-burgundy focus:outline-none"
            />
          </Field>
        </div>
      </div>

      {/* Send buttons */}
      <p className="mt-8 text-[11px] uppercase tracking-[0.32em] text-cocoa">
        Send via
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full bg-burgundy px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-burgundy-deep"
        >
          <span aria-hidden className="text-rose">✺</span>
          WhatsApp
        </a>
        <a
          href={igHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full border border-burgundy px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-burgundy transition-colors hover:bg-burgundy hover:text-bone"
        >
          <span aria-hidden className="text-rose">✦</span>
          Instagram
        </a>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-cocoa/70">
        Your selection will open in a new tab with the message pre-filled. Just hit send.
      </p>
    </div>
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
