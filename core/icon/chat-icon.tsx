import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function ChatIcon({ className }: Props) {
    return (
        <IconBase className={className}>
            <path
                d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
                fill="currentColor"
                stroke="#93C5FD"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
            ></path>
        </IconBase>
    )
}
