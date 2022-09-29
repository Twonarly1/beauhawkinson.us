interface SanityBody {
    _createdAt: string
    id: string
    rev: string
    updatedAt: string
}

interface Image {
    _type: "image"
    asset: {
        _ref: string
        _type: "reference"
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo"
    address: string
    backgroundInformation: string
    email: string
    role: string
    heroImage: Image
    name: string
    phoneNumber: string
    profilePic: Image
}

export interface Technology extends SanityBody {
    _type: "skill"
    image: Image
    progress: number
    title: string
}

export interface Skill extends SanityBody {
    _type: "skill"
    image: Image
    progress: number
    title: string
    stack: boolean
}

export interface Project extends SanityBody {
    id: number
    title: string
    date: string
    _type: "project"
    image: Image
    secondImage?: Image
    thirdImage?: Image
    fourthImage?: Image
    fifthImage?: Image
    linkToBuild: string
    linkToWebsite: string
    summary: string
    technologies: Technology[]
    points: string[]
}

export interface Experience extends SanityBody {
    _type: "experience"
    company: string
    companyImage: Image
    secondaryImage: Image
    dateStarted: date
    dateEnded: date
    isCurrentlyWorkingHere: boolean
    jobTitle: string
    points: string[]
    technologies: Technology[]
}

export interface Social extends SanityBody {
    image: Image
    _type: "social"
    title: string
    url: string
}

export interface Achievement extends SanityBody {
    _type: "Achievement"
    title: string
    url: string
    dateEarned: date
    image: Image
    summary: string
}
