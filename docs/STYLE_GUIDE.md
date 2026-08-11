# Orbital Archive No. 01 Style Guide

**Theme 01 · Lunar Signal Modernism · Version 1.8.0**

## Identity

Orbital Archive No. 01 combines mission-era documentation, space-age optimism, Swiss typographic discipline, engineering schematics, restrained cinematic science fiction, and practical product UX.

The system should feel calm, precise, intelligent, archival, engineered, and quietly futuristic.

> Present dramatically. Operate calmly. Scale completely.

- **Editorial Signal mode:** landing pages, portfolios, announcements, visual specimens, and archival presentation.
- **Operational Mission mode:** applications, dashboards, forms, documentation, administration, workflows, and mobile UX.
- **Technical Systems mode:** diagnostics, advanced settings, raw data, and logs after deliberate entry.

## Principles

1. **Clarity — function before ornament.** Orientation, state, and next action are legible before identity is expressed.
2. **Precision — signal over noise.** Exact labels, stable alignment, and deliberate state language.
3. **Restraint — accent with intent.** Color and framing identify meaning rather than fill space.
4. **Optimism — structure creates calm.** Technical systems feel capable and understandable.

## Color

| Token | Value | Use |
| --- | ---: | --- |
| Deep Orbit | `#11181E` | Deepest editorial and systems surface |
| Calm Graphite | `#253139` | Default operational background |
| Lunar Slate | `#2D3A42` | Cards and raised surfaces |
| Elevated Alloy | `#37464F` | Inputs, controls, and popovers |
| Grid Line | `#56656E` | Borders, dividers, and schematics |
| Lunar Dust | `#98A4AC` | Muted content |
| Archive Bone | `#E7E1D5` | Primary content |
| Signal Teal | `#5CA3A6` | Active, focused, linked, selected — narrow role, never primary |
| Mission Gold | `#CBAE67` | Priority and editorial hierarchy |
| Ignition Orange | `#E66A2C` | Primary action and editorial signal — the dominant brand hue, one job per surface |
| Signal Green | `#7EB79E` | Success, available, nominal |
| Alert Rust | `#C97A60` | Warning, degraded, attention |
| Fault Red | `#EA7468` | Error, critical, destructive |

Rules:

- Do not use pure black or pure white application screens.
- Do not introduce purple, pink, or magenta.
- Operational backgrounds remain gray-blue and mid-tone.
- Operational primary actions use Ignition Orange, rationed to one job per surface. Signal Teal marks focus, links, and active state — it is not the primary action color.
- Warning and error remain distinct.
- Color always has text, shape, position, or icon support.
- One hue does one job. No color should read as the ambient tone of a whole surface — the base field stays desaturated; saturated color is spent deliberately.
- `color.palette.relay` is retained only as a deprecated compatibility alias for Signal Teal in v1.x exports. Author new work against `color.palette.teal`.

## Typography

The token package defines these families with practical fallbacks:

- **Display:** Barlow Condensed → Arial Narrow → sans-serif
- **Interface:** Inter → system UI → sans-serif
- **Telemetry:** IBM Plex Mono → UI monospace → monospace

Use large condensed display type for Signal surfaces and section-scale editorial moments. Mission UI uses readable interface sizes and line lengths. Monospace labels identify timestamps, coordinates, IDs, code, compact metadata, and machine state.

## Layout system

- 12-column grid
- 4-pixel base unit
- 16-pixel default gutter
- 48-pixel wide-screen outer margin
- 320–1440 pixel content-width scale
- Minimal radii: 2–6 pixels
- Control heights: 32, 40, and 48 pixels
- Preferred icon-control target: 44 pixels
- Technical rules and borders use Grid Line at restrained opacity

Build pages shallow to deep:

**context → task → primary work surface → supporting context → deliberate systems detail**

The first viewport must answer:

1. Where am I?
2. What state is this in?
3. What can I do next?

## Aerospace grammar

The identity is broader than orbital rings:

- horizon and orbital arcs establish scale and frame regions;
- trajectories and plotted vectors express progression or relationship;
- datum crosshairs and registration marks establish origin and alignment;
- leader lines attach labels to real content;
- measurement ticks and calibration rails organize sequence and comparison;
- coordinate labels identify actual context;
- blueprint construction geometry reveals structure;
- restrained grain, scanlines, film noise, vignette, and paper texture give surfaces material character.

Geometry belongs in safe corridors. It never crosses running text, controls, data cells, or primary actions. See [`AEROSPACE-GRAMMAR.md`](AEROSPACE-GRAMMAR.md) for density rules and application recipes.

Do not use aerospace photography. Evoke horizons, planets, trajectories, and depth through geometry, negative space, typography, and controlled light.

## Orbital Depth Architecture

### Depth 0 — Signal

Use for orientation, essential state, identity, and one primary invitation. Expression may be cinematic, but copy remains concise.

### Depth 1 — Mission

Use for active tasks: forms, filters, progress, moderate data, documentation, queues, and workflow. Atmosphere remains in framing and low-contrast diagrams.

### Depth 2 — Systems

Use for advanced settings, diagnostics, telemetry, and logs after deliberate entry. Keep scope and a return path visible.

## Component behavior

The 49 stack-neutral contracts live in [`../components/contracts.json`](../components/contracts.json).

- Use native semantics first.
- Preserve every declared state that applies to an implementation.
- Require keyboard operation and visible focus.
- Associate labels, descriptions, errors, and controls programmatically.
- Allow horizontal table scrolling on narrow screens.
- Keep established keyboard behavior for tabs, menus, dialogs, and disclosures.
- Respect reduced-motion preferences.
- Support warning and error with text or iconography in addition to color.

Example using semantic CSS variables:

```css
.action-primary {
  color: var(--color-content-inverse);
  background: var(--color-action-primary);
  border: 1px solid var(--color-border-active);
}

.status-error {
  color: var(--color-status-error);
}
```

Exact exported names vary by target; use [`../tokens/tokens.json`](../tokens/tokens.json) as the source and select the matching file under [`../tokens/dist/`](../tokens/dist/).

## Iconography

- 161 reviewed icons across navigation, action, status, data, and communication
- 24 × 24 artboard
- 1.5-pixel default stroke
- Rounded caps and joins
- Monochrome `currentColor` by default
- Review at 16, 20, 24, 32, and 48 pixels
- Pair unfamiliar symbols with labels
- Hide decorative icons from assistive technology
- Programmatically name meaningful icons and icon-only controls

Aerospace identity comes from layout, typography, framing, marks, and patterns—not invented niche pictograms.

## Voice and microcopy

Voice is calm, exact, concise, and forward-looking.

Preferred:

- Signal acquired.
- Trajectory nominal.
- Awaiting command.
- Proceed with intent.
- Maintain visual silence.
- Command fault. Review the checksum.
- Every element must earn its position.

Avoid jokes in critical flows, theatrical military language, vague success messages, fake telemetry, and decorative technical jargon.

## Application atlas

The stack-neutral [`../examples/`](../examples/index.html) directory includes 13 complete responsive references:

- editorial landing and portfolio;
- top navigation and sidebar application shells;
- dashboard and data administration;
- resource catalog and knowledge base;
- settings, staged workflow, and mission timeline;
- mobile composition;
- deep systems diagnostics.

Each example uses plain HTML and shared CSS. Reuse the information hierarchy, depth, responsive sequence, and geometry discipline in any web, native, desktop, embedded, presentation, or server-rendered stack.
