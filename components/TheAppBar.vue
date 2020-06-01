<template>
  <v-app-bar
    id="the-app-bar"
    app
    :bottom="$vuetify.breakpoint.smAndDown"
    style="height: auto;"
    elevate-on-scroll
  >
    <nuxt-link exact to="/">
      <v-img
        :src="siteLogo"
        height="2.5rem"
        width="2.5rem"
        alt="site logo"
      ></v-img>
    </nuxt-link>
    <v-toolbar-title class="ml-3 font-weight-bold">{{
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
      aria-label="toggle navigation drawer"
      @click.stop="$emit('toggleDrawer')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import TheAppBarTabs from '~/components/TheAppBarTabs.vue'

export default defineComponent({
  components: {
    TheAppBarTabs
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const siteName = computed(() => root.$store.getters.getSiteName)
    const isDark = computed(() => root.$store.getters['theme/isDark'])
    const siteLogo = computed(() =>
      isDark.value
        ? require('~/assets/images/knit/knit-logo-white.svg')
        : require('~/assets/images/knit/knit-logo-black.svg')
    )

    return {
      siteName,
      siteLogo
    }
  }
})
</script>

<style lang="scss" scoped>
@supports (
  (-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))
) {
  #the-app-bar {
    background-color: transparent;
  }
  #the-app-bar ::v-deep > div:first-child {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

@supports (padding-top: env(safe-area-inset-top)) {
  #the-app-bar ::v-deep > .v-toolbar__content {
    padding-bottom: max(4px, env(safe-area-inset-bottom));
    height: auto !important;
  }
}

.hover-grow {
  transition: all 0.2s ease-in-out;
}

.hover-grow:hover {
  transform: scale(1.1);
}
</style>
