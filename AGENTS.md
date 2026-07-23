# AGENTS.md — Orbital Archive No. 01 Governance

This file is binding for AI agents and human contributors working in this repository.

## 1. Source hierarchy

1. `tokens/tokens.json` is the only source of design-token values.
2. `assets/icons/catalog.mjs` is the source of native icon geometry and metadata.
3. `components/lsm` is the source of reusable web primitives.
4. `config/routes.json` is the source of Orbital Depth metadata.
5. `config/components.json` is the source of component states, allowed depths, and accessibility obligations.
6. Generated files under `tokens/dist`, `components/lsm/icons.generated.tsx`, `public/icons`, `style-guide.html`, and `public/style-guide.html` must not be edited directly.

## 2. Tokens only

- Do not add raw hexadecimal, RGB, HSL, OKLCH, or named palette colors to application, component, template, or platform source.
- Use semantic tokens before palette tokens.
- Add a semantic token when an existing token does not express the required meaning.
- Do not use pure black or pure white application screens.
- Do not introduce purple, pink, or magenta.
- Relay Blue means active/system/info.
- Ignition Orange is reserved for editorial signal, calls to action, and rare high-energy emphasis. It is not a status color.
- Signal Green means success/nominal.
- Alert Rust means warning/degraded.
- Fault Red means error/critical/destructive.
- Never use warning color as a substitute for a true failure state.

## 3. Component reuse

- Search `components/lsm/index.ts` and `config/components.json` before creating a component.
- Extend an existing component API when the interaction model is the same.
- Do not copy component classes into product pages.
- Documentation-only layout belongs in `components/site`, not the product component package.
- Product composition belongs in `templates` or application routes, not primitive internals.
- Every interactive component must expose disabled behavior and an accessible name.

## 4. Icon and asset rules

- Search the native catalog before adding an icon.
- Use the native LSM catalog only for the conventional product concepts it explicitly contains.
- For missing concepts, use a vetted platform/library icon or a text label. Do not invent niche pictograms.
- Do not duplicate third-party icons solely to increase the native count.
- Native icons use a 24 × 24 artboard, 1.5-pixel default stroke, round caps and joins, and `currentColor`.
- Review new geometry at 16, 20, 24, 32, and 48 pixels.
- Decorative icons are hidden from assistive technology. Meaningful icons and icon-only controls require a programmatic name.
- Run `pnpm icons` after changing `assets/icons/catalog.mjs`.

## 5. Public repository rules

- Treat `index.html` as the visual entry point and `examples/` as the copyable implementation reference.
- Keep all public links relative and verify every navigation target.
- Do not require Next.js, React, Node.js, or another runtime to browse or reuse the distributed package.
- Preserve the root repository map documented in `docs/REPOSITORY_GUIDE.md`.
- Any new layout pattern needs a working wide and narrow example, explicit depth, and a visible return path when it enters Depth 2.

## 5. Orbital Depth Architecture

- Every route must be declared in `config/routes.json`.
- Depth 0 is Signal: orientation and one primary action.
- Depth 1 is Mission: working UI and moderate complexity.
- Depth 2 is Systems: advanced settings and dense information.
- Never begin a product flow at Depth 2.
- Depth 1 and 2 routes must provide a visible return path to a shallower route.
- Render documented routes through `DepthBoundary` so depth and mode are present in the DOM.
- Do not increase complexity without an explicit user action or task requirement.

## 6. Visual modes

- Editorial Signal mode is reserved for landing pages, specimens, and archival presentation.
- Operational Calm mode is the default for applications, dashboards, forms, and mobile UX.
- Editorial mode may use large orbital arcs, horizon curves, trajectory geometry, registration marks, and subtle archival texture.
- Operational mode may retain only low-contrast fragments of that architecture so active work remains dominant.
- Do not use aerospace photography. Create atmosphere through geometry, scale, typography, space, and controlled light.
- Target roughly 70% usability and 30% personality overall; vary expression by depth instead of applying one density everywhere.
- Large editorial headlines are not allowed in ordinary working interfaces.
- Technical framing must support hierarchy; it must not create decorative clutter.

## 7. Accessibility

- Prefer native semantic elements.
- Preserve full keyboard operation and visible focus.
- Associate labels, descriptions, errors, and controls programmatically.
- Never encode state by color alone.
- Respect `prefers-reduced-motion`.
- Maintain responsive overflow and usable target sizes; 44 pixels is the preferred icon-control target.
- Dialogs must support Escape dismissal and modal focus behavior.
- Follow established WAI-ARIA keyboard patterns when native elements do not provide the interaction.

## 8. State completeness

When modifying a component listed in `config/components.json`:

- Preserve all declared states.
- Update the manifest when a deliberate state contract changes.
- Keep the matching `@lsm-states` declaration in source.
- Document consumer-visible behavior in `/components`.
- Add deterministic validation when a new contract can be checked reliably.

## 9. Generated artifacts

- Run `pnpm tokens` after changing `tokens/tokens.json` or the token compiler.
- Run `pnpm icons` after changing the icon catalog or icon compiler.
- Run `pnpm standalone` after changing standalone-guide source dependencies.
- Commit generated outputs with their authoritative sources.

## 10. Completion gate

Before declaring work complete, run:

```bash
pnpm quality
pnpm build
```

Do not suppress TypeScript, lint, validation, test, or build errors. Report unresolved uncertainty explicitly.

## 11. Change discipline

- Make the smallest coherent change that solves the underlying requirement.
- Preserve unrelated behavior.
- Prefer readable, maintainable implementation over clever abstraction.
- Record user-visible or contract-level changes in `CHANGELOG.md`.
