import { mdiGithub, mdiTwitter, mdiLinkedin } from '@mdi/js'

export const socials = [
  {
    name: 'github',
    icon: mdiGithub,
    link: 'https://github.com/knit-dev'
  },
  { name: 'twitter', icon: mdiTwitter, link: 'https://twitter.com' },
  {
    name: 'linkedin',
    icon: mdiLinkedin,
    link: 'https://www.linkedin.com/company/knit-llc'
  }
]

export const affiliates = [
  {
    name: 'vue',
    title: 'Built with',
    image: require('~/assets/images/affiliates/vue-logo-and-text.png'),
    link: 'https://vuejs.org'
  },
  {
    name: 'github',
    title: 'View source',
    image: require('~/assets/images/affiliates/github-logo-and-text.png'),
    darkImage: require('~/assets/images/affiliates/github-logo-and-text-white.png'),
    link: 'https://github.com/knit-dev/knit.dev'
  },
  {
    name: 'netlify',
    title: 'Hosting by',
    image: require('~/assets/images/affiliates/netlify-logo-and-text.svg'),
    link: 'https://www.netlify.com'
  }
]
