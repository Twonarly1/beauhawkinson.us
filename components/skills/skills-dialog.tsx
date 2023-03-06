"use client"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { X } from "core/icon"
import { Heading, Text } from "core"
import { SkillsSection } from "./skills-section"

export function SkillsDialog() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Text size="sm" color={1000}>
                My strongest technologies and preferred stack include
                <b> · React, Next.js, Typescript, Tailwind CSS, GraphQL, and Supabase. </b>
                If you want to view all my learned skills, see below &darr;, or
                <button className="relative z-20 ml-1 cursor-pointer" onClick={() => setOpen(true)}>
                    <u>click here</u>
                </button>
                .
            </Text>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <div className="fixed inset-0 bg-black/30" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 mx-auto flex w-full items-center p-5">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="-translate-y-full"
                                    enterTo="-translate-y-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="-translate-y-0"
                                    leaveTo="-translate-y-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative mx-auto flex w-full max-w-4xl flex-col rounded-xl border border-neutral-100 bg-neutral-100 p-5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                                        <button
                                            type="button"
                                            className="flex items-end justify-end"
                                            onClick={() => setOpen(false)}
                                        >
                                            <X
                                                className="z-50 h-12 w-12 cursor-pointer rounded-full p-2"
                                                aria-hidden="true"
                                            />
                                        </button>
                                        <Dialog.Title className="-mt-10 text-center">
                                            <Heading as="h2">Skills</Heading>
                                        </Dialog.Title>
                                        <SkillsSection />
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
