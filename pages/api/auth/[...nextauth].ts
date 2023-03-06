import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    OAUTH_CLIENT_KEY,
    OAUTH_CLIENT_SECRET,
} from "lib/env"

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: OAUTH_CLIENT_KEY as string,
            clientSecret: OAUTH_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID as string,
            clientSecret: GOOGLE_CLIENT_SECRET as string,
        }),
    ],
}

export default NextAuth(authOptions)
