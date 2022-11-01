import React from "react"
import Image from "next/image"
import { Image as sanityImage } from "typings"
import { urlFor } from "sanity"

type Props = {
    heroImage: sanityImage
}

const HeroImage = ({ heroImage }: Props) => {
    return (
        <div className="relative mx-auto mt-12 flex w-fit justify-center rounded-full bg-gray-100 px-1 py-1 ">
            <Image
                priority
                className="rounded-full "
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
