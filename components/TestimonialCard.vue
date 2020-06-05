<template>
  <v-card flat class="d-flex flex-column mx-auto"> </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Testimonial } from '~/types'

export default defineComponent({
  name: 'TestimonialCard',
  props: {
    item: {
      type: Object as () => Testimonial,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
