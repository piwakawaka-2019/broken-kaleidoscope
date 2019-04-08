import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

// let divStyle = {
//   backgroundColor: randomHexColor(),
//   width: '100px',
//   height: '100px',
// }

class Pixel extends React.Component {
  constructor(props) {
    console.log(randomHexColor)
    super(props)
    this.state = {
      style: {
        backgroundColor: randomHexColor(),
        width: '100px',
        height: '100px',
      }
    }
  }
  render() {
    return <div style={this.state.style} ></div>
  }

}

export default Pixel




// const Pixel = props => {
//   return (
//     <div style={divStyle}>
//       <p>Hello</p>
//     </div>
//   )
// }

