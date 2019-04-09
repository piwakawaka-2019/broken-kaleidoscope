import React from 'react'

import Pixel from './Pixel'

const App = () => {
  // let Pixel =[];
  // for(let i=0;1 <1000;1++){
  //  Pixel[i]=<Pixel /> ={i}/>
  // }
  //   return(
  //     <Pixel/>
  //   )
  return Array.from({ length: 10000 }, () => <Pixel />)
}

export default App
