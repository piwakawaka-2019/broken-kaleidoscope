import React from 'react'

const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
const width = .5
const height = width
const randomTime = () => `#${Math.floor(Math.random() * 1000)}`

// const incrementColour = ()=> {             //our attempt at making a colour incrementore
//   let i = 1
//   return(Number(i).toString(16))
// }
class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height,
        width,
        backgroundColor: randomColour()
      }
    }
  }
  changeColour = () => {
    const style = {
      width,
      height,
      backgroundColor: randomColour()
    }

    this.setState({
      style
    })
  }

  colourTimer = () => {
    const style = {
      width,
      height,
      backgroundColor: '#000000',
    }
    this.setState({
      style
    })
  }

  render() {
    return (

      <div
        onClick={() => this.changeColour()}
        onMouseEnter={() => this.changeColour()}
        style={this.state.style} />
    )
  }
}


export default Pixel