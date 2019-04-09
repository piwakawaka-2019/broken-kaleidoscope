import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: "30px",
        width: "30px",
        backgroundColor: randomHexColor(),
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

  mouseHandler = evt => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'green',
      }
    })
  }

  contextHandler = evt => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'black',
      }
    })
    evt.preventDefault()
  }

  onDoubleClickHandler = evt => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'white',
      }
    })
  }

  onDragEnterHandler = evt => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'yellow',
      }
    })
  }


  render() {
    return (
      <div style={this.state.style}
        onClick={this.clickHandler.bind(this)}

        onMouseEnter={this.mouseHandler.bind(this)}

        onContextMenu={this.contextHandler.bind(this)}

        onDoubleClick={this.onDoubleClickHandler.bind(this)}

        onDragEnter={this.onDragEnterHandler.bind(this)}

      >

      </div>
    )
  }
}


export default Pixel