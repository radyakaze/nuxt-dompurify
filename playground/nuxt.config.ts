export default defineNuxtConfig({
  modules: ['../src/module'],

  dompurify: {
    profiles: {
      heading: {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-10-03',
})
