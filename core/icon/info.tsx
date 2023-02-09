import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function Info({ className }: Props) {
    return (
        <IconBase className={className}>
            <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></circle>

            <polyline
                points="120 120 128 120 128 176 136 176"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>

            <circle cx="126" cy="84" r="12"></circle>
        </IconBase>
    )
}
