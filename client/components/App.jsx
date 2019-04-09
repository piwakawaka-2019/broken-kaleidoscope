import React from 'react'
import Pixel  from './Pixel'
const App = () => {
  let pixels = [];
  for(let i = 0; i < 10000; i++){
    pixels[i] = <Pixel key={i}/>
  }
  return (
    pixels
  )
}

export default App
