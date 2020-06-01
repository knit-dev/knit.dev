<template>
  <TechStackSwiper />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TechStackSwiper from '~/components/TechStackSwiper.vue'

export default defineComponent({
  head() {
    return {
      titleTemplate: '%s',
      title: `${process.env.siteName}: ${process.env.tagline}`
    }
  },
  name: 'Home',
  components: {
    TechStackSwiper
  }
})
</script>

<style lang="scss"></style>
