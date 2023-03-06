import { SignIn, SignOut } from "./actions"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import Feed from "./feed"
import Form from "./form"
import { Heading } from "core"

export const metadata = {
    title: "Guestbook",
    description: "Sign my guestbook and leave your mark.",
}

export const dynamic = "force-dynamic"

async function Guestbook() {
    let session

    try {
        const [sessionRes] = await Promise.allSettled([getServerSession(authOptions)])

        if (sessionRes.status === "fulfilled") {
            session = sessionRes.value
        } else {
            console.error(sessionRes)
        }
    } catch (error) {
        console.error(error)
    }

    return (
        <section className="w-full">
            <Heading as="h2">Guestbook</Heading>
            {/* <Heading as="h2">{session?.user?.name}</Heading> */}
            {session?.user ? (
                <>
                    <Form user={session?.user?.name} />
                    <SignOut />
                </>
            ) : (
                <SignIn />
            )}
            <Feed />
        </section>
    )
}

export default Guestbook
