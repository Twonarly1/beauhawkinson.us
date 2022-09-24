import React from "react"
import { Achievement } from "../../../../typings"
import Heading from "../../Heading"
import Card from "./Card"

type Props = {
    achievements: Achievement[]
}

const Achievements = ({ achievements }: Props) => {
    return (
        <div className="relative mx-auto flex min-h-screen  w-full  flex-col items-center justify-start px-6 pt-32">
            <Heading title={"Achievements"} subtitle={"Click card to view details"} />
            <div className="z-10 mx-auto mt-12 grid  grid-cols-1 gap-6 gap-y-20 sm:grid-cols-2">
                {achievements
                    .map((achievement, i: number) => {
                        if (achievement.title.includes("Apollo"))
                            return <Card achievement={achievement} key={i} />
                    })
                    .concat(
                        achievements.map((achievement, i: number) => {
                            if (achievement.title.includes("Basics"))
                                return <Card achievement={achievement} key={i} />
                        })
                    )}
            </div>
            <div className="absolute top-[25%] left-0 h-[1200px] w-full -skew-y-12 bg-pink-200/10 dark:bg-white/10 2xs:h-[600px]" />
        </div>
    )
}

export default Achievements
