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
                stroke="#9146ff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></circle>

            <polyline
                points="120 120 128 120 128 176 136 176"
                fill="#9146ff"
                stroke="#9146ff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>

            <circle fill="#9146ff" stroke="#9146ff" cx="126" cy="84" r="12"></circle>
        </IconBase>
    )
}
