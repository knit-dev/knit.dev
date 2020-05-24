<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        height="48px"
        width="48px"
        color="accent"
        v-on="on"
        @click="toggle()"
      >
        <v-icon>
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>
    <span>{{ text }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useColorSchemeMode from '~/utils/useColorSchemeMode'

export default defineComponent({
  name: 'ColorSchemeModeButton',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const {
      colorSchemeModeIcon: icon,
      colorSchemeModeText: text,
      toggleColorSchemeMode: toggle
    } = useColorSchemeMode(root)

    return { icon, text, toggle }
  }
})
</script>

<style lang="scss" scoped></style>
