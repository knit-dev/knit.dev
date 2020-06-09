<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="6" align-self="center">
        <div class="mx-auto pa-4" style="max-width: 700px;">
          <h4
            class="text-uppercase heading-subtitle font-weight-regular pb-2"
            :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
          >
            {{ content.subtitle }}
          </h4>
          <h1 class="pb-5 display-2 font-weight-medium">
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
              class="text-none btn-hover-grow"
              x-large
              rounded
              :href="`mailto:${content.callToAction.email}`"
            >
              {{
                hover ? content.callToAction.email : content.callToAction.text
              }}</v-btn
            >
          </v-hover>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="pa-0">
        <div class="hero-illustration my-5 ml-10 pr-10">
          <div class="hero-image-wrapper">
            <v-img
              contain
              aspect-ratio="1"
              class="hero-image"
              :src="content.image"
              :lazy-src="content.lazyImage"
              alt="hero illustration"
            ></v-img>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { HeroContent } from '~/types'

export default defineComponent({
  name: 'Hero',
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
.hero-image {
  -webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.22));
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.22));
}
.hero-image-wrapper {
  background: linear-gradient(
    118.61deg,
    rgba(58, 28, 163, 0.04) 27.11%,
    rgba(33, 17, 88, 0.09) 120.45%
  );
  border-radius: 35px;
}
.hero-illustration {
  background-size: cover;
  background-position: left;
  background-image: url('~assets/images/knit/textures/hero-texture.svg');
}

path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 2s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
