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

type Variant = "default" | "globalSearch"

interface Props extends DialogProps {
    title?: ReactNode
    children: ReactNode
    trigger: ReactNode
    description?: ReactNode
    variant?: Variant
}

/**
 * Core Modal component.
 */
const Modal = ({ title, children, trigger, description, variant = "default", ...rest }: Props) => {
    const baseContentClasses = "z-50 w-full overflow-hidden bg-white dark:bg-zinc-900"

    const variantContentClasses: Record<Variant, string> = {
        default:
            "max-w-xl rounded-2xl border p-6 text-left align-middle shadow-xl dark:border-zinc-800",
        globalSearch: "max-w-5xl p-4 rounded-2xl flex-1 items-center",
    }

    const contentClassName = clsx(baseContentClasses, variantContentClasses[variant])

    return (
        <Dialog {...rest}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <Portal>
                <DialogBackdrop className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
                <DialogContainer className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <DialogContent className={contentClassName}>
                        {title && (
                            <DialogTitle className="flex h-10 items-center justify-between">
                                <p className="text-lg">{title}</p>
                                <DialogCloseTrigger asChild>
                                    <Button variant="primary">
                                        <X className="h-5 w-5" />
                                    </Button>
                                </DialogCloseTrigger>
                            </DialogTitle>
                        )}

                        {description && (
                            <DialogDescription className="pt-2">{description}</DialogDescription>
                        )}

                        <>{children}</>
                    </DialogContent>
                </DialogContainer>
            </Portal>
        </Dialog>
    )
}

export default Modal
