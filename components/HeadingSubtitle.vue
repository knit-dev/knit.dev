<template>
  <h3
    class="heading-subtitle font-weight-regular text-uppercase"
    :class="{ 'heading-subtitle-dark': isDark }"
  >
    {{ text }}
  </h3>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'HeadingSubtitle',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const isDark = computed(() => root.$store.getters['theme/isDark'])
    return { isDark }
  }
})
</script>

<style lang="scss" scoped></style>
