# Icon Visual QA

Review every changed native icon at **16, 20, 24, 32, and 48 pixels** on both dark and light neutral surfaces.

## Pass criteria

- Recognizable without reading the filename
- Distinct from adjacent concepts in the catalog
- Stable optical weight at all approved sizes
- No collapsed gaps, accidental tangencies, or muddy intersections at 16 pixels
- Balanced within the 24-pixel artboard
- Consistent 1.5-pixel stroke, round caps, and round joins unless a documented exception improves recognition
- No unnecessary detail, color, or background

## Catalog checks

- Filename, manifest name, and sprite symbol ID agree.
- Category and description are accurate.
- Aliases improve search rather than duplicate the description.
- The icon represents conventional product vocabulary.
- A text label or vetted external icon would not be clearer.

## Verification

After review:

```bash
node scripts/build-icon-sprite.mjs
node scripts/validate.mjs
```

The validator checks individual-file count, manifest count, category totals, symbol coverage, and name agreement. Visual recognition and optical balance still require human inspection.
