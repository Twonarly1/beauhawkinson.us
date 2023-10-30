"use client"
import Image from "next/image"
import { useState } from "react"

import { CaretDown } from "core/icon/caret-down"
import { CoreTooltip } from "core/tooltip"
import skillsData from "lib/skills"
import { motion } from "framer-motion"

export function SkillsCarousel() {
    const [index, setIndex] = useState<number>(1)
    const [direction, setDirection] = useState<"left" | "right">("left")
    let divisible: number = 6

    function nextSlide() {
        setIndex(index + 1)
        setDirection("right")
    }

    function previousSlide() {
        setIndex(index - 1)
        setDirection("left")
    }

    return (
        <div className="relative mx-auto hidden items-center space-x-6 overflow-hidden rounded-lg border border-neutral-100 bg-neutral-100 p-5 dark:border-neutral-700 dark:bg-neutral-900 sm:flex">
            <button disabled={index === 1} onClick={previousSlide}>
                <CaretDown className="h-6 w-6 rotate-90 rounded-full bg-neutral-200 p-1 text-black dark:bg-neutral-400" />
            </button>

            {skillsData.slice((index - 1) * divisible, divisible * index).map((skill) => (
                <CoreTooltip key={skill.tooltip} content={skill.tooltip}>
                    <motion.div
                        initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                        transition={{ ease: "easeOut", duration: 0.75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        <Image
                            src={skill.imageSrc}
                            alt={skill.tooltip}
                            width={36}
                            height={36}
                            className="h-[36px] w-[36px]"
                        />
                    </motion.div>
                </CoreTooltip>
            ))}

            <button disabled={index === 5} onClick={nextSlide}>
                <CaretDown className="h-6 w-6 -rotate-90 rounded-full bg-neutral-200 p-1 text-black dark:bg-neutral-400" />
            </button>
        </div>
    )
}
