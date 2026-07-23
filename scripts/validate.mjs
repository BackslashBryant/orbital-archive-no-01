#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const failures = []
const fail = (message) => failures.push(message)
const required = [
  'index.html',
  'README.md',
  'AGENTS.md',
  'LICENSE',
  'manifest.json',
  'tokens/tokens.json',
  'assets/icons/manifest.json',
  'assets/icons/lsm-icons.svg',
  'assets/patterns/aerospace-schematic.svg',
  'docs/STYLE_GUIDE.md',
  'docs/LAYOUT-UX.md',
  'examples/index.html',
]

for (const path of required) {
  if (!existsSync(resolve(ROOT, path))) fail(`missing required path: ${path}`)
}

const manifest = JSON.parse(readFileSync(resolve(ROOT, 'manifest.json'), 'utf8'))
const iconManifest = JSON.parse(readFileSync(resolve(ROOT, 'assets/icons/manifest.json'), 'utf8'))
if (manifest.version !== '1.5.0') fail(`expected version 1.5.0, found ${manifest.version}`)
if (manifest.framework !== 'none') fail('portable manifest must remain framework-free')
if (manifest.iconCount !== 161 || iconManifest.count !== 161) fail('expected 161 reviewed icons')

const htmlFiles = []
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) walk(path)
    else if (path.endsWith('.html')) htmlFiles.push(path)
  }
}
walk(ROOT)

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8')
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1]
    if (/^(?:https?:|mailto:|#)/.test(href)) continue
    const [relative, fragment] = href.split('#')
    const target = resolve(dirname(file), relative)
    if (!existsSync(target)) {
      fail(`${file.replace(`${ROOT}/`, '')} links to missing ${href}`)
      continue
    }
    if (fragment && statSync(target).isFile()) {
      const targetHtml = readFileSync(target, 'utf8')
      if (!targetHtml.includes(`id="${fragment}"`) && !targetHtml.includes(`id='${fragment}'`)) {
        fail(`${file.replace(`${ROOT}/`, '')} links to missing #${fragment}`)
      }
    }
  }
}

const examples = readdirSync(resolve(ROOT, 'examples'))
  .filter((name) => name.endsWith('.html') && name !== 'index.html')
if (examples.length !== 12) fail(`expected 12 application examples, found ${examples.length}`)

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join('\n'))
  process.exit(1)
}

console.log(`[orbital-archive] valid v${manifest.version}: ${htmlFiles.length} HTML files, ${examples.length} examples, ${manifest.iconCount} icons`)
