<template>
  <div class="d-flex">
    <v-tabs optional background-color="transparent">
      <v-tab
        v-for="item in items"
        :key="item.title"
        :to="item.route"
        :href="item.href"
        exact
        nuxt
        class="text-capitalize"
        >{{ item.title }}</v-tab
      >
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const items = [
  { title: 'home', route: '/' },
  { title: 'blog', href: 'https://jeremy-knit.medium.com' },
  { title: 'contact', route: '/contact' },
]

export default defineComponent({
  setup() {
    return { items }
  },
})
</script>
