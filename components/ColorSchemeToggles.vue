<template>
  <div class="text-center d-flex align-center">
    <v-switch v-model="isDark" aria-label="toggle dark mode">
      <v-icon slot="prepend" :disabled="isDark">{{ lightModeIcon }}</v-icon>
      <v-icon slot="append" :disabled="!isDark">{{ darkModeIcon }}</v-icon>
    </v-switch>
    <v-divider vertical inset class="ml-2"></v-divider>
    <v-tooltip top>
      <template #activator="{ on }">
        <v-btn
          icon
          class="ml-2"
          aria-label="toggle use system color mode preference"
          v-on="on"
          @click.stop.prevent="toggleDefault()"
        >
          <v-icon :disabled="isUserDefinedColorScheme">
            {{ defaultIcon }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ defaultText }}</span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'
import useIcons from '~/composables/useIcons'

export default defineComponent({
  name: 'ColorSchemeToggles',
  setup() {
    const { store, $vuetify } = useContext()

    const {
      systemOnIcon,
      systemOffIcon,
      lightModeIcon,
      darkModeIcon,
    } = useIcons()

    const isUserDefinedColorScheme = computed(
      () => store.getters['theme/isUserDefinedColorScheme']
    )
    const isDark = computed({
      get: () => store.getters['theme/isDark'],
      set: () => {
        toggleDark()
      },
    })
    const isPrefersColorSchemeCapable = computed(
      () => store.getters['theme/isPrefersColorSchemeCapable']
    )

    const defaultIcon = computed(() =>
      isUserDefinedColorScheme.value ? systemOffIcon : systemOnIcon
    )
    const defaultText = 'System'

    const toggleDark = () =>
      store.dispatch('theme/setDark', {
        $vuetify,
        value: !isDark.value,
        userDefinedColorScheme: true,
      })
    const toggleDefault = () => {
      store.dispatch('theme/setDark', {
        $vuetify,
        value: isUserDefinedColorScheme.value
          ? isPrefersColorSchemeCapable.value &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
          : isDark.value,
        userDefinedColorScheme: !isUserDefinedColorScheme.value,
      })
    }

    return {
      isDark,
      isUserDefinedColorScheme,
      defaultIcon,
      defaultText,
      lightModeIcon,
      darkModeIcon,
      toggleDark,
      toggleDefault,
    }
  },
})
</script>
