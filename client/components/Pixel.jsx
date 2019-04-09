import React from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';

// const Pixel = () => {
//   return (
//     <div style= {{height:'50px', width:'50px', backgroundColor:'cornflowerblue' }}></div>
//   )
// }
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    }
  }
  clickHandler = evt => {
    this.setState({ style: {
      height: '50px',
      width: '50px',
      backgroundColor: randomHexColor()
    } }

    )
  }

  mouseOver = evt => {
    this.setState({ style: {
      height: '50px',
      width: '50px',
      backgroundColor: randomHexColor()
    } }

    )
  }
  render() {
    console.log(this.state)
    return <div style={this.state.style} onClick={this.clickHandler.bind(this)} onMouseEnter={this.clickHandler.bind(this)}></div>
  }
}
export default Pixel
