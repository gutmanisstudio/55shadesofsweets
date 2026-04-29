/**
 * Structured menu — sourced from the @55shadesofsweets IG menu cards.
 * Used by the order flow to render the picker without showing the raw screenshots.
 */

import { images } from "@/lib/images";

export type MenuItem = {
  name: string;          // Latvian flavour name (canonical)
  description?: string;  // Latvian description verbatim from the menu
  sizes?: { label: string; price: string }[]; // optional size/price variants
};

export type MenuCategory = {
  id: string;
  lv: string;        // Latvian title
  en: string;        // English label (shown as eyebrow)
  blurb: string;     // short EN positioning line
  priceNote: string; // "32€ / kg", "From 30€", etc.
  cover: string;     // image used as category card cover
  items: MenuItem[];
};

const tp = images.topPicks;

// Photo mapping (verified from /public/images/top-picks/*):
//   IMG_8854 → pink Lambeth sponge
//   IMG_8855 → black-shell macarons
//   IMG_8856 → coloured madeleines (used as "small treats" stand-in)
//   IMG_8857 → white cake w/ raspberries (premium)
//   IMG_8858 → white satin-bow fondant cake (bento-sized)
//   IMG_8859 → matcha Dubai chocolate bar
//   IMG_8860 → chocolate cheesecake

