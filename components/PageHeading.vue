<template>
  <h1 class="text-h2 pb-6 font-weight-medium">
    {{ text }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PageHeading',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
letter-spacing

<style lang="scss" scoped>
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .text-h2 {
    font-size: map-get(map-get($headings, 'h3'), 'size') !important;
    letter-spacing: map-get(
      map-get($headings, 'h3'),
      'letter-spacing'
    ) !important;
  }
}
</style>
