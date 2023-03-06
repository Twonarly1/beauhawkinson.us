import { gql } from "@apollo/client"

export const INSERT_POST = gql`
    mutation MyMutation($body: String!, $username: String!) {
        insertPost(body: $body, username: $username) {
            body
            created_at
            id
            username
        }
    }
`

export const INSERT_VOTE = gql`
    mutation MyMutation($post_id: ID!, $upvote: Boolean!, $username: String!) {
        insertVote(post_id: $post_id, upvote: $upvote, username: $username) {
            created_at
            post_id
            id
            upvote
            username
        }
    }
`
export const INSERT_COMMENT = gql`
    mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
        insertComment(post_id: $post_id, username: $username, text: $text) {
            created_at
            id
            post_id
            text
            username
        }
    }
`