export const menu: MenuCategory[] = [
  {
    id: "biskvitkukas",
    lv: "Biskvītkūkas",
    en: "Sponge Cakes",
    blurb: "Light, layered, made-to-order.",
    priceNote: "32€ / kg",
    cover: tp[0].src, // IMG_8854 — pink Lambeth sponge
    items: [
      {
        name: "Sarkanais Velvets",
        description:
          "Sarkanā velveta biskvīts, zemeņu pildījums un maigs vaniļas krēms.",
      },
      {
        name: "Šokolādes – Aveņu",
        description:
          "Sulīgs šokolādes biskvīts ar maigu šokolādes krēmu un aveņu pildījumu.",
      },
      {
        name: "Vaniļas – Ogu",
        description:
          "Viegls un gaisīgs vaniļas biskvīts ar ogu pildījumu un gaisīgu vaniļas krēmu.",
      },
    ],
  },
  {
    id: "biskvitkukas-premium",
    lv: "Biskvītkūkas Premium",
    en: "Premium Sponge Cakes",
    blurb: "Sponge layered with cheesecake & couture finishings.",
    priceNote: "35€ / kg",
    cover: tp[3].src, // IMG_8857 — white cake with raspberries
    items: [
      {
        name: "Kokosriekstu – Ananasu",
        description:
          "Kokosriekstu biskvīts, kokosriekstu siera kūka, ananasu pildījums un gaisīgs vaniļas krēms.",
      },
      {
        name: "Šokolādes Sapnis",
        description:
          "Šokolādes biskvīts, šokolādes siera kūka, šokolādes kraukšķis un maigs šokolādes krēms.",
      },
      {
        name: "Pistāciju – Aveņu",
        description:
          "Pistāciju biskvīts, pistāciju siera kūka, aveņu pildījums, pistāciju krēms.",
      },
      {
        name: "Šokolādes – Ķiršu",
        description:
          "Šokolādes biskvīts, šokolādes siera kūka, ķiršu pildījums un maigs šokolādes krēms.",
      },
      {
        name: "Vaniļas – Ogu",
        description:
          "Vaniļas biskvīts, vaniļas siera kūka, ogu pildījums, vaniļas krēms.",
      },
    ],
  },
  {
    id: "bento",
    lv: "Bento Kūkas",
    en: "Bento Cakes",
    blurb: "Tiny cakes for two — personal, hand-painted.",
    priceNote: "2 – 3 servings",
    cover: tp[4].src, // IMG_8858 — white satin-bow bento cake
    items: [
      {
        name: "Šokolādes Sapnis",
        description: "Sulīgs šokolādes biskvīts ar maigu šokolādes krēmu.",
      },
      {
        name: "Pistāciju – Aveņu",
        description:
          "Pistāciju biskvīts ar krēmīgu pistāciju krēmu un aveņu pildījumu.",
      },
      {
        name: "Šokolādes – Aveņu",
        description:
          "Sulīgs šokolādes biskvīts ar maigu šokolādes krēmu un aveņu pildījumu, skābumiņam.",
      },
      {
        name: "Vaniļas – Ogu",
        description:
          "Viegls un gaisīgs vaniļas biskvīts ar ogu pildījumu un gaisīgu vaniļas krēmu.",
      },
      {
        name: "Snikers",
        description:
          "Sulīgs šokolādes biskvīts ar maigu šokolādes krēmu, ko papildina paštaisīta karamele ar zemesriekstiem.",
      },
    ],
  },
  {
    id: "makaruni",
    lv: "Makarūni",
    en: "Macarons",
    blurb: "A box of jewel-toned, French-method macarons.",
    priceNote: "Per box · mixed",
    cover: tp[1].src, // IMG_8855 — black-shell macarons
    items: [
      { name: "Sāļo pistāciju" },
      { name: "Vaniļas – zemeņu" },
      { name: "Piparmētru – citrona" },
      { name: "Magoņu" },
      { name: "Matcha" },
      { name: "Ferrero" },
      { name: "Snikers" },
      { name: "Rožu – aveņu" },
      { name: "Šokolādes – ķiršu" },
      { name: "Kanēļbulciņa" },
      { name: "Dubaijas šokolāde" },
      { name: "Šokolādes braunijs" },
    ],
  },
  {
    id: "siera-kukas",
    lv: "Siera Kūkas",
    en: "Cheesecakes",
    blurb: "Silky baked cheesecakes with seasonal fruit.",
    priceNote: "From 30€",
    cover: tp[6].src, // IMG_8860 — chocolate cheesecake
    items: [
      { name: "Klasiskā ar ogām" },
      { name: "Šokolādes" },
      { name: "Sāļo pistāciju" },
      { name: "Kokosriekstu – šokolādes" },
      { name: "Piparmētru – aveņu" },
      { name: "Pistāciju – aveņu" },
      { name: "Melleņu – vaniļas" },
      { name: "Lazdu riekstu – šokolādes" },
    ],
  },
  {
    id: "tartaletes",
    lv: "Tartaletes",
    en: "Tartlets",
    blurb: "Crisp shortcrust, frangipane, fresh berries.",
    priceNote: "Per piece",
    cover: "/images/top-picks/tartelete.jpg", // cropped from the tartaletes IG menu card
    items: [
      {
        name: "Vaniļas – Zemeņu",
        description:
          "Kraukšķīga smilšu mīkla, franžipāns ar zemenēm, zemeņu pildījums, gaisīgs vaniļas krēms.",
      },
      {
        name: "Lazdu riekstu – Šokolādes",
        description:
          "Kraukšķīga smilšu mīkla, lazdu riekstu un šokolādes kraukšķis, maigs franču biskvīts, bagātīgs lazdu riekstu krēms.",
      },
      {
        name: "Vaniļas – Aveņu",
        description:
          "Kraukšķīga smilšu mīkla, franžipāns ar avenēm, aveņu pildījums un gaisīgs vaniļas krēms.",
      },
    ],
  },
  {
    id: "dubaijas-sokolade",
    lv: "Dubaijas Šokolāde",
    en: "Dubai Chocolate",
    blurb: "Pistachio-knafeh chocolate bars, hand-poured.",
    priceNote: "Bars · 50g / 200g",
    cover: tp[5].src, // IMG_8859 — matcha Dubai chocolate bar
    items: [
      {
        name: "Parastā Dubaijas šokolāde",
        sizes: [
          { label: "50g", price: "5€" },
          { label: "200g", price: "15€" },
        ],
      },
      {
        name: "Dubaijas šokolāde ar ceremoniālo matchu",
        sizes: [
          { label: "50g", price: "6€" },
          { label: "200g", price: "20€" },
        ],
      },
      {
        name: "Dāvanu kastīte",
        description: "Add gift box +5€",
      },
    ],
  },
];

// Contact endpoints — replace with real values when known.
export const ORDER_CONTACT = {
  whatsappNumber: "37100000000", // +371 placeholder
  instagramHandle: "melke_elena",
};
