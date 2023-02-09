"use client"
import Image from "next/image"
import Link from "next/link"
import { ComponentType, ReactNode } from "react"

import { Stack } from "~/core"

// import { LogoLink } from "~/marketing/client-logos";

type Props = {
    children: ReactNode | ReactNode[]
    logo?: ComponentType<{ className: string }>
    website: string
    src: string
    alt: string
}

export function CompanyRoot({ children, logo, website, src, alt }: Props) {
    // const Logo = logo

    return (
        <Stack alignItems="start" gap={2}>
            <Link href={website}>
                <Image src={src} alt={alt} height={100} width={100} className="rounded-full" />
            </Link>

            <Stack gap={4}>{children}</Stack>
        </Stack>
    )
}
