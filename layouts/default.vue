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
  onBeforeUnmount
} from '@vue/composition-api'

import TheNavigationDrawer from '~/components/TheNavigationDrawer.vue'
import TheAppBar from '~/components/TheAppBar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { TheNavigationDrawer, TheAppBar, TheFooter },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const drawer = ref(false)
    const toggleDrawer = () => {
      drawer.value = !drawer.value
    }

    root.$store.dispatch('theme/setLocalStorageDark', root)

    const isUserDefinedColorScheme = computed(
      () => root.$store.getters['theme/isUserDefinedColorScheme']
    )
    const isPrefersColorSchemeCapable = computed(
      () => root.$store.getters['theme/isPrefersColorSchemeCapable']
    )

    const prefersColorSchemeCallback = () => {
      if (!isUserDefinedColorScheme.value) {
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
        root.$store.dispatch('theme/setDark', {
          vm: root,
          value: mediaQueryList.matches,
          userDefinedColorScheme: false
        })
      }
    }

    if (isPrefersColorSchemeCapable.value) {
      prefersColorSchemeCallback()

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addListener(prefersColorSchemeCallback)
    }

    onBeforeUnmount(() => {
      if (isPrefersColorSchemeCapable.value) {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeListener(prefersColorSchemeCallback)
      }
    })

    return {
      drawer,
      toggleDrawer
    }
  }
})
</script>

<style lang="scss"></style>
