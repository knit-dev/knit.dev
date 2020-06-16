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
    <v-card-text>
      <v-row no-gutters>
        <v-col
          v-for="company in item.usedByCompanies"
          :key="company.name"
          cols="6"
          class="d-flex"
        >
          <v-img
            class="used-by-company"
            :class="{ 'used-by-company-dark': isDark }"
            :src="company.image"
            :alt="company.name"
            contain
            max-width="6rem"
            max-height="1.5rem"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { TechStackItem } from '~/types'

export default defineComponent({
  name: 'TechStackCard',
  props: {
    item: {
      type: Object as () => TechStackItem,
      required: true,
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const isDark = computed(() => root.$store.getters['theme/isDark'])
    return { isDark }
  },
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

.used-by-company {
  -webkit-filter: grayscale(100%) contrast(70%);
  filter: grayscale(100%) contrast(70%);
}
.used-by-company-dark {
  -webkit-filter: grayscale(100%) contrast(30%);
  filter: grayscale(100%) contrast(30%);
}
</style>
