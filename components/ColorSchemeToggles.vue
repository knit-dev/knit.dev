<template>
  <div class="text-center d-flex align-center">
    <v-switch
      v-model="isDark"
      aria-label="toggle dark mode"
      @click.stop.prevent="toggleDark()"
    >
      <v-icon slot="prepend" :disabled="isDark">{{ lightIcon }}</v-icon>
      <v-icon slot="append" :disabled="!isDark">{{ darkIcon }}</v-icon>
    </v-switch>
    <v-divider vertical inset class="ml-2"></v-divider>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          class="ml-2"
          aria-label="toggle use system color mode preference"
          v-on="on"
          @click="toggleDefault()"
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
import { defineComponent, ref, computed } from '@vue/composition-api'
import {
  mdiMonitor,
  mdiMonitorOff,
  mdiWeatherNight,
  mdiWhiteBalanceSunny
} from '@mdi/js'

export default defineComponent({
  name: 'ColorSchemeToggles',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const isUserDefinedColorScheme = computed(
      () => root.$store.getters['theme/isUserDefinedColorScheme']
    )
    const isDark = computed(() => root.$store.getters['theme/isDark'])
    const isPrefersColorSchemeCapable = computed(
      () => root.$store.getters['theme/isPrefersColorSchemeCapable']
    )

    const defaultIcon = computed(() =>
      isUserDefinedColorScheme.value ? mdiMonitorOff : mdiMonitor
    )
    const defaultText = 'System'

    const lightIcon = ref(mdiWhiteBalanceSunny)
    const darkIcon = ref(mdiWeatherNight)

    const toggleDark = () =>
      root.$store.dispatch('theme/setDark', {
        vm: root,
        value: !isDark.value,
        userDefinedColorScheme: true
      })

    const toggleDefault = () => {
      root.$store.dispatch('theme/setDark', {
        vm: root,
        value: isUserDefinedColorScheme.value
          ? isPrefersColorSchemeCapable.value &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
          : isDark.value,
        userDefinedColorScheme: !isUserDefinedColorScheme.value
      })
    }

    return {
      isDark,
      isUserDefinedColorScheme,
      defaultIcon,
      defaultText,
      lightIcon,
      darkIcon,
      toggleDark,
      toggleDefault
    }
  }
})
</script>

<style lang="scss" scoped></style>
