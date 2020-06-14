<template>
  <div class="d-flex">
    <v-tabs optional background-color="transparent">
      <v-tab
        v-for="item in items"
        :key="item.title"
        :to="item.route"
        exact
        nuxt
        class="text-capitalize"
        >{{ item.title }}</v-tab
      >
    </v-tabs>
  </div>
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
