# Orbital Archive No. 01

**Theme 01 · Lunar Signal Modernism · Version 1.5.0**

## Identity

Orbital Archive No. 01 is the first theme built on Lunar Signal Modernism. It combines NASA mission-era documentation, 1970s space optimism, Swiss typography, engineering schematics, restrained cinematic science fiction, and museum-poster composition.

The system must feel calm, precise, intelligent, archival, engineered, and quietly futuristic.

## Operating rule

> Present dramatically. Operate calmly. Scale completely.

- **Editorial Signal Mode:** landing pages, visual specimens, archival moments
- **Operational Calm Mode:** products, dashboards, forms, and mobile UX

Editorial surfaces carry the atmosphere. Operational surfaces carry the work. Deep Systems surfaces may become denser and more schematic after deliberate entry.

## Principles

1. **Clarity — function before ornament.** The next action and current state must be legible before identity is expressed.
2. **Precision — signal over noise.** Use exact labels, stable alignment, and deliberate state language.
3. **Restraint — accent with intent.** Color and framing identify meaning rather than fill space.
4. **Optimism — structure creates calm.** Technical systems should feel capable and understandable.

## Color

| Token | Value | Use |
|---|---:|---|
| Deep Orbit | `#11181E` | Deepest editorial surface |
| Calm Graphite | `#253139` | Default operational background |
| Lunar Slate | `#2D3A42` | Cards and raised surfaces |
| Elevated Alloy | `#37464F` | Inputs, controls, and popovers |
| Grid Line | `#56656E` | Borders, dividers, schematics |
| Lunar Dust | `#98A4AC` | Muted content |
| Archive Bone | `#E7E1D5` | Primary content |
| Relay Blue | `#54BCD9` | Active, selected, system, informational |
| Mission Gold | `#CBAE67` | Priority and editorial hierarchy |
| Ignition Orange | `#E66A2C` | Rare editorial signal and high-energy emphasis |
| Signal Green | `#7EB79E` | Success, available, nominal |
| Alert Rust | `#C97A60` | Warning, degraded, attention |
| Fault Red | `#EA7468` | Error, critical, destructive |

Fault Red provides 4.56:1 contrast as text on Calm Graphite and 6.13:1 with Deep Orbit content on a filled Fault Red control.

Rules:

- Do not use pure black or pure white application screens.
- Do not introduce purple, pink, or magenta.
- Operational backgrounds remain gray-blue and mid-tone.
- Ignition Orange is not a warning or error color. Reserve it for editorial calls to action and rare high-energy moments. Operational primary actions use Relay Blue.
- Color never carries state without text, shape, or icon support.
- Warning and error are distinct states. Do not use Alert Rust for destructive actions.

## Typography

- **Display:** Barlow Condensed
- **Interface:** Inter
- **Telemetry:** IBM Plex Mono

Large display typography is reserved for editorial mode. Product UI uses interface sizes and readable line lengths. Telemetry typography is used for timestamps, identifiers, coordinates, code, and machine state.

## Layout

- 12-column grid
- 4-point base unit
- 16-pixel default gutter
- 48-pixel wide-screen outer margin
- 320–1440 pixel content-width scale
- Minimal radii: 2–6 pixels
- Control heights: 32, 40, and 48 pixels
- Preferred icon-control target: 44 pixels
- Technical rules and borders use Grid Line at restrained opacity

### Page and UX composition

Build pages shallow to deep: **context → task → primary work surface → supporting context → deliberate systems detail**.

- Start with the user’s orientation: current mission/scope, state, and one obvious next action.
- Let the active task dominate the viewport. On wide screens, give primary work roughly two-thirds of the width and reserve the remaining third for compact support material.
- Keep advanced configuration, raw telemetry, and exhaustive logs behind deliberate disclosure or a Systems route.
- Maintain one clear reading axis, stable title placement, visible current scope, and a return path from every deeper context.
- On mobile, preserve action labels and stack supporting context after the work surface. Do not make users decode icon-only navigation.
- Use orbital lines and horizon curves as composition architecture, not illustration. They may establish scale, frame content, or connect regions.
- Expand the aerospace drafting language with datum crosshairs, plotted vectors, leader lines, measurement ticks, calibration rails, coordinate labels, and blueprint construction geometry. These marks should clarify alignment, sequence, scale, or relationship rather than imitate a cockpit.
- Use subtle paper grain, blueprint grids, scanlines, and registration marks at low contrast.
- Do not use aerospace photography. Evoke planets, horizons, and trajectories through geometry, negative space, and controlled light.
- Let expression vary by depth: cinematic at Signal, restrained at Mission, technical and schematic at Systems.

The first viewport must answer: **Where am I? What state is this in? What can I do next?**

## Iconography

- 161 reviewed icons across navigation, action, status, data, and communication categories
- 24 × 24 artboard
- 1.5-pixel default stroke
- Rounded caps and joins
- Monochrome `currentColor` by default
- Review at 16, 20, 24, 32, and 48 pixels
- Pair unfamiliar symbols with labels
- Aerospace identity comes from layout, typography, framing, marks, and restrained patterns—not invented niche pictograms.
- When the native catalog does not cover a concept, use a text label or a vetted platform/library icon.
- Hide decorative icons from assistive technology
- Give meaningful icons and icon-only controls a programmatic name
- Use `IconAdapter` with Lucide when broad general product vocabulary is needed

## Orbital Depth Architecture

### Depth 0 — Signal

Use for orientation, essential state, and one primary action. Do not show dense data or advanced settings.

### Depth 1 — Mission

Use for the active task: forms, filters, progress, and moderate task-scoped data.

### Depth 2 — Systems

Use for advanced settings, diagnostics, telemetry, and logs after deliberate entry. Always show a return path to the mission context.

## Component behavior

- Native semantics first
- Keyboard operation and visible focus required
- Disabled, invalid, loading, selected, expanded, and active states declared where applicable
- Tables scroll horizontally on narrow screens
- Tabs and menus retain established keyboard behavior
- Dialogs use modal focus behavior and Escape dismissal
- Reduced-motion preferences suppress nonessential animation
- Error and warning feedback includes text or icon support in addition to color

## Voice and microcopy

Voice is calm, exact, concise, and forward-looking.

Preferred examples:

- Signal acquired.
- Trajectory nominal.
- Awaiting command.
- Proceed with intent.
- Maintain visual silence.
- Command fault. Review the checksum.
- Every element must earn its position.

Avoid jokes, theatrical military language, vague success messages, and decorative technical jargon.

## Implementation

Use semantic tokens and exports from `components/lsm`. Do not hardcode visual values in product source.

```tsx
import { Button, StatusChip } from '@/components/lsm'
import { ErrorIcon } from '@/components/lsm/icons'

<StatusChip status="error"><ErrorIcon size={13} /> Command fault</StatusChip>
<Button variant="destructive">Abort command</Button>
```

See `AGENTS.md` for binding contribution and agent rules.

## Application atlas

The stack-neutral `examples/` directory includes twelve complete responsive references:

- Editorial landing and portfolio
- Top navigation and sidebar application shells
- Dashboard and data-administration surfaces
- Resource catalog and knowledge base
- Settings and staged workflows
- Mobile composition and deep systems

Each example uses plain HTML and CSS. Copy the information hierarchy and responsive sequence into any web, native, desktop, or embedded stack.
