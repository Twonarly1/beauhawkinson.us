"use client"

import { signIn, signOut } from "next-auth/react"

import { Stack } from "core"

import { GitHubIcon, GoogleIcon } from "core/icon"

export function SignOut() {
    return (
        <button
            className="mt-2 mb-6 text-xs text-neutral-700 dark:text-neutral-300"
            onClick={() => signOut()}
        >
            → Sign out
        </button>
    )
}

export function SignIn() {
    return (
        <Stack gap={{ base: 1, sm: 8 }} direction={{ base: "vertical", sm: "horizontal" }}>
            <button
                className="mt-2 flex w-fit rounded-md border border-gray-800 bg-black px-4 py-3 text-sm font-semibold text-neutral-200 transition-all hover:text-white"
                onClick={() => signIn("github")}
            >
                <GitHubIcon />
                <div className="ml-3">Sign in with GitHub</div>
            </button>
            <button
                className="mt-2 flex w-fit rounded-md border border-gray-800 bg-black px-4 py-3 text-sm font-semibold text-neutral-200 transition-all hover:text-white"
                onClick={() => signIn("google")}
            >
                <GoogleIcon />
                <div className="ml-3">Sign in with Google</div>
            </button>
        </Stack>
    )
}
