import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function List({ className }: Props) {
    return (
        <IconBase className={className}>
            <line
                x1="40"
                y1="128"
                x2="216"
                y2="128"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="40"
                y1="64"
                x2="216"
                y2="64"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="40"
                y1="192"
                x2="216"
                y2="192"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>
        </IconBase>
    )
}
