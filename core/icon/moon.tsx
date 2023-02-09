import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function Moon({ className }: Props) {
    return (
        <IconBase className={className}>
            <path
                d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
                fill="#6a76ac"
                stroke="#6a76ac"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></path>
        </IconBase>
    )
}
