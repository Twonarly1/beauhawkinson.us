/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { urlFor } from "../../../../sanity"
import { Project } from "../../../../typings"

type Props = { project: Project; id: number }

const Article = ({ project, id }: Props) => {
    return (
        <a
            href={"/" + project.id}
            className="group cursor-default rounded-2xl p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:hover:from-gray-600 dark:hover:to-slate-800"
        >
            <div className="relative flex w-full flex-shrink-0  flex-col rounded-2xl  ">
                <div className="w-full space-y-2">
                    <b className="text-left text-lg text-black/80  dark:text-white/80 xs:text-xl">
                        {project.title}
                    </b>
                    <div className="mx-auto flex h-fit w-full flex-wrap items-center gap-y-2 text-left text-sm tracking-wide text-gray-400 xs:text-lg ">
                        {project.summary}
                    </div>
                    <p className="text-xs">{project.date}</p>
                    <div className="hidden justify-end space-x-2 pt-2 xs:flex xs:pt-0">
                        {project.technologies.map((tech: any, i: number) => (
                            <div
                                key={i}
                                className="relative h-6 w-6 rounded-full bg-white dark:bg-primary-dark"
                            >
                                <Image
                                    loading="lazy"
                                    className="h-6 w-6 rounded-full opacity-10 grayscale group-hover:opacity-100 group-hover:grayscale-0 dark:opacity-80"
                                    src={urlFor(tech?.image).url()}
                                    alt="Portrait photo of me"
                                    quality={100}
                                    objectFit="contain"
                                    layout="fill"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Article
