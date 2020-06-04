<template>
  <v-card
    min-height="444"
    max-width="296"
    shaped
    flat
    :hover="$vuetify.breakpoint.mdAndUp"
    class="d-flex flex-column mx-auto"
  >
    <v-card-text>
      <a
        :href="item.link"
        target="_blank"
        rel="”noopener”"
        :aria-label="item.name"
      >
        <v-img
          :src="item.logo"
          aspect-ratio="1"
          contain
          max-height="4rem"
          max-width="4rem"
          :alt="`${item.name} logo`"
        ></v-img>
      </a>
    </v-card-text>
    <v-card-title class="pt-0">{{ item.name }}</v-card-title>
    <v-card-subtitle class="text-uppercase subtitle">{{
      item.category
    }}</v-card-subtitle>
    <v-card-text>{{ item.description }}</v-card-text>
    <v-card-text>Compares to {{ item.alternatives.join(', ') }}</v-card-text>
    <v-spacer></v-spacer>
    <v-card-text>{{ item.usedByCompanies.join(' ') }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { TechStackItem } from '~/types'

export default defineComponent({
  name: 'TechStackCard',
  props: {
    item: {
      type: Object as () => TechStackItem,
      required: true
    }
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.v-card--hover {
  cursor: default;
}
.v-card__text {
  width: auto;
}
.subtitle {
  font-family: 'Space Mono';
}
</style>
