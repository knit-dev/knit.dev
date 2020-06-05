<template>
  <div v-swiper="swiperOptions">
    <div slot="parallax-bg" class="parallax-bg" data-swiper-parallax="0%"></div>
    <v-container>
      <div>
        From our clients
      </div>
    </v-container>

    <div class="swiper-wrapper">
      <div
        v-for="item in testimonials"
        :key="item.fullName"
        class="slide d-flex"
      >
        <v-container fluid>
          <TestimonialCard :item="item" />
        </v-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import TestimonialCard from '~/components/TestimonialCard.vue'
import { testimonials as testimonialsData } from '~/data'

export default defineComponent({
  name: 'TestimonialsSwiper',
  components: {
    TestimonialCard
  },
  setup() {
    const swiperOptions = {
      parallax: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1264: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      }
    }

    const testimonials = ref(testimonialsData)

    return { swiperOptions, testimonials }
  }
})
</script>

<style lang="scss" scoped></style>
