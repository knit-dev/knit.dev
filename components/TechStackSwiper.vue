<template>
  <carousel
    :autoplay="false"
    :autoplay-timeout="6000"
    :autoplay-hover-pause="true"
    :loop="true"
    :per-page-custom="[
      [0, 1],
      [600, 2],
      [960, 3],
      [1264, 4]
    ]"
    :space-padding="spacePadding"
    :space-padding-max-offset-factor="0"
    :pagination-active-color="`#623DE4`"
  >
    <slide v-for="item in techStackItems" :key="item.category">
      <v-container>
        <TechStackCard :item="item" />
      </v-container>
    </slide>
  </carousel>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { Carousel, Slide } from 'vue-carousel'
import TechStackCard from '~/components/TechStackCard.vue'
import { techStackItems as techStackItemsData } from '~/data'

export default defineComponent({
  name: 'TechStackSwiper',
  components: {
    Carousel,
    Slide,
    TechStackCard
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const techStackItems = ref(techStackItemsData)

    const spacePadding = computed(() => {
      return 0
    })

    return { techStackItems, spacePadding }
  }
})
</script>

<style lang="scss" scoped></style>
