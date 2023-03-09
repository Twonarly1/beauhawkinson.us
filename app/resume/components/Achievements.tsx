"use client"

import clsx from "clsx"
import dayjs from "dayjs"
import Image from "next/image"
import { useState } from "react"

import achievementData from "lib/achievements"

import { config } from "lib"

import { Button, Stack, Text } from "core"

export function Achievements() {
    const [showMore, setShowMore] = useState(false)

    return (
        <Stack gap={8}>
            <Text size="lg">📜 Certifications / Achievements</Text>

            {achievementData
                .filter((a) => showMore || a.highlight)
                .map((a, i) => (
                    <div
                        key={i}
                        className="group items-center rounded-lg border border-neutral-100 bg-neutral-100 p-5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 sm:flex sm:flex-row sm:space-x-4"
                    >
                        <Image src={a.imageSrc} alt={a.title} height={60} width={60} />

                        <div className="mt-4 flex w-full flex-1 flex-col sm:mt-0">
                            <Text weight="bold" size="sm">
                                {a.title}
                            </Text>

                            <Text size="base">{a.description}</Text>
                        </div>

                        <div className="mt-4 flex items-end justify-end sm:mt-0">
                            <Timestamp
                                className="pl-2 dark:text-white sm:border-l"
                                date={new Date(a.date)}
                                endDate={new Date(a.endDate)}
                            />
                        </div>
                    </div>
                ))}

            <Button onClick={() => setShowMore(!showMore)} size="sm" variant="showMore">
                {showMore ? "Show less ↑" : "Show more ↓"}
            </Button>
        </Stack>
    )
}

function Timestamp({ date, endDate, className }: TimestampProps) {
    const day = dayjs(date)
    const current = endDate && dayjs().isBefore(endDate)
    const endDay = dayjs(current ? new Date() : endDate)

    const hasEndDate = endDate && endDay.isValid()

    const age = day.diff(config.birthday, "year")

    const relevantDate = hasEndDate ? endDay : day
    const info = hasEndDate ? endDay.diff(day, "month") : age
    const suffix = hasEndDate ? "months" : "y/o"

    return (
        <div
            className={clsx(
                "group relative flex h-6 w-20 cursor-default items-center py-6 md:w-24",
                className,
            )}
        >
            <div
                className={clsx(
                    "absolute -translate-y-8 transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-200 ease-in-out",
                )}
            >
                <span>{info}</span>

                <span className="ml-1">{suffix}</span>
            </div>

            <br />

            <div
                className={clsx(
                    "absolute transform group-hover:translate-y-8",
                    "opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-0",
                )}
            >
                <span>{current ? "Now" : relevantDate.format("MMM")}</span>

                <span className="ml-1 transform group-hover:translate-x-3">
                    {!current && relevantDate.format("YYYY")}
                </span>
            </div>
        </div>
    )
}
