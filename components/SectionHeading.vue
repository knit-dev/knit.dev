<template>
  <div>
    <h4
      class="text-uppercase heading-subtitle font-weight-regular"
      :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
    >
      {{ subtitle }}
    </h4>
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SectionHeading',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style lang="scss" scoped></style>
