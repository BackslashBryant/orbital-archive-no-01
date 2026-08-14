# Third-party notices

Orbital Archive No. 01 is MIT licensed. It includes third-party material under the terms below.

## Tabler Icons

The native icon set in `assets/icons/` is derived from **Tabler Icons v3.46.0**, an
open-source icon library by Paweł Kuna, used under the MIT License.

- Project: <https://tabler.io/icons>
- Source: <https://github.com/tabler/tabler-icons>
- Version vendored: `3.46.0`
- License: MIT

Only the outline SVG geometry for the specific glyphs mapped in
`assets/icons/manifest.json` was vendored. No Tabler runtime, font, or build
dependency is bundled. Each glyph was normalized to the Orbital icon contract
(24×24 artboard, `currentColor`, 1.5 stroke, round caps and joins) and retitled
with the Orbital semantic name. Orbital's public icon filenames and API are
preserved; the upstream Tabler source name for every icon is recorded in the
`source` field of each entry in `assets/icons/manifest.json`.

```text
MIT License

Copyright (c) 2020-2026 Paweł Kuna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
