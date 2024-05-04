// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt', "@nuxt/image"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: 'gossipgirls'
    },
    buildAssetsDir: '/n/'
  },
  build: {
    
  },
  devtools: { enabled: false },
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
});