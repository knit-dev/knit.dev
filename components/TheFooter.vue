<template>
  <v-footer id="the-footer" padless>
    <v-card flat tile class="text-center" width="100%">
      <v-card-text>
        <v-row no-gutters>
          <v-col
            cols="3"
            class="d-flex align-self-center justify-start justify-md-center flex-shrink-1 flex-grow-0 "
          >
            <ColorSchemeModeToggles />
          </v-col>
          <v-col
            class="d-flex align-self-center flex-shrink-0 justify-center"
            style="flex-wrap: nowrap;"
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
                <v-icon size="24px">{{ item.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col
            cols="3"
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
        {{ new Date().getFullYear() }} — <strong>{{ siteName }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { mdiGithub, mdiTwitter, mdiLinkedin } from '@mdi/js'
import ColorSchemeModeToggles from '~/components/ColorSchemeModeToggles.vue'

export default defineComponent({
  components: {
    ColorSchemeModeToggles
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const siteName = computed(() => root.$store.getters.getSiteName)

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
      siteName,
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
