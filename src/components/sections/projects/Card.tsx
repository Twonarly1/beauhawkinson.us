/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React from "react"
import { urlFor } from "../../../../sanity"
import { Project } from "../../../../typings"
import { useInView } from "react-intersection-observer"

type Props = { project: Project }

function Card({ project }: Props) {
    const { ref, inView } = useInView()
    console.log(inView, project.title)

    return (
        <article
            ref={ref}
            className={`relative flex w-[260px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-4 overflow-x-hidden overflow-y-scroll   rounded-lg bg-gray-100 py-4 px-4  transition-opacity duration-200 scrollbar-thin  md:w-[600px] xl:w-[600px] xs:w-[340px] 2xs:w-[540px] ${
                project.title && inView ? "opacity-100" : "opacity-40"
            } `}
        >
            <img
                src={urlFor(project?.image).url()}
                alt=""
                className="h-40 w-fit rounded object-cover sm:h-80 xs:h-fit 2xs:mt-2 2xs:h-60 "
            />
            <div className=" px-4 pb-12 scrollbar-hide xs:px-10">
                <p className="text-center text-xl font-bold uppercase xs:text-2xl">
                    {project.title}
                </p>
                <div className="my-4 flex justify-center space-x-2">
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
                <ul className="ml-5 list-disc space-y-4 text-lg xs:text-lg">
                    {project?.points.map((bullet: any, i: number) => (
                        <li key={i}>{bullet}</li>
                    ))}

                    <a
                        href={project.linkToBuild}
                        className="  relative bottom-0 left-0 flex w-full items-center justify-center bg-pink-100  text-center hover:bg-pink-200 "
                    >
                        <p className="py-2 text-xl">Go to Build.</p>
                    </a>
                </ul>
            </div>
        </article>
    )
}

export default Card
