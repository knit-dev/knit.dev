export interface HeroContent {
  subtitle: String
  title: String
  text: String
  callToAction: CallToAction
  image: any
  lazyImage: any
}

export interface Service {
  title: String
  text: String
  image: any
  lazyImage: any
}

export interface TechStackItem {
  category: String
  name: String
  description: String
  logo: any
  alternatives: Array<String>
  usedByCompanies: Array<String>
  link: String
}

export interface Testimonial {
  organizationName: String
  jobTitle: String
  fullName: String
  text: String
}

export interface CallToAction {
  text: String
  email: String
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
