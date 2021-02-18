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

    <template #append>
      <v-container>
        <v-row align="center">
          <v-spacer></v-spacer>

          <v-col class="d-flex justify-end">
            <v-btn
              icon
              height="48px"
              width="48px"
              @click.stop="localDrawer = !localDrawer"
            >
              <v-icon>
                {{ $vuetify.icons.values.close }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  watch,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const { store } = useContext()

    const localDrawer = ref(props.drawer)

    const siteName = computed(() => store.getters.getSiteName)
    const siteLogo = computed(() =>
      store.getters['theme/isDark']
        ? require('~/assets/images/knit/knit-logo-white.svg')
        : require('~/assets/images/knit/knit-logo-black.svg')
    )

    watch(
      () => props.drawer,
      () => {
        localDrawer.value = !localDrawer.value
      }
    )

    return {
      localDrawer,
      siteName,
      siteLogo,
    }
  },
})
</script>

<style lang="scss" scoped>
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  #the-navigation-drawer {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
