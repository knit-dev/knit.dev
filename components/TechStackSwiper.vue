<template>
  <div v-swiper="swiperOptions">
    <div
      slot="parallax-bg"
      class="parallax-bg"
      data-swiper-parallax="-23%"
    ></div>
    <div
      class="swiper-heading"
      :class="{ 'swiper-heading-dark': $vuetify.theme.dark }"
    >
      <v-container>
        <SectionHeading
          subtitle="Toolbox to success"
          title="Recommended Tech Stack"
        />
      </v-container>
    </div>

    <div class="swiper-wrapper">
      <div
        v-for="item in techStackItems"
        :key="item.category"
        class="swiper-slide slide d-flex"
      >
        <TechStackCard :item="item" />
      </div>
    </div>

    <div
      v-if="$vuetify.breakpoint.mdAndUp"
      slot="button-prev"
      class="swiper-button-prev"
    ></div>
    <div
      v-if="$vuetify.breakpoint.mdAndUp"
      slot="button-next"
      class="swiper-button-next"
    ></div>

    <div slot="scrollbar" class="swiper-scrollbar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
// eslint-disable-next-line import/named
import TechStackCard from '~/components/TechStackCard.vue'
import SectionHeading from '~/components/SectionHeading.vue'
import { techStackItems as techStackItemsData } from '~/data'

export default defineComponent({
  name: 'TechStackSwiper',
  components: {
    SectionHeading,
    TechStackCard
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup() {
    const swiperOptions = {
      parallax: true,

      slideToClickedSlide: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1264: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      }
    }

    const techStackItems = ref(techStackItemsData)

    return {
      swiperOptions,
      techStackItems
    }
  }
})
</script>

<style lang="scss" scoped>
.swiper-heading {
  position: absolute;
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
.swiper-heading ::v-deep .heading-subtitle {
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
.swiper-heading-dark {
  position: absolute;
  color: map-get(map-get($material-light, 'text'), 'primary');
}
.swiper-heading-dark ::v-deep .heading-subtitle {
  color: map-get(map-get($material-light, 'text'), 'primary');
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: left;
  background-image: url('~assets/images/knit/knit-lines-1.svg');
}

.slide {
  padding-top: 6rem;
  padding-bottom: 3rem;
}

::v-deep .swiper-scrollbar {
  opacity: 1;
  background: rgb(239, 239, 239);
}
::v-deep .swiper-scrollbar-drag {
  background: #623de4;
}
.swiper-container-horizontal > .swiper-scrollbar {
  bottom: 20px;
}

.swiper-button-disabled {
  visibility: hidden;
}
.swiper-button-prev,
.swiper-button-next {
  color: #623de4;
}
</style>
