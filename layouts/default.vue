<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      bottom
      disable-resize-watcher
    >
      <template v-slot:append>
        <v-container fluid class="pb-1">
          <v-row align="center">
            <v-col cols="4" class="pl-3 py-1 d-flex">
              <nuxt-link exact to="/">
                <v-img
                  :src="logo"
                  height="2.5rem"
                  width="2.5rem"
                  shrink
                  class="ml-1"
                  alt="knit logo"
                ></v-img>
              </nuxt-link>
              <div class="display-1 font-weight-light ml-3">{{ siteName }}</div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="4" class="pa-0 d-flex justify-space-between">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    height="48px"
                    width="48px"
                    v-on="on"
                    @click="toggleColorSchemeMode()"
                  >
                    <v-icon>
                      {{ colorSchemeModeIcon }}
                    </v-icon>
                  </v-btn>
                </template>
                <span>{{ colorSchemeModeText }}</span>
              </v-tooltip>
              <v-btn
                icon
                height="48px"
                width="48px"
                class="mr-1"
                @click="drawer = !drawer"
              >
                <v-icon>
                  {{ 'mdi-close' }}
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      id="global-app-bar"
      app
      :bottom="$vuetify.breakpoint.mdAndDown"
      elevate-on-scroll
    >
      <nuxt-link exact to="/">
        <v-img
          :src="logo"
          height="2.5rem"
          width="2.5rem"
          shrink
          alt="knit logo"
        ></v-img>
      </nuxt-link>
      <v-toolbar-title class="display-1 font-weight-light ml-3">{{
        siteName
      }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- nuxt -->
        <nuxt />
      </v-container>
    </v-content>

    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  onBeforeUnmount
} from '@vue/composition-api'

interface User {
  firstName: string
  lastName: number
}

export default defineComponent({
  name: 'default',

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const drawer = ref(false)
    const logo = ref(require('~/assets/knit-logo-pink.png'))
    const siteName = computed(() => root.$store.state.siteName)
    const icons = ref([
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ])

    root.$store.dispatch('setLocalStorageDark', {
      vm: root
    })

    const dark = computed(() => root.$store.state.dark)
    const choseColorScheme = computed(() => root.$store.state.choseColorScheme)
    const setDark = ({
      value,
      choseColorScheme = false
    }: {
      value: boolean
      choseColorScheme: boolean
    }) => root.$store.dispatch('setDark', { vm: root, value, choseColorScheme })

    const supportsColorSchemePreference =
      window.matchMedia('(prefers-color-scheme)').media !== 'not all'

    const prefersColorSchemeCallback = (event: MediaQueryListEvent) => {
      if (!choseColorScheme.value) {
        setDark({ value: event.matches, choseColorScheme: false })
      }
    }
    if (supportsColorSchemePreference) {
      const prefersColorSchemeDarkMql = window.matchMedia(
        '(prefers-color-scheme: dark)'
      )
      if (prefersColorSchemeDarkMql.matches) {
        setDark({ value: true, choseColorScheme: false })
      }
      prefersColorSchemeDarkMql.addListener(prefersColorSchemeCallback)
    }
    onBeforeUnmount(() => {
      if (supportsColorSchemePreference)
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeListener(prefersColorSchemeCallback)
    })

    const colorSchemeModeSettings = [
      {
        mode: 'system',
        icon: 'mdi-theme-light-dark',
        text: 'Toggle Dark',
        nextMode: 'dark',
        choseColorScheme: false,
        value:
          supportsColorSchemePreference &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      },
      {
        mode: 'dark',
        icon: 'mdi-weather-night',
        text: 'Toggle Light',
        nextMode: 'light',
        choseColorScheme: true,
        value: true
      },
      {
        mode: 'light',
        icon: 'mdi-weather-sunny',
        text: 'Use System Preference',
        nextMode: 'system',
        choseColorScheme: true,
        value: false
      }
    ]
    const colorSchemeMode = computed(() => {
      let result = 'system'
      if (choseColorScheme.value) {
        result = dark.value ? 'dark' : 'light'
      }
      return result
    })
    const colorSchemeModeIcon = computed(
      () =>
        colorSchemeModeSettings.find(
          (setting) => setting.mode === colorSchemeMode.value
        )?.icon
    )
    const colorSchemeModeText = computed(
      () =>
        colorSchemeModeSettings.find(
          (setting) => setting.mode === colorSchemeMode.value
        )?.text
    )
    const toggleColorSchemeMode = () => {
      const nextSetting = colorSchemeModeSettings.find(
        (setting) =>
          setting.mode ===
          colorSchemeModeSettings.find(
            (setting) => setting.mode === colorSchemeMode.value
          )?.nextMode
      )
      if (nextSetting) {
        setDark(nextSetting)
      }
    }

    return {
      drawer,
      logo,
      siteName,
      icons,

      dark,
      colorSchemeModeIcon,
      colorSchemeModeText,
      toggleColorSchemeMode
    }
  }
})
</script>

<style lang="scss">
@supports (
  (-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))
) {
  #global-app-bar > div:first-child {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  #global-app-bar {
    background-color: transparent;
  }
}
</style>
