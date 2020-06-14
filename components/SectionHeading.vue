<template>
  <div>
    <HeadingSubtitle :text="subtitle" />
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HeadingSubtitle from '~/components/HeadingSubtitle.vue'

export default defineComponent({
  name: 'SectionHeading',
  components: {
    HeadingSubtitle,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
