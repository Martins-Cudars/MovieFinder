export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'MovieFinder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/main.scss'
  ],

  /*
  ** SCSS mixins globaly for components
  ** (never include actual styles here as they would be included for each component)
  */
  styleResources: {
    scss: [
      '~assets/scss/settings/_index.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module'
  ],

  googleFonts: {
    families: {
      'Open+Sans': {
        wght: [300, 400, 600, 700],
        ital: [300, 400, 600, 700]
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
    defaults: {
      params: {
        apikey: process.env.API_KEY
      }
    }
  },

  loading: false,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
