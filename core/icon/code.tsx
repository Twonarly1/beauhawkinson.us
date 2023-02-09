import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function Code({ className }: Props) {
    return (
        <IconBase className={className}>
            <polyline
                points="64 88 16 128 64 168"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>

            <polyline
                points="192 88 240 128 192 168"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>

            <line
                x1="160"
                y1="40"
                x2="96"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="16"
            ></line>
        </IconBase>
    )
}
