export interface ResumeData {
  main: Main[]
  portfolio: Portfolio[]
}

export interface Main {
  image: string
  certificates: [Certificate]
  skills: [Skill]
}

export type Certificate = {
  name: string
  src: string
  url: string
}

export type Skill = {
  name: string
  src: string
  url: string
}

export interface Portfolio {
  projects: [Project]
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
  image: {
    id: number
    image: any
  }
  description: string
  owner: {
    login: string
  }
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
