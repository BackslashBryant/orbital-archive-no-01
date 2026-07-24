# Orbital Archive No. 01 — 1.7.0

This release is the final craft pass: it carries the aerospace instrument grammar all the way into the components, fixes body-copy readability at the token level, and textures the surfaces that were still flat — without turning the system into a "space" theme. The grammar stays seasoning, not scenery.

## Highlights

- **Grammar in the components.** Component cards were flat boxes; they now carry the same instrument language as the panels — grain texture, corner registration ticks, a monospaced coordinate index, and a hairline relay top-datum.
- **Broader component coverage.** The components & states reference gains a segmented control, slider, tabs, and a telemetry readout, so applied work has consistent examples to reach for.
- **Readability, fixed at the source.** Lunar Dust (muted content / disabled foreground) is now `#B3BBC2`, meeting WCAG AA on every surface — orbit, graphite, slate, and alloy. The value is propagated through all eight platform token exports, so anything built on the tokens inherits legible body copy.
- **Restrained states.** The destructive control moves from a solid red fill to an archival red outline. Fault Red stays reserved and legible.
- **Textured surfaces.** Color swatches gain a subtle blueprint-and-grain overlay, so foundational surfaces read as material rather than dead-flat.

## Counts

- 13 responsive application examples
- 12 component states in the reference
- 49 component contracts
- 161 reviewed native icons
- 8 reusable schematic patterns

## Contrast reference (Lunar Dust `#B3BBC2`, as text)

| Surface | Ratio | AA normal (≥4.5) |
| --- | --- | --- |
| Orbit `#11181E` | 9.21 | Pass |
| Graphite `#253139` | 6.85 | Pass |
| Slate `#2D3A42` | 6.02 | Pass |
| Alloy `#37464F` | 5.02 | Pass |

Run `node scripts/validate.mjs` to verify the package.
