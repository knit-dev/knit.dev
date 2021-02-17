<template>
  <v-container fluid>
    <v-row align="center" class="global-x-padding">
      <v-col v-if="$vuetify.breakpoint.mdAndUp" md="6">
        <v-img
          :src="activeImage"
          :lazy-src="activeLazyImage"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-col>

      <v-col md="6">
        <div class="mx-auto" style="max-width: 600px">
          <div class="pb-4">
            <SectionHeading subtitle="Take a peek" title="Our Services" />
          </div>

          <v-expansion-panels v-model="panel" mandatory accordion>
            <v-expansion-panel v-for="item in services" :key="item.title">
              <v-expansion-panel-header>
                <h3>{{ item.title }}</h3>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <p>{{ item.text }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import useIcons from '~/composables/useIcons'
import { services } from '~/data'

export default defineComponent({
  name: 'Services',
  setup() {
    const { externalLinkIcon } = useIcons()

    const panel = ref(0)

    const activeImage = computed(() => services[panel.value].image)
    const activeLazyImage = computed(() => services[panel.value].lazyImage)

    return { panel, services, activeImage, activeLazyImage, externalLinkIcon }
  },
})
</script>
