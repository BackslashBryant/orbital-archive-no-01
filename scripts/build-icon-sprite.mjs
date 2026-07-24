#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const iconRoot = resolve(ROOT, 'assets/icons')
const manifest = JSON.parse(readFileSync(resolve(iconRoot, 'manifest.json'), 'utf8'))

const symbols = manifest.icons.map(({ name }) => {
  const source = readFileSync(resolve(iconRoot, `${name}.svg`), 'utf8')
  const body = source
    .replace(/^\s*<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/\s*<title>[^<]*<\/title>\s*/s, '\n')
    .trim()
    .split('\n')
    .map((line) => `    ${line.trim()}`)
    .join('\n')

  return `  <symbol id="lsm-icon-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\n${body}\n  </symbol>`
})

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">\n${symbols.join('\n')}\n</svg>\n`
writeFileSync(resolve(iconRoot, 'lsm-icons.svg'), sprite)
console.log(`[orbital-archive] rebuilt ${manifest.icons.length} sprite symbols`)
