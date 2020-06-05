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
        <h4 class="text-uppercase heading-subtitle font-weight-regular">
          Toolbox to success
        </h4>
        <h2>Recommended Tech Stack</h2>
      </v-container>
    </div>

    <div class="swiper-wrapper">
      <div
        v-for="item in techStackItems"
        :key="item.category"
        class="swiper-slide slide d-flex"
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
import { SwiperOptions } from 'swiper'
import TechStackCard from '~/components/TechStackCard.vue'
import { techStackItems as techStackItemsData } from '~/data'

export default defineComponent({
  name: 'TechStackSwiper',
  components: {
    TechStackCard
  },
  setup() {
    const swiperOptions: SwiperOptions = {
      parallax: true,
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
.swiper-heading {
  position: absolute;
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
.swiper-heading .heading-subtitle {
  color: map-get(map-get($material-dark, 'text'), 'primary');
}
.swiper-heading-dark {
  position: absolute;
  color: map-get(map-get($material-light, 'text'), 'primary');
}
.swiper-heading-dark .heading-subtitle {
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
  padding-top: 5rem;
  padding-bottom: 2rem;
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
</style>
