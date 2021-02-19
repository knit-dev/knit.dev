<template>
  <v-hover>
    <v-btn
      slot-scope="{ hover }"
      :depressed="!hover"
      color="primary"
      class="text-none btn-hover-grow"
      x-large
      rounded
      :href="`mailto:${email}`"
    >
      {{ hover ? email : text }}</v-btn
    >
  </v-hover>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { callToAction } from '~/data'

const { text, email } = callToAction

export default defineComponent({
  name: 'CallToActionButton',
  setup() {
    return { text, email }
  },
})
</script>
