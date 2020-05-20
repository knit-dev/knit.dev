<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        height="48px"
        width="48px"
        color="primary"
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

export default defineComponent({
  name: 'ColorSchemeModeButton',
  props: {
    icon: {
      type: String
    },
    text: {
      type: String
    },
    toggle: {
      type: Function
    }
  }
})
</script>

<style lang="scss" scoped></style>
