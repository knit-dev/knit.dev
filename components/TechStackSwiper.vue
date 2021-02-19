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
        class="global-left-padding"
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
import { defineComponent } from '@nuxtjs/composition-api'
import { techStackItems } from '~/data'

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
      spaceBetween: 0,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1264: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1904: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
}

export default defineComponent({
  name: 'TechStackSwiper',
  setup() {
    return {
      swiperOptions,
      techStackItems,
    }
  },
})
</script>

<style lang="scss" scoped>
$swiper-bottom: 5rem;

.swiper-heading {
  position: absolute;
  margin-top: $swiper-bottom / 3;
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
.swiper-heading ::v-deep .heading-subtitle {
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
.swiper-heading-dark {
  color: map-get(map-get($material-light, 'text'), 'primary');
}
/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
.swiper-heading-dark ::v-deep .heading-subtitle {
  color: map-get(map-get($material-light, 'text'), 'primary') !important;
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
  padding-top: $swiper-bottom * 1.25;
  padding-bottom: $swiper-bottom;
}

/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
::v-deep .swiper-scrollbar {
  opacity: 1;
  background: rgb(239, 239, 239);
}
/* stylelint-disable-next-line selector-pseudo-element-no-unknown */
::v-deep .swiper-scrollbar-drag {
  background: #623de4;
}
.swiper-container-horizontal > .swiper-scrollbar {
  bottom: $swiper-bottom / 2;
}
</style>
