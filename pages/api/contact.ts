import type { NextRequest } from "next/server"
import { z } from "zod"

import { GOOGLE_SHEET_KEY, NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT } from "lib/env"

export const config = {
    runtime: "edge",
}

export default async function handler(request: NextRequest) {
    if (request.method !== "POST") {
        return new Response(JSON.stringify({ data: "Method not allowed" }), {
            status: 400,
        })
    }

    const formData = await request.formData()

    const schema = z.object({
        Email: z.string().email(),
        PhoneNumber: z.string(),
        Message: z.string().max(496).min(3),
    })

    const result = schema.safeParse(Object.fromEntries(formData))

    console.log(result)

    if (result.success) {
        await fetch(`${NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT}/macros/s/${GOOGLE_SHEET_KEY}/exec`, {
            method: "POST",
            body: formData,
        })

        return new Response(JSON.stringify({ data: result.data }), {
            status: 200,
        })
    }
}
