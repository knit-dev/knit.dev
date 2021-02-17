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
import { defineComponent, toRefs, reactive } from '@nuxtjs/composition-api'
import { callToAction as callToActionData } from '~/data'

export default defineComponent({
  name: 'CallToActionButton',
  setup() {
    const { text, email } = toRefs(reactive(callToActionData))

    return { text, email }
  },
})
</script>
