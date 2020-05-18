<template>
  <div>
    <logo />
    <h1 class="title">
      vuetify-test
    </h1>
    <h2 class="subtitle">
      My striking Nuxt.js project
    </h2>
    <div class="links">
      <a href="https://nuxtjs.org/" target="_blank" class="button--green">
        Documentation
      </a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'

interface User {
  firstName: string
  lastName: number
}

export default defineComponent({
  name: 'home',
  components: { Logo },
  props: {
    user: {
      type: Object as () => User,
      default: () => ({ firstName: 'john', lastName: 'smith' })
    }
  },

  setup({ user }) {
    const fullName = computed(() => `${user.firstName} ${user.lastName}`)
    const message = ref('This is a message')

    return {
      fullName,
      message
    }
  }
})
</script>

<style></style>
