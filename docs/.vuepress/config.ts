import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'AdrienITTS Documentation',

  description: 'Basic VuePress site to centralize and share knowledge about IT',

  theme: defaultTheme({
    logoDark: '/images/logo-1.svg',
    logo: '/images/logo-1.svg',

    navbar: ['/', '/get-started'],
  }),

  head: [['link', { rel: 'icon', href: '/images/logo-1.svg' }]],

  bundler: viteBundler(),
})


