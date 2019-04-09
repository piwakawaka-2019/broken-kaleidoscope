import React from 'react'
import Pixel from './Pixel'



const App = () => {
  return Array.apply(null, Array(1000)).map(function () { return <Pixel /> })
  // const pixelArr = [<Pixel />]
  // return Array.from(pixelArr, x => x * 100000)
  // return Array.from({length: 100000}, )
}



export default App


