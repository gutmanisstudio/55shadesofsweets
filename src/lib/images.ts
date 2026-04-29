/**
 * Single source of truth for every image used on the site.
 *
 * Workflow: drop files into /public/images/<folder>/ using the filenames below.
 * If a filename changes, edit it here. If a slot is missing, it falls back to
 * the cream placeholder so the page never breaks.
 *
 * See public/images/ASSETS.md for the full drop-in guide.
 */

const PLACEHOLDER = "/images/placeholder.svg";

// Flip to `true` once real files are dropped in to switch the section to live images.
// Easier than editing each path. Per-section toggle.
export const useReal = {
  hero: false,
  topPicks: false,
  flavours: false,
  gallery: false,
  team: false,
  logo: false,
};

const real = <T extends string>(on: boolean, src: T) => (on ? src : PLACEHOLDER);

export const images = {
  hero: {
    mobile: real(useReal.hero, "/images/hero/hero-mobile.jpg"),
    desktop: real(useReal.hero, "/images/hero/hero-desktop.jpg"),
  },
  topPicks: [
    { name: "Berry Crown", src: real(useReal.topPicks, "/images/top-picks/01.jpg") },
    { name: "Rose Lambeth", src: real(useReal.topPicks, "/images/top-picks/02.jpg") },
    { name: "Madeleine Trio", src: real(useReal.topPicks, "/images/top-picks/03.jpg") },
    { name: "Cocoa Macaron", src: real(useReal.topPicks, "/images/top-picks/04.jpg") },
    { name: "Honey Bow", src: real(useReal.topPicks, "/images/top-picks/05.jpg") },
    { name: "Vanilla Cloud", src: real(useReal.topPicks, "/images/top-picks/06.jpg") },
  ],
  flavours: [
    real(useReal.flavours, "/images/flavours/01.jpg"),
    real(useReal.flavours, "/images/flavours/02.jpg"),
    real(useReal.flavours, "/images/flavours/03.jpg"),
  ],
  gallery: [
    real(useReal.gallery, "/images/gallery/01.jpg"),
    real(useReal.gallery, "/images/gallery/02.jpg"),
    real(useReal.gallery, "/images/gallery/03.jpg"),
    real(useReal.gallery, "/images/gallery/04.jpg"),
    real(useReal.gallery, "/images/gallery/05.jpg"),
    real(useReal.gallery, "/images/gallery/06.jpg"),
    real(useReal.gallery, "/images/gallery/07.jpg"),
    real(useReal.gallery, "/images/gallery/08.jpg"),
  ],
  team: real(useReal.team, "/images/team/team.jpg"),
  logo: real(useReal.logo, "/images/logo/logo.svg"),
};
