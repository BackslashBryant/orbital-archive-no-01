# Native Icon Authoring

The native catalog contains conventional product icons. Aerospace identity comes from the surrounding design system, not from adding obscure theme-specific glyphs.

## Provenance

The catalog geometry is adapted from [Tabler Icons](https://tabler.io/icons) 3.46.0 (MIT), normalized to the Orbital contract below. Orbital's public icon filenames and API are the source of truth; the upstream Tabler source name for each icon is recorded in the `source` field of `assets/icons/manifest.json`, and the license is reproduced in `THIRD_PARTY_NOTICES.md`. Prefer mapping a new name to an existing Tabler glyph over drawing a bespoke one; keep the two-space normalized format so `scripts/build-icon-sprite.mjs` can rebuild the sprite.

## Before adding an icon

1. Search `assets/icons/manifest.json` by name, description, and aliases.
2. Prefer a text label or established platform/library icon when the concept is niche or ambiguous.
3. Add a native icon only when it represents common product vocabulary and remains recognizable without a caption.

## Geometry

- 24 × 24 artboard
- 1.5-pixel default stroke
- `currentColor`
- round caps and joins
- no baked-in background
- simple geometry that survives 16 pixels
- one `<title>` in the individual SVG
- filename and manifest `name` use the same kebab-case identifier

## Authoring flow

1. Add `assets/icons/<name>.svg`.
2. Add one metadata entry to `assets/icons/manifest.json` and update category totals and `count` if the catalog grows.
3. Rebuild the sprite:

```bash
node scripts/build-icon-sprite.mjs
```

4. Review at 16, 20, 24, 32, and 48 pixels.
5. Run:

```bash
node scripts/validate.mjs
```

The sprite builder reads individual SVGs in manifest order and produces `assets/icons/lsm-icons.svg`. Do not hand-edit the sprite without also updating its source SVG.

## Accessibility

Individual files include a concise title for direct use. Decorative use should still be hidden from assistive technology. Meaningful icon-only controls require an accessible name from the host interface.
