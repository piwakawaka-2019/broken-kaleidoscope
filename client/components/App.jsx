import React from 'react'
import Pixel from './Pixel'


const App = () => {


// return(
//   <div>
//     <Pixel />

//     <Pixel />
//     <Pixel />
//     <Pixel />
//     <Pixel />
//   </div>
// )





return Array.from({ length: 10000 }, () => <Pixel />)
  
}

export default App
