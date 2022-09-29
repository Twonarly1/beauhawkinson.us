import React from "react"
import { urlFor } from "../../../../sanity"
import Image from "next/image"
import { Image as sanityImage } from "../../../../typings"

type Props = {
    heroImage: sanityImage
}

const HeroImage = ({ heroImage }: Props) => {
    return (
        <div className="relative flex justify-center rounded-full pb-6 pt-12">
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
