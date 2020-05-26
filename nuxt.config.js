/* eslint-disable @typescript-eslint/no-unused-vars */
import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate:
      '%s - ' + process.env.SITE_NAME || process.env.npm_package_name || '',
    title: process.env.SITE_NAME || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover”'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    htmlAttrs: {
      lang: 'en'
    },
    ...(process.env.VUE_DEVTOOLS_GLOBAL === 'true' && {
      script: [{ src: 'http://localhost:8098' }]
    })
  },
  env: {
    vueDevtoolsLocal: process.env.VUE_DEVTOOLS_LOCAL,
    siteName: process.env.SITE_NAME || process.env.npm_package_name,
    companyName:
      process.env.COMPANY_NAME ||
      process.env.SITE_NAME ||
      process.env.npm_package_name,
    tagline: process.env.TAGLINE
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'blue', height: '5px' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-devtools-local', '~plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/sentry'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  sentry: {},
  /*
   ** Build configuration
   */
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: { family: 'Poppins' },
      icons: false
    },
    icons: { iconfont: 'mdiSvg' },
    theme: {
      // options: {
      //   customProperties: true
      // },
      dark: false,
      themes: {
        light: {
          primary: '#FF6699',
          secondary: '#FFDF8E',
          accent: '#C6BDEF',

          success: colors.green.base,
          error: colors.red.accent2,
          warning: colors.amber.base,
          info: colors.blue.base
        },
        dark: {
          primary: '#FF6699',
          secondary: '#FFDF8E',
          accent: '#C6BDEF',

          success: colors.green.base,
          error: colors.red.accent2,
          warning: colors.amber.base,
          info: colors.blue.base
        }
      }
    }
  },
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    fallback: true
  }
}
