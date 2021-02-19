<template>
  <v-app>
    <TheNavigationDrawer :drawer="drawer" />

    <TheAppBar @toggleDrawer="toggleDrawer()" />

    <v-main>
      <nuxt />
    </v-main>

    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onBeforeUnmount,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const { store, $vuetify } = useContext()

    const drawer = ref<boolean | null>(false)

    store.dispatch('theme/setLocalStorageDark', { $vuetify })

    const isUserDefinedColorScheme = computed(
      () => store.getters['theme/isUserDefinedColorScheme']
    )
    const isPrefersColorSchemeCapable = computed(
      () => store.getters['theme/isPrefersColorSchemeCapable']
    )

    const toggleDrawer = () => {
      drawer.value = !drawer.value
    }
    const prefersColorSchemeCallback = () => {
      if (!isUserDefinedColorScheme.value) {
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

        store.dispatch('theme/setDark', {
          $vuetify,
          value: mediaQueryList.matches,
          userDefinedColorScheme: false,
        })
      }
    }

    if (isPrefersColorSchemeCapable.value) {
      prefersColorSchemeCallback()

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', prefersColorSchemeCallback)
    }

    onBeforeUnmount(() => {
      if (isPrefersColorSchemeCapable.value) {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', prefersColorSchemeCallback)
      }
    })

    return {
      drawer,
      toggleDrawer,
    }
  },
})
</script>
