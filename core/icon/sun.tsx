import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function Sun({ className }: Props) {
    return (
        <IconBase className={className}>
            <circle
                cx="128"
                cy="128"
                r="35"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></circle>

            <line
                x1="128"
                y1="36"
                x2="128"
                y2="16"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="62.9"
                y1="62.9"
                x2="48.8"
                y2="48.8"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="36"
                y1="128"
                x2="16"
                y2="128"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="62.9"
                y1="193.1"
                x2="48.8"
                y2="207.2"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="128"
                y1="220"
                x2="128"
                y2="240"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="193.1"
                y1="193.1"
                x2="207.2"
                y2="207.2"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="220"
                y1="128"
                x2="240"
                y2="128"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>

            <line
                x1="193.1"
                y1="62.9"
                x2="207.2"
                y2="48.8"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></line>
        </IconBase>
    )
}
