<template>
  <v-content fluid>
    <v-row no-gutters class="pb-4">
      <v-col cols="12" md="6" align-self="center">
        <div class="mx-auto pa-4" style="max-width: 700px;">
          <h1 class="pb-5 display-2 font-weight-medium">Let's chat</h1>
          <h3 class="pb-6 text--secondary title font-weight-regular">
            Tell us about your project, find out if we're a good fit and receive
            an estimate. We're excited to discover new startup partners!
          </h3>

          <v-row class="pb-6">
            <v-col cols="12" sm="6">
              <h4
                class="text-uppercase heading-subtitle font-weight-regular pb-2"
                :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
              >
                Email
              </h4>
              <div>
                <v-icon large class="mr-2">{{ emailIcon }}</v-icon>
                <a
                  class="body-1 font-weight-medium"
                  :href="`mailto:${callToAction.email}`"
                  style="text-decoration: none;"
                  >{{ callToAction.email }}</a
                >
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h4
                class="text-uppercase heading-subtitle font-weight-regular pb-2"
                :class="{ 'heading-subtitle-dark': $vuetify.theme.dark }"
              >
                Headquarters
              </h4>
              <address
                class="body-1 font-weight-medium"
                style="font-style: normal;"
              >
                Knit LLC<br />
                1724 Barry Ave<br />
                Apt 8<br />
                Los Angeles, CA 90025<br />
                United States
              </address>
            </v-col>
          </v-row>

          <div class="d-flex align-self-center pb-4">
            <v-btn
              v-for="item in socials"
              :key="item.name"
              :href="item.link"
              target="_blank"
              rel="”noopener”"
              class="mx-2"
              icon
              large
              :aria-label="item.name"
            >
              <v-icon large>{{ item.icon }}</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="pa-0">
        <div>
          <v-img src="" lazy-src="" alt="headquarters map"></v-img>
        </div>
      </v-col>
    </v-row>
    <div></div>
  </v-content>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { mdiEmailOutline } from '@mdi/js'
import {
  callToAction as callToActionData,
  socials as socialsData
} from '~/data'

export default defineComponent({
  name: 'Contact',
  setup() {
    const emailIcon = ref(mdiEmailOutline)
    const callToAction = ref(callToActionData)
    const socials = ref(socialsData)

    return {
      emailIcon,
      callToAction,
      socials
    }
  }
})
</script>

<style lang="scss" scoped></style>
