# Image drop-in guide

Drop image files into the folders below using the listed filenames. Once a file is in place, it appears on the site automatically — no code changes needed (paths are pre-wired in `src/lib/images.ts`).

If you change a filename or want to add/remove items, edit `src/lib/images.ts` (single source of truth).

Recommended: JPG/WebP, 1600–2400px on the long edge, sRGB, < 400KB each.

## Folders & expected filenames

```
public/images/
├── hero/
│   ├── hero-mobile.jpg     (portrait, ~1080×1440)
│   └── hero-desktop.jpg    (landscape, ~2400×1400)
├── top-picks/
│   ├── 01.jpg ... 06.jpg   (square crops preferred)
├── flavours/
│   ├── 01.jpg
│   ├── 02.jpg
│   └── 03.jpg
├── gallery/
│   ├── 01.jpg ... 08.jpg   (mix of portrait + landscape)
├── team/
│   └── team.jpg            (landscape, lifestyle shot)
└── logo/
    └── logo.svg            (optional — text logo used otherwise)
```

Any slot without a real image falls back to `placeholder.svg`.
