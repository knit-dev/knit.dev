<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col class="text-center">
        <div>
          <div class="d-flex justify-center mb-2">
            <v-icon class="mr-2" size="60">
              {{ errorIcon }}
            </v-icon>
          </div>
          <div class="text-h5 mb-4">
            {{ message }}
          </div>
          <template v-if="statusCode === 404">
            <a v-if="typeof $route === 'undefined'" href="/">Back to home</a>
            <v-btn
              v-else
              nuxt
              to="/"
              depressed
              class="text-none"
              color="secondary"
              >Back to home</v-btn
            >
          </template>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: () => null,
    },
  },
  setup(props) {
    const { $vuetify } = useContext()

    const errorIcon = $vuetify.icons.values.error

    const statusCode = computed(() => props.error?.statusCode || 500)
    const fallbackText = computed(() =>
      statusCode.value === 404
        ? 'This page could not be found'
        : 'An error occured'
    )
    const message = computed(() => props.error?.message || fallbackText.value)

    return { statusCode, message, errorIcon }
  },
  head() {
    return {
      title: 'Error',
    }
  },
})
</script>
