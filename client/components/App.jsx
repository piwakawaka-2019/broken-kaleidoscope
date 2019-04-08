import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const App = () => {
  return (

    fillScreen()


  )
}

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: "64px",
        width: "64px",
        backgroundColor: randomHexColor()
      }
    }
  }

  render() {
    return (
      <div style={this.state.style}></div>
    )
  }
}

function fillScreen() {
  return (
    <div>
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
      <Pixel />
    </div>

  )
}

// class Pixels extends React.Component {
//   constructor(props) {
//   super(props)
//   const newPixels = []
//   for(let i = 0; i < 200; i++){

//   }

// }

export default App
