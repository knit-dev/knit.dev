export interface HeroContent {
  subtitle: String
  title: String
  text: String
  buttonText: String
  buttonEmail: String
  image: any
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
