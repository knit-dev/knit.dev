<template>
  <v-footer id="the-footer" padless>
    <v-card
      flat
      tile
      class="text-center"
      width="100%"
      :color="isDark ? '' : '#F8F0EA'"
      :class="{ 'pad-bottom': $vuetify.breakpoint.smAndDown }"
    >
      <v-card-text>
        <v-row>
          <v-col cols="12" class="d-flex align-self-center justify-center">
            <nuxt-link exact to="/">
              <v-img
                :src="siteLogo"
                height="2.5rem"
                width="2.5rem"
                shrink
                alt="site logo"
              ></v-img>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="3"
            order="1"
            class="d-flex align-self-center justify-start justify-md-center flex-shrink-1 flex-grow-0 "
          >
            <ColorSchemeToggles />
          </v-col>
          <v-col
            cols="12"
            sm=""
            :order="$vuetify.breakpoint.xsOnly ? 'first' : 2"
            class="d-flex align-self-center flex-shrink-0 justify-center"
            :class="{ 'py-4': $vuetify.breakpoint.xsOnly }"
          >
            <div>
              <v-btn
                v-for="item in socials"
                :key="item.name"
                :href="item.link"
                target="_blank"
                class="mx-2"
                icon
              >
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="3"
            order="3"
            class="d-flex align-self-center justify-end flex-shrink-1 flex-grow-0 "
          >
            <div>
              <div class="hosting-text">Hosting by</div>
              <a href="https://www.netlify.com" target="_blank">
                <img
                  :src="require('~/assets/netlify-logo-and-text.svg')"
                  alt="netlify-logo-and-text"
                  class="hosting-image"
                />
              </a>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        Released under the
        <a href="https://opensource.org/licenses/MIT" target="_blank"
          >MIT License</a
        >
        <br />
        &copy; {{ new Date().getFullYear() }} {{ companyName }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { mdiGithub, mdiTwitter, mdiLinkedin } from '@mdi/js'
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
        ? require('~/assets/knit-logo-white.png')
        : require('~/assets/knit-logo-black.png')
    )

    const socials = ref([
      {
        name: 'github',
        icon: mdiGithub,
        link: 'https://github.com/knit-dev'
      },
      { name: 'twitter', icon: mdiTwitter, link: 'https://twitter.com' },
      {
        name: 'linkedin',
        icon: mdiLinkedin,
        link: 'https://www.linkedin.com/company/knit-llc'
      }
    ])

    return {
      isDark,
      companyName,
      siteLogo,
      socials
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

.pad-bottom {
  padding-bottom: 56px;
}

.hosting-text {
  margin-bottom: 0.5rem;
  color: rgb(153, 153, 153);
}

.hosting-image {
  height: 22px;
  width: auto;
  display: inline-block;
  filter: grayscale(100%);
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  transition-delay: initial;
  transition-property: all;
}

.hosting-image:hover {
  filter: grayscale(0%);
}
</style>
