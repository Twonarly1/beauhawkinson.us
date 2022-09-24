import React, { useEffect } from "react"
import useWindowDimensions from "../../../lib/hooks/useWindowDimensions"
import getRandomInt from "../../../lib/utils"

function BkgCircles() {
    const { height, width } = useWindowDimensions()
    let w: any = width
    let h: any = height

    return (
        <div
            draggable
            style={{ left: getRandomInt(0, w) + "px", top: getRandomInt(32, h / 4) }}
            className="relative -z-50 flex cursor-move  items-center"
        >
            <div className="absolute mt-0 h-[25px] w-[25px] animate-ping rounded-full  border border-gray-300 delay-[2000ms]" />
            <div className="absolute mt-0 h-[33px] w-[33px] animate-blob rounded-full border border-pink-300 opacity-20" />
            <div className="absolute mt-0 h-[25px] w-[25px] animate-pulse  rounded-full border border-gray-300" />
        </div>
    )
}

export default BkgCircles
