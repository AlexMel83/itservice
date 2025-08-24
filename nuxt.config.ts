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
    '@nuxtjs/critters',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-gtag',
    '@nuxt/icon',
  ],
  // @ts-ignore
  pwa: {
    manifest: {
      name: 'IT-Starkon',
      short_name: 'IT-Starkon',
      description: 'Віртуальні 3D тури та IT-рішення для вашого бізнесу в Старокостянтинові',
      theme_color: '#0057b7',
      background_color: '#0057b7',
      display: 'standalone',
      start_url: '/?utm_source=pwa',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,jpg,jpeg,woff2,ttf}'],
      navigateFallback: '/',
      cleanupOutdatedCaches: true,
      skipWaiting: true,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
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
      content: [ './app/pages/**/*.{vue,js,ts}',
      './app/components/**/*.{vue,js,ts}',
      './app/layouts/**/*.{vue,js,ts}',
    ],
    },
  },
  image: {
  format: ['webp', 'avif'], // 👈
  quality: 80,
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
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
          { rel: 'preconnect', href: 'https://www.googletagmanager.com', crossorigin: '' },
          { rel: 'preconnect', href: 'https://maps.googleapis.com', crossorigin: '' },
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'icon', type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
          { rel: 'icon', type: "image/png", sizes: "36x16", href: "/favicon-16x16.png" },
          { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: "180x180" },
          { rel: 'manifest', href: '/site.webmanifest' },
        ],
      },
    },
    runtimeConfig: {
      public: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        googleMapsApiKeyStatic: process.env.GOOGLE_MAPS_API_KEY_STATIC,
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
      build: {
        rollupOptions: {
          treeshake: true,
        },
      },
    },
});