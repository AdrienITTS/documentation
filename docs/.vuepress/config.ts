import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
    }),
    mdEnhancePlugin({
      // Enable Align
      align: true,
    }),
  ],

  lang: 'en-US',

  title: 'AdrienITTS Documentation',

  description: 'Website to centralize and share my knowledge about IT',

  theme: defaultTheme({
    logoDark: '/images/logo-1.svg',
    logo: '/images/logo-1.svg',

    navbar: ['/', '/who', '/documentation/'],

    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        prefix: '/foo/',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // string - page file path
          'bar.md', // resolved to `/foo/bar.md`
          '/ray.md', // resolved to `/ray.md`
        ],
      },
      // string - page file path
      '/bar/README.md',
    ],
  }),

  head: [['link', { rel: 'icon', href: '/images/logo-1.svg' }]],

  bundler: viteBundler(),
})


