export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "id",
            title: "Id",
            type: "number",
        },
        {
            name: "title",
            title: "Title",
            description: "Title of the project",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "secondImage",
            title: "SecondImage",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "thirdImage",
            title: "ThirdImage",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "fourthImage",
            title: "FourthImage",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "fifthImage",
            title: "FifthImage",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        },
        {
            name: "linkToBuild",
            title: "LinkToBuild",
            type: "url",
        },
        {
            name: "linkToWebsite",
            title: "LinkToWebsite",
            type: "url",
        },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
}
