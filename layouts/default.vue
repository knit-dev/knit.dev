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
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const drawer = ref<boolean | null>(false)

    const toggleDrawer = () => {
      drawer.value = !drawer.value
    }

    return {
      drawer,
      toggleDrawer,
    }
  },
})
</script>
