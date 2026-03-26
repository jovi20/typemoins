import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { APP_NAME, APP_REPO_URL } from '../constants'
import en from '../../i18n/locales/en.json'

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(resolve(process.cwd(), path), 'utf8')) as T
}

describe('Typemoins branding metadata', () => {
  it('uses Typemoins app constants', () => {
    expect(APP_NAME).toBe('Typemoins')
    expect(APP_REPO_URL).toBe('https://github.com/jovi20/typemoins')
  })

  it('uses Typemoins package metadata', () => {
    const pkg = readJson<{
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
    const tauri = readJson<{
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
