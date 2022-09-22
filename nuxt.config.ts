// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/duke-book/'
  },
  css:["assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions:{
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }
    },
    
  }
  
});
