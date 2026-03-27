import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { APP_LICENSE_URL, APP_NAME, APP_REPO_URL } from '../constants'
import en from '../../i18n/locales/en.json'

const TEST_DIR = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(TEST_DIR, '../../..')

function readJsonFromRoot<T>(pathFromRoot: string): T {
  return JSON.parse(readFileSync(resolve(REPO_ROOT, pathFromRoot), 'utf8')) as T
}

describe('Typemoins branding metadata', () => {
  it('uses Typemoins app constants', () => {
    expect(APP_NAME).toBe('Typemoins')
    expect(APP_REPO_URL).toBe('https://github.com/jovi20/typemoins')
    expect(APP_LICENSE_URL).toBe('https://github.com/jovi20/typemoins/blob/main/LICENSE')
  })

  it('uses Typemoins package metadata', () => {
    const pkg = readJsonFromRoot<{
      name: string
      homepage?: string
      repository: { url: string }
      bugs: { url: string }
      author: string
    }>('package.json')

    expect(pkg.name).toBe('typemoins')
    expect(pkg.homepage).toBe('https://github.com/jovi20/typemoins')
    expect(pkg.repository.url).toBe('https://github.com/jovi20/typemoins')
    expect(pkg.bugs.url).toBe('https://github.com/jovi20/typemoins/issues')
    expect(pkg.author).toBe('Typemoins Contributors')
  })

  it('uses Typemoins tauri identity', () => {
    const tauri = readJsonFromRoot<{
      productName: string
      identifier: string
      app: { windows: Array<{ title: string }> }
    }>('src-tauri/tauri.conf.json')

    expect(tauri.productName).toBe('Typemoins')
    expect(tauri.identifier).toBe('com.typemoins.app')
    expect(tauri.app.windows[0]?.title).toBe('Typemoins')
    expect(tauri.app.windows[1]?.title).toBe('Typemoins Capsule')
  })

  it('shows Typemoins in English UI copy', () => {
    expect(en.app.name).toBe('Typemoins')
  })
})
