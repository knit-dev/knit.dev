<template>
  <div class="testimonials-bg">
    <div v-swiper:testimonialsSwiper="swiperOptions">
      <v-container class="text-center">
        <h4
          class="text-uppercase heading-subtitle font-weight-regular pt-6"
          :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
        >
          From our clients
        </h4>
      </v-container>

      <div class="swiper-wrapper">
        <div
          v-for="item in testimonials"
          :key="item.fullName"
          class="swiper-slide d-flex"
        >
          <v-container fluid class="pt-0">
            <TestimonialCard :item="item" />
          </v-container>
        </div>
      </div>

      <div slot="pagination" class="swiper-pagination"></div>
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
      slidesPerView: 1,
      loop: true,
      speed: 600,
      effect: 'flip',
      autoplay: {
        delay: 6000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }

    const testimonials = ref(testimonialsData)

    return { swiperOptions, testimonials }
  }
})
</script>

<style lang="scss" scoped>
.testimonials-bg {
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: bottom left;
  background-image: url('~assets/images/knit/textures/testimonials-texture.svg');
}

.swiper-slide {
  padding-bottom: 1rem;
}

::v-deep .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: rgb(239, 239, 239);
}
::v-deep
  .swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 8px;
}
::v-deep .swiper-pagination-bullet-active {
  background: #623de4;
}
</style>
