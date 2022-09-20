// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { Achievement } from "../../../typings"
import { sanityClient } from "../../../sanity"

const query = groq`
*[_type == "achievement"]
`

type Data = {
    achievements: Achievement[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const achievements: Achievement[] = await sanityClient.fetch(query)

    res.status(200).json({ achievements })
}
