import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        date: {
            type: "date",
            description: "The date of the post",
            required: true,
        },
        summary: {
            type: "string",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/projects/${doc._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: "./src/content",
    documentTypes: [Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted")
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"]
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
        ],
    },
})
