"use client"
import { useMutation, useQuery } from "@apollo/client"
import { Disclosure, Menu } from "@headlessui/react"
import { ChatIcon } from "core/icon"
import { INSERT_COMMENT } from "lib/graphql/mutations"
import { GET_COMMENTS_BY_POST, GET_POSTS } from "lib/graphql/queries"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState, useTransition } from "react"

type Props = {
    post: Post
}

function Comment({ post }: Props) {
    const { data: session } = useSession()
    const [insertComment] = useMutation(INSERT_COMMENT, {
        refetchQueries: [GET_POSTS, "getPostList"],
    })
    const router = useRouter()
    const [isFetching, setIsFetching] = useState(false)
    const [isPending, startTransition] = useTransition()
    const isMutating = isFetching || isPending
    const { data, loading, error } = useQuery(GET_COMMENTS_BY_POST, {
        variables: {
            id: post.id,
        },
    })

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        if (!session) {
            alert("❗️ You'll need to sign in to Comment!")
            return
        }
        e.preventDefault()
        setIsFetching(true)

        const form = e.currentTarget
        const input = form.elements.namedItem("entry") as HTMLInputElement

        const {
            data: { addPost: newItemAdded },
        } = await insertComment({
            variables: {
                post_id: post.id,
                username: session?.user?.name,
                text: input.value,
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
        <div className="z-20 w-full">
            <Disclosure>
                <Disclosure.Button className="flex h-6 items-center">
                    <ChatIcon
                        className={`h-4 w-4 ${
                            data?.getCommentUsingComment_post_id_fkey.length
                                ? "text-blue-300"
                                : "text-white dark:text-neutral-800"
                        }`}
                    />
                    <p className="ml-1 text-xs">
                        {data?.getCommentUsingComment_post_id_fkey.length}
                    </p>
                </Disclosure.Button>
                <Disclosure.Panel className="-ml-12 mt-2 justify-start border-t pt-2 text-gray-500">
                    <p className="mt-2 text-xs">
                        replying to{" "}
                        <span className=" font-bold text-pink-400">{post.username}</span>
                    </p>
                    <form
                        style={{ opacity: !isMutating ? 1 : 0.7 }}
                        className="relative flex flex-1 items-center justify-center text-sm"
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
                            className="mt-1 flex flex-1 rounded-md border-neutral-300 bg-white py-2 pl-4 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500  dark:bg-neutral-800 dark:text-neutral-100"
                        />
                        <button
                            className="absolute right-1 top-2 flex h-7 w-16 items-center justify-center rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
                            disabled={isMutating}
                            type="submit"
                        >
                            Sign
                        </button>
                    </form>
                    <ul className="ml-6 mt-2 list-disc">
                        {data?.getCommentUsingComment_post_id_fkey.map((comment: Comments) => (
                            <li
                                key={comment.id}
                                className="w-full text-sm text-neutral-800 dark:text-neutral-200"
                            >
                                <span className="mr-1 text-neutral-600 dark:text-neutral-400">
                                    {comment.username}:
                                </span>
                                {comment.text}
                            </li>
                        ))}
                    </ul>
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default Comment
