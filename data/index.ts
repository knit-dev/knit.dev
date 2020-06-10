import { mdiGithub, mdiTwitter, mdiLinkedin } from '@mdi/js'
import {
  TechStackItem,
  HeroContent,
  Social,
  Affiliate,
  Service,
  Testimonial,
  CallToAction
} from '~/types'

export const heroContent: HeroContent = {
  subtitle: 'Code as craft',
  title: 'Bespoke web and mobile app dev for your startup',
  text:
    'Using the latest technologies to create the platforms of tomorrow. Design, build, deploy, and scale.',
  callToAction: {
    text: 'Get Started!',
    email: 'team@knit.dev'
  },
  image: require('~/assets/images/knit/illustrations/hero-illustration.png'),
  lazyImage: require('~/assets/images/knit/illustrations/hero-illustration-lazy.png')
}

export const services: Array<Service> = [
  {
    title: 'Progressive Web Apps',
    text:
      'Users on web, desktop, or mobile platforms run your app using a single code base. PWAs run in-browser or can be installed to the home screen just like traditional mobile or desktop apps. Like native apps, PWAs work offline and can leverage some lower level device features like web share and gestures. Take your app from concept to scale on the shortest timeline and with the broadest reach.',
    image: require('~/assets/images/knit/illustrations/services-web-illustration.png'),
    lazyImage: require('~/assets/images/knit/illustrations/services-web-illustration-lazy.png'),
    link: 'https://en.wikipedia.org/wiki/Progressive_web_application'
  },
  {
    title: 'Mobile Apps',
    text:
      'When your project requires intimate integration with lower level mobile device architecture, a native mobile app may be the right choice. Such features include geofencing, proximity and other sensing and detection, calendars, contacts, camera, and push notifications. Native mobile apps utilize mobile operating system user interface modules for consistent user experience and performance.',
    image: require('~/assets/images/knit/illustrations/services-mobile-illustration.png'),
    lazyImage: require('~/assets/images/knit/illustrations/services-mobile-illustration-lazy.png'),
    link: 'https://en.wikipedia.org/wiki/Mobile_app'
  }
]

export const techStackItems: Array<TechStackItem> = [
  {
    category: 'Web frontend framework',
    name: 'Vue.js',
    description:
      "The fastest growing JavaScript frontend framework, and for good reason. It's flexible, scalable, and highly performant. Vue's comprehensive documentation and intuitive design make it easy to learn for most programmers.",
    logo: require('~/assets/images/tech-stack/vue-logo.svg'),
    alternatives: ['React', 'Svelte'],
    usedByCompanies: [
      {
        name: 'Gitlab',
        image: require('~/assets/images/tech-stack/gitlab-combination-mark.svg')
      },
      {
        name: 'Grammarly',
        image: require('~/assets/images/tech-stack/grammarly-combination-mark.svg')
      }
    ],
    link: 'https://vuejs.org'
  },
  {
    category: 'Mobile frontend framework',
    name: 'React Native',
    description:
      'Emerged as the primary tool for building cross-platform (iOS & Android) mobile apps. Leveraging JavaScript, React Native allows developers to utilize a single codebase while rendering a native app experience to users.',
    logo: require('~/assets/images/tech-stack/react-logo.svg'),
    alternatives: ['Swift', 'Java'],
    usedByCompanies: [
      {
        name: 'Pinterest',
        image: require('~/assets/images/tech-stack/pinterest-combination-mark.svg')
      },
      {
        name: 'Uber Eats',
        image: require('~/assets/images/tech-stack/uber-eats-wordmark.svg')
      }
    ],
    link: 'https://reactnative.dev'
  },
  {
    category: 'UI design',
    name: 'Figma',
    description:
      'Cloud-based interface design and prototyping app where collaboration is baked-in. Includes industry standard design features, allowing for smooth integration with software engineering paradigms.',
    logo: require('~/assets/images/tech-stack/figma-logo.svg'),
    alternatives: ['Sketch', 'InVision'],
    usedByCompanies: [
      {
        name: 'Slack',
        image: require('~/assets/images/tech-stack/slack-combination-mark.svg')
      },
      {
        name: 'Square',
        image: require('~/assets/images/tech-stack/square-combination-mark.svg')
      }
    ],
    link: 'https://www.figma.com'
  },
  {
    category: 'Backend framework',
    name: 'Node.js',
    description:
      'Offers excellent performance and scalability. Well maintained packages, comprehensive platform integrations, and an abundance of JavaScript developers make Node a robust choice.',
    logo: require('~/assets/images/tech-stack/node-logo.svg'),
    alternatives: ['.NET Core', 'Java'],
    usedByCompanies: [
      {
        name: 'Netflix',
        image: require('~/assets/images/tech-stack/netflix-wordmark.svg')
      },
      {
        name: 'Trello',
        image: require('~/assets/images/tech-stack/trello-combination-mark.svg')
      }
    ],
    link: 'https://nodejs.dev'
  },
  {
    category: 'Database engine',
    name: 'MySQL',
    description:
      'Holds the largest market share for relational database management systems. It is a stable, reliable, and powerful solution offering advanced features.',
    logo: require('~/assets/images/tech-stack/mysql-logo.svg'),
    alternatives: ['MongoDb', 'PostgreSQL'],
    usedByCompanies: [
      {
        name: 'Wikipedia',
        image: require('~/assets/images/tech-stack/wikipedia-wordmark.svg')
      },
      {
        name: 'YouTube',
        image: require('~/assets/images/tech-stack/youtube-combination-mark.svg')
      }
    ],
    link: 'https://www.mysql.com'
  },
  {
    category: 'Cloud hosting',
    name: 'Amazon Web Services',
    description:
      'The most mature and widely used hosting platform available today. AWS is well tuned to manage any size application, from a school project to a billion dollar company.',
    logo: require('~/assets/images/tech-stack/amazon-web-services-logo.svg'),
    alternatives: ['Microsoft Azure', 'Heroku'],
    usedByCompanies: [
      {
        name: 'Linkedin',
        image: require('~/assets/images/tech-stack/linkedin-wordmark.svg')
      },
      {
        name: 'Twitch',
        image: require('~/assets/images/tech-stack/twitch-wordmark.svg')
      }
    ],
    link: 'https://aws.amazon.com'
  }
]

