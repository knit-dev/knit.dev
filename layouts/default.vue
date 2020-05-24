<template>
  <v-app>
    <TheNavigationDrawer :drawer="drawer" @toggleDrawer="toggleDrawer()" />

    <TheAppBar @toggleDrawer="toggleDrawer()" />

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from '@vue/composition-api'
import useColorSchemeMode from '~/utils/useColorSchemeMode'

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

    const {
      setLocalStorageDark,
      supportsColorSchemePreference,
      prefersColorSchemeCallback,
      addPrefersColorSchemeListener,
      removePrefersColorSchemeListener
    } = useColorSchemeMode(root)

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
      toggleDrawer
    }
  }
})
</script>

<style lang="scss"></style>
