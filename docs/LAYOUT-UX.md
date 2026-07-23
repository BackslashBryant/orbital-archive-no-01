# Layout & UX Architecture

Lunar Signal pages follow one consistent promise: **orient first, enable work second, reveal systems last**. The visual language may carry Starfield-like atmosphere, but the interaction model remains quiet, legible, and practical.

## The shallow-to-deep path

| Depth | User question | Page job | Default content | Must remain visible |
| --- | --- | --- | --- | --- |
| 0 — Signal | Where am I and what matters? | Orient and invite | mission name, current state, one clear next action | identity, one action, calm exit/entry point |
| 1 — Mission | What do I need to do now? | Support the active task | task controls, scoped data, progress, useful context | title, current scope, next step, return path |
| 2 — Systems | What is behind this decision? | Inspect or configure deliberately | diagnostics, advanced controls, raw data, logs | mission context, danger/state meaning, return path |

Do not make users climb through arbitrary wizard steps. Depth is about information density and consequence, not the number of screens. A deep link may open a Systems view for an expert, but it still needs a visible context rail and a clear return to the active mission.

## Page anatomy

Every product page should be composed from the same sequence:

1. **Context bar:** location, mission/scope, state, and only the actions that affect the current view.
2. **Task header:** a precise title, one-sentence decision context, and one primary action at most.
3. **Primary work surface:** the form, queue, dashboard, or content that answers the task.
4. **Supporting context:** compact status, help, related records, or secondary actions. Put it beside or after the work, never before it.
5. **Progressive detail:** disclosure, drawer, or explicit Systems route for low-frequency configuration and telemetry.

The first viewport must answer: *what is this, what state is it in, and what can I do next?* If it cannot, remove or defer material.

## Layout rules

- Prefer a single obvious reading axis. Use a two-column layout only when the second column materially supports the primary task.
- Give the primary work surface roughly two-thirds of wide-screen space; use the remaining third for status and context.
- Align headings, controls, table edges, and card boundaries to the same grid. Lines divide meaning; they do not decorate empty space.
- Let the interface breathe. Use dense tables only at Depth 2 or when scan speed is more important than contemplation.
- Keep one primary action per decision area. Secondary actions remain quiet until needed.
- On narrow screens, stack context after the task surface, preserve action labels, and turn side panels into disclosures or full-width sections.
- Editorial treatments—oversized condensed headlines, grids, trajectories, and archival marks—belong in Signal/landing moments. Operational pages use the same tokens with calmer scale and fewer ornaments.

## Aerospace schematic language

The visual architecture is broader than orbital rings:

- **Trajectory and horizon geometry** creates direction, scale, and large compositional movement.
- **Datum crosshairs and registration marks** establish alignment and a precise visual origin.
- **Leader lines and plotted vectors** connect labels to the content they explain.
- **Measurement ticks and calibration rails** organize sequences, ranges, and comparative data.
- **Blueprint construction lines** reveal underlying grid and relationship at low contrast.
- **Coordinate labels and serial notation** identify real context; never add meaningless telemetry.
- **Paper grain, film noise, and scanlines** add material character at restrained opacity without reducing legibility.

Use schematic details to explain or structure. If a mark has no relationship to nearby content, remove it.

## Starfield influence, kept disciplined

Use the influence as atmosphere: horizon lines, celestial geometry, restrained blue/gold signal accents, instrument-like labels, and dimensional navigation. Do not turn normal work into a cockpit simulation. Never add faux telemetry, visual noise, or lore copy where a user needs a clear decision.

## Decision test

Before approving a page, ask:

- Can a new user orient within five seconds?
- Is the current task visually heavier than its support material?
- Is advanced detail earned by intent rather than dumped into the first view?
- Can the user move back to a shallower, safer context without hunting?
- Would removing each decorative mark reduce understanding? If not, remove it.
