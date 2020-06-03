<template>
  <v-navigation-drawer
    v-model="localDrawer"
    app
    right
    bottom
    disable-resize-watcher
    touchless
  >
    <TheNavigationDrawerList />

    <template v-slot:append>
      <v-container fluid class="pb-1">
        <v-row align="center">
          <v-col cols="4" class="pl-3 py-1 d-flex align-center">
            <nuxt-link exact to="/">
              <v-img
                :src="siteLogo"
                height="2.5rem"
                width="2.5rem"
                class="ml-1"
                alt="knit logo"
              ></v-img>
            </nuxt-link>
            <div class="ml-3 title font-weight-bold">
              {{ siteName }}
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4" class="pa-0 d-flex justify-end">
            <v-btn
              icon
              height="48px"
              width="48px"
              class="mr-1"
              @click.stop="localDrawer = !localDrawer"
            >
              <v-icon>
                {{ closeIcon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from '@vue/composition-api'
import { mdiClose } from '@mdi/js'
import TheNavigationDrawerList from '~/components/TheNavigationDrawerList.vue'

export default defineComponent({
  components: {
    TheNavigationDrawerList
  },
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const localDrawer = ref(true)
    watch(
      () => props.drawer,
      () => {
        localDrawer.value = !localDrawer.value
      }
    )

    const closeIcon = ref(mdiClose)

    const siteName = computed(() => root.$store.getters.getSiteName)
    const siteLogo = computed(() =>
      root.$store.getters['theme/isDark']
        ? require('~/assets/images/knit/knit-logo-white.svg')
        : require('~/assets/images/knit/knit-logo-black.svg')
    )

    return {
      localDrawer,
      closeIcon,
      siteName,
      siteLogo
    }
  }
})
</script>

<style lang="scss" scoped></style>
