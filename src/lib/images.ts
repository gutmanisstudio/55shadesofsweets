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
  hero: true,
  topPicks: true,
  flavours: false,
  gallery: true,
  team: true,
  logo: true,
};

const real = <T extends string>(on: boolean, src: T) => (on ? src : PLACEHOLDER);

export const images = {
  hero: {
    // Video path (or null when no real asset yet — falls back to placeholder image)
    video: useReal.hero
      ? "/images/hero/SnapInsta.to_AQOUHsoDVF_0ES2EdmGfGtqeLHFroFbfA-Z9cuGwWjZG5jLKqCP99iHRkcRnzICKL8u_zBet0k6Wwh1CZojrjmptmxEHvPeAjcWXSf4.mp4"
      : null,
    poster: PLACEHOLDER,
  },
  // Names describe what's actually in each photo — see comments in
  // src/lib/menu.ts for the source of truth.
  topPicks: [
    { name: "Pink Lambeth",     src: real(useReal.topPicks, "/images/top-picks/IMG_8854.JPEG") }, // pink Lambeth sponge
    { name: "Cocoa Macarons",   src: real(useReal.topPicks, "/images/top-picks/IMG_8855.JPEG") }, // black-shell macarons
    { name: "Madeleine Trio",   src: real(useReal.topPicks, "/images/top-picks/IMG_8856.JPEG") }, // coloured madeleines
    { name: "Berry Sponge",     src: real(useReal.topPicks, "/images/top-picks/IMG_8857.JPEG") }, // white cake w/ raspberries
    { name: "Satin Bow Bento",  src: real(useReal.topPicks, "/images/top-picks/IMG_8858.JPEG") }, // white satin-bow bento cake
    { name: "Matcha Dubai Bar", src: real(useReal.topPicks, "/images/top-picks/IMG_8859.JPEG") }, // matcha Dubai chocolate bar
    { name: "Cocoa Cheesecake", src: real(useReal.topPicks, "/images/top-picks/IMG_8860.JPEG") }, // chocolate cheesecake
  ],
  flavours: [
    real(useReal.flavours, "/images/flavours/01.jpg"),
    real(useReal.flavours, "/images/flavours/02.jpg"),
    real(useReal.flavours, "/images/flavours/03.jpg"),
  ],
  gallery: [
    real(useReal.gallery, "/images/gallery/SnapInsta.to_626290794_18077736110613314_8287121771404087388_n.jpg"),
    real(useReal.gallery, "/images/gallery/SnapInsta.to_511583566_18053165732613314_1110643759869488867_n.jpg"),
    real(useReal.gallery, "/images/gallery/SnapInsta.to_657350289_18083662289613314_5854911065593424928_n.jpg"),
    real(useReal.gallery, "/images/gallery/SnapInsta.to_655946356_18083662280613314_8098362758049143054_n.jpg"),
    real(useReal.gallery, "/images/gallery/SnapInsta.to_604717231_18072659144613314_4495024423946399528_n.jpg"),
  ],
  team: {
    portrait: real(
      useReal.team,
      "/images/team/SnapInsta.to_505476506_18049735124613314_9175616153275518393_n.jpg",
    ),
    work: real(
      useReal.team,
      "/images/team/SnapInsta.to_503379350_18049735133613314_2298281933147878162_n.jpg",
    ),
  },
  logo: real(useReal.logo, "/images/logo/logo.png"),
};
