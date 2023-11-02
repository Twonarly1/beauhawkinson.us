import app from "lib/config/app"
import Image from "next/image"
import { SOCIAL_LINKS } from "lib/data"
import { compareDesc, format, parseISO } from "date-fns"
import { allProjects, Project } from "../../.contentlayer/generated"
import { Link } from "components/core"

import type { Icon } from "components/icons"

const HomePage = async () => {
    const projects: Project[] = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date)),
    )
    return (
        <div className="flex flex-col gap-16 py-24">
            <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-5xl font-bold">{app.name}</h1>
                    <h2 className="text-xl">{app.description}</h2>
                    <div className="flex items-center justify-center">
                        {SOCIAL_LINKS.map((item) => {
                            const Icon = item.icon as Icon
                            return (
                                <Link key={item.href} href={item.href}>
                                    <Icon className="h-8 w-8 opacity-50 transition-all duration-300 hover:text-pink-500 hover:opacity-100" />
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <Image
                    src={app.avatar}
                    alt={app.name}
                    height={260}
                    width={260}
                    quality={100}
                    className="rounded-lg shadow-xl"
                />
            </div>
            <section className="py-8">
                <h1 className="mb-8 text-3xl font-bold">Projects</h1>
                <div className="grid gap-4 md:grid-cols-2">
                    {projects.map((project, idx) => (
                        <Link href={project.url} key={idx} variant="outline">
                            <div className="p-2">
                                <h2 className="text-xl">{project.title}</h2>
                                <time
                                    dateTime={project.date}
                                    className="mb-2 block text-xs text-gray-600"
                                >
                                    {format(
                                        parseISO(project.date),
                                        "LLLL d, yyyy",
                                    )}
                                </time>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage
