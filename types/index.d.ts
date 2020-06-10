export interface HeroContent {
  title: String
  subtitle: String
  text: String
  callToAction: CallToAction
  image: any
  lazyImage: any
}

export interface CallToAction {
  text: String
  email: String
}

export interface Service {
  title: String
  text: String
  image: any
  lazyImage: any
  link: String
}

export interface TechStackItem {
  category: String
  name: String
  description: String
  logo: any
  alternatives: Array<String>
  usedByCompanies: Array<Company>
  link: String
}

interface Company {
  name: String
  image: any
}

export interface Testimonial {
  organizationName: String
  jobTitle: String
  fullName: String
  highlightedText?: String
  text: String
}

export interface Social {
  name: String
  icon: String
  link: String
}

export interface Affiliate {
  name: String
  title: String
  image: any
  darkImage?: any
  link: String
}
