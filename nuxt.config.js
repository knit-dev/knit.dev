export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate:
      '%s - ' + process.env.LOCAL_SITE_NAME ||
      process.env.npm_package_name ||
      '',
    title: process.env.LOCAL_SITE_NAME || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'software, development, startups, knit.dev, knit',
      },
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  env: {
    siteName: process.env.LOCAL_SITE_NAME || process.env.npm_package_name,
    companyName:
      process.env.COMPANY_NAME ||
      process.env.LOCAL_SITE_NAME ||
      process.env.npm_package_name,
    tagline: process.env.TAGLINE,
    siteUrl: process.env.LOCAL_SITE_URL || process.env.npm_package_homepage,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fonts/poppins.css',
    '@/assets/fonts/space-mono.css',
    '@/assets/css/main.scss',
    'swiper/css/swiper.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-awesome-swiper.client.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  optimizedImages: {
    optimizeImages: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'favicon.png',
    },
    manifest: {
      lang: 'en',
      name: process.env.LOCAL_SITE_NAME || process.env.npm_package_name,
      short_name: process.env.SITE_SHORT_NAME || process.env.npm_package_name,
    },
    meta: {
      name: process.env.LOCAL_SITE_NAME || process.env.npm_package_name,
      theme_color: '#FF6699',
    },
    workbox: {
      clientsClaim: false,
    },
  },

  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false,
    },
    icons: { iconfont: 'mdiSvg' },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FF6699',
          secondary: '#FFDF8E',
          accent: '#C6BDEF',

          success: '#BCE688',
          error: '#FE6157',
          warning: '#FEDE93',
          info: '#7CB8FF',
        },
        dark: {
          primary: '#FF6699',
          secondary: '#FFDF8E',
          accent: '#C6BDEF',

          success: '#BCE688',
          error: '#FE6157',
          warning: '#FEDE93',
          info: '#7CB8FF',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { extractCSS: process.env.NODE_ENV === 'production' },

  generate: {
    fallback: true,
    interval: 2000,
  },
}
