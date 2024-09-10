export default defineNuxtConfig({
  extends: ['./woonuxt_base'],
  nitro: {
    prerender: {
      routes: ['/'],
      failOnError: false,
    },
  },
  routeRules: {
    '/product/**': { swr: true, revalidate: 60 }, // Revalidate after 60 seconds
  },
});