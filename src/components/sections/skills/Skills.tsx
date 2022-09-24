import React, { useState } from "react"
import { Skill } from "../../../../typings"
import Heading from "../../Heading"
import IndividualSkill from "./IndividualSkill"
import { Switch } from "@headlessui/react"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}
type Props = {
    skills: Skill[]
}

const SkillsSection = ({ skills }: Props) => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-start px-6 pt-32">
            <Heading title={"Skills"} subtitle={" Tools I have experinece with."} />
            <Switch.Group as="div" className="flex items-center">
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                        enabled ? "bg-pink-400" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none "
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-400"
                        )}
                    />
                </Switch>
                <Switch.Label as="span" className="ml-3">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-400">
                        preffered stack
                    </span>
                </Switch.Label>
            </Switch.Group>
            <div className="mt-6 grid  grid-cols-4  gap-4 gap-y-6  transition-transform  duration-500 2xs:grid-cols-5 ">
                {skills
                    .map((skill, i: number) => {
                        if (skill.stack)
                            return (
                                <IndividualSkill
                                    enabled={enabled}
                                    key={i}
                                    individualSkill={skill}
                                />
                            )
                    })
                    .concat(
                        skills.map((skill: Skill, i: number) => {
                            if (!skill.stack)
                                return (
                                    <IndividualSkill
                                        enabled={enabled}
                                        key={i}
                                        individualSkill={skill}
                                    />
                                )
                        })
                    )}
            </div>
        </div>
    )
}

export default SkillsSection
