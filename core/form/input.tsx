import { ComponentProps } from "react"

type IntrinsicInputProps = ComponentProps<"input">

type Props = {
    autoFocus?: IntrinsicInputProps["autoFocus"]
    name: IntrinsicInputProps["name"]
    placeholder: IntrinsicInputProps["placeholder"]
    required?: IntrinsicInputProps["required"]
    type: IntrinsicInputProps["type"]
    id: IntrinsicInputProps["id"]
}

export function Input({ name, ...props }: Props) {
    return (
        <input
            className="block w-full rounded-md border-slate-400 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
            name={name}
            {...props}
        />
    )
}
