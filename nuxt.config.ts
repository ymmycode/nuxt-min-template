// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-21',
  runtimeConfig: {
    public: {
      port: 3000
    }
  },
  devtools: { enabled: true },
  preset: 'node-server',
  srcDir: './src',
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'useDayjs'],
        storesDirs: ['./src/stores/**'],
      },
    ],
    'nuxt-booster',
  ],

  booster: {
    detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],
    componentAutoImport: false,
    componentPrefix: undefined,
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },
    optimizePreloads: false,
    disableNuxtFontaine: true,
    disableNuxtImage: true,
  },
  tailwindcss: {
    cssPath: ['~/assets/styles/main.scss', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    // viewer: true,
  },
  css: [
    '~/assets/styles/main.scss',
  ],
  app: {
    port: '3000',
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  ssr: true,
  generate: { fallback: '404.html' },
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false;
    },
  },
})