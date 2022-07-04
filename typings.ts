export type Address = {
  street: string
  city: string
  state: string
  zip: string
}

export interface Main {
  address: Address[]
  bio: any
  contactmessage: string
  description: string
  email: string
  image: string
  name: string
  occupation: string
  phone: string
  resumedownload: string
}

export type ProjectType = 'design' | 'code' | 'video'

export interface Project {
  id: string
  preview: string
  title: string
  types: ProjectType[]
  images: {
    name: string
    url: string
  }[]
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
    // starredRepositories: {
    //   nodes: Repo[]
    // }
  }
}

export type AchievementType = 'award' | 'work' | 'education' | 'security'

export interface Achievement {
  id: string
  highlight: boolean
  type: AchievementType
  date: number
  endDate: number
  title: string
  //   blockMap: BlockMapType
}
