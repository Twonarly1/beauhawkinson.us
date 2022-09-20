import Link from "next/link"
import React from "react"
import Image from "next/image"
import { PageInfo } from "../../typings"
import { urlFor } from "../../sanity"
type Props = { pageInfo: PageInfo }

function Footer({ pageInfo }: Props) {
    return (
        <footer className="sticky bottom-5 z-50 w-full ">
            <Link href="#about">
                <div className="commonBordering relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border">
                    <Image
                        priority
                        className=" mx-auto cursor-pointer rounded-full grayscale filter hover:grayscale-0 "
                        src={urlFor(pageInfo.profilePic).url()}
                        alt="Portrait photo of me"
                        objectFit="cover"
                        layout="fill"
                        quality={100}
                    />
                </div>
            </Link>
        </footer>

        //       <div className="mt-32 p-4 text-center">
        //   © {new Date().getFullYear()} bhawkinson ·{' '}
        //   <a
        //     className="text-blue-500"
        //     href="https://github.com/Twonarly1/bhawkinson-twonarly1"
        //   >
        //     <code>code</code>
        //   </a>
        // </div>
    )
}

export default Footer
