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
        height: "20px",
        width: "20px",
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = evt => {
    console.log('clicked into')
    this.setState({
      style: {
        height: "20px",
        width: "20px",
        backgroundColor: randomHexColor()
      }
    })
  }

  render() {
    return (
      <div style={this.state.style} onMouseEnter={this.clickHandler}></div>
    )
  }
}

function fillScreen() {
  let pixels = [];
  const x = 1900;
  const y = 960;
  const area = x * y;
  for (let i = 0; i < (area / (20 * 20)); i++) {
    pixels[i] = <Pixel key={i} />
  }
  return (
    pixels
  )
}

export default App
