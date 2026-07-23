# Icon Authoring

## Native family

The Lunar Signal icon family uses a 24 × 24 coordinate system, rounded caps and joins, `currentColor`, no baked-in fill color, and a 1.5-pixel default stroke. The family is thin, geometric, and engineered rather than decorative.

## Source format

Add icons to `assets/icons/catalog.mjs` with:

- stable kebab-case name,
- one of the six supported categories,
- concise accessible description,
- optional search aliases,
- geometry built from supported SVG primitives.

Then run:

```bash
pnpm icons
pnpm icons:check
```

The generator creates individual SVG files, a symbol sprite, JSON metadata, the generic React `Icon` component, and named React exports.

## Optical rules

- Design at 24 px first, then review at 16, 20, 24, 32, and 48 px.
- Preserve a consistent visual center and apparent stroke weight.
- Prefer a recognizable silhouette over internal detail.
- Use a 44 px interactive target even when the glyph is smaller.
- Keep icons monochrome unless semantic state requires color.
- Pair unfamiliar icons with text labels.

### Scope discipline

The native catalog covers conventional product concepts only.

- Do not invent a custom glyph for a niche object merely to increase coverage.
- If a symbol needs its caption to be recognized, use the caption by itself or source a vetted platform/library icon.
- Keep an even visual mass inside the 24-pixel artboard and avoid tiny acute corners, diagonal collisions, or narrow enclosed spaces.
- Review the entire affected category beside its nearest neighbors at 16, 20, 24, 32, and 48 px after any change. A valid SVG is not automatically a finished icon.

## Accessibility

Decorative icons must be hidden from assistive technology. Meaningful icons require a programmatic name. Icon-only controls use `IconButton`, which requires a label.

## General-purpose coverage

Use native icons for the conventional product concepts represented in the catalog. Use a vetted platform/library icon for missing concepts. Aerospace identity should come from the broader visual system rather than illustrative iconography.
