import React from 'react'

const color = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`    


class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        width: '10px',
        height: '10px',
        backgroundColor: color()
      }
    }
  } 

  changeColor = () => {
    const style = {
      width: '10px',
      height: '10px',
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
        style={this.state.style}
        onMouseEnter={(e) => this.changeColor()}>
      </div>
    )
  }
}

export default Pixel