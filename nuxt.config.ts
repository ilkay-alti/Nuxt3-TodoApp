// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  base: "/Nuxt3-TodoApp/",
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icons",
  ],
});
