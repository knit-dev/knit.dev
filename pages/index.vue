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
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { heroContent as heroContentData } from '~/data'
import useCallToActionButton from '~/composables/useCallToActionButton'

export default defineComponent({
  name: 'Home',
  setup() {
    const { store } = useContext()

    useCallToActionButton(store)

    const heroContent = ref(heroContentData)

    return { heroContent }
  },
  head() {
    return {
      titleTemplate: '%s',
      title: `${process.env.siteName}: ${process.env.tagline}`,
    }
  },
})
</script>
