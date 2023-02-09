import { GITHUB_TOKEN } from "lib/env"

const githubToken = `${GITHUB_TOKEN}`

if (!githubToken) {
    throw new Error("Missing environment variable GITHUB_TOKEN.")
}

export const config = {
    name: "Beau Hawkinson",
    subtitle: "Code · Design",
    birthday: "1994-04-07",
    githubUsername: "Twonarly1",
    githubToken,
}
