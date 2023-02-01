import { ArrowDownIcon, BriefcaseIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

import logoBendTech from "public/resume/bt.png"
import logoCH from "public/resume/ch.png"
import logoMuse from "public/resume/muse.webp"

function Resume() {
    let resume: ResumeData = [
        {
            company: "Chisago Hardware",
            title: "Freelance - Full Stack Web Developer",
            logo: logoCH,
            start: "2022",
            end: "Present",
        },
        {
            company: "Muse Dao",
            title: "Official Contributor - Frontend Developer",
            logo: logoMuse,
            start: "2022",
            end: "2022",
        },
        {
            company: "Bend-Tech",
            title: "Engineering Technician, Service Manager, Service Technician",
            logo: logoBendTech,
            start: "2020",
            end: "2022",
        },
        {
            company: "Bend-Tech",
            title: "Service Manager",
            logo: logoBendTech,
            start: "2019",
            end: "2020",
        },
        {
            company: "Bend-Tech",
            title: "Service Technician",
            logo: logoBendTech,
            start: "2018",
            end: "2019",
        },
    ]

    return (
        <section id="resume">
            <div className="container max-w-3xl">
                <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <BriefcaseIcon className="h-6 w-6 flex-none" />

                        <span className="ml-3">Work</span>
                    </h2>

                    <ol className="mt-6 space-y-4">
                        {resume.map((role, roleIndex) => (
                            <li key={roleIndex} className="flex gap-4">
                                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                    <Image
                                        src={role.logo}
                                        alt=""
                                        width={28}
                                        height={28}
                                        className="h-7 w-7 rounded-full"
                                        unoptimized
                                    />
                                </div>

                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                    <dt className="sr-only">Company</dt>

                                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {role.company}
                                    </dd>

                                    <dt className="sr-only">Role</dt>

                                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                        {role.title}
                                    </dd>

                                    <dt className="sr-only">Date</dt>

                                    <dd
                                        className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                        aria-label={`${role.start} until ${role.end}`}
                                    >
                                        <time dateTime={role.start ?? role.start}>
                                            {role.start}
                                        </time>

                                        <span aria-hidden="true">—</span>

                                        <time dateTime={role.end}>{role.end}</time>
                                    </dd>
                                </dl>
                            </li>
                        ))}
                    </ol>

                    <button className="group mx-auto mt-6 flex w-full items-center justify-center">
                        Download CV
                        <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Resume
