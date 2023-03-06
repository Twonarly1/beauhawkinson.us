"use client"
import { useMutation } from "@apollo/client"
import { INSERT_POST } from "lib/graphql/mutations"
import { GET_POSTS } from "lib/graphql/queries"
import React, { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

function Form(user: any) {
    const router = useRouter()
    const [isFetching, setIsFetching] = useState(false)
    const [isPending, startTransition] = useTransition()
    const isMutating = isFetching || isPending
    const [insertPost] = useMutation(INSERT_POST, {
        refetchQueries: [GET_POSTS, "getPostList"],
    })

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsFetching(true)

        const form = e.currentTarget
        const input = form.elements.namedItem("entry") as HTMLInputElement

        const {
            data: { addPost: newItemAdded },
        } = await insertPost({
            variables: {
                body: input.value,
                username: user.user,
            },
        })
        console.log("new post added", newItemAdded)

        setIsFetching(false)
        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            router.refresh()
        })
    }

    return (
        <form
            style={{ opacity: !isMutating ? 1 : 0.7 }}
            className="relative mt-8 flex flex-1 text-sm"
            onSubmit={onSubmit}
        >
            <input
                aria-label="Your message"
                placeholder="Your message..."
                disabled={isPending}
                name="entry"
                width="800"
                type="text"
                required
                className="mt-1 flex flex-1 rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
            />
            <button
                className="absolute right-1 top-2 flex h-7 w-16 items-center justify-center rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
                disabled={isMutating}
                type="submit"
            >
                Sign
            </button>
        </form>
    )
}

export default Form
