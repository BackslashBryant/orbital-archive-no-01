# Component Contracts

`contracts.json` is the stack-neutral behavior manifest for Orbital Archive No. 01. It records the public component vocabulary, required states, and the depths at which each primitive may appear.

The file is intentionally implementation-agnostic. A React, Vue, Svelte, native, desktop, embedded, or server-rendered implementation may use different source structures while preserving the same contract.

## Fields

| Field           | Meaning                                              |
| --------------- | ---------------------------------------------------- |
| `id`            | Stable kebab-case contract identifier                |
| `name`          | Human-readable component name                        |
| `family`        | Functional grouping                                  |
| `states`        | Consumer-visible states that must remain represented |
| `allowedDepths` | `0` Signal, `1` Mission, `2` Systems                 |
| `reference`     | Visual reference in the standalone guide             |

Use [the visual component specimen](../index.html#components) for appearance and [the style guide](../docs/STYLE_GUIDE.md) for interaction, accessibility, color, and depth rules.

Version: `1.8.0` · Contracts: `49`
