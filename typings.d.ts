type Technology = {
    imageSrc: string
}[]

type Project = {
    id: number
    slug: string
    title: string
    summary: string
    date: string
    images: string[]
    technologies: Technology
    linkToBuild: string
    linkToWebsite: string
    points: string[]
}

type Achievement = {
    imageSrc: string
    title: string
    description: string
    date: string
    endDate: string
    highlight: boolean
}

type Skill = {
    imageSrc: string
    tooltip: string
    preferredStack: boolean
}

type Experience = {
    imageSrc: string
    company: string
    title: string
    dateStarted: string
    dateEnded: string
    technologies: string[]
    points: string[]
}

type ResumeData = {
    company: string
    title: string
    logo: StaticImageData
    start: string
    end: string
}[]

interface Repo {
    id: string
    name: string
    url: string
    description: string
    owner: {
        login: string
    }
}

interface RepoResponseData {
    user: {
        pinnedItems: {
            nodes: Repo[]
        }
        starredRepositories: {
            nodes: Repo[]
        }
    }
}

type Headings = {
    title?: string
    subtitle?: string
    other?: string
}

type SocialLinkProps = {
    href: string
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    tooltip: string
    onClick?: () => void | {}
}

type Inputs = {
    name: string
    email: string
    message: string
}
