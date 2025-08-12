import { defineNuxtConfig } from 'nuxt/config';
import 'dotenv/config';

export default defineNuxtConfig({
  ssr: true,
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
  css: ['@/assets/css/style.css'],
  i18n: {
      locales: [
        { code: 'en', name: 'EN' },
        { code: 'uk', name: 'UA' },
      ],
      vueI18n: './i18n/i18n.config.ts',
      defaultLocale: 'uk',
      strategy: 'prefix_except_default',
      detectBrowserLanguage: false,
    },
    app: {
      head: {
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/icons/favicon.png',
          },
          {
            rel: 'stylesheet', 
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css', 
          },
        ],
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
    // target: 'static',
    // ssr: false,
});
