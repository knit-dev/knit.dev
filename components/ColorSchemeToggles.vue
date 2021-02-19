<template>
  <div class="text-center d-flex align-center">
    <v-switch
      :input-value="$vuetify.theme.dark"
      aria-label="toggle dark mode"
      @click.stop.prevent="toggleColorMode()"
    >
      <v-icon slot="prepend" :disabled="$vuetify.theme.dark">{{
        lightModeIcon
      }}</v-icon>

      <v-icon slot="append" :disabled="!$vuetify.theme.dark">{{
        darkModeIcon
      }}</v-icon>
    </v-switch>

    <v-divider vertical inset class="ml-2"></v-divider>

    <v-tooltip top>
      <template #activator="{ on }">
        <v-btn
          icon
          class="ml-2"
          aria-label="toggle use system color mode preference"
          v-on="on"
          @click.stop.prevent="toggleSystemColorMode()"
        >
          <template v-if="$colorMode.unknown">
            <v-icon>
              {{ systemOnIcon }}
            </v-icon>
          </template>

          <template v-else>
            <v-icon :disabled="$colorMode.preference !== 'system'">
              {{
                $colorMode.preference === 'system'
                  ? systemOnIcon
                  : systemOffIcon
              }}
            </v-icon>
          </template>
        </v-btn>
      </template>
      <span>System</span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  watch,
  onMounted,
} from '@nuxtjs/composition-api'
import useIcons from '~/composables/useIcons'

export default defineComponent({
  name: 'ColorSchemeToggles',
  setup() {
    const { $colorMode, $vuetify } = useContext()

    const {
      systemOnIcon,
      systemOffIcon,
      lightModeIcon,
      darkModeIcon,
    } = useIcons()

    const toggleSystemColorMode = () => {
      if ($colorMode.preference === 'system') {
        $colorMode.preference = $colorMode.value === 'dark' ? 'dark' : 'light'
      } else {
        $colorMode.preference = 'system'
      }
    }
    const toggleColorMode = () => {
      $colorMode.preference = $vuetify.theme.dark ? 'light' : 'dark'
    }
    const setVuetifyThemeDark = (value: string) => {
      $vuetify.theme.dark = value === 'dark'
    }

    onMounted(() => {
      setVuetifyThemeDark($colorMode.value)
    })

    watch(
      () => $colorMode.value,
      () => {
        setVuetifyThemeDark($colorMode.value)
      }
    )

    return {
      systemOnIcon,
      systemOffIcon,
      lightModeIcon,
      darkModeIcon,
      toggleSystemColorMode,
      toggleColorMode,
    }
  },
})
</script>
