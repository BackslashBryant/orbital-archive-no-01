# Orbital Archive No. 01 — 1.8.0

This release gives each signal color one clear job and carries that contract through the public guide, application atlas, assets, and platform exports. Ignition Orange now marks the primary invitation. Signal Teal handles active, focused, selected, linked, and informational state. The gray-blue field remains calm so neither accent becomes ambient decoration.

## Highlights

- **One hue, one job.** Primary actions and editorial invitations use Ignition Orange. Focus rings, links, toggles, active selections, and informational states use Signal Teal.
- **Compatible migration.** `color.palette.teal` is canonical. The former `color.palette.relay` token remains as a deprecated teal-valued alias in every v1.8 platform export and will be removed in v2.
- **Repository-wide consistency.** The visual guide, all thirteen application examples, and reusable marks and patterns now use the same teal value instead of the retired bright blue.
- **A real review surface.** Root-level `preview.html` consumes `tokens/dist/tokens.css` and demonstrates Signal, Mission, and Systems depth at wide and narrow viewports.
- **Restrained pixel texture.** The Phosphor Dither pattern and shared CSS add a visible-but-quiet CRT layer — scanline-filled display accents and a neutral sheen on primary actions — without touching body copy, tables, fields, or dense operational content, and honoring `prefers-reduced-motion`.
- **Conventional icon set.** The native icons are now adapted from Tabler Icons 3.46.0 (MIT) and normalized to the Orbital contract, replacing the bespoke set. Public filenames and API are unchanged; see `THIRD_PARTY_NOTICES.md`.
- **Precision mark system.** A deliberately constructed orbital mark (ring, core, plotted node, trajectory) reads cleanly at 16–48 px and drives the roundel, wordmark, and README banner.
- **Anchored diagrams.** Trajectory and orbital illustrations were audited so plotted nodes sit on their paths and purposeless geometry was removed.
- **Stronger release checks.** Validation now protects the preview, release/count surfaces, retired-color cleanup, and teal/relay compatibility contract.

## Counts

- 13 responsive application examples
- 49 component contracts
- 161 native icons (adapted from Tabler Icons, MIT)
- 9 reusable schematic patterns

## Migration

New work should use `color.palette.teal` or its platform-specific equivalent. Existing `relay` consumers remain valid in v1.8 and resolve to `#5CA3A6`. Migrate them before v2, when the compatibility alias will be removed.

Run the release gate:

```bash
node scripts/build-icon-sprite.mjs
node scripts/validate.mjs
```
