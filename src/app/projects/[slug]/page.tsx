import { Mdx } from "components/ui"
import { format, parseISO } from "date-fns"
import { allProjects } from "../../../../.contentlayer/generated"

export const generateStaticParams = async () =>
    allProjects.map((project) => ({ slug: project._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === params.slug,
    )
    return { title: project.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === params.slug,
    )

    return (
        <article className="mx-auto max-w-xl py-8">
            <div className="mb-8 text-center">
                <time
                    dateTime={project.date}
                    className="mb-1 text-xs text-gray-600"
                >
                    {format(parseISO(project.date), "LLLL d, yyyy")}
                </time>
                <h1>{project.title}</h1>
            </div>
            <Mdx code={project.body.code} />
        </article>
    )
}

export default PostLayout
