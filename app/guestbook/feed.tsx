"use client"
import { useQuery } from "@apollo/client"
import { GET_POSTS } from "lib/graphql/queries"
import React from "react"
import Post from "./post"

function Feed() {
    const { data, loading } = useQuery(GET_POSTS)

    return (
        <div className="mt-4 flex flex-1 flex-col space-y-2">
            {data?.getPostList.map((post: Post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Feed
