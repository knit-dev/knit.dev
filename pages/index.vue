<template>
  <div>
    <section>
      <HomeHero :content="heroContent" />
    </section>

    <section>
      <Services />
    </section>

    <section>
      <TechStackSwiper />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import HomeHero from '~/components/HomeHero.vue'
import Services from '~/components/Services.vue'
import TechStackSwiper from '~/components/TechStackSwiper.vue'
import { heroContent as heroContentData } from '~/data'

export default defineComponent({
  head() {
    return {
      titleTemplate: '%s',
      title: `${process.env.siteName}: ${process.env.tagline}`
    }
  },
  name: 'Home',
  components: {
    HomeHero,
    Services,
    TechStackSwiper
  },
  setup() {
    const heroContent = ref(heroContentData)

    return { heroContent }
  }
})
</script>

<style lang="scss"></style>
