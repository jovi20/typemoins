import { describe, expect, it } from 'vitest'
import en from '../../i18n/locales/en.json'
import zh from '../../i18n/locales/zh.json'

const legacyBrand = ['Open', 'Typeless'].join('')

describe('Locale copy cleanup', () => {
  it('removes pro labels from navigation and scenes copy', () => {
    expect(en.nav).not.toHaveProperty('pro')
    expect(en.scenes).not.toHaveProperty('pro')
    expect(zh.nav).not.toHaveProperty('pro')
    expect(zh.scenes).not.toHaveProperty('pro')
  })

  it('uses the updated local storage description', () => {
    expect(en.settings.storedLocally).toBe(
      'Stored locally on your device. Requests go directly to the provider or base URL you configure.',
    )
    expect(en.settings.storedLocally).not.toMatch(new RegExp(`${legacyBrand}|Cloud|Pro`))
  })

  it('uses the updated English about description', () => {
    expect(en.settings.aboutDescription).toBe(
      'Open-source AI voice input tool. Speak to write and turn your voice into polished text in real time.',
    )
  })

  it('uses the updated Chinese branding-sensitive copy', () => {
    expect(zh.home.welcome).toBe('欢迎使用 Typemoins')
    expect(zh.onboarding.welcomeTitle).toBe('欢迎使用 Typemoins')
    expect(zh.app.name).toBe('Typemoins')
    expect(zh.home.welcome).not.toMatch(new RegExp(legacyBrand))
    expect(zh.onboarding.welcomeTitle).not.toMatch(new RegExp(legacyBrand))
  })

  it('uses the updated Chinese storage and about copy', () => {
    expect(zh.settings.storedLocally).toBe(
      '密钥保存在本地设备上。请求会直接发送到你配置的服务商或 Base URL。',
    )
    expect(zh.settings.aboutDescription).toBe(
      '开源 AI 语音输入工具。说话即可写作，实时输出润色后的文本。',
    )
    expect(zh.settings.storedLocally).not.toMatch(new RegExp(`${legacyBrand}|Cloud|Pro`))
    expect(zh.settings.aboutDescription).not.toMatch(new RegExp(`${legacyBrand}|Cloud|Pro`))
  })
})
