import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: "5em",
        width: "5em",
        backgroundColor: randomHexColor(),
        margin: '5px'
      }
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: randomHexColor(),
      }
    })
  }

  render() {
    return (
      <div style={this.state.style} onClick={this.clickHandler.bind(this)}>

      </div>
    )
  }
}


export default Pixel