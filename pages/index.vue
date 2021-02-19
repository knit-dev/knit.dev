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
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { heroContent } from '~/data'

export default defineComponent({
  name: 'Home',
  setup() {
    const { store } = useContext()

    store.dispatch('setShowCallToActionButton', false)

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
