# Aerospace Schematic Grammar

This document defines how Orbital Archive No. 01 uses space, horizon, aerospace, and drafting references without sacrificing usability.

## Core rule

**Geometry is architecture, not wallpaper.** Every mark must frame, align, measure, connect, sequence, locate, or establish scale.

## Vocabulary

| Family | Appropriate job | Typical placement |
| --- | --- | --- |
| Horizon arcs | Establish scale, boundary, or calm forward movement | Hero edge, section transition, dedicated figure |
| Orbital arcs | Relate objects or frame a focal region | Media field, identity moment, diagram |
| Trajectory curves | Express sequence, direction, or planned progression | Timeline, workflow, chart, launch surface |
| Plotted vectors | Show relationship between named points | Diagram canvas, systems topology, annotated media |
| Datum crosshairs | Establish a visual origin or inspected point | Plot, schematic, instrument summary |
| Leader lines | Attach a label to a real object or measurement | Diagram only; never through unrelated content |
| Calibration rails | Show phase, range, scale, or ordered depth | Navigation edge, timeline, comparison band |
| Measurement ticks | Create precise rhythm and comparative scale | Rules, axes, panel edges |
| Blueprint grid | Reveal alignment and construction | Background at low contrast |
| Registration marks | Signal deliberate framing or print/archive provenance | Corners and crop boundaries |
| Coordinate notation | Identify actual scope or position | Metadata, plot annotation, archive reference |
| Grain / scanlines / film noise | Give surfaces tactile material character | Behind content at low opacity |

## Safe corridors

Before adding a line or curve, reserve a corridor that contains no reading or interaction target.

Good corridors:

- the empty half of a split hero;
- margins, gutters, and panel edges;
- dedicated plots, timelines, maps, and diagram canvases;
- negative space below a headline or beyond a text column;
- section transitions and footer rails.

Never cross:

- headings or paragraphs;
- buttons, links, fields, labels, or validation messages;
- table rows and data cells;
- focus indicators;
- status chips and selection states.

A line may terminate near a label or lead toward a region. It may not pass through the content it is supposed to support.

## Density by depth

| Depth | Geometry | Texture | Motion |
| --- | --- | --- | --- |
| Signal | Large-scale arcs, trajectories, registration fields | Visible but restrained grain and scanline treatment | Optional slow reveal; nonessential |
| Mission | One or two compact schematic cues tied to the task | Quiet grid or surface grain | Minimal state transitions only |
| Systems | Finer grids, topology, rails, and data-linked vectors | Fine technical texture; no extra glow | Functional updates only |

Systems may be denser than Mission, but it should be more exact—not more theatrical.

## Composition recipes

### Editorial landing

- Keep copy in the left or lower-left safe corridor.
- Place major arcs and trajectory intersections in the opposite half.
- Use one orange signal, typically the primary invitation or a terminal waypoint.
- Let metadata and calibration marks provide archival specificity.

### Operational dashboard

- Orient with title, scope, state, and primary action.
- Use a plot only when it explains active work.
- Keep background grids faint and panel boundaries stable.
- Do not put decorative curves behind metric values.

### Data administration

- Use calibration ticks above the table or inspector.
- Keep rows visually flat and scan-friendly.
- Use a datum or leader line only in a dedicated inspection panel.

### Documentation and knowledge bases

- Protect the reading column.
- Put horizon profiles and schematics in figures with captions.
- Use a guide rail for section navigation rather than visual noise behind prose.

### Timeline and staged work

- Let the trajectory correspond to actual phases or milestones.
- Label waypoints with real dates, owners, or states.
- Use dashed projected segments and solid completed/current segments consistently.

### Deep systems

- Show current scope and return path before diagnostics.
- Let topology and logs occupy separate, bounded surfaces.
- Use signal marks to identify actual nodes and faults; never invent decorative telemetry.

## Surface texture

A tasteful texture stack typically uses:

1. a low-contrast blueprint grid or construction field;
2. restrained static grain or paper texture;
3. optional fine scanlines or vignette.

Do not stack every treatment. Keep texture below the contrast of borders and muted copy. Avoid animated noise, high-frequency shimmer, dirty overlays on fields, and texture that makes panels look damaged.

## Color within schematics

- Grid Line: construction, inactive relationships, boundaries.
- Signal Teal: active path, selected vector, informational point — narrow role, never the terminal launch point.
- Mission Gold: priority, forecast, or editorial hierarchy.
- Ignition Orange: the primary editorial terminal point or launch invitation — the dominant signal, used once per diagram.
- Signal Green: completed or nominal.
- Alert Rust: degraded or attention.
- Fault Red: failure, critical, or destructive only.

## Accessibility

- Decorative schematics use `aria-hidden="true"` and `pointer-events: none`.
- Meaningful diagrams need a caption, text summary, or data table.
- Never encode a state only by line color or line style.
- Respect reduced-motion preferences and preserve full contrast around interactive content.

## Anti-patterns

Remove the treatment when it creates:

- a line through copy or controls;
- meaningless telemetry or invented coordinates;
- cockpit density on routine product work;
- multiple competing focal points;
- orange operational UI everywhere;
- texture heavier than the content;
- tiny unlabeled aerospace icons that need interpretation;
- a graph that exists only to look technical.

## Review checklist

- Does every mark have a job?
- Is the content safe corridor clean?
- Is the geometry appropriate for the current depth?
- Does the diagram represent real sequence, scale, or relationship?
- Is orange rare and editorial?
- Are texture and scanlines below content contrast?
- Does the page still orient, state, and offer a next action within the first viewport?
