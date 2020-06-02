<template>
  <div>
    <client-only>
      <swiper ref="swiperComponentRef" :options="swiperComponentOption">
        <swiper-slide
          v-for="item in techStackItems"
          :key="item.category"
          class="slide d-flex"
        >
          <v-container>
            <TechStackCard :item="item" />
          </v-container>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="scrollbar" class="swiper-scrollbar"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
// eslint-disable-next-line import/named
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import TechStackCard from '~/components/TechStackCard.vue'
import { techStackItems as techStackItemsData } from '~/data'

export default defineComponent({
  name: 'swiper-example-typescript-composition-api',
  ['title' as string]: 'Vue3 & TypeScript',
  components: {
    Swiper,
    SwiperSlide,
    TechStackCard
  },
  setup() {
    const swiperComponentRef = ref<any>(null)

    const swiperComponentOption: SwiperOptions = {
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
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    }

    const techStackItems = ref(techStackItemsData)

    return {
      swiperComponentRef,
      swiperComponentOption,
      techStackItems
    }
  }
})
</script>

<style lang="scss" scoped>
::v-deep .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  opacity: 1;
  background: rgb(239, 239, 239);
}
::v-deep
  .swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 5px;
}
::v-deep .swiper-pagination-bullet-active {
  background: #623de4;
}

.slide {
  padding-bottom: 50px;
}
</style>
