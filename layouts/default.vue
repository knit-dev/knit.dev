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
            <v-col cols="4" class="pl-3 py-1">
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
            </v-col>
            <v-col cols="4" class="pa-0 d-flex justify-center">
              <v-btn
                icon
                height="48px"
                width="48px"
                @click="$vuetify.theme.dark = !$vuetify.theme.dark"
              >
                <v-icon>
                  {{
                    $vuetify.theme.dark
                      ? 'mdi-brightness-4'
                      : 'mdi-brightness-7'
                  }}
                </v-icon>
              </v-btn>
            </v-col>
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
import { defineComponent, ref } from '@vue/composition-api'

interface User {
  firstName: string
  lastName: number
}

export default defineComponent({
  name: 'default',

  setup() {
    const drawer = ref(false)
    const icons = ref([
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ])
    const logo = ref(require('~/assets/knit-logo-pink.png'))

    return {
      drawer,
      icons,
      logo
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
