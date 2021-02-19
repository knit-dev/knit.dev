<template>
  <span
    class="heading-subtitle font-weight-regular text-uppercase accent--text"
  >
    {{ text }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HeadingSubtitle',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>
