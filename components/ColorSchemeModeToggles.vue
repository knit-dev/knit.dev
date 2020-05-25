<template>
  <div>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          :outlined="!isUserDefinedColorScheme"
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
    <v-switch v-model="isDark" hide-details @click.stop.prevent="toggleDark()">
      <v-icon slot="prepend" :disabled="isDark">{{ lightIcon }}</v-icon>
      <v-icon slot="append" :disabled="!isDark">{{ darkIcon }}</v-icon>
    </v-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import {
  mdiThemeLightDark,
  mdiWeatherNight,
  mdiWhiteBalanceSunny
} from '@mdi/js'

export default defineComponent({
  name: 'ColorSchemeModeToggles',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const isUserDefinedColorScheme = computed(
      () => root.$store.getters['theme/isUserDefinedColorScheme']
    )
    const isDark = computed(() => root.$store.getters['theme/isDark'])
    const isPrefersColorSchemeCapable = computed(
      () => root.$store.getters['theme/isPrefersColorSchemeCapable']
    )

    const defaultIcon = ref(mdiThemeLightDark)
    const defaultText = computed(() =>
      isUserDefinedColorScheme.value
        ? 'Use System Preference'
        : 'Ignore System Preference'
    )

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
