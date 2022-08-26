/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import { StarIcon } from "@heroicons/react/outline"
import { Repo } from "../../../typings"
import Heading from "../Heading"

type Props = {
    pinnedItems: Repo[]
}

const Pinned = ({ pinnedItems }: Props) => {
    console.log(pinnedItems)
    return (
        <div className="section mt-12">
            <Heading title={"Projects"} subtitle={"My Pinned Repos"} />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pinnedItems.map((item: Repo, index: number) => (
                    <div
                        key={index}
                        className="commonBordering relative flex items-center gap-x-4 px-6 py-5 dark:bg-slate-800"
                    >
                        <div className="absolute top-1 right-2 mx-auto w-fit justify-between">
                            {item.stargazerCount > 0 && (
                                <p className="flex items-center">
                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm dark:text-gray-400">
                                        {item.stargazerCount}
                                    </span>
                                </p>
                            )}
                        </div>
                        <img
                            src={item.openGraphImageUrl}
                            alt={item.name}
                            className="h-10 w-10 rounded-full sm:h-20 sm:w-20 "
                        />
                        <a href={item.url} className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="offColorHeading text-sm font-medium">{item.name}</p>
                            <p className="text-sm">{item.description}</p>
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex cursor-default flex-col items-center justify-center py-4 text-center">
                <div className="text-gray-900 dark:text-gray-100">Explore more of my work</div>
                <Link href="/projects">
                    <a className="commonBordering offColorHeading mt-2 py-1 px-6 dark:bg-slate-800 ">
                        View all
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Pinned
