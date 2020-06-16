<template>
  <v-app-bar
    id="the-app-bar"
    app
    elevate-on-scroll
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    class="global-padded"
  >
    <v-row no-gutters>
      <v-col
        align="center"
        justify="space-between"
        class="d-flex align-center"
        md="4"
        lg="3"
        ><nuxt-link exact to="/">
          <v-img
            :src="siteLogo"
            height="2.5rem"
            width="2.5rem"
            alt="site logo"
          ></v-img>
        </nuxt-link>
        <v-toolbar-title class="ml-3 font-weight-bold">{{
          siteName
        }}</v-toolbar-title></v-col
      >
      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        class="d-flex justify-space-around"
        ><TheAppBarTabs />
      </v-col>
      <v-col md="4" lg="3" class="d-flex justify-end">
        <!-- <v-hover>
          <v-btn
            slot-scope="{ hover }"
            :depressed="!hover"
            color="primary"
            class="text-none btn-hover-grow"
            x-large
            rounded
            :href="`mailto:${callToAction.email}`"
          >
            {{ hover ? callToAction.email : callToAction.text }}</v-btn
          >
        </v-hover> -->
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          aria-label="toggle navigation drawer"
          @click.stop="$emit('toggleDrawer')"
        ></v-app-bar-nav-icon
      ></v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
import TheAppBarTabs from '~/components/TheAppBarTabs.vue'
import { callToAction as callToActionData } from '~/data'

export default defineComponent({
  components: {
    TheAppBarTabs,
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
    const callToAction = ref(callToActionData)

    return {
      callToAction,
      siteName,
      siteLogo,
    }
  },
})
</script>

<style lang="scss" scoped>
@supports (
  (-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))
) {
  #the-app-bar {
    background-color: transparent;
  }
  #the-app-bar ::v-deep > div:first-child {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}

#the-app-bar.global-padded ::v-deep > div:first-child {
  padding-left: calc(var(--global-padding) + 1rem);
  padding-right: calc(var(--global-padding) + 1rem);
}
</style>
