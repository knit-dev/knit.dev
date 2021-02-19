export default {
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
    ...(process.env.NODE_ENV === 'production' && {
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/poppins-latin-300.82a5357.woff2',
          crossorigin: true,
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/poppins-latin-300italic.e62b386.woff2',
          crossorigin: true,
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/poppins-latin-400.5b8f3ba.woff2',
          crossorigin: true,
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/poppins-latin-500.dc16a35.woff2',
          crossorigin: true,
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/poppins-latin-700.9690ce6.woff2',
          crossorigin: true,
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/space-mono-latin-400.8f145ba.woff2',
          crossorigin: true,
        },
      ],
    }),
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
  plugins: [
    '~/plugins/vue-awesome-swiper.client.ts',
    '~/plugins/vuetify-color-mode.client.js',
  ],

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
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
  ],

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
          primary: '#ff6699',
          secondary: '#ffdf8e',
          accent: '#6245e0',

          success: '#bce688',
          error: '#fe6157',
          warning: '#fede93',
          info: '#7cb8ff',

          footer: '#f8f0ea',
        },
        dark: {
          primary: '#ff6699',
          secondary: '#ffdf8e',
          accent: '#c6beed',

          success: '#bce688',
          error: '#fe6157',
          warning: '#fede93',
          info: '#7cb8ff',

          footer: '#1e1e1e',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
