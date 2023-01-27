"use client"

import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon"
import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Heading } from "components/core"

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
                    <div className="input-container">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="input peer placeholder-transparent "
                            id="name"
                            name="name"
                            type="text"
                            required
                        />
                        <label
                            htmlFor="name"
                            // className="sr-only"
                            className="
                        label
                        peer-placeholder-shown:top-2.5
                        peer-placeholder-shown:left-3
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:text-gray-400
                        peer-focus:-top-6
                        peer-focus:text-base
                        peer-focus:text-gray-400"
                        >
                            Name
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            {...register("email")}
                            placeholder="Email Address"
                            className="input peer placeholder-transparent"
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                        />
                        <label
                            htmlFor="email-address"
                            className="
                        label 
                        peer-placeholder-shown:top-2.5
                        peer-placeholder-shown:left-3
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:text-gray-400
                        peer-focus:-top-6
                        peer-focus:text-base
                        peer-focus:text-gray-400"
                        >
                            Email Address
                        </label>
                    </div>
                    <div className="input-container">
                        <textarea
                            {...register("message")}
                            placeholder="Message"
                            id="message"
                            name="message"
                            className="input peer placeholder-transparent"
                            required
                        />
                        <label
                            htmlFor="message"
                            className="
                        label 
                        peer-placeholder-shown:top-2.5
                        peer-placeholder-shown:left-3
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:text-gray-400
                        peer-focus:-top-6
                        peer-focus:text-base
                        peer-focus:text-gray-400"
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
