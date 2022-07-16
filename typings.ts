export interface ResumeData {
  main: {
    image: string
    skills: Skill[]
    certificates: Certificate[]
    testimonials: object[]
  }
  portfolio: {
    title: string
    description: string
    image: string
    url: string
    skills: ProjectSkill[]
  }
}

export type Certificate = {
  name: string
  src: string
  url: string
  date: Date
  description: string
}

export type Skill = {
  name: string
  src: string
  url: string
  stack?: boolean
  image: string
}
export type ProjectSkill = {
  image: string
  name: string
}

export interface Portfolio {
  projects: [Project]
}

export interface Items {
  description: string
  id: string
  name: string
  openGraphImageUrl: string
  owner: string
  pushedAt: string
  repositoryTopics: Nodes[]
  stargazerCount: number
  updatedAt: string
  url: string
  __typename: 'Repository'
}

export type Nodes = {
  id: string
  nodes: Node[]
}

export type Node = {
  id: string
  name: string
  __typename: 'Topic'
}

export interface Portfolio {
  title: string
  description: string
  category: string
  image: string
  url: string
}

export type ProjectType = 'design' | 'code' | 'video'

export interface Project {
  id: string
  preview: string
  title: string
  types: ProjectType[]
  image: string
  tags: string[]
  slug: string
  date: number
  published: boolean
}

export interface Repo {
  id: string
  name: string
  url: string
  description: string
  owner: {
    login: string
  }
  openGraphImageUrl: string
  pushedAt: string
  updatedAt: string
}

// We could use GraphQL Codegen here, but not worth the effort right now
export interface RepoResponseData {
  user: {
    repositoriesContributedTo: {
      nodes: Repo[]
    }
    starredRepositories: {
      nodes: Repo[]
    }
  }
}
