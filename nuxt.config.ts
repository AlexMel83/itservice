import { defineNuxtConfig } from 'nuxt/config';
import 'dotenv/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-02-20',
  serverHandlers: [
    {
      route: "/",
      handler: (req, res, next) => {
        const allowedHosts = ["it.starkon.pp.ua", "localhost"];
        const host = req.headers.host?.replace(/^https?:\/\//, ""); // Видаляємо префікс http:// або https://
        
        if (!host || !allowedHosts.includes(host)) {
          res.writeHead(403, { "Content-Type": "text/plain" });
          res.end("Blocked request. This host is not allowed.");
          return;
        }
        
        next();
      },
    },
  ],
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
      useCookie: false, 
      redirectOn: 'no',
      fallbackLocale: 'uk', 
    },
    app: {
      head: {
        htmlAttrs: {
          lang: 'uk',
          class: 'scroll-smooth',
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
          {
            rel: 'stylesheet', 
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css', 
          },
        ],
        // script: [],
      },
    },
    runtimeConfig: {
      public: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        bootToken: process.env.BOOT_TOKEN,
        chatId: process.env.CHAT_ID,
      },
    },
    nitro: {
      devProxy: {
        "/": {
          target: "http://it.starkon.pp.ua",
          changeOrigin: true,
        },
      },
      devHandlers: [
        {
          route: "/api", // Указание пути, для которого будет работать middleware
          handler: "~/server/middleware/allowed-hosts.ts", // Путь к middleware
        },
      ],
      compressPublicAssets: true,
      preset: 'cloudflare-pages',
      static:  true,
      publicAssets: [
        {
          dir: 'public',
          maxAge: 60 * 60 * 24 * 365,
        },
      ],
    },
    target: 'static',
    ssr: false,
});
