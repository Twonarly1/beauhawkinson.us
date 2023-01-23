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
