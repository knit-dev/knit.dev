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
          'text-h5': $vuetify.breakpoint.smAndDown,
          'text-h4': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <span
          class="text-highlighted"
          :class="{
            'text-highlighted-dark': $vuetify.theme.dark,
          }"
          >{{ item.highlightedText }}</span
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
import { defineComponent } from '@nuxtjs/composition-api'
import { Testimonial } from '~/types'

export default defineComponent({
  name: 'TestimonialCard',
  props: {
    item: {
      type: Object as () => Testimonial,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.text-highlighted {
  color: #420eff;
}
.text-highlighted-dark {
  color: #623de4;
}
</style>
