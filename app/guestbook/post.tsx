"use client"
import { useMutation, useQuery } from "@apollo/client"
import { HeartIcon } from "core/icon"
import { INSERT_VOTE } from "lib/graphql/mutations"
import { GET_VOTES_BY_POST } from "lib/graphql/queries"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"
import Comment from "./comment"

type Props = {
    post: Post
}

function Post({ post }: Props) {
    const { data: session } = useSession()
    const [vote, setVote] = useState<boolean>()
    const { data } = useQuery(GET_VOTES_BY_POST, {
        variables: {
            post_id: post?.id,
        },
    })
    const [addVote] = useMutation(INSERT_VOTE, {
        refetchQueries: [GET_VOTES_BY_POST, "getVotesByPostId"],
    })

    useEffect(() => {
        const votes: Vote[] = data?.getVotesByPostId
        const vote = votes?.find((vote) => vote.username === session?.user?.name)?.upvote
        setVote(vote)
    }, [data])

    const displayVotes = (data: any) => {
        const votes: Vote[] = data?.getVotesByPostId
        const displayNumber = votes?.reduce(
            (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
            0,
        )
        if (votes?.length === 0) return 0
        if (displayNumber === 0) {
            return votes[0]?.upvote ? 1 : 0
        }
        return displayNumber
    }

    const upVote = async (isUpvote: boolean) => {
        if (!session) {
            alert("❗️ You'll need to sign in to Vote!")
            return
        }
        if (vote && isUpvote) return
        if (vote === false && !isUpvote) return
        const {
            data: { insertVote: newVote },
        } = await addVote({
            variables: {
                post_id: post.id,
                username: session?.user?.name,
                upvote: isUpvote,
            },
        })
        console.log("new vote added", newVote)
    }

    return (
        <div className="mb-4 flex flex-col space-y-1 rounded-lg border border-neutral-100 bg-neutral-100 px-5 py-2 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
            <div className="w-full text-sm">
                <span className="mr-1 text-neutral-600 dark:text-neutral-400">
                    {post.username}:
                </span>
                {post.body}
            </div>
            <div className="flex justify-center space-x-4">
                <button
                    className="z-20 flex h-6 items-center"
                    onClick={() => {
                        upVote(!vote)
                    }}
                >
                    <HeartIcon
                        className={`h-4 w-4 ${
                            vote ? "text-red-500" : "text-white dark:text-neutral-800"
                        }`}
                    />
                    <p className="ml-1 text-xs text-black dark:text-white">{displayVotes(data)}</p>
                </button>
                <Comment post={post} />
            </div>
        </div>
    )
}

export default Post
