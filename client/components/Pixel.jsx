import React from 'react'

const color = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`    


class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        width: '100px',
        height: '100px',
        backgroundColor: color()
      }
    }
  } 

  changeColor = () => {
    const style = {
      width: '100px',
      height: '100px',
      backgroundColor: color()
    }

    this.setState({
      style
    })
  }

  render () {
    // const style = this.state
    return (
      <div 
        onMouseEnter={(e) => this.changeColor()}  
        style={this.state.style}>
      </div>
    )
  }
}

export default Pixel