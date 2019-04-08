import React from 'react'

//set this.state.style backgroundColor equal to return value of randomHexColor
//



class Pixel extends React.Component {
  constructor(props) {
    super(props)
    const color = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = {
      style: {
        height:'200px',
        width: '200px',
        backgroundColor: color
      }
    }
  }
  render(){
    return (
      <div
        style = {this.state.style} 
        onMouseEnter={() => this.setState({backgroundColor:black})}>
      </div>
      )
    }
  }

export default Pixel