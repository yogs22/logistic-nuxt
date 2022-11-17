export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Logistik App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  publicRuntimeConfig: {
    siteName: 'Logistik App',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/bootstrap.min.css',
    '~/static/css/fonts.css',
    '~/static/css/utilities.css',
    '~/static/css/sidebar.css',
    '~/static/css/overview.css',
    '~/static/css/transactions-detail.css',
    '~/static/css/sign-in.css',
    '~/static/css/responsive.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],

  axios: {
    baseURL: 'https://fe-screening.onrender.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Auth
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'session' },
          user: false,
          logout: false
        }
      }
    }
  },

  // Toast
  toast: {
    position: 'top-right',
    duration: 3000
  },
}
