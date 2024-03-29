"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

import skillsData from "lib/skills"

import { CoreTooltip, Grid, Heading, Stack } from "core"

export function SkillsSection() {
    const [enabled, setEnabled] = useState(true)

    return (
        <Stack gap={8} alignItems="center">
            <Heading as="h3">
                {enabled ? "Preferred stack" : "Tools I have experinece with."}
            </Heading>

            <button
                onClick={() => setEnabled(!enabled)}
                className={clsx(
                    enabled ? "bg-pink-400 dark:bg-pink-200" : "bg-gray-200",
                    "relative inline-flex h-9 w-16 flex-shrink-0 items-center rounded-full border transition-colors duration-200 ease-in-out",
                )}
            >
                <span
                    aria-hidden="true"
                    className={clsx(
                        enabled ? "translate-x-8" : "translate-x-0.5",
                        "pointer-events-none inline-block h-7 w-7 transform rounded-full border bg-white transition duration-200 ease-in-out dark:bg-gray-400",
                    )}
                />
            </button>

            <Grid columns={{ base: 4, lg: 8 }} gap={4}>
                {skillsData
                    .map((skill) => {
                        if (skill.preferredStack)
                            return (
                                <CoreTooltip key={skill.tooltip} content={skill.tooltip}>
                                    <Image
                                        src={skill.imageSrc}
                                        alt={skill.tooltip}
                                        width={56}
                                        height={56}
                                        className={`m-auto p-1 ${
                                            enabled &&
                                            !skill.preferredStack &&
                                            "sm:opacity-20 sm:grayscale"
                                        }`}
                                    />
                                </CoreTooltip>
                            )
                    })
                    .concat(
                        skillsData.map((skill) => {
                            if (!skill.preferredStack)
                                return (
                                    <CoreTooltip key={skill.tooltip} content={skill.tooltip}>
                                        <Image
                                            src={skill.imageSrc}
                                            alt={skill.tooltip}
                                            width={56}
                                            height={56}
                                            className={`m-auto p-1 ${
                                                enabled &&
                                                !skill.preferredStack &&
                                                "sm:opacity-20 sm:grayscale sm:hover:opacity-100 sm:hover:grayscale-0"
                                            }`}
                                        />
                                    </CoreTooltip>
                                )
                        }),
                    )}
            </Grid>
        </Stack>
    )
}
