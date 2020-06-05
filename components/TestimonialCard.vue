<template>
  <v-card
    flat
    class="mx-auto text-center"
    max-width="800"
    min-height="280"
    color="transparent"
  >
    <blockquote class="blockquote pl-1">
      <p class="display-1 font-weight-bold">
        {{ item.text }}
      </p>

      <footer>
        —<b>{{ item.fullName }}</b
        >, <cite>{{ item.jobTitle }} at {{ item.organizationName }}</cite>
      </footer>
    </blockquote>
  </v-card>
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
