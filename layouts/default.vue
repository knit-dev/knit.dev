<template>
  <v-app>
    <v-navigation-drawer
      id="global-navigation-drawer"
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
            <v-col cols="4" class="pa-0 d-flex justify-end">
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
      style="height: auto;"
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

      <v-spacer></v-spacer>

      <v-btn
        color="primary"
        class="text-capitalize hover-grow"
        :class="[$vuetify.breakpoint.smAndDown ? 'mr-3' : 'mr-1']"
        large
        rounded
      >
        Get started!</v-btn
      >

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

    <v-footer id="global-footer" padless>
      <v-card flat tile class="text-center" width="100%">
        <v-card-text>
          <v-row no-gutters>
            <v-col
              cols="3"
              align-self="center"
              class="d-flex justify-start justify-md-center flex-shrink-1 flex-grow-0 "
            >
              <ColorSchemeModeButton
                v-bind="{
                  icon: colorSchemeModeIcon,
                  text: colorSchemeModeText,
                  toggle: toggleColorSchemeMode
                }"
              />
            </v-col>
            <v-col
              align-self="center flex-shrink-0 d-flex justify-center"
              style="flex-wrap: nowrap;"
            >
              <div>
                <v-btn
                  v-for="item in socials"
                  :key="item.name"
                  :href="item.link"
                  target="_blank"
                  class="mx-2"
                  icon
                >
                  <v-icon size="24px">{{ item.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col
              cols="3"
              align-self="center"
              class="d-flex justify-end flex-shrink-1 flex-grow-0 "
            >
              <div>
                <div class="footer-hosting">Hosting by</div>
                <a href="https://www.netlify.com" target="_blank">
                  <v-img
                    :src="require('~/assets/netlify-logo-and-text.svg')"
                    alt="netlify-logo-and-text"
                    class="footer-netlify"
                    contain
                  />
                </a>
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
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

    const socials = ref([
      {
        name: 'github',
        icon: 'mdi-github',
        link: 'https://github.com/knit-dev'
      },
      { name: 'twitter', icon: 'mdi-twitter', link: 'https://twitter.com' },
      {
        name: 'linkedin',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/company/knit-llc'
      }
    ])

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
      socials,

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
  #global-app-bar {
    background-color: transparent;
  }
  #global-app-bar > div:first-child {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}

#global-app-bar > .v-toolbar__content {
  padding-bottom: max(4px, env(safe-area-inset-bottom));
  height: auto !important;
}

#global-footer {
  padding-bottom: env(safe-area-inset-bottom);
}

.hover-grow {
  transition: all 0.2s ease-in-out;
}
.hover-grow:hover {
  transform: scale(1.1);
}

.footer-hosting {
  margin-bottom: 0.5rem;
  color: rgb(153, 153, 153);
}
.footer-netlify {
  height: 22px;
  width: auto;
  display: inline-block;
  filter: grayscale(100%);
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  transition-delay: initial;
  transition-property: all;
}
.footer-netlify:hover {
  filter: grayscale(0%);
}
</style>
