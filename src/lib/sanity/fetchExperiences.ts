import { Experience } from "../../../typings"

const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const data = await res.json()
    const experiences: Experience[] = data.experiences

    return experiences
}

export default fetchExperiences
