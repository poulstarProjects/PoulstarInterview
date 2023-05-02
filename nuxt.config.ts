// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icons',
    'nuxt-headlessui'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // apiKey: "123",
    public: {
      apiBase: process.env.API_BASE || "https://panel.metafi.ir/api/v1/",
      baseURL: process.env.URL_BASE || "https://poulstar.org",
      baseURLDev: process.env.URL_BASE || "http://localhost:3000",
    }
  }
})
