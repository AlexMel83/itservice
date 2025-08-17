import { defineNuxtConfig } from 'nuxt/config';
import 'dotenv/config';
import type { content } from '#tailwind-config';

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-02-20',
  devtools: { enabled: true },
  components: true,
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-0L0ZVLVDK4',
    loadingStrategy: 'defer',
  },
  robots: {
    allow: '/',
    sitemap: 'https://it.starkon.pp.ua/sitemap.xml',
  },
  css: ['@/assets/css/style.css'],
  tailwindcss: {
    config: {
      content: [ './pages/**/*.{vue,js,ts}',
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.{vue,js,ts}',
    ],
    },
  },
  i18n: {
      locales: [
        { code: 'en', name: 'EN' },
        { code: 'uk', name: 'UA' },
      ],
      vueI18n: 'i18n.config.ts',
      defaultLocale: 'uk',
      strategy: 'prefix_except_default',
      detectBrowserLanguage: false,
    },
    app: {
      head: {
        link: [
          {
            rel: 'stylesheet', 
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css', 
          },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
          { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com', crossorigin: '' },
          { rel: 'preconnect', href: 'https://www.googletagmanager.com', crossorigin: '' },
          { rel: 'preconnect', href: 'https://maps.googleapis.com', crossorigin: '' },
        ],
        // script: [
        //   {
        //     src: 'https://www.googletagmanager.com/gtag/js?id=G-0L0ZVLVDK4',
        //     async: true,
        //   },
        //   {
        //     innerHTML: `
        //       window.dataLayer = window.dataLayer || [];
        //       function gtag(){dataLayer.push(arguments);}
        //       gtag('js', new Date());
        //       gtag('config', 'G-0L0ZVLVDK4');
        //     `,
        //     defer: true,
        //   },
        // ],
      },
    },
    runtimeConfig: {
      public: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        bootToken: process.env.BOOT_TOKEN,
        chatId: process.env.CHAT_ID,
        baseURL: process.env.BASE_URL || 'https://it.starkon.pp.ua',
      },
    },
    nitro: {
      compressPublicAssets: true,
      // preset: 'cloudflare-pages',
      // static:  true,
      publicAssets: [
        {
          dir: 'public',
          maxAge: 60 * 60 * 24 * 365,
        },
      ],
    },
    vite: {
      server: {
        allowedHosts: ['it.starkon.pp.ua', 'localhost', '127.0.0.1'],
      },
    },
});