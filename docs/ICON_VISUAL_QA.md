# Icon Visual QA

**Review date:** 2026-07-23  
**Scope:** All 161 production Lunar Signal icons across Navigation, Action, Status, Data, and Communication categories.  
**Sizes reviewed:** 16, 20, 24, 32, and 48 px.

## Review criteria

Each glyph was checked for:

- recognizable silhouette at 16 px;
- consistent apparent stroke weight and optical center;
- legible internal detail at compact sizes;
- clear distinction from adjacent icons with similar semantics;
- family consistency: 24 × 24 artboard, rounded joins/caps, monochrome `currentColor`, and restrained technical character.

## Results

| Category | Reviewed | Result |
| --- | ---: | --- |
| Navigation | 36 | Approved. |
| Action | 47 | Approved. |
| Status | 22 | Approved. |
| Data | 36 | Approved. |
| Communication | 20 | Approved. |
| **Total** | **161** | **Approved** |

## Curation decision

The complete 55-icon bespoke mission/astronomy category was removed from the production package. Several symbols were inconsistent or only recognizable with their captions. The system now treats aerospace character as a composition, typography, mark, pattern, and tone concern rather than forcing it into specialized pictograms.

## Repeatable review

Run `node qa/render-icon-contact-sheets.mjs` to regenerate category sheets. The script renders every native icon at all five approved sizes from the source catalog; it is a review aid and does not modify production assets.
