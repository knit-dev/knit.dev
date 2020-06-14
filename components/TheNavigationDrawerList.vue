<template>
  <v-list nav flat rounded>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :to="item.route"
      exact
      nuxt
      active-class="primary--text"
      class="text-capitalize"
    >
      <v-list-item-content>
        {{ item.title }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const items = ref([
      { title: 'home', route: '/' },
      { title: 'contact', route: '/contact' },
    ])

    return { items }
  },
})
</script>

<style lang="scss" scoped></style>
