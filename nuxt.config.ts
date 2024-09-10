export default defineNuxtConfig({
  extends: ['./woonuxt_base'],
  nitro: {
    prerender: {
      routes: ['/'],
      failOnError: false,
    },
  },
  routeRules: {
    '/product/**': { ssr: true }, 
  },
});