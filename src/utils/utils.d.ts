export interface Projects {
  id: number
  title: string
  subtitle: {
    en: string
    es: string
  }
  extra?: string
  images: Image
  video?: string
  github: string
  url: string
  description: {
    en: string
    es: string
  }
  technologies: Technologies[]
}
export type Image = {
  cover: string
  secondImage?: string
  thirdImage?: string
  fourthImage?: string
  fifthImage?: string
  sixthImage?: string
}

export type Technologies = {
  name: string
  svg: string
}

export type Contact = {
  name: string
  svg: string
  text: {
    en: string
    es: string
  }
  link: string
}

export type About = {
  about1: {
    en: string
    es: string
  }
  about2?: {
    en: string
    es: string
  }
  about3?: {
    en: string
    es: string
  }
  about4?: {
    en: string
    es: string
  }
  about5?: {
    en: string
    es: string
  }
  about6?: {
    en: string
    es: string
  }
  about7?: {
    en: string
    es: string
  }
  about8?: {
    en: string
    es: string
  }
  about9?: {
    en: string
    es: string
  }
  about10?: {
    en: string
    es: string
  }
}

export interface Experience {
  title: string
  company: string
  timeframe: {
    en: string
    es: string
  }
  image: Image
  description: {
    en: string
    es: string
  }
  about: About[]
  technologies: Technologies[]
}

export interface Contents {
  title: {
    en: string
    es: string
  }
}

export interface Certificates {
  title: {
    en: string
    es: string
  }
  institution: string
  images: Image
  contents: Contents[]
  url?: string
}
