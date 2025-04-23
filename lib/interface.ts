export interface Portfolio {
  categories: SkillCategory[]
  social_handle: SocialHandle[]
  about: About
  services: Service[]
  features: Feature[]
  projects: Project[]
  skills: Skill[]
}

export interface SkillCategory {
  icon: string
  name: string
  skills: string[]
}

export interface SocialHandle {
  platform: string
  url: string
  icon: string
}

export interface About {
  name: string
  title: string
  subtitle: string
  description: string
  badge: string
  heroImage: Image
  avatar: Avatar
}

export interface Service {
  title: string
  description: string
}

export interface Image {
  url: string
}

export interface Avatar {
  url: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Project {
  title: string
  description: string
  imageUrl: string
  category: string
  badge: string[]
  href: string
  githuburl: string
}

export interface Skill {
  name: string
  enabled: boolean
}
