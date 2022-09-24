/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React from "react"
import { urlFor } from "../../../../sanity"
import { Project } from "../../../../typings"
import { useInView } from "react-intersection-observer"

type Props = { project: Project }

const Article = ({ project }: Props) => {
    // toDo: change bkg opacity when article is inView.
    const { ref, inView } = useInView()

    return (
        <article
            ref={ref}
            className="relative flex w-[260px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-4 overflow-x-hidden overflow-y-scroll   rounded-lg  bg-gray-100 p-4 transition-opacity duration-200 scrollbar-thin dark:bg-white/5  md:w-[600px] xl:w-[600px] xs:w-[340px] 2xs:w-[540px]"
        >
            <p className="text-center text-xl font-bold uppercase xs:text-2xl">{project.title}</p>
            <img
                src={urlFor(project?.image).url()}
                alt=""
                className="h-40 rounded  object-cover sm:h-fit xs:h-fit 2xs:mt-2 2xs:h-60 "
            />
            <div className="p-2 scrollbar-hide xs:px-10">
                <div className="flex justify-center space-x-2 p-2">
                    {project.technologies.map((tech: any, i: number) => (
                        <div key={i} className="relative h-8 w-8 rounded-full ">
                            <Image
                                loading="lazy"
                                className="h-8 w-8 rounded xs:h-10 xs:w-10"
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
            <div className="h-full px-6">
                <ul className="list-disc space-y-4 text-lg xs:text-lg">
                    {project?.points.map((bullet: any, i: number) => (
                        <li className="" key={i}>
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>

            <a
                href={project.linkToBuild}
                className=" commonBordering relative bottom-0 left-0 mt-6 flex w-full items-center justify-center bg-pink-100 text-center hover:bg-pink-200 "
            >
                <p className="py-2 text-xl">Go to Build.</p>
            </a>
        </article>
    )
}

export default Article
