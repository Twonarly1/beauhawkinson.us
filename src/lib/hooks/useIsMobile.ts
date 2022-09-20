import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

/**
 * Determine whether viewport is mobile or not.
 * @returns true if mobile viewport, false otherwise
 */
function useIsMobile() {
    const [mobile, setMobile] = useState<boolean>()

    // SSR device detection workaround
    useEffect(() => {
        setMobile(isMobile)
    }, [setMobile])

    return mobile
}

export default useIsMobile
