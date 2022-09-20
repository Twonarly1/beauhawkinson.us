import Image from "next/image"
import React from "react"
import { urlFor } from "../../../sanity"
import { Skill } from "../../../typings"
import Heading from "../Heading"

export function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(" ")
}

type Props = {
    skills: Skill[]
}

const Skills = ({ skills }: Props) => {
    return (
        <div className="relative mx-auto flex h-screen w-full max-w-5xl flex-col items-center justify-start px-6 pt-32">
            <Heading
                title={"Skills"}
                subtitle={" Tools I have experinece with."}
                other={"* preferred stack"}
            />
            <div className="relative w-full max-w-lg">
                <div className="blobAnimation top-32 -left-4 bg-purple-300 dark:bg-purple-200"></div>
                <div className="animation-delay-2000 blobAnimation top-32 -right-4 bg-yellow-300 dark:bg-yellow-200"></div>
                <div className="animation-delay-4000 blobAnimation top-48 left-20 bg-pink-300 dark:bg-red-200"></div>
                <div className="relative  z-10 space-y-4">
                    <div className="mx-auto mt-12 grid max-w-xs grid-cols-3 gap-6  transition-transform duration-500 2xs:max-w-md 2xs:grid-cols-4 ">
                        {skills
                            .map((skill: Skill, index: number) => {
                                if (skill.stack)
                                    return (
                                        <a
                                            key={index}
                                            className={`commonBordering  group relative mx-auto p-4 dark:bg-slate-800 ${
                                                skill.stack
                                                    ? "border-pink-300 hover:border-pink-400 dark:border-pink-300 dark:hover:border-pink-400 dark:hover:shadow-pink-400"
                                                    : "commonBordering"
                                            }`}
                                        >
                                            <div className="group-hover:grayscale-100 relative mx-auto h-10 w-10 opacity-100 grayscale-0 group-hover:opacity-20">
                                                <Image
                                                    src={urlFor(skill?.image).url()}
                                                    alt={skill.title}
                                                    objectFit="contain"
                                                    layout="fill"
                                                    className=""
                                                />
                                            </div>
                                            <p className="pointer-events-none absolute -left-0 -bottom-6  mx-auto w-full justify-center text-center text-sm opacity-0 transition group-hover:opacity-100">
                                                {skill.title}
                                            </p>
                                        </a>
                                    )
                            })
                            .concat(
                                skills.map((skill: Skill, index: number) => {
                                    if (!skill.stack)
                                        return (
                                            <a
                                                key={index}
                                                className={`commonBordering  group relative mx-auto p-4 dark:bg-slate-800 ${
                                                    skill.stack
                                                        ? "border-pink-300 hover:border-pink-400 dark:border-pink-300 dark:hover:border-pink-400 dark:hover:shadow-pink-400"
                                                        : "commonBordering"
                                                }`}
                                            >
                                                <div className="group-hover:grayscale-100 relative mx-auto h-10 w-10 opacity-100 grayscale-0 group-hover:opacity-20">
                                                    <Image
                                                        src={urlFor(skill?.image).url()}
                                                        alt={skill.title}
                                                        objectFit="contain"
                                                        layout="fill"
                                                        className=""
                                                    />
                                                </div>
                                                <p className="pointer-events-none absolute -left-0 -bottom-6  mx-auto w-full justify-center text-center text-sm opacity-0 transition group-hover:opacity-100">
                                                    {skill.title}
                                                </p>
                                            </a>
                                        )
                                })
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
