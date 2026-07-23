# Public Repository Guide

The distributed package is a static, stack-neutral repository. It is designed to work as:

- a browsable public design resource;
- an implementation reference for developers;
- a constraint package for AI coding agents;
- a portable asset and token source.

## Root files

Keep `README.md`, `index.html`, `AGENTS.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, and `CHANGELOG.md` at the repository root. A new visitor should understand the project and open the guide without installing anything.

## Content ownership

- `index.html` is the authoritative visual overview.
- `docs/` explains decisions and rules.
- `examples/` demonstrates composition in plain HTML and CSS.
- `assets/` contains portable SVG assets.
- `tokens/` contains the platform-neutral token source and compiled platform formats.
- `AGENTS.md` tells AI agents how to apply the system.

## Publishing

The repository can be hosted directly with GitHub Pages by serving the root directory. All public examples use relative links and require no server-side runtime.

## Quality bar

A release is not ready if navigation links are dead, an example depends on an undocumented framework, a niche icon needs its caption to be recognized, responsive behavior is missing, or the first viewport does not establish location, state, and next action.
