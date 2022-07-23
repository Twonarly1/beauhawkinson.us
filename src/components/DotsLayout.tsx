import React from 'react'

type Props = {
  dot: any
}

export default function DotsLayout({ dot }: Props) {
  return (
    <div
      className="absolute z-0 rounded-full opacity-20 active:cursor-move"
      draggable="true"
      key={dot.id}
      style={{
        top: dot.top + 'px',
        left: dot.left + 'px',
        height: dot.diameter,
        width: dot.diameter,
        background:
          'rgb(' + dot.rgb.r + ',' + dot.rgb.g + ',' + dot.rgb.b + ')',
      }}
    ></div>
  )
}
