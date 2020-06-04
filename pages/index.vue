<template>
  <div>
    <section>
      <v-container fluid class="pa-0">
        <v-row>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-4">
              <h4
                class="text-uppercase heading-subtitle font-weight-regular pb-3"
                :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
              >
                Code as craft
              </h4>
              <h1 class="pb-6 display-2 font-weight-medium">
                Bespoke web and mobile app dev for your startup
              </h1>
              <h3 class="pb-6 text--secondary title font-weight-regular">
                Using the latest technologies to create the platforms of
                tomorrow. Design, build, deploy, and scale.
              </h3>
              <v-btn
                color="primary"
                class="text-capitalize btn-hover-grow"
                large
                rounded
              >
                Get started!</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" md="6" class="pa-0 hero-illustration">
            <v-img
              :src="require('~/assets/images/knit/hero-illustration.png')"
              alt="hero illustration"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <TechStackSwiper />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TechStackSwiper from '~/components/TechStackSwiper.vue'

export default defineComponent({
  head() {
    return {
      titleTemplate: '%s',
      title: `${process.env.siteName}: ${process.env.tagline}`
    }
  },
  name: 'Home',
  components: {
    TechStackSwiper
  }
})
</script>

<style lang="scss">
.hero-illustration {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: left;
  background-image: url('~assets/images/knit/hero-background.svg');
}
</style>
