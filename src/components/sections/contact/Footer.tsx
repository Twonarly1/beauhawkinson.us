import Link from "next/link"
import React from "react"
import Image from "next/image"
import { PageInfo } from "../../../../typings"
import { urlFor } from "../../../../sanity"

function Footer() {
    return (
        <footer className="relative z-50 mx-auto w-full pt-12 ">
            <div className="mt-32 p-4 text-center">
                © {new Date().getFullYear()} bhawkinson ·{" "}
                <a
                    className="text-pink-200 hover:text-pink-300 hover:underline"
                    href="https://github.com/Twonarly1/bhawkinson-twonarly1"
                >
                    <code>code</code>
                </a>
            </div>
            {/* <Link href="#about">
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
            </Link> */}
        </footer>
    )
}

export default Footer
