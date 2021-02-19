<template>
  <div class="testimonials-bg py-8">
    <div v-swiper:testimonialsSwiper="swiperOptions">
      <v-container class="text-center">
        <HeadingSubtitle text="From our clients" />
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
import { defineComponent } from '@nuxtjs/composition-api'
import { testimonials } from '~/data'

export default defineComponent({
  name: 'TestimonialsSwiper',
  setup() {
    const swiperOptions = {
      slidesPerView: 1,
      // loop: true,
      speed: 600,
      effect: 'flip',
      autoplay: {
        delay: 20000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }

    return { swiperOptions, testimonials }
  },
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

/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
::v-deep .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: rgb(239, 239, 239);
}
/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
::v-deep
  .swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 8px;
}
/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
::v-deep .swiper-pagination-bullet-active {
  background: #623de4;
}
</style>
