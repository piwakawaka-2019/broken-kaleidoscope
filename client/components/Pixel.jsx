import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: "5em",
        width: "5em",
        backgroundColor: "blue",
        margin: '5px'
      }
    }
  }
  render() {
    return (
      <div style={this.state.style}>

      </div>
    )
  }
}


export default Pixel