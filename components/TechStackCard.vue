<template>
  <v-card
    min-height="440"
    shaped
    :hover="$vuetify.breakpoint.mdAndUp"
    class="d-flex flex-column"
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
          max-height="64px"
          max-width="64px"
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

interface TechStackItem {
  category: String
  name: String
  description: String
  logo: any
  alternatives: Array<String>
  usedByCompanies: Array<String>
  link: String
}

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
.subtitle {
  font-family: 'Space Mono';
}
</style>
