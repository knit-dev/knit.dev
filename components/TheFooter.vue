<template>
  <v-footer id="the-footer" padless>
    <v-card
      flat
      tile
      width="100%"
      :color="isDark ? '' : '#F8F0EA'"
      :class="{ 'pad-bottom': $vuetify.breakpoint.smAndDown }"
    >
      <v-card-text>
        <v-row justify="center">
          <v-col cols="12" class="d-flex align-self-center justify-center">
            <nuxt-link exact to="/">
              <v-img :src="siteLogo" alt="site logo"></v-img>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col order="1" class="d-flex align-self-center justify-center">
            <ColorSchemeToggles />
          </v-col>
          <v-col
            cols="12"
            sm=""
            :order="$vuetify.breakpoint.xsOnly ? 'first' : 2"
            class="d-flex align-self-center flex-shrink-0 justify-center"
          >
            <div>
              <v-btn
                v-for="item in socials"
                :key="item.name"
                :href="item.link"
                target="_blank"
                rel="”noopener”"
                class="mx-2"
                icon
                :aria-label="item.name"
              >
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-col col="12" md="10" lg="9" xl="8">
            <v-row>
              <v-col
                v-for="item in affiliates"
                :key="item.name"
                class="text-center"
              >
                <div>
                  <div class="affiliate-text">{{ item.title }}</div>
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="”noopener”"
                    :aria-label="`${item.title} ${item.name}`"
                  >
                    <v-img
                      :src="
                        item.darkImage && isDark ? item.darkImage : item.image
                      "
                      :alt="`${item.name}-logo-and-text`"
                      aspect-ratio="1"
                      contain
                      height="1.375rem"
                      class="affiliate-image"
                    />
                  </a>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        &copy; {{ new Date().getFullYear() }} {{ companyName }}. Open-source
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="”noopener”"
          >MIT Licensed</a
        >
      </v-card-text>
    </v-card>
    <div class="test-icon">
      <v-img
        :src="require('~/assets/images/site-design/brush.png')"
        alt="brush"
      ></v-img>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { socials as socialsData, affiliates as affiliatesData } from '~/data'
import ColorSchemeToggles from '~/components/ColorSchemeToggles.vue'

export default defineComponent({
  components: {
    ColorSchemeToggles
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const companyName = computed(() => root.$store.getters.getCompanyName)
    const isDark = computed(() => root.$store.getters['theme/isDark'])
    const siteLogo = computed(() =>
      isDark.value
        ? require('~/assets/images/knit/knit-logo-white.svg')
        : require('~/assets/images/knit/knit-logo-black.svg')
    )

    const socials = ref(socialsData)
    const affiliates = ref(affiliatesData)

    return {
      isDark,
      companyName,
      siteLogo,
      socials,
      affiliates
    }
  }
})
</script>

<style lang="scss" scoped>
@supports (padding-top: env(safe-area-inset-top)) {
  #the-footer {
    padding-bottom: env(safe-area-inset-bottom);
  }
}

$icon-size: 4rem;
.test-icon {
  position: absolute;
  left: 171px;
  top: $icon-size * -0.5;
  width: $icon-size;
  height: $icon-size;

  box-shadow: 8px 8px 15px rgba(19, 6, 65, 0.1);
  border-radius: 10px;
  z-index: 10;
  background: #ffffff;
}

.pad-bottom {
  padding-bottom: 56px;
}

.affiliate-text {
  margin-bottom: 0.5rem;
  color: rgb(153, 153, 153);
}

.affiliate-image {
  filter: grayscale(100%) contrast(30%);
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  transition-delay: initial;
  transition-property: all;
}

.affiliate-image:hover {
  filter: grayscale(0%);
}
</style>
