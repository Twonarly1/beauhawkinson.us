"use client"
import React from "react"
import * as Tooltip from "@radix-ui/react-tooltip"

const CoreTooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
    return (
        <Tooltip.Provider delayDuration={0} skipDelayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="z-20" side="bottom">
                        {content}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}

export default CoreTooltip
