/* eslint-disable @typescript-eslint/no-unused-vars */
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
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    ...(process.env.NODE_ENV === 'production' && {
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/e535f78.woff2',
          crossorigin: true
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/1a28052.woff2',
          crossorigin: true
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/61e2d96.woff2',
          crossorigin: true
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/_nuxt/fonts/e059682.woff2',
          crossorigin: true
        },
        {
          rel: 'preload',
          as: 'style',
          href: '/_nuxt/d87cdc8e7144024e2617.css'
        }
      ]
    }),
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
  loading: {},
  /*
   ** Global CSS
   */
  css: [
    '@assets/fonts/poppins.css',
    '@assets/fonts/space-mono.css',
    '@/assets/css/main.scss'
  ],
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
      font: false,
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

          success: '#BCE688',
          error: '#FE6157',
          warning: '#FEDE93',
          info: '#7CB8FF'
        },
        dark: {
          primary: '#FF6699',
          secondary: '#FFDF8E',
          accent: '#C6BDEF',

          success: '#BCE688',
          error: '#FE6157',
          warning: '#FEDE93',
          info: '#7CB8FF'
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
