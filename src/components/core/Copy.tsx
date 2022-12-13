import {
    ClipboardDocumentCheckIcon,
    ClipboardIcon,
    DocumentDuplicateIcon,
} from "@heroicons/react/24/outline"
import React from "react"
import { CopyClipboard } from "src/lib/hooks"

interface CopyProps {
    toCopy: string
}

export default function CopyHelper({ toCopy }: CopyProps) {
    const [isCopied, setCopied] = CopyClipboard()

    return (
        <button aria-label="justify" className="bg-transparent" onClick={() => setCopied(toCopy)}>
            {isCopied ? (
                <ClipboardDocumentCheckIcon aria-hidden="true" className="w-4  text-gray-700 " />
            ) : (
                <DocumentDuplicateIcon
                    aria-hidden="true"
                    className="inline-flex w-4  text-gray-700 "
                />
            )}
        </button>
    )
}
