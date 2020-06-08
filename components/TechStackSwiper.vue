<template>
  <div v-swiper:techStackSwiper="swiperOptions">
    <div
      slot="parallax-bg"
      class="parallax-bg"
      data-swiper-parallax="-23%"
    ></div>
    <v-container
      class="swiper-heading"
      :class="{ 'swiper-heading-dark': $vuetify.theme.dark }"
    >
      <SectionHeading
        subtitle="Toolbox to success"
        title="Recommended Tech Stack"
      />
    </v-container>

    <div class="swiper-wrapper">
      <div
        v-for="item in techStackItems"
        :key="item.category"
        class="swiper-slide d-flex"
      >
        <v-container fluid>
          <TechStackCard :item="item" />
        </v-container>
      </div>
    </div>

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

    const techStackItems = ref(techStackItemsData)

    return {
      swiperOptions,
      techStackItems
    }
  }
})
</script>

<style lang="scss" scoped>
$swiper-bottom: 5rem;

.swiper-heading {
  position: absolute;
  margin-top: $swiper-bottom / 2;
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
.swiper-heading ::v-deep .heading-subtitle {
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
.swiper-heading-dark {
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
  background-image: url('~assets/images/knit/textures/tech-stack-texture.svg');
}

.swiper-slide {
  padding-top: $swiper-bottom * 1.5;
  padding-bottom: $swiper-bottom;
}

::v-deep .swiper-scrollbar {
  opacity: 1;
  background: rgb(239, 239, 239);
}
::v-deep .swiper-scrollbar-drag {
  background: #623de4;
}
.swiper-container-horizontal > .swiper-scrollbar {
  bottom: $swiper-bottom / 2;
}
</style>
