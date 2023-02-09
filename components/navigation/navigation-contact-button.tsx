"use client"

import { useScroll } from "framer-motion"
import { useEffect, useState } from "react"

import { ContactFormDialog } from "~/contact-form"
import { Button } from "~/core"
import { PaperPlaneTilt } from "~/core/icon"

export function NavigationContactButton() {
    const { scrollYProgress } = useScroll()
    const [isHalfwayPage, setIsHalfwayPage] = useState(false)

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            if (latest > 0.25) {
                setIsHalfwayPage(true)
            }
        })
    }, [scrollYProgress])

    return (
        <ContactFormDialog>
            <Button
                iconLeft={PaperPlaneTilt}
                size="sm"
                variant={isHalfwayPage ? "solid" : "outline"}
            >
                Contact
            </Button>
        </ContactFormDialog>
    )
}
