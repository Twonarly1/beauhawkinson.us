import { Achievement } from "../../../typings"

const fetchAchievements = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAchievements`)
    const data = await res.json()
    const achievements: Achievement[] = data.achievements

    return achievements
}

export default fetchAchievements
