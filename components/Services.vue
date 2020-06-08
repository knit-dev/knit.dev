<template>
  <v-container fluid>
    <v-row align="center">
      <v-col v-if="$vuetify.breakpoint.mdAndUp" md="6">
        <v-img
          :src="activeImage"
          :lazy-src="activeLazyImage"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-col>
      <v-col md="6">
        <div class="pb-4">
          <SectionHeading subtitle="Take a peek" title="Our Services" />
        </div>

        <v-expansion-panels v-model="panel" mandatory accordion>
          <v-expansion-panel v-for="item in services" :key="item.title">
            <v-expansion-panel-header>
              <h3>{{ item.title }}</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              >{{ item.text }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import SectionHeading from '~/components/SectionHeading.vue'
import { services as servicesData } from '~/data'

export default defineComponent({
  name: 'Services',
  components: {
    SectionHeading
  },
  setup() {
    const panel = ref(0)

    const services = ref(servicesData)

    const activeImage = computed(() => services.value[panel.value].image)
    const activeLazyImage = computed(
      () => services.value[panel.value].lazyImage
    )

    return { panel, services, activeImage, activeLazyImage }
  }
})
</script>

<style lang="scss" scoped></style>
