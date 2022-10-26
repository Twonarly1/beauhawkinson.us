import React from "react"
import Image from "next/image"
import { Image as sanityImage } from "typings"
import { urlFor } from "sanity"

type Props = {
    heroImage: sanityImage
}

const HeroImage = ({ heroImage }: Props) => {
    return (
        <div className="relative mt-12 flex justify-center rounded-full pb-6">
            <Image
                priority
                className="rounded-full"
                src={urlFor(heroImage).url()}
                alt="Portrait photo of me"
                height={254}
                width={254}
                quality={100}
            />
        </div>
    )
}

export default HeroImage
