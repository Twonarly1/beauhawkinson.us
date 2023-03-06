import { gql } from "@apollo/client"

export const GET_POSTS = gql`
    query MyQuery {
        getPostList {
            body
            created_at
            id
            username
        }
    }
`

export const GET_VOTES_BY_POST = gql`
    query MyQuery($post_id: ID!) {
        getVotesByPostId(post_id: $post_id) {
            created_at
            post_id
            id
            upvote
            username
        }
    }
`

export const GET_VOTES_BY_POST_AND_USERNAME = gql`
    query MyQuery($post_id: ID!, $username: String!) {
        getVotesByPostIdAndUsername(post_id: $post_id, username: $username) {
            created_at
            id
            post_id
            upvote
            username
        }
    }
`

export const GET_COMMENTS_BY_POST = gql`
    query MyQuery($id: ID!) {
        getCommentUsingComment_post_id_fkey(id: $id) {
            created_at
            id
            post_id
            text
            username
        }
    }
`
