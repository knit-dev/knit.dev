<template>
  <div class="d-flex align-self-center justify-center">
    <v-img
      :src="require('~/assets/knit-logo-pink.png')"
      alt="knit logo and text stacked"
      max-width="100px"
    ></v-img>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss"></style>
