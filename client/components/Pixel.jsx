import React from 'react'

// const Pixel = () => {
//   return (
//     <div style={{
        // height: '1em',
        // width: '1em',
        // backgroundColor: 'green'    
//     }}></div>
//   )
// }

class Pixel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            style: {
                height: '1em',
                width: '1em',
                backgroundColor: 'green'
            }
        }
    }

    randomHexColor() {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }

    render () {
        this.state.style.backgroundColor = this.randomHexColor()
        return (
            <div style={this.state.style}></div>
        )
    }

}

export default Pixel