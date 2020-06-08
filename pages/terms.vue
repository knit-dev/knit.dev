<template>
  <v-container fluid>
    <div class="mx-auto py-4" style="max-width: 800px;">
      <h2 class="pb-4">{{ companyName }} Terms of Service</h2>

      <h3 class="pb-3">1. Terms</h3>
      <p>
        By accessing the website at
        <a :href="siteUrl">{{ siteUrl }}</a
        >, you are agreeing to be bound by these terms of service, all
        applicable laws and regulations, and agree that you are responsible for
        compliance with any applicable local laws. If you do not agree with any
        of these terms, you are prohibited from using or accessing this site.
        The materials contained in this website are protected by applicable
        copyright and trademark law.
      </p>

      <h3 class="pb-3">2. Disclaimer</h3>
      <ol type="a" class="pb-4">
        <li>
          The materials on {{ companyName }}'s website are provided on an 'as
          is' basis. {{ companyName }} makes no warranties, expressed or
          implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </li>
        <li>
          Further, {{ companyName }} does not warrant or make any
          representations concerning the accuracy, likely results, or
          reliability of the use of the materials on its website or otherwise
          relating to such materials or on any sites linked to this site.
        </li>
      </ol>

      <h3 class="pb-3">3. Limitations</h3>
      <p>
        In no event shall {{ companyName }} or its suppliers be liable for any
        damages (including, without limitation, damages for loss of data or
        profit, or due to business interruption) arising out of the use or
        inability to use the materials on {{ companyName }}'s website, even if
        {{ companyName }} or a {{ companyName }}
        authorized representative has been notified orally or in writing of the
        possibility of such damage. Because some jurisdictions do not allow
        limitations on implied warranties, or limitations of liability for
        consequential or incidental damages, these limitations may not apply to
        you.
      </p>

      <h3 class="pb-3">4. Accuracy of materials</h3>
      <p>
        The materials appearing on {{ companyName }}'s website could include
        technical, typographical, or photographic errors. {{ companyName }} does
        not warrant that any of the materials on its website are accurate,
        complete or current. {{ companyName }} may make changes to the materials
        contained on its website at any time without notice. However
        {{ companyName }} does not make any commitment to update the materials.
      </p>

      <h3 class="pb-3">5. Links</h3>
      <p>
        {{ companyName }} has not reviewed all of the sites linked to its
        website and is not responsible for the contents of any such linked site.
        The inclusion of any link does not imply endorsement by
        {{ companyName }} of the site. Use of any such linked website is at the
        user's own risk.
      </p>

      <h3 class="pb-3">6. Modifications</h3>
      <p>
        {{ companyName }} may revise these terms of service for its website at
        any time without notice. By using this website you are agreeing to be
        bound by the then current version of these terms of service.
      </p>

      <h3 class="pb-3">7. Governing Law</h3>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of California and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </p>

      <h3 class="pb-3">8. Contact Information</h3>
      <p>
        Questions about the Terms of Service should be sent to us at
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a
        >.
      </p>
    </div>
  </v-container>
</template>

<script>
import { defineComponent, ref, computed } from '@vue/composition-api'
import { callToAction as callToActionData } from '~/data'

export default defineComponent({
  name: 'Privacy',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const siteUrl = computed(() => root.$store.getters.getSiteUrl)
    const companyName = computed(() => root.$store.getters.getCompanyName)
    const contact = ref(callToActionData)

    return { siteUrl, companyName, contact }
  }
})
</script>

<style lang="scss" scoped></style>
