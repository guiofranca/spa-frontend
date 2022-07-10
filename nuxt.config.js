import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL
  },

  publicRuntimeConfig: {
    COLOR_SEED: process.env.COLOR_SEED,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Continhas',
    // htmlAttrs: {
    //   lang: 'en'
    // },
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { hid: 'description', name: 'description', content: '' },
    //   { name: 'format-detection', content: 'telephone=no' }
    // ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
    //   { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
    //   { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
    //   { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
    //   { rel: 'manifest', href: 'site.webmanifest' }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/notifier.js',
    '~/plugins/v-money.js',
    {src: '~/plugins/chart.js', mode: 'client'},
    '~/plugins/chart-colors.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/pwa',
  ],
  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
  },

  axios: {
    baseURL: process.env.API_URL,
    headers: {
      common: {
        Accept: "application/vnd.api+json",
        "content-type": "application/vnd.api+json"
      },
      post: {
        "content-type": "application/vnd.api+json"
      },
      patch: {
        "content-type": "application/vnd.api+json"
      },
      delete: {
        "content-type": "application/vnd.api+json"
      }
    }
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          autoFetch: true,
          property: false
        },
        endpoints: {
          login: { url: "auth/login", method: "post" },
          logout: { url: "auth/logout", method: "post" },
          user: { url: "/user", method: "get" },
          refresh: { url: '/auth/refresh', method: 'post' },
        },
        refreshToken: {
          property: false,
          tokenRequired: true,
          required: true,
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/"
    }
  },

  router: {
    middleware: [
      'auth',
      //'gh-pages-dynamic-routes'
    ],
    base: process.env.BASE_URL
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.base,
          success: colors.green.base
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.base,
          success: colors.green.base
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    icon: {
      source: 'static/icon.png'
    },
    meta: {
      author: 'Guilherme França',
      description: 'Continhas é um App para facilitar as contas de casa!',
      lang: 'pt-br',
    },
    manifest: {
      name: 'Continhas',
      lang: 'pt-br',
      useWebmanifestExtension: false,
      background_color: '#4caf50',
      theme_color: '#7F92FF',
      start_url: '/bills',
    }
  }
}
