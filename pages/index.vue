<template>
  <div>
    <section>
      <Hero :content="heroContent" />
    </section>

    <section>
      <Services />
    </section>

    <section>
      <TechStackSwiper />
    </section>

    <section>
      <TestimonialsSwiper />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Hero from '~/components/Hero.vue'
import Services from '~/components/Services.vue'
import TechStackSwiper from '~/components/TechStackSwiper.vue'
import TestimonialsSwiper from '~/components/TestimonialsSwiper.vue'
import { heroContent as heroContentData } from '~/data'
import useCallToActionButton from '~/composables/useCallToActionButton'

export default defineComponent({
  head() {
    return {
      titleTemplate: '%s',
      title: `${process.env.siteName}: ${process.env.tagline}`
    }
  },
  name: 'Home',
  components: {
    Hero,
    Services,
    TechStackSwiper,
    TestimonialsSwiper
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    useCallToActionButton(root)
    const heroContent = ref(heroContentData)

    return { heroContent }
  }
})
</script>

<style lang="scss" scoped></style>
