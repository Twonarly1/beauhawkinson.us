export type Certificate = {
  name: string
  src: string
  url: string
  date: string
  description: string
}

export interface Repo {
  description: string
  id: string
  name: string
  openGraphImageUrl: string
  url: string
  owner: {
    login: string
  }
  pushedAt: string
  updatedAt: string
  user: object[]
  stargazerCount: number
  repositoryTopics: object[]
  __typename: 'Repository'
  randomColor: boolean
}

export type Skill = {
  name: string
  src: string
  url: string
  stack?: boolean
}

// export type ProjectType = 'design' | 'code' | 'video'
