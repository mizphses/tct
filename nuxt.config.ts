// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'normalize.css',
    '@/assets/css/main.scss',
  ],
  app: {

    head: {
      title: 'tct 中大交通情報',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Noto+Sans+JP:wght@400;700;900&display=swap' },
      ],
    },
  },
  components: {
    global: true,
    dirs: [
      '~/components',
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_vars.scss";',
        },
      },
    },
  },
})
