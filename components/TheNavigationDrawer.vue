<template>
  <v-navigation-drawer
    id="the-navigation-drawer"
    v-model="localDrawer"
    app
    right
    bottom
    disable-resize-watcher
    touchless
    class="global-x-padding"
  >
    <TheNavigationDrawerList />

    <template v-slot:append>
      <v-container fluid class="pb-1">
        <v-row align="center">
          <v-spacer></v-spacer>
          <v-col class="pa-0 d-flex justify-end">
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
    const localDrawer = ref(props.drawer)
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

<style lang="scss" scoped>
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  #the-navigation-drawer {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
