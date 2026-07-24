# AGENTS.md — Orbital Archive No. 01 Governance

This file is binding for AI agents and human contributors working in this repository.

## 1. Authority and package shape

Use this order when sources disagree:

1. `AGENTS.md` — binding system and contribution rules.
2. `tokens/tokens.json` — design-token values.
3. `components/contracts.json` — component vocabulary, states, and allowed depths.
4. `assets/icons/manifest.json` and individual files in `assets/icons/` — native icon metadata and geometry.
5. `docs/AEROSPACE-GRAMMAR.md`, `docs/LAYOUT-UX.md`, and `docs/STYLE_GUIDE.md` — composition and behavior.
6. `examples/` — complete stack-neutral implementation references.
7. `index.html` — standalone visual overview and searchable specimen.

The public package must remain browsable without a framework, server, package manager, or build step. Node.js is used only for optional maintenance and validation scripts.

## 2. Core operating rule

> Present dramatically. Operate calmly. Scale completely.

- **Signal / Depth 0:** cinematic orientation, identity, one clear invitation.
- **Mission / Depth 1:** calm product work, moderate density, explicit scope.
- **Systems / Depth 2:** diagnostics, low-frequency configuration, dense data, and logs after deliberate entry.
- Never begin an ordinary task at Depth 2.
- Depth 1 and 2 surfaces keep current scope visible. Depth 2 always provides an obvious route back.

Target roughly 70% usability and 30% personality overall. Change expression by depth rather than applying one ornamental density everywhere.

## 3. Color discipline

- Use semantic tokens before palette tokens.
- Do not introduce pure black, pure white application screens, purple, pink, or magenta.
- Relay Blue means active, selected, system, and informational.
- Mission Gold means priority and editorial hierarchy.
- Ignition Orange is rare, editorial, and high-energy. It is not a warning, error, or default operational action color.
- Signal Green means success, available, or nominal.
- Alert Rust means warning, degraded, or attention.
- Fault Red means error, critical, or destructive.
- Never communicate state through color alone.

## 4. Aerospace geometry

The visual vocabulary is broader than orbit rings. Use horizon profiles, trajectories, plotted vectors, datum crosshairs, leader lines, measurement ticks, calibration rails, coordinate labels, blueprint construction lines, crop marks, and registration marks.

Every mark needs a semantic or compositional job: frame, align, measure, connect, sequence, locate, or establish scale.

### Safe-corridor rule

- Never run decorative lines through paragraphs, headings, form controls, table cells, labels, or primary actions.
- Reserve geometry for margins, panel edges, diagram fields, negative space, or clearly separated illustration zones.
- A curve may lead toward content; it must not make content compete with it.
- Decorative SVGs use `aria-hidden="true"` and do not receive pointer events.
- Remove faux telemetry and labels that do not identify real context.

## 5. Surface texture

Paper grain, blueprint texture, scanlines, film noise, vignette, and registration artifacts may add tactile character at low contrast.

- Texture belongs behind content and never changes the meaning of a state.
- Keep text and control surfaces readable at normal and reduced contrast conditions.
- Avoid animated noise. Respect `prefers-reduced-motion`.
- Use one or two texture families on a surface, not every effect at once.
- Operational surfaces are calmer than editorial surfaces; Systems surfaces may be finer and denser, not louder.

## 6. Components and interaction

- Search `components/contracts.json` before naming or adding a primitive.
- Preserve every declared consumer-visible state when implementing a contract.
- Native semantics come first. Keyboard operation, visible focus, programmatic labels, and error association are required.
- One primary action per decision area. Secondary actions remain visually quiet.
- Tables scroll horizontally on narrow screens instead of crushing columns.
- Dialogs and drawers require focus management and Escape dismissal in implementations that provide them.
- Do not copy a Signal-scale headline into ordinary Mission work.

## 7. Icons and assets

- Search `assets/icons/manifest.json` before adding an icon.
- Native icons cover conventional product vocabulary only. Use a text label or vetted platform/library icon when the concept is not represented.
- Do not invent niche aerospace pictograms merely to match the theme.
- Native icons use a 24 × 24 artboard, 1.5-pixel default stroke, round caps and joins, and `currentColor`.
- Review changed geometry at 16, 20, 24, 32, and 48 pixels.
- Decorative icons are hidden from assistive technology. Meaningful icons and icon-only controls require a programmatic name.
- After changing individual icon SVGs or the icon manifest, run `node scripts/build-icon-sprite.mjs`.

## 8. Application coverage

A new composition pattern requires:

- a real use case rather than a decorative variant;
- an explicit depth and mode;
- a wide and narrow layout;
- location, state, and next action in the first viewport;
- preserved labels on mobile;
- an obvious return path when it enters Systems depth;
- geometry and texture that support the task rather than obscure it.

Use the 13 examples as composition references. Do not reduce the atlas to repeated metric cards and tables with different headings.

## 9. Public repository discipline

- Keep public links relative so the package works from disk and under a GitHub Pages project path.
- Do not refer to private build folders, nonexistent framework source, or undocumented commands.
- Keep source and generated artifacts together when editing tokens or icons.
- Update `manifest.json`, relevant asset manifests, documentation, and `CHANGELOG.md` when public counts or contracts change.
- Preserve unrelated behavior and choose the smallest coherent change that solves the requirement.

## 10. Completion gate

Run both commands before declaring work complete:

```bash
node scripts/build-icon-sprite.mjs
node scripts/validate.mjs
```

Also inspect changed visual pages at a wide and narrow viewport. Do not suppress validation failures. Report unresolved uncertainty explicitly.

Current release: `1.7.0`.
