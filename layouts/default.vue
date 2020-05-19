<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      bottom
      disable-resize-watcher
    >
      <TheNavigationDrawerList />

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
              <ColorSchemeModeButton
                v-bind="{
                  icon: colorSchemeModeIcon,
                  text: colorSchemeModeText,
                  toggle: toggleColorSchemeMode
                }"
              />

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
      :bottom="$vuetify.breakpoint.smAndDown"
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

      <TheAppBarTabs />

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
          {{ new Date().getFullYear() }} — <strong>{{ siteName }}</strong>
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
import useColorSchemeMode from '~/utils/useColorSchemeMode'
import ColorSchemeModeButton from '~/components/ColorSchemeModeButton.vue'
import TheAppBarTabs from '~/components/TheAppBarTabs.vue'
import TheNavigationDrawerList from '~/components/TheNavigationDrawerList.vue'

interface User {
  firstName: string
  lastName: number
}

export default defineComponent({
  name: 'default',
  components: { ColorSchemeModeButton, TheAppBarTabs, TheNavigationDrawerList },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const drawer = ref(false)

    const siteName = computed(() => root.$store.state.siteName)
    const dark = computed(() => root.$store.state.dark)
    const logo = computed(() =>
      dark.value
        ? require('~/assets/knit-logo-white.png')
        : require('~/assets/knit-logo-black.png')
    )

    const icons = ref(['mdi-github', 'mdi-twitter', 'mdi-linkedin'])

    const supportsColorSchemePreference =
      window.matchMedia('(prefers-color-scheme)').media !== 'not all'

    const {
      setLocalStorageDark,
      prefersColorSchemeCallback,
      addPrefersColorSchemeListener,
      removePrefersColorSchemeListener,
      colorSchemeModeIcon,
      colorSchemeModeText,
      toggleColorSchemeMode
    } = useColorSchemeMode(
      root,
      supportsColorSchemePreference &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    setLocalStorageDark()

    if (supportsColorSchemePreference) {
      prefersColorSchemeCallback()

      addPrefersColorSchemeListener(prefersColorSchemeCallback)
    }

    onBeforeUnmount(() => {
      if (supportsColorSchemePreference) {
        removePrefersColorSchemeListener(prefersColorSchemeCallback)
      }
    })

    return {
      drawer,
      logo,
      siteName,
      icons,

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
