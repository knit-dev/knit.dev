<template>
  <AwesomeSwiper />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AwesomeSwiper from '~/components/AwesomeSwiper.vue'

export default defineComponent({
  head() {
    return {
      title: 'About Us'
    }
  },
  name: 'About',

  components: {
    AwesomeSwiper
  }
})
</script>

<style lang="scss"></style>
