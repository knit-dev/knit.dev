<template>
  <v-card
    flat
    class="mx-auto text-center"
    max-width="800"
    min-height="240"
    color="transparent"
  >
    <blockquote class="blockquote pl-1">
      <p
        class="font-weight-bold"
        :class="{
          headline: $vuetify.breakpoint.smAndDown,
          'display-1': $vuetify.breakpoint.mdAndUp
        }"
      >
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
