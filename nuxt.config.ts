// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true
    },
    cssLayerOrder: 'tailwind-base,primevue, tailwind-utilities',
    theme: 'md-light-indigo',
    components: {
      include: '*',
      exclude: ['Galleria', 'Carousel']
    },
    directives: {
      include: ['Ripple', 'Tooltip']
    }
  },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/scss/main.scss",
    "primevue/resources/themes/md-light-indigo/theme.css",
    "primeicons/primeicons.css",
  ],
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL || 'http://127.0.0.1:8000/api/',
      appEnv: process.env.APP_ENV || 'development',
      appPort: process.env.APP_PORT || 3000,
      VIRTUAL_HOST_DOMAIN: process.env.VIRTUAL_HOST_DOMAIN || 'localhost',
    },
  },
})
