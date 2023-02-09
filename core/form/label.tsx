import { ComponentProps } from "react"

type IntrinsicLabelProps = ComponentProps<"label">

type Props = {
    children: string
    htmlFor: IntrinsicLabelProps["htmlFor"]
}

export function Label({ children, htmlFor, ...props }: Props) {
    return (
        <label
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
            htmlFor={htmlFor}
            {...props}
        >
            {children}
        </label>
    )
}
