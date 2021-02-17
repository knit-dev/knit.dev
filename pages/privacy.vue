<template>
  <v-container fluid>
    <div class="mx-auto py-4" style="max-width: 800px">
      <h2 class="pb-4">{{ companyName }} Privacy Policy</h2>

      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit
        <a :href="siteUrl">{{ siteUrl }}</a> (the “Site”).
      </p>

      <h3 class="pb-3">Personal Information We Collect</h3>

      <p>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, and time zone. Additionally, as you browse the Site, we collect
        information about the individual web pages or products that you view,
        what websites or search terms referred you to the Site, and information
        about how you interact with the Site. We refer to this
        automatically-collected information as “Device Information.”
      </p>

      <p>We collect Device Information using the following technologies</p>
      <ul class="pb-3">
        <li>
          “Log files” track actions occurring on the Site, and collect data
          including your IP address, browser type, Internet service provider,
          referring/exit pages, and date/time stamps.
        </li>
        <li>
          “Web beacons,” “tags,” and “pixels” are electronic files used to
          record information about how you browse the Site.
        </li>
      </ul>

      <p>
        When we talk about “Personal Information” in this Privacy Policy, we are
        talking about Device Information.
      </p>

      <h3 class="pb-3">How Do We Use Your Personal Information?</h3>

      <p>
        We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site (for example, by generating
        analytics about how our customers browse and interact with the Site, and
        to assess the success of our marketing and advertising campaigns).
      </p>

      <h3 class="pb-3">Sharing Your Personal Information</h3>

      <p>
        We share your Personal Information with third parties to help us use
        your Personal Information, as described above. For example, we use
        Sentry to log errors on our Site--you can read more about how Sentry
        uses your Personal Information here:
        <a href="https://sentry.io/privacy/">https://sentry.io/privacy/</a> . We
        also use Netlify Analytics to help us understand how our customers use
        the Site--you can read more about how Netlify uses your Personal
        Information here:
        <a href="https://www.netlify.com/privacy/"
          >https://www.netlify.com/privacy/</a
        >
        .
      </p>

      <p>
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful request for information we receive, or to
        otherwise protect our rights
      </p>

      <h3 class="pb-3">Do Not Track</h3>
      <p>
        Please note that we do not alter our Site’s data collection and use
        practices when we see a Do Not Track signal from your browser.
      </p>

      <h3 class="pb-3">Data Retention</h3>
      <p>
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorized access, disclosure, copying, use or modification.
      </p>

      <h3 class="pb-3">Changes</h3>
      <p>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons.
      </p>

      <h3 class="pb-3">Contact Us</h3>
      <p>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by email at
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </p>

      <p>
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.
      </p>

      <p>This policy is effective as of June 8, 2020.</p>
    </div>
  </v-container>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  useContext,
} from '@nuxtjs/composition-api'
import { callToAction as callToActionData } from '~/data'

export default defineComponent({
  name: 'Privacy',
  setup() {
    const { store } = useContext()

    const contact = ref(callToActionData)

    const siteUrl = computed(() => store.getters.getSiteUrl)
    const companyName = computed(() => store.getters.getCompanyName)

    return { siteUrl, companyName, contact }
  },
})
</script>
