import React from 'react'

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

  constructor(props) {
    
    super(props)

    this.state = {
      style: {
        height: "25px",
        width: "25px",
        backgroundColor: randomHexColor()
      }
    }
    }


    changeColourToGreen = () =>{
      const style = {
        height: "25px",
        width: "25px",
        backgroundColor: 'white'
      }
  
      this.setState({
        style
      })

    }


    changeColourToYellow = () =>{
      const style = {
        height: "25px",
        width: "25px",
        backgroundColor: 'black'
      }
  
      this.setState({
        style
      })

    }

    changeColourToWhite = () =>{
      const style = {
        height: "25px",
        width: "25px",
        backgroundColor: 'white'
      }
  
      this.setState({
        style
      })

    }

    changeColourToPink = () =>{
      const style = {
        height: "25px",
        width: "25px",
        backgroundColor: 'pink'
      }
  
      this.setState({
        style
      })

    }
    changeColour = () => {
      const style = {
        height: "25px",
        width: "25px",
        backgroundColor: randomHexColor()
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
      onMouseEnter={() => this.changeColourToGreen()}
      onDragEnter= {()=> this.changeColourToYellow()}

      onDoubleClick={()=>this.changeColourToWhite()}
      onContextMenu={()=>this.changeColourToPink()}
      style={style} ></div>
    )
  }
}



export default Pixel
