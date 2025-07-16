// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/", // important if using GitHub Pages
  },
  ssr: false,
  nitro: {
    preset: "github_pages", // or 'static'
  },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxthq/studio"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  content: {
    preview: {
      dev: true,
      api: "https://api.nuxt.studio",
    },
  },
});
