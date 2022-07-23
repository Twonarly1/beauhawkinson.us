import React, { useEffect, useState } from 'react'
import DotsLayout from '../components/DotsLayout'
import useWindowDimensions from '../lib/useWindowDimensions'

const Test = () => {
  const [dotDATA, setDotDATA] = useState()
  const { height, width } = useWindowDimensions()
  var startPoint
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function generateDotData() {
    var h = height
    var w = width
    var dotData = []
    var count = parseInt((height + width) / 75)
    // Create and draw dots
    for (var i = 0; i < count; i++) {
      var dot = {}
      dot.iD = i
      dot.diameter = getRandomInt(20, 100)
      dot.rgb = {
        r: getRandomInt(100, 255),
        g: getRandomInt(100, 255),
        b: getRandomInt(100, 255),
      }
      dot.top = getRandomInt(10, h - 110)
      dot.left = getRandomInt(10, w - 110)
      dotData.push(dot)
    }
    setDotDATA(dotData)
    return dotData
  }

  // const startDrag = (e) => {
  //   var x = e.clientX
  //   var y = e.clientY
  //   var coor = 'Coordinates: (' + x + ',' + y + ')'
  //   console.log(coor)
  // }

  return (
    <>
      <button
        className="mx-auto h-8 w-full text-center"
        onClick={() => generateDotData()}
      >
        regenerate?
      </button>
      <div
        id="element"
        style={{ height: height, width: width }}
        className="relative"
      >
        {dotDATA && dotDATA.map((dot) => <DotsLayout dot={dot} key={dot.id} />)}
      </div>

      {/* <div className="flex min-h-screen items-center justify-center bg-gray-50 px-16">
        <div className="relative w-full max-w-lg ">
          <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply  filter"></div>
          <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply  filter"></div>
          <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply  filter"></div>
          <div className="relative m-8 space-y-4">
            <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
              <div className="flex-1">
                <div className="h-4 w-48 rounded bg-gray-300"></div>
              </div>
              <div>
                <div className="h-6 w-24 rounded-lg bg-purple-300"></div>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
              <div className="flex-1">
                <div className="h-4 w-56 rounded bg-gray-300"></div>
              </div>
              <div>
                <div className="h-6 w-20 rounded-lg bg-yellow-300"></div>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
              <div className="flex-1">
                <div className="h-4 w-44 rounded bg-gray-300"></div>
              </div>
              <div>
                <div className="h-6 w-28 rounded-lg bg-pink-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Test
