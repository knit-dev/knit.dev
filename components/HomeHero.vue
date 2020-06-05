<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="6" align-self="center">
        <div class="pa-4">
          <h4
            class="text-uppercase heading-subtitle font-weight-regular pb-3"
            :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
          >
            {{ content.subtitle }}
          </h4>
          <h1 class="pb-6 display-2 font-weight-medium">
            {{ content.title }}
          </h1>
          <h3 class="pb-6 text--secondary title font-weight-regular">
            {{ content.text }}
          </h3>
          <v-hover>
            <v-btn
              slot-scope="{ hover }"
              :depressed="!hover"
              color="primary"
              class="text-capitalize btn-hover-grow"
              x-large
              rounded
              :href="`mailto:${content.buttonEmail}`"
            >
              {{ content.buttonText }}</v-btn
            >
          </v-hover>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 hero-illustration">
        <v-img
          :src="content.image"
          :lazy-src="content.lazyImage"
          aspect-ratio="1"
          contain
          alt="hero illustration"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { HeroContent } from '~/types'

export default defineComponent({
  name: 'HomeHero',
  props: {
    content: {
      type: Object as () => HeroContent,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.hero-illustration {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: left;
  background-image: url('~assets/images/knit/hero-background.svg');
}
</style>
