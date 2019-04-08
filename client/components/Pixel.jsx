import React from 'react'



class Pixel extends React.Component {

  constructor(props) {
    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    super(props)

    this.state = {
      style: {
        height: "50px",
        width: "50px",
        backgroundColor: randomHexColor()
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


  render() {




    const { style } = this.state


    return (
      <div
      onClick={() => this.changeColour()}
      onMouseEnter={() => this.changeColour()}
      style={style} ></div>
    )
  }
}



export default Pixel
