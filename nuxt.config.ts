import { defineNuxtConfig } from 'nuxt/config';
import 'dotenv/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-02-20',
  devtools: { enabled: true },
  components: true,
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
      ],
      theme: {
        extend: {},
      },
    },
  },
  i18n: {
    locales: [
      { code: 'en', name: 'EN' },
      { code: 'uk', name: 'UA' },
    ],
    vueI18n: './i18n/i18n.config.ts',
    defaultLocale: 'uk',
    strategy: 'prefix_except_default',
      useCookie: false, 
      redirectOn: 'no',
      fallbackLocale: 'uk', 
    },
    app: {
      head: {
        htmlAttrs: {
          lang: 'uk',
        },
        meta: [
          { charset: 'UTF-8' },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { name: 'robots', content: 'width=device-width, initial-scale=1' },
          { property: 'og:locale', content: 'uk_UA' },
          { property: 'og:type', content: 'article' },
          { property: 'og:site_name', content: 'IT-Service Starkon' },
        ],
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/icons/favicon.png',
          },
        ],
        // script: [],
      },
    },
})
