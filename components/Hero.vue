<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="global-left-padding">
      <v-col cols="12" md="6" align-self="center">
        <div class="mx-auto pa-4" style="max-width: 700px;">
          <HeadingSubtitle :text="content.subtitle" />
          <PageHeading :text="content.title" />
          <p class="pb-6 text--secondary text-h6 font-weight-regular">
            {{ content.text }}
          </p>
          <CallToActionButton id="page-call-to-action" />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="svg-wrapper ml-10">
          <svg
            width="730"
            height="819"
            viewBox="0 0 730 819"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="lines"
          >
            <g mask="url(#mask0)">
              <path
                d="M-454.502 -104.101L243.432 822.956"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 -53.9893L243.013 872.511"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 -3.87823L243.432 923.179"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 46.2328L243.432 973.29"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 96.344L243.432 1023.4"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 146.455L243.432 1073.51"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 196.566L243.432 1123.62"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 246.678L243.432 1173.73"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 296.789L243.432 1223.85"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M-454.502 346.9L243.432 1273.96"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M941.366 -104.101L224.569 848.012"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M941.366 -53.9893L224.569 898.123"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M941.366 -3.87823L224.569 948.234"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M941.366 46.2328L224.569 998.345"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M971.525 56.375L224.776 1048.81"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M1017.11 45.6169L224.776 1098.12"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M1051.76 50.0994L224.776 1148.33"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M1090.06 49.2029L224.776 1198.53"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M1127.44 49.2029L224.776 1248.74"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
              <path
                d="M1167.56 46.5133L243.012 1273.84"
                stroke="#D8BCFD"
                stroke-miterlimit="10"
              />
            </g>
          </svg>
          <div class="global-right-padding">
            <div class="hero-image-container">
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
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { HeroContent } from '~/types'
import PageHeading from '~/components/PageHeading.vue'
import HeadingSubtitle from '~/components/HeadingSubtitle.vue'
import CallToActionButton from '~/components/CallToActionButton.vue'

export default defineComponent({
  name: 'Hero',
  components: {
    PageHeading,
    HeadingSubtitle,
    CallToActionButton,
  },
  props: {
    content: {
      type: Object as () => HeroContent,
      required: true,
    },
  },
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
.hero-image-container {
  margin-top: 1.25rem;
  padding-right: 3rem;
}

.svg-wrapper {
  position: relative;
  overflow: hidden;
}

.lines {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 120%;
}

path {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: dash 3s linear forwards;
}

_::-webkit-full-page-media,
_:future,
:root path {
  animation-delay: 1s;
}

@supports (-moz-appearance: none) {
  path {
    animation-delay: 1s;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
