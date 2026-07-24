# Layout & UX Architecture

Lunar Signal pages follow one promise: **orient first, enable work second, reveal systems last**. The visual language may be cinematic, but the interaction model remains quiet, legible, and practical.

## Shallow-to-deep path

| Depth | User question | Page job | Default content | Must remain visible |
| --- | --- | --- | --- | --- |
| 0 — Signal | Where am I and what matters? | Orient and invite | identity, essential state, one next action | identity, invitation, calm entry/exit |
| 1 — Mission | What do I need to do now? | Support active work | controls, scoped data, progress, useful context | title, scope, next step, return path |
| 2 — Systems | What is behind this decision? | Inspect or configure deliberately | diagnostics, advanced controls, raw data, logs | mission context, danger meaning, return path |

Depth describes information density and consequence, not the number of screens. A deep link may open Systems for an expert, but it still needs visible context and a clear return to the active mission.

## Page anatomy

Compose product pages in this order:

1. **Context bar:** location, mission or scope, state, and view-level actions.
2. **Task header:** precise title, one-sentence decision context, and one primary action at most.
3. **Primary work surface:** form, queue, dashboard, content, or workflow that resolves the task.
4. **Supporting context:** compact status, help, related records, or secondary actions beside or after the work.
5. **Progressive detail:** disclosure, drawer, or explicit Systems route for low-frequency configuration and inspection.

The first viewport must answer **where am I, what state is this in, and what can I do next?**

## Wide screens

- Give the active work roughly two-thirds of the available width when support content is present.
- Align headings, controls, tables, plots, and card edges to the same grid.
- Use lines to divide meaning, calibrate a plot, or connect a label—not to decorate empty space.
- Keep one dominant reading axis and stable title placement.
- Dense data belongs at Mission only when scan speed is central; otherwise reserve it for Systems.

## Narrow screens

- Stack the primary work before support content.
- Preserve action labels; do not force users to decode icon-only navigation.
- Convert side panels into disclosures or full-width sections.
- Let tables scroll horizontally rather than collapsing meaning.
- Keep location and current scope visible.
- Reduce decorative geometry before reducing content clarity.

## Geometry safe corridors

Aerospace geometry is architecture. Define a safe corridor before drawing it.

Suitable zones:

- margins and gutters;
- the empty side of a hero split;
- plot, map, timeline, or diagram canvases;
- panel edges and footer rails;
- negative space below or beyond a reading block;
- dedicated media regions.

Forbidden intersections:

- running copy and headings;
- form labels, fields, controls, and validation messages;
- table rows and data cells;
- primary calls to action;
- focus rings and selection states.

A trajectory may point toward a decision area, but it may not cross the decision itself. Decorative SVGs are non-interactive and hidden from assistive technology.

## Aerospace schematic language

- **Trajectory and horizon geometry:** direction, progression, scale, and framing.
- **Datum crosshairs and registration marks:** origin and alignment.
- **Leader lines and plotted vectors:** connect a label to real content.
- **Measurement ticks and calibration rails:** sequence, range, and comparison.
- **Blueprint construction lines:** underlying grid and relationship at low contrast.
- **Coordinate and serial notation:** real identity and scope, never fake telemetry.
- **Paper grain, film noise, and scanlines:** material character at restrained opacity.

If a mark has no relationship to nearby content, remove it.

## Texture discipline

- Put texture behind content, never between content and the user.
- Use one dominant surface texture and at most one supporting texture.
- Keep Mission surfaces calmer than Signal surfaces.
- Prefer static texture; avoid animated noise.
- Verify readability at narrow widths and with reduced motion enabled.

## Composition recipes

| Application | Primary structure | Aerospace treatment |
| --- | --- | --- |
| Landing / portfolio | editorial split, one invitation | broad horizon, trajectory field, archival metadata |
| Dashboard | metrics then active work | small plotted trajectory, calibration rail |
| Data administration | filters, table, scoped inspector | ticks, datum line, compact registration marks |
| Knowledge base | reading column with guide rail | horizon profile in a dedicated figure |
| Settings | grouped controls plus impact summary | instrument crosshair or schematic thumbnail |
| Staged flow | progress, form, review context | vector path that mirrors sequence |
| Mission timeline | release phases and milestones | explicit plotted trajectory with labeled waypoints |
| Deep systems | scope rail, diagnostics, logs | denser grid, topology, low-frequency signal marks |

## Decision test

Before approving a page, ask:

- Can a new user orient within five seconds?
- Is the active task visually heavier than its support material?
- Is advanced detail earned by intent rather than dumped into the first view?
- Can the user return to a shallower, safer context without hunting?
- Does every schematic mark frame, align, measure, connect, sequence, locate, or establish scale?
- Are all copy and controls inside a clear safe corridor?
