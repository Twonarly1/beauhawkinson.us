import { Heading, Link } from "components/core"
import app from "lib/config/app"
import Image from "next/image"

const HomePage = async () => {
    // function ColoredText() {
    //     const text = "NFTs"
    //     const colorMap: any = {
    //         N: "purple",
    //         F: "red",
    //         T: "orange",
    //         s: "green",
    //     }

    //     return (
    //         <p>
    //             {text.split("").map((char, index) => (
    //                 <span key={index} style={{ color: colorMap[char] }}>
    //                     {char}
    //                 </span>
    //             ))}
    //         </p>
    //     )
    // }
    return (
        <div className="flex flex-col gap-8">
            <Image src={app.avatar} alt={app.name} height={92} width={92} quality={100} />
            <Heading as="h2">{app.name}</Heading>
            {/* <div className="flex items-center gap-2">
                {navLinks.map((link, idx) => {
                    const Icon = link.icon
                    return (
                        <Link isExternal key={idx} href={link.href}>
                            <Icon className="mr-2 h-6 w-6" />
                            <p className="group-hover:underline">
                                {link.name !== "NFTs" ? link.name : ColoredText()}
                            </p>
                        </Link>
                    )
                })}
            </div> */}
            <p>Software Engineer</p>
        </div>
    )
}

export default HomePage
