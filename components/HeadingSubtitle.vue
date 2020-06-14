<template>
  <h3
    class="heading-subtitle font-weight-regular text-uppercase"
    :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
  >
    {{ text }}
  </h3>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SectionSubtitle',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
