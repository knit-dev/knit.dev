<template>
  <h3
    class="heading-subtitle font-weight-regular text-uppercase"
    :class="{ 'heading-subtitle-dark': isDark }"
  >
    {{ text }}
  </h3>
</template>

<script lang="ts">
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HeadingSubtitle',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { store } = useContext()

    const isDark = computed(() => store.getters['theme/isDark'])

    return { isDark }
  },
})
</script>
