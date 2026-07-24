<p align="center">
  <img src="assets/marks/readme-banner.svg" width="100%" alt="Orbital Archive No. 01 — Lunar Signal Modernism">
</p>

<p align="center"><strong>A stack-neutral aerospace design system for expressive entry, calm operation, and exact systems work.</strong></p>

<p align="center"><code>VERSION 1.7.0</code> · <code>161 REVIEWED ICONS</code> · <code>13 APPLICATIONS</code> · <code>49 CONTRACTS</code> · <code>8 SCHEMATIC PATTERNS</code></p>

## Present dramatically. Operate calmly. Scale completely.

Orbital Archive No. 01 is the first theme in the **Lunar Signal Modernism** design language. It combines archival aerospace drafting, condensed editorial typography, controlled signal color, pragmatic product UX, and tactile surface texture without turning normal work into a cockpit simulation.

**[Open the visual guide](index.html)** · **[Browse the application atlas](examples/index.html)** · **[Read the aerospace grammar](docs/AEROSPACE-GRAMMAR.md)**

No install or framework is required. The guide and every example can be opened directly in a browser.

## What ships

| Layer | Included |
| --- | --- |
| Visual guide | Self-contained HTML with foundations, depth rules, component states, assets, applications, and a searchable icon catalog |
| Application atlas | 13 distinct responsive references spanning editorial, product, administration, documentation, mobile, sequencing, and diagnostics |
| Aerospace grammar | Orbit and horizon arcs, plotted trajectories, datum marks, vectors, leader lines, calibration rails, coordinate notation, and blueprint structure |
| Surface language | Restrained paper grain, blueprint grids, scanlines, film noise, vignette, and registration marks |
| Asset kit | 161 conventional SVG icons, a symbol sprite, 3 marks, and 8 reusable schematic patterns |
| Token package | DTCG source plus CSS, TypeScript, Tailwind, React Native, Swift, Kotlin, Dart, and native exports |
| Governance | 49 machine-readable component contracts, binding agent rules, validation, contribution guidance, and CI |

## Application atlas

The examples are deliberately different rather than one dashboard reskinned thirteen times.

| Depth | References |
| --- | --- |
| **Signal · cinematic entry** | [Landing page](examples/landing-page.html), [editorial portfolio](examples/editorial-portfolio.html) |
| **Mission · active work** | [Top navigation](examples/top-navigation.html), [sidebar application](examples/sidebar-application.html), [dashboard](examples/dashboard.html), [data admin](examples/data-admin.html), [catalog](examples/catalog.html), [knowledge base](examples/knowledge-base.html), [settings](examples/settings.html), [staged flow](examples/staged-flow.html), [mission timeline](examples/mission-timeline.html), [mobile](examples/mobile.html) |
| **Systems · deliberate depth** | [Deep systems diagnostics](examples/deep-systems.html) |

Each page uses plain HTML and the shared [`examples/example.css`](examples/example.css). Copy the composition, hierarchy, responsive sequence, and semantic treatment into any stack.

## Aerospace without costume

The identity is architectural, not illustrative.

| Device | Job |
| --- | --- |
| Horizon and orbital arcs | Establish scale, frame regions, or create a calm directional field |
| Trajectories and plotted vectors | Show sequence, progression, relationship, or intent |
| Datum crosshairs and registration marks | Establish origin, alignment, and technical precision |
| Leader lines and measurement ticks | Attach labels to real content and make comparison legible |
| Blueprint grids and construction lines | Reveal structure at low contrast |
| Grain, scanlines, and film noise | Give surfaces material character without reducing readability |

**Non-negotiable:** trajectories, curves, and rules never cross running copy, form controls, data cells, or primary actions. Geometry lives in safe corridors and must earn its position. See [AEROSPACE-GRAMMAR.md](docs/AEROSPACE-GRAMMAR.md).

## Depth model

| Depth | Mode | Job |
| --- | --- | --- |
| **0 · Signal** | Cinematic editorial | Orient, establish identity, and invite one next action |
| **1 · Mission** | Calm operational | Support active work with restrained hierarchy and clear scope |
| **2 · Systems** | Deliberately technical | Reveal diagnostics, advanced settings, logs, and dense detail after explicit entry |

Every deeper context keeps scope visible and provides a clear return path.

## Quick start

1. Open [`index.html`](index.html).
2. Choose the closest reference in [`examples/`](examples/index.html).
3. Reuse semantic values from [`tokens/tokens.json`](tokens/tokens.json) or a generated export in [`tokens/dist/`](tokens/dist/).
4. Preserve required behavior from [`components/contracts.json`](components/contracts.json).
5. Validate before release:

```bash
node scripts/validate.mjs
```

When editing icons, rebuild the sprite first:

```bash
node scripts/build-icon-sprite.mjs
node scripts/validate.mjs
```

## Repository map

```text
.
├── index.html                    # standalone visual guide
├── examples/                     # 13 complete responsive applications
├── components/
│   └── contracts.json            # 49 stack-neutral behavior contracts
├── assets/
│   ├── icons/                    # individual SVGs, sprite, metadata
│   ├── marks/                    # roundel, wordmark, README banner
│   └── patterns/                 # 8 reusable aerospace fields
├── tokens/
│   ├── tokens.json               # DTCG source
│   └── dist/                     # platform exports
├── docs/                         # style, layout, grammar, icon, deployment
├── scripts/                      # zero-dependency build and validation tools
└── .github/workflows/            # quality and GitHub Pages deployment
```

## Deployment

The repository includes a GitHub Pages workflow for the root static package. See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for the one-time repository setting and release flow.

## Contribution rules

Read [AGENTS.md](AGENTS.md) before generating or changing UI. Human contributions follow [CONTRIBUTING.md](CONTRIBUTING.md). User-visible and contract-level changes belong in [CHANGELOG.md](CHANGELOG.md).

## License

MIT. See [LICENSE](LICENSE).
