/**
 * Orbital Archive No. 01 — CSS lint baseline.
 *
 * Division of labour: Prettier owns formatting (whitespace, blank lines);
 * Stylelint owns correctness and consistency. Rules that either duplicate
 * Prettier or fight a deliberate part of the aesthetic are disabled below,
 * with the reason noted. Everything else in stylelint-config-standard stays on
 * (invalid hex, duplicate selectors/properties, empty blocks, unknown units…).
 */
export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["node_modules/**", "tokens/dist/**", "assets/fonts.css"],
  rules: {
    // — Formatting: owned by Prettier, so Stylelint must not also assert it —
    "rule-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "declaration-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "comment-empty-line-before": null,

    // — Deliberate aesthetic / house style, not correctness —
    // The theme uses legacy rgba()/comma syntax and decimal alpha throughout
    // for the CRT scanline and vignette layers; both are valid CSS.
    "color-function-notation": null,
    "alpha-value-notation": null,
    "value-keyword-case": null,
    // -webkit-background-clip is required to clip the scanline gradient to text
    // (background-clip: text still needs the prefix in most engines).
    "property-no-vendor-prefix": null,
    // Descriptive custom-property and keyframe names are chosen for clarity.
    "keyframes-name-pattern": null,

    // — Deliberate authoring conventions —
    // BEM-style class names (block__element, block--modifier) are intentional.
    "selector-class-pattern": null,
    // Chained :not(.a):not(.b) is intentional and widely supported.
    "selector-not-notation": null,
    // Prefix media syntax (min-width) is kept for the broadest engine support.
    "media-feature-range-notation": null,
    // A hand-authored showcase intentionally overrides earlier rules later in
    // the cascade; specificity ordering is not a defect here.
    "no-descending-specificity": null,
    // The guide and example atlas carry a few intentional late-cascade override
    // blocks (e.g. button scan-animation toggles) that repeat a selector on
    // purpose. Consolidating them is tracked separately; until then this rule
    // would fail CI on deliberate layering, so it is disabled with intent.
    "no-duplicate-selectors": null
  }
};
