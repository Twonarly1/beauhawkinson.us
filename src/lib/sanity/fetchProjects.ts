import { Project } from "../../../typings"

const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const data = await res.json()
    const projects: Project[] = data.projects

    return projects
}

export default fetchProjects
