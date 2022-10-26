import React from "react"
import { Heading } from "src/components/core"
import { Achievement } from "typings"
import Card from "./Card"

type Props = {
    achievements: Achievement[]
}

const Achievements = ({ achievements }: Props) => {
    return (
        <div className="relative mx-auto flex min-h-screen  max-w-5xl  flex-col items-center justify-start px-6 py-60">
            <Heading title={"Achievements"} subtitle={"Click card to view details"} />
            <div className="z-10 mx-auto mt-12 grid grid-cols-2 gap-6 gap-y-8  sm:grid-cols-2">
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
            {/* <div className="absolute top-[25%] left-0 z-0 h-[1800px] w-full -skew-y-12 bg-pink-200/10 dark:bg-white/10 2xs:h-[850px]" /> */}
        </div>
    )
}

export default Achievements
