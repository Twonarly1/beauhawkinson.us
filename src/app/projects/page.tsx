import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allProjects, Project } from "../../../.contentlayer/generated"

const ProjectsPage = () => {
    const projects: Project[] = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date)),
    )

    return (
        <section className="mx-auto max-w-xl py-8">
            <h1 className="mb-8 text-center text-3xl font-bold">Projects</h1>
            <div className="flex flex-col gap-4">
                {projects.map((project, idx) => (
                    <div key={idx} className="mb-8 flex flex-col gap-2">
                        <h2 className="text-xl">
                            <Link href={project.url} className="">
                                {project.title}
                            </Link>
                        </h2>
                        <time
                            dateTime={project.date}
                            className="mb-2 block text-xs text-gray-600"
                        >
                            {format(parseISO(project.date), "LLLL d, yyyy")}
                        </time>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsPage
