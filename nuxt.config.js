export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],
  
  build: {
    transpile: ["vuetify"],
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"], // Optional: Auto-import Pinia functions
  },

  devServer: {
    port: 8080,
  },
  compatibilityDate: "2025-01-24",
});