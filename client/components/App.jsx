import React from 'react'
import Pixel from './Pixel'

const App = () => {
  // return (
  //   <div>React development has begun!</div>
  //   return [ 
  //   <Pixel />
  //   <Pixel />
  //   <Pixel />
  // ]
  return Array.from({ length:1000}, () => <Pixel />)
  }
  


export default App
