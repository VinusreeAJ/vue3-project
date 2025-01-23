// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      title : 'Product-Landing-Page',
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js' }
      ],
    },
  },

  plugins: [
    { src: '@/plugins/vuetify.js', ssr: true }, // Make sure it's included
  ],

  build: {
    transpile: ['vuetify'], // Ensure Vuetify is transpiled
  },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'vuetify/styles',
  ],

  modules: [],
  compatibilityDate: '2025-01-23',
})