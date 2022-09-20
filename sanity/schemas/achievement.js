export default {
    name: "achievement",
    title: "Achievement",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "url",
            title: "Url",
            type: "url",
        },
        {
            name: "dateEarned",
            title: "DateEarned",
            type: "date",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
        },
    ],
}
