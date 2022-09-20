import { createClient } from "next-sanity"
import createImageUrlBuild from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}

//set up the client for fetching fata in the getProps page functions
export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuild(config).image(source)
