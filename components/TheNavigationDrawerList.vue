<template>
  <v-list nav flat rounded>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :to="item.route"
      :href="item.href"
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
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = ref([
      { title: 'home', route: '/' },
      { title: 'blog', href: 'https://jeremy-knit.medium.com' },
      { title: 'contact', route: '/contact' },
    ])

    return { items }
  },
})
</script>
