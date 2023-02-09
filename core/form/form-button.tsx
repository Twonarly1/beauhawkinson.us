"use client"

import { Button, Stack } from "core"

import { useForm } from "./use-form"

type Props = {
    children: string
}

export function FormButton({ children }: Props) {
    const { isDisabled, isSubmitting } = useForm()

    return (
        <Stack direction="horizontal" justifyContent="end">
            <Button isDisabled={isDisabled} isLoading={isSubmitting} type="submit">
                {children}
            </Button>
        </Stack>
    )
}
