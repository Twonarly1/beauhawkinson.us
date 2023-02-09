import { Heading } from "~/core"

type Props = {
    children: string
}

export function CardTitle({ children }: Props) {
    return (
        <div>
            <Heading as="h1">{children}</Heading>
        </div>
    )
}