export const testimonials: Array<Testimonial> = [
  {
    organizationName: 'Meowtel',
    jobTitle: 'CEO',
    fullName: 'Sonya Petcavich',
    text:
      "We needed iOS and Android apps built from the ground up. Not only did Knit help guide our thinking from specifications to user experience, they delivered all milestones ahead of schedule. The quality of Knit's work is top-notch, and they were a pleasure to work with over the past 4 months!"
  },
  {
    organizationName: 'Redhawk Logistics',
    jobTitle: 'Managing Partner',
    fullName: 'Mike Tobin',
    text:
      'Quisque sagittis purus sit amet volutpat consequat mauris. Orci eu lobortis elementum nibh tellus molestie. Nunc non blandit massa enim nec dui.'
  }
]

export const callToAction: CallToAction = {
  text: 'Get Started!',
  email: 'team@knit.dev'
}

export const socials: Array<Social> = [
  {
    name: 'github',
    icon: mdiGithub,
    link: 'https://github.com/knit-dev'
  },
  { name: 'twitter', icon: mdiTwitter, link: 'https://twitter.com/knitllc' },
  {
    name: 'linkedin',
    icon: mdiLinkedin,
    link: 'https://www.linkedin.com/company/knit-llc'
  }
]

export const affiliates: Array<Affiliate> = [
  {
    name: 'vue',
    title: 'Built with',
    image: require('~/assets/images/affiliates/vue-combination-mark.png'),
    link: 'https://vuejs.org'
  },
  {
    name: 'github',
    title: 'View source',
    image: require('~/assets/images/affiliates/github-wordmark-black.png'),
    darkImage: require('~/assets/images/affiliates/github-wordmark-white.png'),
    link: 'https://github.com/knit-dev/knit.dev'
  },
  {
    name: 'netlify',
    title: 'Hosting by',
    image: require('~/assets/images/affiliates/netlify-combination-mark.svg'),
    link: 'https://www.netlify.com'
  }
]

export const footerFloatingIcons = [
  {
    style: {
      left: '17vw',
      top: '-1.5rem'
    },
    image: require('~/assets/images/knit/icons/brush.png')
  },
  {
    style: {
      right: '12vw',
      bottom: '16.5rem'
    },
    image: require('~/assets/images/knit/icons/script.png')
  },
  {
    style: {
      left: '35vw',
      bottom: '6rem'
    },
    image: require('~/assets/images/knit/icons/page.png')
  }
]

export const license = {
  description: 'Open-source ',
  linkText: 'MIT Licensed',
  link: 'https://github.com/knit-dev/knit.dev/blob/master/LICENSE'
}
