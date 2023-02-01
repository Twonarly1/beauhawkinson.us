"use client"

import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { Heading } from "~/core"

function ContactMe() {
    const [effect, setEffect] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        setEffect(true)
        window.location.href = `mailto:hawkinson.beau@yahoo.com? &body=Hi, my name is ${formData.name}. ${formData.message}`
        setTimeout(() => {
            setEffect(false)
        }, 5000)
    }

    return (
        <section id="contact">
            <div className="relative mx-auto max-w-lg flex-col items-center justify-center px-10 text-center">
                <Heading title={"Contact Me"} subtitle={"I have got just what you need."} />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto flex w-full flex-col space-y-8 rounded-xl"
                >
                    <div className="relative -space-y-px rounded-md text-base shadow-sm">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="peer block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-base text-gray-400 placeholder-transparent hover:cursor-text dark:bg-white/5 dark:text-white "
                            id="name"
                            name="name"
                            type="text"
                            required
                        />

                        <label
                            htmlFor="name"
                            // className="sr-only"
                            className="
                            absolute left-3 -top-6 text-base text-black transition-all peer-placeholder-shown:top-2.5
                            peer-placeholder-shown:left-3
                            peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-400
                            peer-focus:-top-6
                            peer-focus:text-base
                            peer-focus:text-gray-400
                            hover:cursor-text"
                        >
                            Name
                        </label>
                    </div>

                    <div className="relative -space-y-px rounded-md text-base shadow-sm">
                        <input
                            {...register("email")}
                            placeholder="Email Address"
                            className="peer block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-base text-gray-400 placeholder-transparent hover:cursor-text dark:bg-white/5 dark:text-white"
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                        />

                        <label
                            htmlFor="email-address"
                            className="
                            absolute left-3 -top-6 text-base text-black transition-all peer-placeholder-shown:top-2.5 
                            peer-placeholder-shown:left-3
                            peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-400
                            peer-focus:-top-6
                            peer-focus:text-base
                            peer-focus:text-gray-400
                            hover:cursor-text"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="relative -space-y-px rounded-md text-base shadow-sm">
                        <textarea
                            {...register("message")}
                            placeholder="Message"
                            id="message"
                            name="message"
                            className="peer block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-base text-gray-400 placeholder-transparent hover:cursor-text dark:bg-white/5 dark:text-white"
                            required
                        />

                        <label
                            htmlFor="message"
                            className="
                            absolute left-3 -top-6 text-base text-black transition-all peer-placeholder-shown:top-2.5 
                            peer-placeholder-shown:left-3
                            peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-400
                            peer-focus:-top-6
                            peer-focus:text-base
                            peer-focus:text-gray-400
                            hover:cursor-text"
                        >
                            Message
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="group flex justify-center gap-2 rounded-md bg-pink-100/50 py-4 px-10 text-lg font-bold text-black hover:bg-pink-100"
                    >
                        <p>Send</p>

                        <PaperAirplaneIcon
                            className={`h-6 w-6 -rotate-45 group-hover:animate-wiggle ${
                                effect && "animate-airplane"
                            }`}
                        />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactMe
