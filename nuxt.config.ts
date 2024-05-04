// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "gossipgirls",
    },
    buildAssetsDir: "/n/",
  },
  // image: {
  //   providers: {
  //     myProvider: {
  //       name: "myProvider", // optional value to overrider provider name
  //       provider: "~/providers/my-provider.ts", // Path to custom provider
  //       options: {
  //         // ... provider options
  //         // baseURL: "https://site.com",
  //       },
  //     },
  //   },
  // },
  // nitro: {
  //   prerender: {
  //     routes: [
  //       "/_ipx/s_200x200/icons/home.JPG",
  //       "/_ipx/s_200x200/icons/polls.JPG",
  //       "/_ipx/s_200x200/icons/login.jpg",
  //       "/_ipx/_/mainpage.jpeg",
  //       "/_ipx/s_200x200/icons/home.JPG",
  //       "/_ipx/s_200x200/icons/polls.JPG",
  //       "/_ipx/s_200x200/icons/login.jpg",
  //     ],
  //   },
  // },
  // build: {},
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
