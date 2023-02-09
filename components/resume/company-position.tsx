"use client"
import { format, formatDistance } from "date-fns"
import { useMemo } from "react"

import { Heading } from "~/core"

type Props = {
    endDate?: string
    location: string
    startDate: string
    title: string
}

export function CompanyPosition({ endDate, location, startDate, title }: Props) {
    const tenureString = useMemo(() => {
        const start = new Date(startDate)
        const end = endDate ? new Date(endDate) : new Date()

        return `${format(start, "MMM yyyy")} - ${
            endDate ? format(end, "MMM yyyy") : "Present"
        } · ${formatDistance(start, end)}`
    }, [endDate, startDate])

    return (
        <div>
            <Heading as="h2">{title}</Heading>

            <p className="">{tenureString}</p>

            <p className="">{location}</p>
        </div>
    )
}
