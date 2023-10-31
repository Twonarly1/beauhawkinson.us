"use client"
import {
    Dialog,
    DialogBackdrop,
    DialogCloseTrigger,
    DialogContainer,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
    Portal,
} from "@ark-ui/react"
import { clsx } from "clsx"

import Button from "../button/button"
import { X } from "components/icon"

import type { DialogProps } from "@ark-ui/react"
import type { ReactNode } from "react"

type Variant = "default" | "trailSystem" | "blogNav"

interface Props extends DialogProps {
    title?: ReactNode
    children: ReactNode
    trigger: ReactNode
    description?: string
    variant?: Variant
}

/**
 * Core Drawer component.
 */
const Drawer = ({ title, children, trigger, description, variant = "default", ...rest }: Props) => {
    const baseContentClasses =
        "fixed left-0 top-0 z-50 h-full items-center justify-center overflow-hidden overflow-y-auto bg-white pb-4 dark:bg-zinc-900 sm:pb-10"

    const variantContentClasses: Record<Variant, string> = {
        default: "w-full",
        trailSystem: "w-full max-w-md border-r p-4 xl:p-0 dark:border-zinc-800",
        blogNav:
            "fixed left-0 top-0 h-full max-w-lg rounded-none border-r p-4 dark:border-r-zinc-800",
    }

    const contentClassName = clsx(baseContentClasses, variantContentClasses[variant], {
        "duration-500 animate-in slide-in-from-left": rest.open,
        "duration-100 animate-out slide-out-to-left": !rest.open,
    })
    return (
        <Dialog {...rest}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <Portal>
                <DialogBackdrop className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md transition-transform duration-1000" />
                <DialogContainer className="fixed inset-0 z-50 flex items-center justify-center">
                    <DialogContent className={contentClassName}>
                        {title && (
                            <DialogTitle className="flex h-14 items-center justify-between border-b bg-white px-4 dark:border-zinc-800 dark:bg-[#111]">
                                {title}
                                <DialogCloseTrigger
                                    asChild
                                    className="flex h-8 w-8 items-center justify-center rounded-full border p-1 transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-white/5"
                                >
                                    <Button variant="primary">
                                        <X className="h-5 w-5" />
                                    </Button>
                                </DialogCloseTrigger>
                            </DialogTitle>
                        )}

                        {description && <DialogDescription>{description}</DialogDescription>}

                        <>{children}</>
                    </DialogContent>
                </DialogContainer>
            </Portal>
        </Dialog>
    )
}

export default Drawer
