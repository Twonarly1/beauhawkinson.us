import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function CaretDown({ className }: Props) {
    return (
        <IconBase className={className}>
            <polyline
                points="208 96 128 176 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            ></polyline>
        </IconBase>
    )
}
