"use client"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { format, formatDistance } from "date-fns"
import { Text } from "core"

export function CompanyRoot({ endDate, location, startDate, title, website, src, alt }: Company) {
    const tenureString = useMemo(() => {
        const start = new Date(startDate)
        const end = endDate ? new Date(endDate) : new Date()

        return `${format(start, "MMM yyyy")} - ${
            endDate ? format(end, "MMM yyyy") : "Present"
        } · ${formatDistance(start, end)}`
    }, [endDate, startDate])
    return (
        <Link
            className="flex w-full flex-1 items-center space-x-4 rounded-lg border border-neutral-100 bg-neutral-100 p-5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
            href={website}
        >
            <>
                <Image src={src} alt={alt} height={80} width={80} />

                <div className="flex w-full flex-1 flex-col">
                    <Text weight="bold" size="sm">
                        {title}
                    </Text>
                    <Text size="base">{tenureString}</Text>
                    <Text size="base">{location}</Text>
                </div>
            </>
        </Link>
    )
}
