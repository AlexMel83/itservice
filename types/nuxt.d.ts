// import { ApiModule } from '../api/index';

declare module 'app' {
  interface NuxtApp {
    // $api: ApiModule;
  }
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    experimental?: {
      inlineSSRStyles?: boolean;
    };
    critters?: {
      preload?: string;
      inlineFonts?: boolean;
      compress?: boolean;
    };
    colorMode?: {
      preference?: string;
    };
    tailwindcss?: {
      exposeConfig?: boolean;
      viewer?: boolean;
      config?: object;
    };
    esbuild?: {
      jsxFactory: string;
      jsxFragment: string;
      target: string;
      supported: {
        optionalChaining: boolean;
      };
    };
  }
  interface NuxtOptions {
    experimental?: {
      inlineSSRStyles?: boolean;
    };
    critters?: {
      preload?: string;
      inlineFonts?: boolean;
      compress?: boolean;
    };
  }
}
