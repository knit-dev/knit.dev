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

export const techStackItems = [
  {
    category: 'Web frontend framework',
    name: 'Vue.js',
    description:
      "The fastest growing JavaScript frontend framework, and for good reason. It's flexible, scalable, and highly performant. Vue's comprehensive documentation and intuitive design make it easy to learn for most programmers.",
    logo: require('~/assets/images/tech-stack/vue.svg'),
    alternatives: ['React', 'Svelte'],
    usedByCompanies: ['Grammarly', 'Gitlab'],
    link: 'https://vuejs.org'
  },
  {
    category: 'Mobile frontend framework',
    name: 'React Native',
    description:
      'Emerged as the primary tool for building cross-platform (iOS & Android) mobile apps. Leveraging JavaScript, React Native allows developers to utilize a single codebase while rendering a native app experience to users.',
    logo: require('~/assets/images/tech-stack/react.svg'),
    alternatives: ['Swift', 'Java'],
    usedByCompanies: ['Instagram', 'Uber Eats'],
    link: 'https://reactnative.dev'
  },
  {
    category: 'UI design',
    name: 'Figma',
    description:
      'Cloud-based interface design and prototyping app where collaboration is baked-in. Includes industry standard design features, allowing for smooth integration with software engineering paradigms.',
    logo: require('~/assets/images/tech-stack/figma.svg'),
    alternatives: ['Sketch', 'InVision'],
    usedByCompanies: ['Square', 'Slack'],
    link: 'https://www.figma.com'
  },
  {
    category: 'Backend framework',
    name: 'Node.js',
    description:
      'Offers excellent performance and scalability. Well maintained packages, comprehensive platform integrations, and an abundance of JavaScript developers make Node a robust choice.',
    logo: require('~/assets/images/tech-stack/node.svg'),
    alternatives: ['.NET Core', 'Ruby on Rails'],
    usedByCompanies: ['Netflix', 'Uber'],
    link: 'https://nodejs.dev'
  },
  {
    category: 'Database engine',
    name: 'MySQL',
    description:
      'Holds the largest market share for relational database management systems. It is a stable, reliable, and powerful solution offering advanced features.',
    logo: require('~/assets/images/tech-stack/mysql.svg'),
    alternatives: ['MongoDb', 'PostgreSQL'],
    usedByCompanies: ['Wikipedia', 'YouTube'],
    link: 'https://www.mysql.com'
  },
  {
    category: 'Cloud hosting',
    name: 'Amazon Web Services',
    description:
      'The most mature and widely used hosting platform available today. AWS is well tuned to manage any size application, from a school project to a billion dollar company.',
    logo: require('~/assets/images/tech-stack/amazon-web-services.svg'),
    alternatives: ['Microsoft Azure', 'Heroku'],
    usedByCompanies: ['Twitch', 'LinkedIn'],
    link: 'https://aws.amazon.com'
  }
]
